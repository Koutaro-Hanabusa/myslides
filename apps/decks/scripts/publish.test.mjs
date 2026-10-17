import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "vite-plus/test";
import { publishDeck } from "./publish.mjs";

test("publishing a parent slug replaces its assets and preserves a nested locale", async () => {
  const root = await mkdtemp(join(tmpdir(), "myslides-publish-"));
  try {
    const decksRoot = join(root, "decks");
    const cwd = join(decksRoot, "slides/talk");
    const webRoot = join(root, "web");
    const target = join(webRoot, "public/presentations/talk");
    await mkdir(join(cwd, "dist/assets"), { recursive: true });
    await mkdir(join(target, "assets"), { recursive: true });
    await mkdir(join(target, "en"), { recursive: true });
    await writeFile(
      join(decksRoot, "decks.json"),
      JSON.stringify({
        talk: { file: "slides/talk/slides.md", count: 1 },
        direct: {
          file: "slides/direct/slides.md",
          count: 1,
          publicPath: "direct",
        },
      }),
    );
    await writeFile(join(cwd, "dist/index.html"), "new");
    await writeFile(join(cwd, "dist/assets/new.js"), "new asset");
    await writeFile(join(target, "assets/stale.js"), "stale asset");
    await writeFile(join(target, "en/index.html"), "english");

    assert.equal(await publishDeck({ cwd, decksRoot, webRoot }), target);
    assert.equal(await readFile(join(target, "index.html"), "utf8"), "new");
    assert.equal(await readFile(join(target, "assets/new.js"), "utf8"), "new asset");
    await assert.rejects(readFile(join(target, "assets/stale.js")));
    assert.equal(await readFile(join(target, "en/index.html"), "utf8"), "english");

    const directCwd = join(decksRoot, "slides/direct");
    const directTarget = join(webRoot, "public/direct");
    await mkdir(join(directCwd, "dist"), { recursive: true });
    await mkdir(join(webRoot, "public/presentations/direct"), { recursive: true });
    await writeFile(join(webRoot, "public/presentations/direct/index.html"), "stale");
    await writeFile(join(directCwd, "dist/index.html"), "direct");
    assert.equal(await publishDeck({ cwd: directCwd, decksRoot, webRoot }), directTarget);
    assert.equal(await readFile(join(directTarget, "index.html"), "utf8"), "direct");
    await assert.rejects(readFile(join(webRoot, "public/presentations/direct/index.html")));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
