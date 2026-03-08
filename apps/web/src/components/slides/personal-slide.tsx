import type { ReactNode } from "react";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export const BG_PERSONAL_CONTENT = `${R2_BASE}/burioSlide/content.png`;

interface PersonalHeadingSlideProps {
	children: ReactNode;
}

/** 個人テンプレ - 見出しスライド */
export function PersonalHeadingSlide({ children }: PersonalHeadingSlideProps) {
	return (
		<section
			data-background-image={BG_PERSONAL_CONTENT}
			data-background-size="contain"
		>
			<div className="flex h-full items-center justify-center">
				<h1 className="whitespace-pre-line text-center">{children}</h1>
			</div>
		</section>
	);
}

interface PersonalContentSlideProps {
	title?: string;
	children: ReactNode;
}

/** 個人テンプレ - コンテンツスライド */
export function PersonalContentSlide({
	title,
	children,
}: PersonalContentSlideProps) {
	return (
		<section
			data-background-image={BG_PERSONAL_CONTENT}
			data-background-size="contain"
		>
			<div className="flex h-full flex-col justify-center">
				{title && <h2 className="text-left text-white">{title}</h2>}
				<div className="text-left text-white">{children}</div>
			</div>
		</section>
	);
}
