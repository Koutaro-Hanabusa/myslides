import type { Metadata } from "next";

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

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
