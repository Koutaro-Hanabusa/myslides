import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "buri | mySlides",
	description: "buri - A presentation created with mySlides and Reveal.js",
	openGraph: {
		title: "buri",
		description: "buri - A presentation created with mySlides and Reveal.js",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "buri",
		description: "buri - A presentation created with mySlides and Reveal.js",
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
