import type { Metadata, Viewport } from "next";
import { getOEmbedMetadata } from "@/lib/oembed";

const SLUG = "better-t-stack";
const oembedMeta = getOEmbedMetadata(SLUG);

export const metadata: Metadata = {
	title:
		"より良い技術スタックでcloudflareにデプロイしよう | Cloudflare Meet-up Tokyo Vol.9",
	description:
		"Cloudflare Meet-up Tokyo Vol.9 での発表資料 - better-t-stack を使って Cloudflare にデプロイする方法を紹介します",
	openGraph: {
		title: "より良い技術スタックでcloudflareにデプロイしよう",
		description:
			"Cloudflare Meet-up Tokyo Vol.9 での発表資料 by ぶりお @burio_16",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "より良い技術スタックでcloudflareにデプロイしよう",
		description:
			"Cloudflare Meet-up Tokyo Vol.9 での発表資料 by ぶりお @burio_16",
	},
	...oembedMeta,
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
