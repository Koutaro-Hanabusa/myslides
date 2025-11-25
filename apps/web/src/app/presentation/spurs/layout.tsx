import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Welcome to spurs | mySlides",
	description: "Welcome to spurs - A presentation created with mySlides and Reveal.js",
	openGraph: {
		title: "Welcome to spurs",
		description: "Welcome to spurs - A presentation created with mySlides and Reveal.js",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Welcome to spurs",
		description: "Welcome to spurs - A presentation created with mySlides and Reveal.js",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
