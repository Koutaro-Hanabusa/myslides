import type { Metadata, Viewport } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";
const SLUG = "oss-and-community";
const SLIDE_URL = `${BASE_URL}/${SLUG}`;

export const metadata: Metadata = {
	title: "実績解除：OSSコントリビュート | 社内LT会",
	description: "社内LT会 での発表資料 - vitestへのOSSコントリビュート体験記",
	openGraph: {
		title: "実績解除：OSSコントリビュート",
		description: "社内LT会 での発表資料 by ぶりお @burio_16",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "実績解除：OSSコントリビュート",
		description: "社内LT会 での発表資料 by ぶりお @burio_16",
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
