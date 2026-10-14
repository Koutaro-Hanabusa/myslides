import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const scriptRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export async function publishDeck({
  cwd = process.cwd(),
  decksRoot = scriptRoot,
  webRoot = resolve(decksRoot, "../web"),
} = {}) {
  const deckFile = relative(decksRoot, resolve(cwd, "slides.md")).split(sep).join("/");
  const decks = JSON.parse(await readFile(resolve(decksRoot, "decks.json"), "utf8"));
  const entry = Object.entries(decks).find(([, deck]) => deck.file === deckFile);
  if (!entry) throw new Error(`No deck is registered for ${deckFile}`);

  const [slug] = entry;
  const output = resolve(cwd, "dist");
  const target = resolve(webRoot, "public/presentations", slug);
  await rm(resolve(target, "assets"), { recursive: true, force: true });
  await mkdir(target, { recursive: true });
  await cp(output, target, { recursive: true });
  return target;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await publishDeck();
}
