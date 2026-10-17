import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "vite-plus/test";
import { buildDeck } from "./build-slidev.mjs";
import { publishDeck } from "./publish.mjs";

test("publishing a parent slug replaces its assets and preserves a nested locale", async () => {
  const root = await mkdtemp(join(tmpdir(), "myslides-publish-"));
  try {
    const decksRoot = join(root, "decks");
    const cwd = join(decksRoot, "slides/talk");
    const webRoot = join(root, "web");
    const target = join(webRoot, "public/talk");
    const legacyTarget = join(webRoot, "public/presentations/talk");
    await mkdir(join(cwd, "dist/assets"), { recursive: true });
    await mkdir(join(target, "assets"), { recursive: true });
    await mkdir(join(target, "en"), { recursive: true });
    await mkdir(legacyTarget, { recursive: true });
    await writeFile(
      join(decksRoot, "decks.json"),
      JSON.stringify({
        talk: { file: "slides/talk/slides.md", count: 1 },
      }),
    );
    await writeFile(join(cwd, "dist/index.html"), "new");
    await writeFile(join(cwd, "dist/assets/new.js"), "new asset");
    await writeFile(join(target, "assets/stale.js"), "stale asset");
    await writeFile(join(target, "en/index.html"), "english");
    await writeFile(join(legacyTarget, "index.html"), "legacy");

    assert.equal(await publishDeck({ cwd, decksRoot, webRoot }), target);
    assert.equal(await readFile(join(target, "index.html"), "utf8"), "new");
    assert.equal(await readFile(join(target, "assets/new.js"), "utf8"), "new asset");
    await assert.rejects(readFile(join(target, "assets/stale.js")));
    assert.equal(await readFile(join(target, "en/index.html"), "utf8"), "english");
    await assert.rejects(readFile(join(legacyTarget, "index.html")));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("building a registered nested deck uses its public base and publishes it", async () => {
  const root = await mkdtemp(join(tmpdir(), "myslides-build-slidev-"));
  try {
    const decksRoot = join(root, "decks");
    const cwd = join(decksRoot, "slides/talk-en");
    const webRoot = join(root, "web");
    const calls = [];
    await mkdir(cwd, { recursive: true });
    await writeFile(
      join(decksRoot, "decks.json"),
      JSON.stringify({ "talk/en": { file: "slides/talk-en/slides.md", count: 1 } }),
    );

    const target = await buildDeck({
      cwd,
      decksRoot,
      webRoot,
      runCommand: async (command, args, commandCwd) => {
        calls.push({ command, args, cwd: commandCwd });
        if (args[0] === "export") {
          await mkdir(join(cwd, ".slidev-og-image"), { recursive: true });
          await writeFile(join(cwd, ".slidev-og-image/1.png"), "og image");
        } else {
          await mkdir(join(cwd, "dist"), { recursive: true });
          await writeFile(join(cwd, "dist/index.html"), "slide");
        }
      },
    });

    assert.equal(calls.length, 2);
    assert.deepEqual(
      calls.map(({ command, cwd: commandCwd }) => [command, commandCwd]),
      [
        ["slidev", cwd],
        ["slidev", cwd],
      ],
    );
    assert.equal(calls[1].args.at(-1), "/talk/en/");
    assert.equal(target, join(webRoot, "public/talk/en"));
    assert.equal(await readFile(join(target, "index.html"), "utf8"), "slide");
    assert.equal(await readFile(join(target, "og-image.png"), "utf8"), "og image");
    await assert.rejects(readFile(join(cwd, ".slidev-og-image/1.png")));
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
