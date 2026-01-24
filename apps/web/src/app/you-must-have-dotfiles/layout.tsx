import type { Metadata, Viewport } from "next";

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
