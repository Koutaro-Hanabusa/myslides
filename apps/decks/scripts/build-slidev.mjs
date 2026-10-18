import { spawn } from "node:child_process";
import { access, cp } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getDeckSlug, publishDeck } from "./publish.mjs";

function run(command, args, cwd) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, { cwd, stdio: "inherit" });
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (code === 0) resolveRun();
      else reject(new Error(`${command} failed with ${signal ?? `exit code ${code}`}`));
    });
  });
}

export async function buildDeck({
  cwd = process.cwd(),
  decksRoot,
  webRoot,
  runCommand = run,
} = {}) {
  const slug = await getDeckSlug({ cwd, decksRoot });
  await access(resolve(cwd, "og-image.png"));

  await runCommand(
    "slidev",
    ["build", "slides.md", "--theme", "../../theme", "--base", `/${slug}/`],
    cwd,
  );
  await cp(resolve(cwd, "og-image.png"), resolve(cwd, "dist/og-image.png"));
  return publishDeck({ cwd, decksRoot, webRoot });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await buildDeck();
}
