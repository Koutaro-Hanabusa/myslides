import type { Metadata } from "next";
import {
	getPresentationConfig,
	type PresentationConfig,
} from "./presentation-config";

/**
 * Generate metadata for a presentation page
 * @param slug - The presentation slug (e.g., "sample", "tacos")
 * @param baseUrl - The base URL for OGP image (optional, uses relative path if not provided)
 */
export async function generatePresentationMetadata(
	slug: string,
	baseUrl?: string,
): Promise<Metadata> {
	const config = await getPresentationConfig(slug);

	if (!config) {
		return {
			title: "Presentation | mySlides",
			description: "A presentation created with mySlides",
		};
	}

	const ogImageUrl = baseUrl ? `${baseUrl}/api/og/${slug}` : `/api/og/${slug}`;

	return {
		title: `${config.title} | mySlides`,
		description: config.description,
		keywords: config.tags,
		authors: config.author ? [{ name: config.author }] : undefined,
		openGraph: {
			title: config.title,
			description: config.description,
			type: "website",
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: config.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: config.title,
			description: config.description,
			images: [ogImageUrl],
		},
	};
}

/**
 * Create a metadata generator function for a specific presentation
 * Use this in each presentation's layout.tsx generateMetadata function
 */
export function createPresentationMetadata(slug: string): Promise<Metadata> {
	return generatePresentationMetadata(slug);
}
