import type { Metadata, Viewport } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001";
const SLUG = "react-three-fiber";
const SLIDE_URL = `${BASE_URL}/${SLUG}`;

export const metadata: Metadata = {
	title:
		"WebGL入門 - Three.jsで良さげなプロフィールサイト作ってみた | mySlides",
	description:
		"React Tokyo ミートアップ#11 - WebGL入門 Three.jsで良さげなプロフィールサイト作ってみた by ぶりお",
	openGraph: {
		title: "WebGL入門 - Three.jsで良さげなプロフィールサイト作ってみた",
		description:
			"React Tokyo ミートアップ#11 - WebGL入門 Three.jsで良さげなプロフィールサイト作ってみた by ぶりお",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "WebGL入門 - Three.jsで良さげなプロフィールサイト作ってみた",
		description:
			"React Tokyo ミートアップ#11 - WebGL入門 Three.jsで良さげなプロフィールサイト作ってみた by ぶりお",
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
