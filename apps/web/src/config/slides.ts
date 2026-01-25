/**
 * スライドメタデータの集約設定
 * oEmbed APIと埋め込みページで使用
 */

export interface SlideMetadata {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorUrl?: string;
  event?: string;
  date?: string;
}

export const slides: SlideMetadata[] = [
  {
    slug: "better-t-stack",
    title: "より良い技術スタックでcloudflareにデプロイしよう",
    description:
      "Cloudflare Meet-up Tokyo Vol.9 での発表資料 - better-t-stack を使って Cloudflare にデプロイする方法を紹介します",
    author: "ぶりお",
    authorUrl: "https://x.com/burio_16",
    event: "Cloudflare Meet-up Tokyo Vol.9",
  },
  {
    slug: "react-three-fiber",
    title: "WebGL入門 - Three.jsで良さげなプロフィールサイト作ってみた",
    description:
      "React Tokyo ミートアップ#11 - WebGL入門 Three.jsで良さげなプロフィールサイト作ってみた",
    author: "ぶりお",
    authorUrl: "https://x.com/burio_16",
    event: "React Tokyo ミートアップ#11",
  },
  {
    slug: "tacotuesday",
    title: "全人類タコスを食え",
    description: "タコスの魅力を紹介するプレゼンテーション",
    author: "ぶりお",
    authorUrl: "https://x.com/burio_16",
    event: "社内LT会",
  },
  {
    slug: "you-must-have-dotfiles",
    title: "Vim使いでなくてもdotfilesを管理しよう",
    description:
      "dotfiles管理の重要性と始め方を紹介します",
    author: "ぶりお",
    authorUrl: "https://x.com/burio_16",
    event: "Yoriai.cafe 二日間限定オープン！",
  },
];

/**
 * slugからスライドメタデータを取得
 */
export function getSlideBySlug(slug: string): SlideMetadata | undefined {
  return slides.find((slide) => slide.slug === slug);
}

/**
 * 全スライドのslugリストを取得
 */
export function getAllSlideSlugs(): string[] {
  return slides.map((slide) => slide.slug);
}
