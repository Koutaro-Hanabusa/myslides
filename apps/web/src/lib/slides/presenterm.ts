import { SLIDES_CONFIG, type SlideConfig } from "./config";

/**
 * MDX のスライドコンポーネントをパースして presenterm 形式のマークダウンに変換する
 */
function parseMdxToPresenterm(
	mdxContent: string,
	config: SlideConfig,
): string {
	const slides: string[] = [];

	// フロントマター生成
	const frontMatter = [
		"---",
		`title: "${config.title}"`,
		`sub_title: "${config.event || ""}"`,
		`author: "${config.author}"`,
		`date: "${config.date}"`,
		"options:",
		"  end_slide_shorthand: false",
		"---",
	].join("\n");

	slides.push(frontMatter);

	// import文を除去
	const contentWithoutImports = mdxContent
		.replace(/^import\s+.*$/gm, "")
		.trim();

	// 各スライドコンポーネントをパース
	const slidePatterns = [
		// CorporatePhilosophySlide (自己完結型)
		{
			regex: /<CorporatePhilosophySlide\s*\/>/g,
			handler: () => "<!-- jump_to_middle -->\n\n企業理念\n===",
		},
		// BusinessContentSlide (自己完結型)
		{
			regex: /<BusinessContentSlide\s*\/>/g,
			handler: () => "<!-- jump_to_middle -->\n\n事業内容\n===",
		},
		// BackCoverSlide (自己完結型)
		{
			regex: /<BackCoverSlide\s*\/>/g,
			handler: () =>
				"<!-- jump_to_middle -->\n\nThank you!\n===\n\nWe are hiring!",
		},
	];

	// コンポーネントをプレースホルダーに変換
	let processed = contentWithoutImports;

	// 自己完結型コンポーネントの変換
	for (const pattern of slidePatterns) {
		processed = processed.replace(pattern.regex, () => {
			const content = pattern.handler();
			return `___SLIDE_BREAK___${content}`;
		});
	}

	// SelfIntroduction コンポーネント
	processed = processed.replace(
		/<SelfIntroduction>([\s\S]*?)<\/SelfIntroduction>/g,
		(_match, content: string) => {
			const cleanContent = cleanMdxContent(content);
			return `___SLIDE_BREAK___## 自己紹介\n\n${cleanContent}`;
		},
	);

	// HeadingSlide コンポーネント
	processed = processed.replace(
		/<HeadingSlide>([\s\S]*?)<\/HeadingSlide>/g,
		(_match, content: string) => {
			const cleanContent = cleanMdxContent(content);
			return `___SLIDE_BREAK___<!-- jump_to_middle -->\n\n# ${cleanContent.trim()}`;
		},
	);

	// ContentSlide with title
	processed = processed.replace(
		/<ContentSlide\s+title="([^"]*)">([\s\S]*?)<\/ContentSlide>/g,
		(_match, title: string, content: string) => {
			const cleanContent = cleanMdxContent(content);
			return `___SLIDE_BREAK___## ${title}\n\n${cleanContent}`;
		},
	);

	// ContentSlide without title
	processed = processed.replace(
		/<ContentSlide>([\s\S]*?)<\/ContentSlide>/g,
		(_match, content: string) => {
			const cleanContent = cleanMdxContent(content);
			return `___SLIDE_BREAK___${cleanContent}`;
		},
	);

	// スライドを分割して整形
	const rawSlides = processed
		.split("___SLIDE_BREAK___")
		.map((s) => s.trim())
		.filter((s) => s.length > 0);

	for (const slide of rawSlides) {
		slides.push(slide);
	}

	return slides.join("\n\n<!-- end_slide -->\n\n");
}

/**
 * MDX のコンテンツからJSX/HTMLタグを除去してクリーンなマークダウンにする
 */
