import type { Metadata } from "next";

export interface SlideConfig {
  slug: string;
  /**
   * スライドの正タイトル（唯一の管理元）。
   * 表紙で改行したい位置に `\n` を入れてよい（表紙では `\n` が改行になる）。
   * 一覧カード・メタデータ・OGP では getSlideTitle() で `\n` を除去したフラット版を使う。
   * フラット版で半角空白が要る箇所（英単語の前など）は `\n` の直前に空白を置く。
   */
  title: string;
  description: string;
  author: string;
  authorUrl: string;
  date: string;
  event?: string | string[];
  eventUrl?: string | string[];
}

export function formatEvent(event: string | string[] | undefined): string {
  if (!event) return "";
  return Array.isArray(event) ? event.join(" / ") : event;
}

/** 一覧カード・メタデータ・OGP 用のフラットなタイトル（表紙用の改行 `\n` を除去）。 */
export function getSlideTitle(config: SlideConfig): string {
  return config.title.replace(/\n/g, "");
}

/** 表紙用のタイトル行配列（`\n` で分割）。 */
export function getSlideTitleLines(config: SlideConfig): string[] {
  return config.title.split("\n");
}

export const SLIDES_CONFIG: Record<string, SlideConfig> = {
  "better-t-stack": {
    slug: "better-t-stack",
    title: "より良い技術スタックでcloudflareにデプロイしよう",
    description:
      "Cloudflare Meet-up Tokyo Vol.9 での発表資料 - better-t-stack を使って Cloudflare にデプロイする方法を紹介します",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2025/12/10",
    event: "Cloudflare Meet-up Tokyo Vol.9",
    eventUrl: "https://cfm-cts.connpass.com/event/374413/",
  },
  tacotuesday: {
    slug: "tacotuesday",
    title: "全人類タコスを食え",
    description: "12/15 社内LT会 - タコスの魅力を紹介するプレゼンテーション by ぶりお",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2025/12/15",
    event: "社内LT会",
  },
  "react-three-fiber": {
    slug: "react-three-fiber",
    title: "WebGL入門 - Three.jsで良さげなプロフィールサイト作ってみた",
    description:
      "React Tokyo ミートアップ#11 - WebGL入門 Three.jsで良さげなプロフィールサイト作ってみた by ぶりお",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2025/11/14",
    event: "React Tokyo ミートアップ#11",
    eventUrl: "https://react-tokyo.connpass.com/event/372887/",
  },
  "revealjs-slideDeck": {
    slug: "revealjs-slideDeck",
    title: "自分だけのスライドデッキを作ってみた",
    description: "revealjs-slideDeck - A presentation created with mySlides and Reveal.js",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2025/12/15",
    event: "社内LT会",
  },
  "you-must-have-dotfiles": {
    slug: "you-must-have-dotfiles",
    title: "Vim使いでなくてもdotfilesを管理しよう",
    description:
      "Yoriai.cafe 二日間限定オープン！ での発表資料 - dotfiles管理の重要性と始め方を紹介します",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2026/1/25",
    event: "Yoriai.cafe 二日間限定オープン！",
    eventUrl: "https://peatix.com/event/4736534",
  },
  "25-graduate": {
    slug: "25-graduate",
    title: "アウトプット、怖くないですか？",
    description: "【25卒】新卒のつまずきを糧にしNight での発表資料",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2026/3/6",
    event: "【25卒】新卒のつまずきを糧にしNight",
    eventUrl: "https://25-graduate.connpass.com/event/382072/",
  },
  "oss-and-community": {
    slug: "oss-and-community",
    title: "実績解除：OSSコントリビュート",
    description: "社内LT会 での発表資料 - vitestへのOSSコントリビュート体験記",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2026/3/23",
    event: "社内LT会",
  },
  "oss-and-community-v2": {
    slug: "oss-and-community-v2",
    title: "実績解除：OSSコントリビュート V2",
    description: "OSSコントリビュートとコミュニティ活動についての発表資料 V2",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2026/4/17",
    event: "React Tokyo ミートアップ #15",
    eventUrl: "https://react-tokyo.connpass.com/event/386779/",
  },
  "autofocus-correct-usage": {
    slug: "autofocus-correct-usage",
    title: "autofocusの正しい用法を知っていますか？",
    description:
      "ESLint jsx-a11yのno-autofocusルールをきっかけに学んだ、autofocus属性のアクセシビリティに配慮した正しい使い方",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2026/4/20",
    event: ["社内LT会", "Frontend Conference Nagoya 2026 前夜祭！"],
    eventUrl: ["", "https://stmn.connpass.com/event/390165/"],
  },
  "vite-plus-retro": {
    slug: "vite-plus-retro",
    title: "Vite+を爆速で社内デザインシステムに導入してみた",
    description: "Vite+ を実プロジェクトに採用して感じたメリットと、運用で直面した辛みを振り返る",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2026/06/25",
    event: "TSKaigi 2026事後勉強会",
    eventUrl: "https://smarthr.connpass.com/event/392342/",
  },
  "tanstack-router-dir-structure": {
    slug: "tanstack-router-dir-structure",
    title: "ぼくの考えた最強の \nTanStack Router ディレクトリ構成",
    description:
      "TanStack Router で実際に運用してたどり着いた、スケールするディレクトリ構成のベストプラクティス",
    author: "ぶりお",
    authorUrl: "https://twitter.com/burio_16",
    date: "2026/06/12",
    event: ["TSKaigi2026〜アフターパーティー〜", "TSKaigi Mashup #5 any"],
    eventUrl: [
      "https://every.connpass.com/event/393937/",
      "https://typescript-jpc.connpass.com/event/397059/",
    ],
  },
};

export function getSlideConfig(slug: string): SlideConfig {
  const config = SLIDES_CONFIG[slug];
  if (!config) {
    throw new Error(`Slide config not found for slug: ${slug}`);
  }
  return config;
}

export function getAllSlideSlugs(): string[] {
  return Object.keys(SLIDES_CONFIG);
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";

function getAuthorHandle(authorUrl: string): string {
  return authorUrl.split("/").pop() ?? "";
}

export function createSlideMetadata(slug: string): Metadata {
  const config = getSlideConfig(slug);
  const title = getSlideTitle(config);
  const slideUrl = `${BASE_URL}/${slug}`;
  const handle = getAuthorHandle(config.authorUrl);
  const eventLabel = formatEvent(config.event);
  const ogDescription = eventLabel
    ? `${eventLabel} での発表資料 by ${config.author} @${handle}`
    : config.description;

  const ogpImageUrl = `${BASE_URL}/${slug}/opengraph-image.png`;
  return {
    title: eventLabel ? `${title} | ${eventLabel}` : `${title} | mySlides`,
    description: config.description,
    openGraph: {
      title,
      description: ogDescription,
      type: "website",
      images: [{ url: ogpImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
      images: [ogpImageUrl],
    },
    alternates: {
      types: {
        "application/json+oembed": `${BASE_URL}/api/oembed?url=${encodeURIComponent(slideUrl)}&format=json`,
      },
    },
  };
}

export interface OgpProps {
  alt: string;
  title: string;
  event: string;
  author: string;
}

export function createOgpProps(slug: string): OgpProps {
  const config = getSlideConfig(slug);
  const title = getSlideTitle(config);
  const handle = getAuthorHandle(config.authorUrl);
  return {
    alt: title,
    title,
    event: formatEvent(config.event),
    author: `${config.author} @${handle}`,
  };
}
