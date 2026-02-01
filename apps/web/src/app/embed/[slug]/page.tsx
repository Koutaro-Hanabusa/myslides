import { notFound } from "next/navigation";
import { getAllSlideSlugs, getSlideConfig } from "@/lib/slides/config";
import SlideViewer from "./slide-viewer";

interface Props {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	return getAllSlideSlugs().map((slug) => ({ slug }));
}

export default async function EmbedPage({ params }: Props) {
	const { slug } = await params;

	const slideConfig = getSlideConfig(slug);
	if (!slideConfig) {
		notFound();
	}

	return <SlideViewer slug={slug} />;
}
