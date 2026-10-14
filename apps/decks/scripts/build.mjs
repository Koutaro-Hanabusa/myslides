import { spawn } from "node:child_process";
import { readFile, mkdir, cp, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const cli = resolve(dirname(require.resolve("@slidev/cli/package.json")), "bin/slidev.mjs");
const cliRequire = createRequire(require.resolve("@slidev/cli/package.json"));
const { parse } = await import(cliRequire.resolve("@slidev/parser/core"));
const decks = JSON.parse(await readFile(resolve(root, "decks.json"), "utf8"));
const only = process.argv[2];
if (only && !decks[only]) throw new Error(`Unknown deck: ${only}`);
const queue = Object.entries(decks).filter(([slug]) => !only || slug === only);
async function buildDeck(slug, deck) {
  const parsed = await parse(await readFile(resolve(root, deck.file), "utf8"), deck.file);
  if (parsed.slides.length !== deck.count)
    throw new Error(
      `${slug}: expected ${deck.count} slides, parsed ${parsed.slides.length}; update decks.json when adding/removing slides`,
    );
  const output = resolve(root, "dist", slug.replaceAll("/", "__"));
  await new Promise((done, fail) => {
    const child = spawn(
      process.execPath,
      [
        cli,
        "build",
        deck.file,
        "--theme",
        "../theme",
        "--base",
        `/presentations/${slug}/`,
        "--out",
        output,
      ],
      { cwd: root, stdio: "inherit" },
    );
    child.on("error", fail);
    child.on("close", (status) =>
      status === 0 ? done() : fail(new Error(`${slug}: build exited with ${status}`)),
    );
  });
  const target = resolve(root, "../web/public/presentations", slug);
  await rm(resolve(target, "assets"), { recursive: true, force: true });
  await mkdir(target, { recursive: true });
  await cp(output, target, { recursive: true });
}

async function worker() {
  while (queue.length) {
    const [slug, deck] = queue.shift();
    await buildDeck(slug, deck);
  }
}
await Promise.all(Array.from({ length: Math.min(3, queue.length) }, () => worker()));
