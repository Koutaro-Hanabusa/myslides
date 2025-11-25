import type { Metadata } from "next";

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

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
