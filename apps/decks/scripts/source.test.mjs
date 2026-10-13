import { test } from "vite-plus/test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const cliRequire = createRequire(require.resolve("@slidev/cli/package.json"));
const { parse } = await import(cliRequire.resolve("@slidev/parser/core"));
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const decks = JSON.parse(await readFile(resolve(root, "decks.json"), "utf8"));
const manifest = JSON.parse(await readFile(resolve(root, "migration-manifest.json"), "utf8"));
test("Markdown decks retain their order, old deep links and local assets", async () => {
  for (const [slug, deck] of Object.entries(decks)) {
    const md = await readFile(resolve(root, deck.file), "utf8");
    const parsed = await parse(md, deck.file);
    assert.equal(parsed.slides.length, deck.count, `${slug}: native Slidev slide count`);
    if (!manifest[slug]) continue;
    assert.deepEqual(
      parsed.slides.map((slide) => slide.frontmatter.legacyHash),
      Object.keys(deck.legacy),
      slug,
    );
    assert.equal((md.match(/^legacyHash:/gm) || []).length, manifest[slug].length, slug);
    assert.equal(deck.count, manifest[slug].length, slug);
    const expected = Object.fromEntries(
      manifest[slug].map((slide, i) => [`${slide.h}/${slide.v}`, i + 1]),
    );
    assert.deepEqual(deck.legacy, expected, slug);
    const prose = md.replace(/^(`{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm, "");
    assert.doesNotMatch(
      prose,
      /<(?:div|h[1-6]|p|ul|ol|li|table|pre|code|img|strong|small)\b/i,
      `${slug}: prose must use Markdown, not serialized HTML`,
    );
    const urls = [
      ...prose.matchAll(/!\[[^\]]*\]\(([^\s)]+)\)/g),
      ...prose.matchAll(/^background: "([^"\n]+)"/gm),
    ].map((match) => match[1]);
    for (const url of urls) {
      if (url.startsWith("/")) await access(resolve(root, "../web/public", url.slice(1)));
    }
    for (const slide of parsed.slides)
      await access(resolve(root, "layouts", `${slide.frontmatter.layout || "default"}.vue`));
  }
});