function cleanMdxContent(content: string): string {
	let cleaned = content;

	// JSX式 {"text"} をテキストに変換
	cleaned = cleaned.replace(/\{"([^"]*?)"\}/g, "$1");
	cleaned = cleaned.replace(/\{`([^`]*?)`\}/g, "$1");

	// JSX式でのテンプレートリテラル内の改行を処理
	cleaned = cleaned.replace(/\\n/g, "\n");

	// div, img, br などのHTML/JSXタグを処理
	cleaned = cleaned.replace(/<br\s*\/?>/g, "\n");
	cleaned = cleaned.replace(/<del>(.*?)<\/del>/g, "~~$1~~");
	cleaned = cleaned.replace(
		/<a\s+href="([^"]*)">(.*?)<\/a>/g,
		"[$2]($1)",
	);

	// img タグをマークダウン画像に変換
	cleaned = cleaned.replace(
		/<img\s+src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/g,
		"![$2]($1)",
	);

	// div タグを除去（className等のJSX属性も含む）
	cleaned = cleaned.replace(/<div[^>]*>/g, "");
	cleaned = cleaned.replace(/<\/div>/g, "");

	// その他のJSXタグを除去
	cleaned = cleaned.replace(/<[^>]+>/g, "");

	// 連続する空行を整理
	cleaned = cleaned.replace(/\n{3,}/g, "\n\n");

	return cleaned.trim();
}

/**
 * Reveal.js のマークダウンスライドを presenterm 形式に変換する
 */
function parseRevealMarkdownToPresenterm(
	markdownContent: string,
	config: SlideConfig,
): string {
	const frontMatter = [
		"---",
		`title: "${config.title}"`,
		`sub_title: "${config.event || ""}"`,
		`author: "${config.author}"`,
		`date: "${config.date}"`,
		"options:",
		"  end_slide_shorthand: false",
		"---",
	].join("\n");

	// Reveal.js のHTMLコメントを除去
	let cleaned = markdownContent.replace(
		/<!-- \.slide:.*?-->/g,
		"",
	);
	cleaned = cleaned.replace(/<!-- \.element:.*?-->/g, "");

	// --- セパレータを <!-- end_slide --> に変換
	const rawSlides = cleaned.split(/^\n*---\n*$/m);

	const slides = rawSlides
		.map((slide) => slide.trim())
		.filter((slide) => slide.length > 0);

	return `${frontMatter}\n\n${slides.join("\n\n<!-- end_slide -->\n\n")}`;
}

/**
 * スライドのslugからpresenterm形式のマークダウンを生成する
 */
export async function generatePresentermMarkdown(
	slug: string,
): Promise<string | null> {
	const config = SLIDES_CONFIG[slug];
	if (!config) {
		return null;
	}

	// MDX ベースのスライド
	const mdxSlugs = ["25-graduate", "you-must-have-dotfiles"];
	if (mdxSlugs.includes(slug)) {
		try {
			const fs = await import("node:fs/promises");
			const path = await import("node:path");
			const mdxPath = path.join(
				process.cwd(),
				"src",
				"app",
				slug,
				"slides.mdx",
			);
			const content = await fs.readFile(mdxPath, "utf-8");
			return parseMdxToPresenterm(content, config);
		} catch {
			return null;
		}
	}

	// Reveal.js マークダウンベースのスライド
	if (slug === "tacotuesday") {
		try {
			const fs = await import("node:fs/promises");
			const path = await import("node:path");
			const mdPath = path.join(
				process.cwd(),
				"public",
				"slides",
				"tacotuesday",
				"slides.md",
			);
			const content = await fs.readFile(mdPath, "utf-8");
			return parseRevealMarkdownToPresenterm(content, config);
		} catch {
			return null;
		}
	}

	// コンポーネントベースのスライド（メタ情報のみ）
	return generateMetaOnlyPresenterm(config);
}

/**
 * コンポーネントベースのスライドのメタ情報のみのpresentermマークダウンを生成
 */
function generateMetaOnlyPresenterm(config: SlideConfig): string {
	const lines = [
		"---",
		`title: "${config.title}"`,
		`sub_title: "${config.event || ""}"`,
		`author: "${config.author}"`,
		`date: "${config.date}"`,
		"options:",
		"  end_slide_shorthand: false",
		"---",
		"",
		"<!-- jump_to_middle -->",
		"",
		`# ${config.title}`,
		"",
		`> このスライドはReactコンポーネントで構成されています。`,
		`> 完全な内容は ${config.eventUrl || `https://slide.burio16.com/${config.slug}`} でご覧ください。`,
		"",
		`**Author:** ${config.author}`,
		`**Date:** ${config.date}`,
		config.event ? `**Event:** ${config.event}` : "",
	];

	return lines.filter(Boolean).join("\n");
}

/**
 * 全スライドの一覧をpresenterm形式で返す
 */
export function generateSlideIndex(): string {
	const configs = Object.values(SLIDES_CONFIG);

	const lines = [
		"---",
		'title: "mySlides - スライド一覧"',
		'author: "ぶりお"',
		"options:",
		"  end_slide_shorthand: false",
		"---",
		"",
		"# mySlides - スライド一覧",
		"",
	];

	for (const config of configs) {
		lines.push(`## ${config.title}`);
		lines.push("");
		lines.push(`- **Author:** ${config.author}`);
		lines.push(`- **Date:** ${config.date}`);
		if (config.event) {
			lines.push(`- **Event:** ${config.event}`);
		}
		lines.push(
			`- **URL:** https://slide.burio16.com/${config.slug}`,
		);
		lines.push(
			`- **Presenterm:** https://slide.burio16.com/api/slides/${config.slug}/presenterm`,
		);
		lines.push("");
		lines.push("<!-- end_slide -->");
		lines.push("");
	}

	return lines.join("\n");
}
