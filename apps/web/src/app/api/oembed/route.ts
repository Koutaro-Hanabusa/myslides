import { type NextRequest, NextResponse } from "next/server";
import { getSlideConfig } from "@/lib/slides/config";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  const format = searchParams.get("format") ?? "json";
  const maxWidth = Number.parseInt(searchParams.get("maxwidth") ?? "800", 10);
  const maxHeight = Number.parseInt(searchParams.get("maxheight") ?? "600", 10);

  if (!url) {
    return NextResponse.json({ error: "url parameter is required" }, { status: 400 });
  }

  if (format !== "json") {
    return NextResponse.json({ error: "Only JSON format is supported" }, { status: 501 });
  }

  // URLからスラグを抽出
  let slug: string;
  try {
    const parsedUrl = new URL(url);
    const pathParts = parsedUrl.pathname.replace(/^\//, "").split("/");
    slug = pathParts[0];
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  // スライドの存在確認
  const slideConfig = getSlideConfig(slug);
  if (!slideConfig) {
    return NextResponse.json({ error: "Slide not found" }, { status: 404 });
  }

  // アスペクト比16:9を維持しながらサイズ計算
  const aspectRatio = 16 / 9;
  let width = Math.min(maxWidth, 800);
  let height = Math.round(width / aspectRatio);
  if (height > maxHeight) {
    height = maxHeight;
    width = Math.round(height * aspectRatio);
  }

  const embedUrl = `${BASE_URL}/embed/${slug}`;
  const thumbnailUrl = `${BASE_URL}/${slug}/opengraph-image`;

  const oembedResponse = {
    version: "1.0",
    type: "rich",
    provider_name: "mySlides",
    provider_url: BASE_URL,
    title: slideConfig.title,
    author_name: slideConfig.author,
    author_url: slideConfig.authorUrl,
    width,
    height,
    thumbnail_url: thumbnailUrl,
    thumbnail_width: 1200,
    thumbnail_height: 630,
    html: `<iframe src="${embedUrl}" width="${width}" height="${height}" frameborder="0" allowfullscreen allow="fullscreen" style="border:none;"></iframe>`,
  };

  return NextResponse.json(oembedResponse, {
    headers: {
      "Content-Type": "application/json+oembed",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
