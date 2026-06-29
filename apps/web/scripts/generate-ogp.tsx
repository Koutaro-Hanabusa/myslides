// ビルド時に各スライドの OGP 画像を生成する。
// 実行: bun scripts/generate-ogp.tsx
// 出力: apps/web/src/app/<slug>/opengraph-image.png

import { Resvg } from "@resvg/resvg-js";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { ReactNode } from "react";
import satori from "satori";
import { createOgpProps } from "../src/lib/slides/config";

const HERE = dirname(fileURLToPath(import.meta.url));
const APP_DIR = join(HERE, "../src/app");
const FONTS_DIR = join(HERE, "../public/fonts");
const R2_BASE =
  process.env.NEXT_PUBLIC_R2_BASE_URL ?? "https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev";

const COVERS = {
  chi: `${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_表紙.png`,
  burio: `${R2_BASE}/burioSlide/burio16OGP.png`,
} as const;

interface Line {
  text: string;
  fontSize: number;
}

interface Spec {
  slug: string;
  cover: keyof typeof COVERS;
  customLines?: Line[];
  titleFontSize?: number;
}

const SPECS: Spec[] = [
  { slug: "25-graduate", cover: "chi", titleFontSize: 56 },
  { slug: "autofocus-correct-usage", cover: "burio" },
  {
    slug: "better-t-stack",
    cover: "chi",
    customLines: [
      { text: "より良い技術スタックで", fontSize: 56 },
      { text: "Cloudflareにデプロイしよう", fontSize: 56 },
    ],
  },
  { slug: "oss-and-community", cover: "burio" },
  { slug: "oss-and-community-v2", cover: "chi" },
  {
    slug: "react-three-fiber",
    cover: "chi",
    customLines: [
      { text: "WebGL入門", fontSize: 56 },
      { text: "Three.jsで良さげなプロフィールサイト作ってみた", fontSize: 48 },
    ],
  },
  {
    slug: "revealjs-slideDeck",
    cover: "burio",
    customLines: [
      { text: "自分だけの", fontSize: 64 },
      { text: "スライドデッキを作ってみた", fontSize: 64 },
    ],
  },
  { slug: "tacotuesday", cover: "burio", titleFontSize: 64 },
  { slug: "tanstack-router-dir-structure", cover: "burio" },
  { slug: "vite-plus-retro", cover: "burio" },
  {
    slug: "you-must-have-dotfiles",
    cover: "chi",
    customLines: [
      { text: "Vim使いでなくても", fontSize: 56 },
      { text: "dotfilesを管理しよう", fontSize: 56 },
    ],
  },
];

async function loadFont(file: string, name: string, weight: 400 | 700) {
  const data = await readFile(join(FONTS_DIR, file));
  return { name, data, weight, style: "normal" as const };
}

async function loadCovers(): Promise<Record<keyof typeof COVERS, string>> {
  const result: Record<string, string> = {};
  for (const [key, url] of Object.entries(COVERS)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch cover ${url}: ${res.status}`);
    const buf = await res.arrayBuffer();
    const contentType = res.headers.get("content-type") ?? "image/png";
    const base64 = Buffer.from(buf).toString("base64");
    result[key] = `data:${contentType};base64,${base64}`;
  }
  return result as Record<keyof typeof COVERS, string>;
}

function template(spec: Spec, coverDataUrl: string): ReactNode {
  const ogp = createOgpProps(spec.slug);
  const lines: Line[] = spec.customLines ?? [
    { text: ogp.title, fontSize: spec.titleFontSize ?? 48 },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        fontFamily: '"Source Sans Pro", "Noto Sans JP", sans-serif',
      }}
    >
      <img
        src={coverDataUrl}
        alt=""
        width={1200}
        height={630}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 60px",
        }}
      >
        <p style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>{ogp.event}</p>
        <div style={{ display: "flex", flexDirection: "column", margin: "24px 0" }}>
          {lines.map((line) => (
            <span
              key={line.text}
              style={{
                fontSize: line.fontSize,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.3,
              }}
            >
              {line.text}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>{ogp.author}</p>
      </div>
    </div>
  );
}

async function main(): Promise<void> {
  console.log("▶ Loading fonts...");
  const fonts = await Promise.all([
    loadFont("source-sans-pro-400.woff", "Source Sans Pro", 400),
    loadFont("source-sans-pro-700.woff", "Source Sans Pro", 700),
    loadFont("noto-sans-jp-400.woff", "Noto Sans JP", 400),
    loadFont("noto-sans-jp-700.woff", "Noto Sans JP", 700),
  ]);

  console.log("▶ Fetching cover images from R2...");
  const covers = await loadCovers();

  console.log(`▶ Generating ${SPECS.length} OGP image(s)...`);
  for (const spec of SPECS) {
    const jsx = template(spec, covers[spec.cover]);
    const svg = await satori(jsx, { width: 1200, height: 630, fonts });
    const png = new Resvg(svg).render().asPng();
    const dest = join(APP_DIR, spec.slug, "opengraph-image.png");
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, png);
    console.log(`  ✓ ${spec.slug}/opengraph-image.png (${png.byteLength}B)`);
  }
  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
