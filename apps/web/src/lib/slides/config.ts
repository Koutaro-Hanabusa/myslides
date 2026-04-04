import type { Metadata } from "next";

export interface SlideConfig {
	slug: string;
	title: string;
	description: string;
	author: string;
	authorUrl: string;
	date: string;
	event?: string;
	eventUrl?: string;
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
		description:
			"12/15 社内LT会 - タコスの魅力を紹介するプレゼンテーション by ぶりお",
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
		description:
			"revealjs-slideDeck - A presentation created with mySlides and Reveal.js",
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
	const slideUrl = `${BASE_URL}/${slug}`;
	const handle = getAuthorHandle(config.authorUrl);
	const ogDescription = config.event
		? `${config.event} での発表資料 by ${config.author} @${handle}`
		: config.description;

	return {
		title: config.event
			? `${config.title} | ${config.event}`
			: `${config.title} | mySlides`,
		description: config.description,
		openGraph: {
			title: config.title,
			description: ogDescription,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: config.title,
			description: ogDescription,
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
	const handle = getAuthorHandle(config.authorUrl);
	return {
		alt: config.title,
		title: config.title,
		event: config.event ?? "",
		author: `${config.author} @${handle}`,
	};
}
