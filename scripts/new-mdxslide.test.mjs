import assert from "node:assert/strict";
import { test } from "node:test";
import { cp, mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { createSlide } from "./new-mdxslide.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const requireFromWeb = createRequire(join(root, "apps/web/package.json"));
const ts = requireFromWeb("typescript");
const registry = [
  "apps/web/src/lib/slides/config.ts",
  "apps/web/src/app/page.tsx",
  "apps/web/src/app/embed/[slug]/slide-viewer.tsx",
  "apps/web/scripts/generate-ogp.tsx",
];

async function fixture(fn) {
  const dir = await mkdtemp(join(tmpdir(), "my-slides-test-"));
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

for (const [kind, cover, component] of [
  ["personal", "burio", "PersonalContentSlide"],
  ["corporate", "chi", "CorporatePhilosophySlide"],
]) {
  void test(`${kind} generates a usable MDX presentation and registers it`, async () =>
    fixture(async (dir) => {
      const slug = `1-${kind}-deck`;
      await createSlide(dir, slug, kind);
      const app = join(dir, "apps/web/src/app", slug);
      const mdx = await readFile(join(app, "slides.mdx"), "utf8");
      const coverSource = await readFile(join(app, "slides/cover.tsx"), "utf8");
      const ogp = await readFile(join(dir, registry[3]), "utf8");
      assert.match(mdx, new RegExp(`<${component}`));
      assert.match(
        mdx,
        /<ContentSlide title="本文タイトル">\n\n- 項目1|<PersonalContentSlide title="本文タイトル">\n\n- 項目1/,
      );
      assert.match(coverSource, /formatEvent\(config.event\)/);
      assert.match(coverSource, /getSlideTitleLines\(config\)/);
      assert.match(ogp, new RegExp(`slug: "${slug}", cover: "${cover}"`));
      for (const file of registry.slice(0, 3))
        assert.match(await readFile(join(dir, file), "utf8"), new RegExp(slug));
      for (const file of [
        ...registry,
        ...["page.tsx", "layout.tsx", "slides/cover.tsx"].map(
          (name) => `apps/web/src/app/${slug}/${name}`,
        ),
      ]) {
        const source = await readFile(join(dir, file), "utf8");
        const parsed = ts.createSourceFile(
          file,
          source,
          ts.ScriptTarget.Latest,
          true,
          file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
        );
        assert.deepEqual(
          parsed.parseDiagnostics.map((diagnostic) =>
            ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
          ),
          [],
          `${file} has syntax errors`,
        );
      }
      assert.equal(
        await readFile(join(dir, "apps/web/public/slides", slug, "assets/.gitkeep"), "utf8"),
        "",
      );
      await assert.rejects(createSlide(dir, slug, kind), /既に存在/);
    }));
}

void test("different valid slugs produce different component aliases", async () =>
  fixture(async (dir) => {
    await createSlide(dir, "a1-b", "personal");
    await createSlide(dir, "a-1-b", "corporate");
    const embed = await readFile(join(dir, registry[2]), "utf8");
    assert.match(embed, /Slide_a1_b_Cover/);
    assert.match(embed, /Slide_a_1_b_Cover/);
    const parsed = ts.createSourceFile(
      "embed.tsx",
      embed,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );
    assert.deepEqual(parsed.parseDiagnostics, []);
  }));

void test("invalid slug and already registered slug leave existing files untouched", async () =>
  fixture(async (dir) => {
    const before = await Promise.all(registry.map((file) => readFile(join(dir, file), "utf8")));
    for (const slug of ["../bad", "Bad-Slug", "two--hyphens", "better-t-stack"]) {
      await assert.rejects(createSlide(dir, slug, "personal"));
    }
    const after = await Promise.all(registry.map((file) => readFile(join(dir, file), "utf8")));
    assert.deepEqual(after, before);
  }));

void test("missing registration marker fails before creating files", async () =>
  fixture(async (dir) => {
    const ogpPath = join(dir, registry[3]);
    await writeFile(ogpPath, "no marker");
    await assert.rejects(createSlide(dir, "safe-new-deck", "personal"), /OGP/);
    await assert.rejects(readFile(join(dir, "apps/web/src/app/safe-new-deck/page.tsx")));
  }));
