import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createInterface } from "node:readline/promises";
import { execFileSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
function insertOnce(source, marker, insertion, label) {
  if (source.split(marker).length !== 2)
    throw new Error(`${label}: 登録位置が見つからないか重複しています`);
  return source.replace(marker, marker + insertion);
}
export async function createSlide(root, slug, kind) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new Error("slug は小文字英数字と単一のハイフンによる kebab-case にしてください");
  if (!["personal", "corporate"].includes(kind))
    throw new Error("template は personal または corporate を指定してください");
  const target = join(root, "apps/web/src/app", slug);
  const assets = join(root, "apps/web/public/slides", slug);
  const deckDir = join(root, "apps/decks/slides", slug);
  const deckFile = join(deckDir, "slides.md");
  if ([target, assets, deckDir].some(existsSync))
    throw new Error(`'${slug}' の資料または assets は既に存在します`);
  const paths = {
    config: join(root, "apps/web/src/lib/slides/config.ts"),
    home: join(root, "apps/web/src/app/page.tsx"),
    ogp: join(root, "apps/web/scripts/generate-ogp.tsx"),
    decks: join(root, "apps/decks/decks.json"),
  };
  const original = Object.fromEntries(
    await Promise.all(
      Object.entries(paths).map(async ([key, path]) => [key, await readFile(path, "utf8")]),
    ),
  );
  if (Object.values(original).some((source) => source.includes(`"${slug}"`)))
    throw new Error(`'${slug}' は既に登録されています`);
  const decks = JSON.parse(original.decks);
  decks[slug] = {
    file: `slides/${slug}/slides.md`,
    count: kind === "corporate" ? 7 : 4,
    legacy: Object.fromEntries(
      Array.from({ length: kind === "corporate" ? 7 : 4 }, (_, i) => [`${i}/0`, i + 1]),
    ),
  };
  const updated = {
    config: insertOnce(
      original.config,
      "export const SLIDES_CONFIG: Record<string, SlideConfig> = {\n",
      `  "${slug}": { slug: "${slug}", title: "${slug}", description: "${slug} の発表資料", author: "ぶりお", authorUrl: "https://twitter.com/burio_16", date: "YYYY/MM/DD", event: "イベント名" },\n`,
      "config",
    ),
    home: insertOnce(
      original.home,
      "const slides = [\n",
      `  { config: SLIDES_CONFIG["${slug}"] },\n`,
      "home",
    ),
    ogp: insertOnce(
      original.ogp,
      "const SPECS: Spec[] = [\n",
      `  { slug: "${slug}", cover: "${kind === "personal" ? "burio" : "chi"}" },\n`,
      "OGP",
    ),
    decks: JSON.stringify(decks, null, 2) + "\n",
  };
  const cover =
    kind === "personal"
      ? "/slides/templates/4830e1037835.png"
      : "/slides/templates/ce83e2a9c143.png";
  const background =
    kind === "personal"
      ? "/slides/templates/af4e26a78715.png"
      : "/slides/templates/1e9b011d7127.png";
  let md = `---
theme: none
title: "${slug}"
layout: cover
canvasWidth: 1920
aspectRatio: 16/9
routerMode: hash
wakeLock: false
preloadImages: false
transition: slide-left
mdc: true
fonts:
  provider: none
  sans: Source Sans Pro, Helvetica, sans-serif
defaults:
  layout: content
background: "${cover}"
---

### イベント名

# ${slug}

### ぶりお @burio_16

---
background: "${background}"
---

## 自己紹介

- 名前・所属
- 自己紹介の項目

---
layout: statement
background: "${background}"
---

# 見出し

---
background: "${background}"
---

## 本文タイトル

- 項目1
- 項目2
- 項目3
`;
  if (kind === "corporate") {
    const company = `---\nlayout: blank\nbackground: "/slides/templates/1e8424e4716c.png"\n---\n\n\n---\nlayout: blank\nbackground: "/slides/templates/02c1527ee49d.png"\n---\n\n`;
    md = md.replace(
      `---\nbackground: "${background}"\n---\n\n## 自己紹介`,
      company + `---\nbackground: "${background}"\n---\n\n## 自己紹介`,
    );
    md = md.replaceAll(
      `background: "${background}"\n`,
      `background: "${background}"\ncontentStyle: "color: black"\n`,
    );
    md += `\n---\nlayout: blank\nbackground: "/slides/templates/fa74e1541fa0.png"\n---\n`;
  }
  let targetCreated = false;
  let assetsCreated = false;
  let deckCreated = false;
  try {
    await mkdir(target);
    targetCreated = true;
    await writeFile(
      join(target, "page.tsx"),
      `import SlidevPresentation from "@/components/slidev-presentation";\nimport {getSlideConfig, getSlideTitle} from "@/lib/slides/config";\nexport default function PresentationPage(){return <SlidevPresentation slug="${slug}" title={getSlideTitle(getSlideConfig("${slug}"))}/>;}\n`,
    );
    await writeFile(
      join(target, "layout.tsx"),
      `import {createSlideMetadata} from "@/lib/slides/config";\nexport const metadata=createSlideMetadata("${slug}");\nexport default function Layout({children}:{children:React.ReactNode}){return <div className="fixed inset-0 h-dvh w-full overflow-hidden">{children}</div>;}\n`,
    );
    await mkdir(deckDir, { recursive: true });
    deckCreated = true;
    await writeFile(deckFile, md, { flag: "wx" });
    await writeFile(
      join(deckDir, "package.json"),
      JSON.stringify(
        {
          name: `@mySlides/slide-${slug}`,
          private: true,
          type: "module",
          scripts: {
            dev: "slidev slides.md --theme ../../theme",
            export: "slidev export slides.md --theme ../../theme",
            "build:slidev": `slidev build slides.md --theme ../../theme --base /presentations/${slug}/ && node ../../scripts/publish.mjs`,
          },
          dependencies: {
            "@slidev/cli": "52.20.1",
            "@slidev/client": "52.20.1",
            "reka-ui": "2.11.0",
            vue: "3.5.43",
            "vue-router": "5.4.0",
          },
        },
        null,
        2,
      ) + "\n",
      { flag: "wx" },
    );
    await mkdir(join(assets, "assets"), { recursive: true });
    assetsCreated = true;
    await writeFile(join(assets, "assets/.gitkeep"), "");
    for (const [key, path] of Object.entries(paths)) await writeFile(path, updated[key]);
    execFileSync(
      "vp",
      ["fmt", ...Object.values(paths), join(target, "page.tsx"), join(target, "layout.tsx")],
      { cwd: ROOT, stdio: "pipe" },
    );
  } catch (error) {
    for (const [key, path] of Object.entries(paths)) await writeFile(path, original[key]);
    if (targetCreated) await rm(target, { recursive: true, force: true });
    if (assetsCreated) await rm(assets, { recursive: true, force: true });
    if (deckCreated) await rm(deckDir, { recursive: true, force: true });
    throw error;
  }
  return deckFile;
}
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  let slug = process.argv[3];
  if (!slug) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    slug = (await rl.question("Presentation slug: ")).trim();
    rl.close();
  }
  try {
    const deckFile = await createSlide(ROOT, slug, process.argv[2]);
    console.log(`Created ${deckFile}`);
    try {
      execFileSync("vp", ["install"], { cwd: ROOT, stdio: "inherit" });
    } catch {
      console.error(
        "資料の生成は完了しましたが、workspaceの依存関係を更新できませんでした。ルートで `vp install` を再実行してください。",
      );
      process.exitCode = 1;
    }
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
