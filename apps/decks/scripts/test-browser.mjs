import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, stat, mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import assert from "node:assert/strict";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = resolve(root, "../web/public");
const decks = JSON.parse(await readFile(resolve(root, "decks.json"), "utf8"));
const selected = new Set(process.argv.slice(2));
for (const slug of selected) if (!decks[slug]) throw new Error(`Unknown deck: ${slug}`);
const output = resolve(root, "test-results");
await mkdir(output, { recursive: true });
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
};
const server = createServer(async (req, res) => {
  try {
    let file = resolve(
      publicDir,
      `.${decodeURIComponent(new URL(req.url, "http://localhost").pathname)}`,
    );
    if (!file.startsWith(`${publicDir}/`)) throw new Error("Invalid path");
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    res.setHeader("Content-Type", types[extname(file)] || "application/octet-stream");
    res.end(await readFile(file));
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const failures = [];
let checked = 0;

async function checkDeck(slug, deck, mobile) {
  const page = await browser.newPage({
    viewport: mobile ? { width: 390, height: 844 } : { width: 1920, height: 1080 },
    isMobile: mobile,
    hasTouch: mobile,
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
  });
  try {
    await page.goto(`${base}/${slug}/#/1`);
    await page.locator(".myslides-content").first().waitFor();
    await page.evaluate(() => document.fonts.ready);
    for (let i = 0; i < deck.count; i++) {
      if (i)
        await page.evaluate((n) => {
          window.location.hash = `#/${n}`;
        }, i + 1);
      const slide = page.locator(`[data-slidev-no="${i + 1}"] .myslides-content`).first();
      await slide.waitFor({ state: "visible" });
      // Vue adds transition classes after rendering; wait for that update before inspecting.
      await page.evaluate(async () => {
        await new Promise(requestAnimationFrame);
        await new Promise(requestAnimationFrame);
      });
      await page.waitForFunction(
        () => !document.querySelector('[class*="-enter-active"], [class*="-leave-active"]'),
      );
      await slide.evaluate(async (el) => {
        await Promise.all([...el.querySelectorAll("img")].map((img) => img.decode()));
        const url = getComputedStyle(el.closest(".myslides-layout")).backgroundImage.match(
          /^url\("?(.*?)"?\)$/,
        )?.[1];
        if (url)
          await new Promise((done, fail) => {
            const img = new Image();
            img.onload = done;
            img.onerror = () => fail(new Error(`Background failed: ${url}`));
            img.src = url;
          });
      });
      const crampedCode = await slide.evaluate((el) =>
        [...el.querySelectorAll(".slidev-code")]
          .filter((code) => {
            const style = getComputedStyle(code);
            return Number.parseFloat(style.lineHeight) < Number.parseFloat(style.fontSize) * 1.1;
          })
          .map((code) => code.textContent.slice(0, 100)),
      );
      if (crampedCode.length) failures.push({ slug, slide: i + 1, mobile, crampedCode });
      const splitAlignment = await slide.evaluate((el) => {
        if (!el.classList.contains("slide-split")) return null;
        const copy = el.querySelector(":scope > .split-copy");
        const image = el.querySelector(":scope > .split-image");
        if (!copy || !image) return { missing: true };
        const slideBox = el.getBoundingClientRect();
        const copyBox = copy.getBoundingClientRect();
        const imageBox = image.getBoundingClientRect();
        return {
          centerDelta: Math.abs(
            copyBox.top + copyBox.height / 2 - (imageBox.top + imageBox.height / 2),
          ),
          copyWithinSlide: copyBox.top >= slideBox.top - 2 && copyBox.bottom <= slideBox.bottom + 2,
        };
      });
      if (
        splitAlignment !== null &&
        ("missing" in splitAlignment ||
          splitAlignment.centerDelta > 2 ||
          !splitAlignment.copyWithinSlide)
      ) {
        failures.push({ slug, slide: i + 1, mobile, splitAlignment });
      }
      const overflow = await slide.evaluate((el) => {
        const canvas = el.closest(".slidev-slide-container") || el.closest(".slidev-slide");
        if (!canvas) return [];
        const bounds = canvas.getBoundingClientRect();
        return [...el.querySelectorAll("h1,h2,h3,p,li,img,pre,table")]
          .filter((node) => {
            const box = node.getBoundingClientRect();
            return (
              box.width > 0 &&
              box.height > 0 &&
              (box.left < bounds.left - 2 ||
                box.right > bounds.right + 2 ||
                box.top < bounds.top - 2 ||
                box.bottom > bounds.bottom + 2)
            );
          })
          .map((node) => node.tagName + ":" + node.textContent.slice(0, 60));
      });
      if (overflow.length) failures.push({ slug, slide: i + 1, mobile, overflow });
      await page.screenshot({
        path: resolve(
          output,
          `${slug.replaceAll("/", "-")}-${mobile ? "mobile" : "desktop"}-${i + 1}.png`,
        ),
      });
      checked++;
    }
    // Real keyboard navigation must move the slide, including after loading a deep link.
    await page.evaluate(() => {
      window.location.hash = "#/1";
    });
    await page
      .locator('[data-slidev-no="1"] .myslides-content')
      .first()
      .waitFor({ state: "visible" });
    await page.keyboard.press("ArrowRight");
    await page.waitForFunction(() => location.hash.startsWith("#/2"));
    if (mobile) {
      await page.evaluate(() => {
        window.location.hash = "#/1";
      });
      await page
        .locator('[data-slidev-no="1"] .myslides-content')
        .first()
        .waitFor({ state: "visible" });
      const cdp = await page.context().newCDPSession(page);
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x: 310, y: 422 }],
      });
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [{ x: 90, y: 422 }],
      });
      await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
      await page.waitForFunction(() => location.hash.startsWith("#/2"));
      await cdp.detach();
    }
    assert.deepEqual(errors, [], `${slug}: browser/network errors`);
    console.log(`✓ ${slug}: ${deck.count} slides (${mobile ? "mobile" : "desktop"})`);
  } catch (error) {
    failures.push({ slug, mobile, error: String(error) });
  } finally {
    await page.close();
  }
}

try {
  for (const mobile of [false, true]) {
    const entries = Object.entries(decks).filter(([slug]) => !selected.size || selected.has(slug));
    // Independent decks share one browser; limit concurrent screenshots and image decoding.
    while (entries.length)
      await Promise.all(entries.splice(0, 3).map(([slug, deck]) => checkDeck(slug, deck, mobile)));
  }
  let report = { checked, failures };
  if (selected.size) {
    const previous = JSON.parse(await readFile(resolve(output, "report.json"), "utf8"));
    report = {
      ...previous,
      rechecked: [...selected],
      failures: [
        ...previous.failures.filter((failure) => !selected.has(failure.slug)),
        ...failures,
      ],
    };
  }
  await writeFile(resolve(output, "report.json"), JSON.stringify(report, null, 2));
  assert.deepEqual(report.failures, [], "Browser checks failed; see test-results/report.json");
} finally {
  await browser.close();
  await new Promise((done) => server.close(done));
}
