import { chromium } from "playwright";
import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const base = process.env.MYSLIDES_TEST_SITE_URL || "http://localhost:3001";
const decks = JSON.parse(await readFile(root + "/decks.json", "utf8"));
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
try {
  await page.goto(`${base}/`);
  await page.getByRole("heading", { name: "Burio's slide deck" }).waitFor();
  await page.locator("iframe").first().waitFor();
  for (const [slug, deck] of Object.entries(decks)) {
    const direct = Boolean(deck.publicPath);
    const route = direct ? `/${deck.publicPath}/` : `/${slug}`;
    if (direct) {
      await page.goto(`${base}${route}`);
      await page.locator('[data-slidev-no="1"] .myslides-content').first().waitFor();
      assert.equal(await page.locator("iframe").count(), 0);
      assert.notEqual(await page.evaluate(() => location.hash), "#/0/0");
    }
    await page.goto(`${base}${route}#/${deck.count}`);
    if (!direct) await page.locator("iframe").first().waitFor();
    const slides = direct ? page : page.frameLocator("iframe").first();
    await slides
      .locator(`[data-slidev-no="${deck.count}"] .myslides-content`)
      .first()
      .waitFor({ state: "visible" });
    await page.waitForFunction((hash) => location.hash === hash, `#/${deck.count}`);
    assert.match(await page.title(), /mySlides|\S/);
    const og = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    console.log("OG", slug, og);
    const ogPath = direct ? `/${deck.publicPath}/og-image.png` : `/${slug}/opengraph-image.png`;
    assert(og?.includes(direct ? "og-image.png" : `/${slug}/opengraph-image`));
    assert.equal((await page.request.get(`${base}${ogPath}`)).status(), 200);
    await page.evaluate(() => {
      window.msgs = [];
      window.addEventListener("message", (e) => window.msgs.push(e.data));
    });
    const before = `#/${deck.count - 1}`;
    await slides.locator("body").press("ArrowLeft");
    try {
      await page.waitForFunction((hash) => location.hash === hash, before, {
        timeout: 3000,
      });
    } catch (e) {
      console.log(
        "NAV",
        JSON.stringify(await page.evaluate(() => ({ hash: location.hash, msgs: window.msgs }))),
        page.frames().map((f) => f.url()),
        before,
      );
      throw e;
    }
    await page.evaluate(() => {
      location.hash = "#/1";
    });
    await slides
      .locator('[data-slidev-no="1"] .myslides-content')
      .first()
      .waitFor({ state: "visible" });
    assert.equal(await page.evaluate(() => location.hash), "#/1");
    console.log("✓", slug, "metadata, OGP and navigation", direct ? "(direct)" : "(iframe)");
  }
  assert.deepEqual(errors, []);
  await writeFile(
    root + "/test-results/site.json",
    JSON.stringify({ decks: Object.keys(decks).length, failures: [] }, null, 2),
  );
} finally {
  await browser.close();
}
