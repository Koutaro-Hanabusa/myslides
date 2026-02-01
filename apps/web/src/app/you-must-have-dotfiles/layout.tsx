import type { Metadata, Viewport } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";
const SLUG = "you-must-have-dotfiles";
const SLIDE_URL = `${BASE_URL}/${SLUG}`;

export const metadata: Metadata = {
	title:
		"Vim使いでなくてもdotfilesを管理しよう | Yoriai.cafe 二日間限定オープン！",
	description:
		"Yoriai.cafe 二日間限定オープン！ 🍛ホタテカレーと出会いの「寄り合い」での発表資料 - dotfiles管理の重要性と始め方を紹介します",
	openGraph: {
		title: "Vim使いでなくてもdotfilesを管理しよう",
		description:
			"Yoriai.cafe 二日間限定オープン！ での発表資料 by ぶりお @burio_16",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Vim使いでなくてもdotfilesを管理しよう",
		description:
			"Yoriai.cafe 二日間限定オープン！ での発表資料 by ぶりお @burio_16",
	},
	alternates: {
		types: {
			"application/json+oembed": `${BASE_URL}/api/oembed?url=${encodeURIComponent(SLIDE_URL)}&format=json`,
		},
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="fixed inset-0 h-dvh w-full overflow-hidden">{children}</div>
	);
}
