import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "Sencorp | mySlides",
	description: "Sencorp - A presentation created with mySlides and Reveal.js",
	openGraph: {
		title: "Sencorp",
		description: "Sencorp - A presentation created with mySlides and Reveal.js",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Sencorp",
		description: "Sencorp - A presentation created with mySlides and Reveal.js",
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
		<div
			style={{
				width: "100%",
				height: "100dvh",
				overflow: "hidden",
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
		>
			{children}
		</div>
	);
}
