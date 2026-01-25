/**
 * oEmbed関連のユーティリティ
 */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://slides.burio.dev";

/**
 * oEmbed discovery用のリンクタグを生成するためのメタデータを返す
 */
export function getOEmbedMetadata(slug: string) {
  const slideUrl = `${BASE_URL}/${slug}`;
  const oembedUrl = `${BASE_URL}/api/oembed?url=${encodeURIComponent(slideUrl)}&format=json`;

  return {
    alternates: {
      types: {
        "application/json+oembed": oembedUrl,
      },
    },
  };
}

/**
 * oEmbed APIのURLを生成
 */
export function getOEmbedApiUrl(slideUrl: string): string {
  return `${BASE_URL}/api/oembed?url=${encodeURIComponent(slideUrl)}&format=json`;
}
