import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Welcome to My Slides | mySlides",
	description:
		"Welcome to My Slides - A presentation created with mySlides and Reveal.js",
	openGraph: {
		title: "Welcome to My Slides",
		description:
			"Welcome to My Slides - A presentation created with mySlides and Reveal.js",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Welcome to My Slides",
		description:
			"Welcome to My Slides - A presentation created with mySlides and Reveal.js",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
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
