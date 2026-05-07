// フォントを以下の優先順でロード:
// 1. Cloudflare Workers ランタイム → @opennextjs/cloudflare の ASSETS binding 経由 (Static Assets)
// 2. Next.js build/dev (Node.js) → node:fs/promises で public/fonts/ から読む
// 3. 最後の砦 → HTTP fetch
// Workers ランタイムで unenv 配下の fs.readFile が「not implemented」になる事故を避けるため、
// ASSETS binding を最優先にする。

import type { ImageResponse } from "next/og";

type ImageResponseFonts = NonNullable<
  NonNullable<ConstructorParameters<typeof ImageResponse>[1]>["fonts"]
>;

const FONT_FILES = [
  { file: "source-sans-pro-400.woff", name: "Source Sans Pro", weight: 400 as const },
  { file: "source-sans-pro-700.woff", name: "Source Sans Pro", weight: 700 as const },
  { file: "noto-sans-jp-400.woff", name: "Noto Sans JP", weight: 400 as const },
  { file: "noto-sans-jp-700.woff", name: "Noto Sans JP", weight: 700 as const },
];

let fontsPromise: Promise<ImageResponseFonts> | null = null;

async function fetchFontViaAssets(file: string): Promise<ArrayBuffer | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = getCloudflareContext();
    const assets = ctx.env.ASSETS;
    if (!assets) return null;
    const res = await assets.fetch(new Request(`http://placeholder/fonts/${file}`));
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

async function fetchFontViaFs(file: string): Promise<ArrayBuffer | null> {
  try {
    const { readFile } = await import("node:fs/promises");
    const { join } = await import("node:path");
    const buffer = await readFile(join(process.cwd(), "public/fonts", file));
    return buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    ) as ArrayBuffer;
  } catch {
    return null;
  }
}

async function fetchFontViaHttp(file: string): Promise<ArrayBuffer> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";
  const res = await fetch(`${baseUrl}/fonts/${file}`);
  if (!res.ok) throw new Error(`Failed to fetch font ${file}: ${res.status}`);
  return await res.arrayBuffer();
}

async function fetchFont(file: string): Promise<ArrayBuffer> {
  const fromAssets = await fetchFontViaAssets(file);
  if (fromAssets) return fromAssets;
  const fromFs = await fetchFontViaFs(file);
  if (fromFs) return fromFs;
  return await fetchFontViaHttp(file);
}

export function loadOgpFonts(): Promise<ImageResponseFonts> {
  if (fontsPromise) return fontsPromise;
  fontsPromise = Promise.all(
    FONT_FILES.map(async ({ file, name, weight }) => {
      const data = await fetchFont(file);
      return { name, data, weight, style: "normal" as const };
    }),
  );
  return fontsPromise;
}
