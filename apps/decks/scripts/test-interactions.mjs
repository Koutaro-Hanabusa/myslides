import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, stat, writeFile } from "node:fs/promises";
import { resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import assert from "node:assert/strict";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const cliRequire = createRequire(require.resolve("@slidev/cli/package.json"));
const { parse } = await import(cliRequire.resolve("@slidev/parser/core"));
const publicDir = resolve(root, "../web/public");
const server = createServer(async (req, res) => {
  try {
    let file = resolve(
      publicDir,
      `.${decodeURIComponent(new URL(req.url, "http://localhost").pathname)}`,
    );
    if (!file.startsWith(publicDir + "/")) throw new Error("Invalid path");
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    res.setHeader(
      "Content-Type",
      { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff": "font/woff" }[
        extname(file)
      ] || "application/octet-stream",
    );
    res.end(await readFile(file));
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const base = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const results = [];
try {
  const autofocus = await parse(
    await readFile(resolve(root, "autofocus-correct-usage.md"), "utf8"),
  );
  for (const kind of ["login", "cancel", "radix"]) {
    const slide =
      autofocus.slides.findIndex((slide) =>
        slide.content.includes(`AutofocusDemo kind="${kind}"`),
      ) + 1;
    assert(slide > 0);
    await page.goto(`${base}/presentations/autofocus-correct-usage/#/${slide}`);
    const demo = page
      .locator(`[data-slidev-no="${slide}"] .autofocus-demo[data-kind="${kind}"]`)
      .first();
    await demo.waitFor({ state: "visible" });
    const trigger = demo.locator(".demo-trigger").first();
    await trigger.click();
    const dialog =
      kind === "radix" ? page.locator('[role="dialog"]') : demo.locator("dialog[open]");
    await dialog.waitFor({ state: "visible" });
    if (kind === "login") {
      assert.equal(await page.evaluate(() => document.activeElement.type), "email");
      for (let i = 0; i < 4; i++) await page.keyboard.press("Tab");
      assert.equal(
        await page.evaluate(() => document.activeElement.type),
        "email",
        "native dialog must trap focus",
      );
    } else {
      assert.match(
        await page.evaluate(() => document.activeElement.textContent),
        /キャンセル|フォーカス中/,
      );
      await page.keyboard.press("Shift+Tab");
      assert(
        await dialog.evaluate((el) => el.contains(document.activeElement)),
        "focus must stay inside dialog",
      );
    }
    assert.equal(new URL(page.url()).hash, `#/${slide}`, "dialog keys must not navigate slides");
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    assert(
      await trigger.evaluate((el) => document.activeElement === el),
      "closing must restore trigger focus",
    );
    results.push(`${kind}: initial focus, focus trap, Escape, restored focus`);
  }
  for (const slug of ["vite-plus-retro", "tanstack-router-dir-structure", "oss-and-community-v2"]) {
    const parsed = await parse(await readFile(resolve(root, `${slug}.md`), "utf8"));
    for (const [i, slide] of parsed.slides.entries()) {
      if (!slide.content.includes('v-click.hide="1"')) continue;
      await page.goto(`${base}/presentations/${slug}/#/${i + 1}`);
      const images = page.locator(`[data-slidev-no="${i + 1}"] .r-stack img`).first();
      await images.waitFor({ state: "visible" });
      const pair = page.locator(`[data-slidev-no="${i + 1}"] img[data-fragment-index="0"]`);
      assert(await pair.first().evaluate((el) => getComputedStyle(el).opacity !== "0"));
      assert(await pair.last().evaluate((el) => getComputedStyle(el).opacity === "0"));
      await page.keyboard.press("ArrowRight");
      await page.waitForTimeout(350);
      assert(await pair.first().evaluate((el) => getComputedStyle(el).opacity === "0"));
      assert(await pair.last().evaluate((el) => getComputedStyle(el).opacity !== "0"));
      assert(
        new URL(page.url()).hash.startsWith(`#/${i + 1}`),
        "fragment must not skip to the next slide",
      );
      results.push(`${slug}/${i + 1}: paired image transition`);
    }
  }
  assert.deepEqual(errors, []);
  await writeFile(
    resolve(root, "test-results/interactions.json"),
    JSON.stringify({ results, failures: [] }, null, 2),
  );
  console.log(results.join("\n"));
} finally {
  await browser.close();
  await new Promise((done) => server.close(done));
}
