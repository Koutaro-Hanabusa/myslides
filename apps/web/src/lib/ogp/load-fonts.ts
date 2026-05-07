// Next.js 公式パターン: opengraph-image 内のフォントは `readFile(join(process.cwd(), ...))` で読む。
// satori (next/og の中身) は ttf / otf / woff をサポート、woff2 は非対応。
// 初回呼び出し時に Promise を生成してメモ化、以降は使い回す。

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ImageResponse } from "next/og";

type ImageResponseFonts = NonNullable<
  NonNullable<ConstructorParameters<typeof ImageResponse>[1]>["fonts"]
>;

const FONTS_DIR = join(process.cwd(), "src/lib/ogp/fonts");

let fontsPromise: Promise<ImageResponseFonts> | null = null;

export function loadOgpFonts(): Promise<ImageResponseFonts> {
  if (fontsPromise) return fontsPromise;
  fontsPromise = (async () => {
    const [sansRegular, sansBold, jpRegular, jpBold] = await Promise.all([
      readFile(join(FONTS_DIR, "source-sans-pro-400.woff")),
      readFile(join(FONTS_DIR, "source-sans-pro-700.woff")),
      readFile(join(FONTS_DIR, "noto-sans-jp-400.woff")),
      readFile(join(FONTS_DIR, "noto-sans-jp-700.woff")),
    ]);
    return [
      { name: "Source Sans Pro", data: sansRegular, weight: 400, style: "normal" },
      { name: "Source Sans Pro", data: sansBold, weight: 700, style: "normal" },
      { name: "Noto Sans JP", data: jpRegular, weight: 400, style: "normal" },
      { name: "Noto Sans JP", data: jpBold, weight: 700, style: "normal" },
    ];
  })();
  return fontsPromise;
}
