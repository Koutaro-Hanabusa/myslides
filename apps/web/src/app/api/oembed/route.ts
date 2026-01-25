import { type NextRequest, NextResponse } from "next/server";
import { getSlideBySlug, getAllSlideSlugs } from "@/config/slides";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://slides.burio.dev";
const PROVIDER_NAME = "mySlides";
const PROVIDER_URL = BASE_URL;

// デフォルトの埋め込みサイズ
const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 450; // 16:9 アスペクト比

interface OEmbedResponse {
  type: "rich";
  version: "1.0";
  title: string;
  author_name: string;
  author_url?: string;
  provider_name: string;
  provider_url: string;
  cache_age?: number;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
  html: string;
  width: number;
  height: number;
}

interface OEmbedError {
  error: string;
  error_description: string;
}

/**
 * URLからスライドのslugを抽出
 * 対応パターン:
 * - https://slides.burio.dev/better-t-stack
 * - https://slides.burio.dev/embed/better-t-stack
 */
function extractSlugFromUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname;

    // /embed/[slug] パターン
    const embedMatch = pathname.match(/^\/embed\/([^\/]+)\/?$/);
    if (embedMatch) {
      return embedMatch[1];
    }

    // /[slug] パターン（トップレベル）
    const slugMatch = pathname.match(/^\/([^\/]+)\/?$/);
    if (slugMatch) {
      const slug = slugMatch[1];
      // 既知のスライドslugかチェック
      if (getAllSlideSlugs().includes(slug)) {
        return slug;
      }
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * oEmbed API エンドポイント
 * GET /api/oembed?url=https://slides.burio.dev/better-t-stack
 */
export async function GET(request: NextRequest): Promise<NextResponse<OEmbedResponse | OEmbedError>> {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");
  const format = searchParams.get("format") || "json";
  const maxWidth = Math.min(
    Number.parseInt(searchParams.get("maxwidth") || String(DEFAULT_WIDTH), 10),
    1920
  );
  const maxHeight = Math.min(
    Number.parseInt(searchParams.get("maxheight") || String(DEFAULT_HEIGHT), 10),
    1080
  );

  // URLパラメータが必要
  if (!url) {
    return NextResponse.json(
      {
        error: "missing_url",
        error_description: "The 'url' parameter is required",
      },
      { status: 400 }
    );
  }

  // JSONフォーマットのみサポート
  if (format !== "json") {
    return NextResponse.json(
      {
        error: "unsupported_format",
        error_description: "Only 'json' format is supported",
      },
      { status: 501 }
    );
  }

  // URLからslugを抽出
  const slug = extractSlugFromUrl(url);
  if (!slug) {
    return NextResponse.json(
      {
        error: "not_found",
        error_description: "The requested URL is not a valid slide URL",
      },
      { status: 404 }
    );
  }

  // スライドメタデータを取得
  const slide = getSlideBySlug(slug);
  if (!slide) {
    return NextResponse.json(
      {
        error: "not_found",
        error_description: "Slide not found",
      },
      { status: 404 }
    );
  }

  // アスペクト比を維持しながらサイズを計算
  const aspectRatio = 16 / 9;
  let width = maxWidth;
  let height = Math.round(maxWidth / aspectRatio);

  if (height > maxHeight) {
    height = maxHeight;
    width = Math.round(maxHeight * aspectRatio);
  }

  // 埋め込み用HTML
  const embedUrl = `${BASE_URL}/embed/${slug}`;
  const html = `<iframe src="${embedUrl}" width="${width}" height="${height}" frameborder="0" allowfullscreen allow="fullscreen"></iframe>`;

  // サムネイルURL（OGP画像）
  const thumbnailUrl = `${BASE_URL}/${slug}/opengraph-image`;

  const response: OEmbedResponse = {
    type: "rich",
    version: "1.0",
    title: slide.title,
    author_name: slide.author,
    author_url: slide.authorUrl,
    provider_name: PROVIDER_NAME,
    provider_url: PROVIDER_URL,
    cache_age: 86400, // 24時間キャッシュ
    thumbnail_url: thumbnailUrl,
    thumbnail_width: 1200,
    thumbnail_height: 630,
    html,
    width,
    height,
  };

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

/**
 * CORS preflight対応
 */
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
