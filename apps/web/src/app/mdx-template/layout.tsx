import type { Metadata, Viewport } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";
const SLUG = "mdx-template";
const SLIDE_URL = `${BASE_URL}/${SLUG}`;

export const metadata: Metadata = {
	title: "LTタイトル | 社内LT会",
	description: "2026/3/6 社内LT会での発表資料",
	openGraph: {
		title: "LTタイトル",
		description: "社内LT会での発表資料 by ぶりお @burio_16",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "LTタイトル",
		description: "社内LT会での発表資料 by ぶりお @burio_16",
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
