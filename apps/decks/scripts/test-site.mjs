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
  for (const slug of Object.keys(decks)) {
    const card = page.locator(`a[href="/${slug}"]`).first();
    assert.equal(await card.count(), 1, `${slug}: missing from the home page`);
    await card.scrollIntoViewIfNeeded();
    await card.locator("iframe").waitFor({ state: "attached" });
    await card
      .frameLocator("iframe")
      .locator('[data-slidev-no="1"] .myslides-content')
      .first()
      .waitFor({ state: "visible" });
  }
  for (const [slug, deck] of Object.entries(decks)) {
    const route = `/${slug}/`;
    await page.goto(`${base}${route}`);
    await page.locator('[data-slidev-no="1"] .myslides-content').first().waitFor();
    assert.equal(await page.locator("iframe").count(), 0);
    assert.notEqual(await page.evaluate(() => location.hash), "#/0/0");
    await page.goto(`${base}${route}#/${deck.count}`);
    await page
      .locator(`[data-slidev-no="${deck.count}"] .myslides-content`)
      .first()
      .waitFor({ state: "visible" });
    await page.waitForFunction((hash) => location.hash === hash, `#/${deck.count}`);
    assert.match(await page.title(), /mySlides|\S/);
    const og = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    const ogPath = `/${slug}/og-image.png`;
    assert(og?.includes(ogPath));
    assert.equal((await page.request.get(`${base}${ogPath}`)).status(), 200);
    const before = `#/${deck.count - 1}`;
    await page.locator("body").press("ArrowLeft");
    await page.waitForFunction((hash) => location.hash === hash, before);
    await page.evaluate(() => {
      location.hash = "#/1";
    });
    await page
      .locator('[data-slidev-no="1"] .myslides-content')
      .first()
      .waitFor({ state: "visible" });
    assert.equal(await page.evaluate(() => location.hash), "#/1");
    console.log("✓", slug, "direct route, metadata, OGP and navigation");
  }
  assert.deepEqual(errors, []);
  await writeFile(
    root + "/test-results/site.json",
    JSON.stringify({ decks: Object.keys(decks).length, failures: [] }, null, 2),
  );
} finally {
  await browser.close();
}
