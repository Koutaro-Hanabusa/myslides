import type { ReactNode } from "react";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const TEMPLATE_PATH = "外部登壇資料テンプレ";

export const BG_HEADING = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_見出し.png`;
export const BG_CONTENT = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_本文.png`;

interface HeadingSlideProps {
	children: ReactNode;
}

/** 見出しスライド - 大きなタイトル用 */
export function HeadingSlide({ children }: HeadingSlideProps) {
	return (
		<section data-background-image={BG_HEADING} data-background-size="contain">
			<div className="flex h-full items-center justify-center">
				<h1 className="text-center">{children}</h1>
			</div>
		</section>
	);
}

interface ContentSlideProps {
	title?: string;
	children: ReactNode;
}

/** コンテンツスライド - 本文用 */
export function ContentSlide({ title, children }: ContentSlideProps) {
	return (
		<section data-background-image={BG_CONTENT} data-background-size="contain">
			<div className="flex h-full flex-col justify-center">
				{title && <h2 className="text-left text-black">{title}</h2>}
				<div className="text-left text-black">{children}</div>
			</div>
		</section>
	);
}

interface ListItemProps {
	children: ReactNode;
}

/** リストアイテム */
export function Li({ children }: ListItemProps) {
	return <li>{children}</li>;
}

interface CodeBlockProps {
	children: string;
	language?: string;
}

/** コードブロック */
export function Code({ children, language = "json" }: CodeBlockProps) {
	return (
		<pre className="rounded-lg bg-gray-900 p-4 text-left">
			<code className={`language-${language}`}>{children}</code>
		</pre>
	);
}
