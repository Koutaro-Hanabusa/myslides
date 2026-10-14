import assert from "node:assert/strict";
import { test } from "vite-plus/test";
import { cp, mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createSlide } from "./new-slide.mjs";
import { createRequire } from "node:module";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const deckRequire = createRequire(join(root, "apps/decks/package.json"));
const cliRequire = createRequire(deckRequire.resolve("@slidev/cli/package.json"));
const { parse } = await import(cliRequire.resolve("@slidev/parser/core"));
const registry = [
  "apps/web/src/lib/slides/config.ts",
  "apps/web/src/app/page.tsx",
  "apps/web/scripts/generate-ogp.tsx",
  "apps/decks/decks.json",
];
async function fixture(fn) {
  const dir = await mkdtemp(join(tmpdir(), "myslides-test-"));
  try {
    for (const file of registry) {
      await mkdir(dirname(join(dir, file)), { recursive: true });
      await cp(join(root, file), join(dir, file));
    }
    await mkdir(join(dir, "apps/web/public/slides"), { recursive: true });
    await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}
for (const kind of ["personal", "corporate"]) {
  test(`${kind} registers an editable Slidev deck and its public route`, async () =>
    fixture(async (dir) => {
      const slug = `new-${kind}`;
      await createSlide(dir, slug, kind);
      const md = await readFile(join(dir, "apps/decks/slides", `${slug}.md`), "utf8");
      assert.match(md, /theme: none/);
      assert.match(md, /## 本文タイトル\n\n- 項目1/);
      assert.doesNotMatch(md, /reveal|React|MDX/);
      assert.doesNotMatch(md, /<(?:div|h[1-6]|ul|li)\b/);
      const parsed = await parse(md);
      assert.equal(parsed.slides.length, kind === "corporate" ? 7 : 4);
      assert.equal(parsed.slides[0].frontmatter.layout, "cover");
      assert.match(
        await readFile(join(dir, "apps/web/src/app", slug, "page.tsx"), "utf8"),
        /SlidevPresentation/,
      );
      for (const file of registry)
        assert.match(await readFile(join(dir, file), "utf8"), new RegExp(slug));
      const registeredDeck = JSON.parse(await readFile(join(dir, registry[3]), "utf8"))[slug];
      assert.equal(registeredDeck.file, `slides/${slug}.md`);
      assert.equal(registeredDeck.count, kind === "corporate" ? 7 : 4);
      await assert.rejects(createSlide(dir, slug, kind), /既に存在/);
    }));
}
test("invalid slugs and missing markers never leave partial decks", async () =>
  fixture(async (dir) => {
    const before = await Promise.all(registry.map((file) => readFile(join(dir, file), "utf8")));
    for (const slug of ["../bad", "Bad-Slug", "two--hyphens", "better-t-stack"])
      await assert.rejects(createSlide(dir, slug, "personal"));
    assert.deepEqual(
      await Promise.all(registry.map((file) => readFile(join(dir, file), "utf8"))),
      before,
    );
    await writeFile(join(dir, registry[2]), "no marker");
    await assert.rejects(createSlide(dir, "safe-deck", "personal"), /OGP/);
    await assert.rejects(readFile(join(dir, "apps/decks/slides/safe-deck.md")));
  }));
