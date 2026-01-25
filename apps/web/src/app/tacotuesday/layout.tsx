import type { Metadata, Viewport } from "next";
import { getOEmbedMetadata } from "@/lib/oembed";

const SLUG = "tacotuesday";
const oembedMeta = getOEmbedMetadata(SLUG);

export const metadata: Metadata = {
	title: "全人類タコスを食え | mySlides",
	description:
		"12/15 社内LT会 - タコスの魅力を紹介するプレゼンテーション by ぶりお",
	openGraph: {
		title: "全人類タコスを食え",
		description:
			"12/15 社内LT会 - タコスの魅力を紹介するプレゼンテーション by ぶりお",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "全人類タコスを食え",
		description:
			"12/15 社内LT会 - タコスの魅力を紹介するプレゼンテーション by ぶりお",
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
