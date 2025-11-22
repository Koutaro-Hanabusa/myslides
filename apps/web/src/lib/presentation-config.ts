/**
 * Presentation configuration types and utilities
 * Used for generating OGP images and metadata
 *
 * This module dynamically discovers presentations from the file system
 * instead of maintaining a hardcoded registry.
 */

import fs from "node:fs";
import path from "node:path";

export interface PresentationConfig {
	/** Presentation title displayed in OGP and metadata */
	title: string;
	/** Description for SEO and social sharing */
	description: string;
	/** Gradient colors for OGP image background [from, to] */
	gradient: [string, string];
	/** Optional author name */
	author?: string;
	/** Optional tags/keywords */
	tags?: string[];
}

/**
 * Default gradient presets for presentations
 */
export const gradientPresets = {
	purple: ["#667eea", "#764ba2"] as [string, string],
	pink: ["#f093fb", "#f5576c"] as [string, string],
	dark: ["#000000", "#434343"] as [string, string],
	blue: ["#4facfe", "#00f2fe"] as [string, string],
	orange: ["#fa709a", "#fee140"] as [string, string],
	green: ["#11998e", "#38ef7d"] as [string, string],
	red: ["#ff416c", "#ff4b2b"] as [string, string],
	teal: ["#0cebeb", "#20e3b2"] as [string, string],
} as const;

const gradientKeys = Object.keys(gradientPresets) as Array<
	keyof typeof gradientPresets
>;

/**
 * Get a deterministic gradient based on slug name
 * Uses a simple hash function to consistently assign gradients
 */
function getGradientForSlug(slug: string): [string, string] {
	let hash = 0;
	for (let i = 0; i < slug.length; i++) {
		const char = slug.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash; // Convert to 32bit integer
	}
	const index = Math.abs(hash) % gradientKeys.length;
	return gradientPresets[gradientKeys[index]];
}

/**
 * Extract title from slide1.tsx file content
 */
function extractTitleFromSlide(content: string): string | null {
	// Extract text from h1, h2, or h3 tags
	const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/);
	const h2Match = content.match(/<h2[^>]*>(.*?)<\/h2>/);
	const h3Match = content.match(/<h3[^>]*>(.*?)<\/h3>/);
	const titleMatch = h1Match || h2Match || h3Match;
	return titleMatch ? titleMatch[1] : null;
}

/**
 * Get the presentation directory path
 */
function getPresentationDir(): string {
	return path.join(process.cwd(), "src/app/presentation");
}

/**
 * Check if a directory is a valid presentation (has page.tsx)
 */
async function isValidPresentation(dirPath: string): Promise<boolean> {
	const pagePath = path.join(dirPath, "page.tsx");
	try {
		await fs.promises.access(pagePath);
		return true;
	} catch {
		return false;
	}
}

/**
 * Get presentation config by slug (dynamic file system lookup)
 */
export async function getPresentationConfig(
	slug: string,
): Promise<PresentationConfig | null> {
	const presentationDir = getPresentationDir();
	const targetDir = path.join(presentationDir, slug);

	// Check if this is a valid presentation directory
	if (!(await isValidPresentation(targetDir))) {
		return null;
	}

	// Extract title from slide1.tsx
	let title = slug.charAt(0).toUpperCase() + slug.slice(1);
	const slide1Path = path.join(targetDir, "slides/slide1.tsx");

	try {
		const slide1Content = await fs.promises.readFile(slide1Path, "utf-8");
		const extractedTitle = extractTitleFromSlide(slide1Content);
		if (extractedTitle) {
			title = extractedTitle;
		}
	} catch {
		// If slide1.tsx doesn't exist, use capitalized directory name
	}

	return {
		title,
		description: `${title} - A presentation created with mySlides and Reveal.js`,
		gradient: getGradientForSlug(slug),
	};
}

/**
 * Get all presentation slugs (dynamic file system discovery)
 */
export async function getAllPresentationSlugs(): Promise<string[]> {
	const presentationDir = getPresentationDir();

	try {
		const entries = await fs.promises.readdir(presentationDir, {
			withFileTypes: true,
		});

		const slugs = await Promise.all(
			entries
				.filter((entry) => entry.isDirectory())
				.map(async (entry) => {
					const dirPath = path.join(presentationDir, entry.name);
					const isValid = await isValidPresentation(dirPath);
					return isValid ? entry.name : null;
				}),
		);

		return slugs.filter((slug): slug is string => slug !== null);
	} catch {
		return [];
	}
}

/**
 * Get all presentation configs (for listing pages, sitemaps, etc.)
 */
export async function getAllPresentationConfigs(): Promise<
	Array<{ slug: string; config: PresentationConfig }>
> {
	const slugs = await getAllPresentationSlugs();

	const configs = await Promise.all(
		slugs.map(async (slug) => {
			const config = await getPresentationConfig(slug);
			return config ? { slug, config } : null;
		}),
	);

	return configs.filter(
		(item): item is { slug: string; config: PresentationConfig } =>
			item !== null,
	);
}
