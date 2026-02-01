"use client";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import RevealPresentation from "@/components/reveal-presentation";

// better-t-stack slides
const BetterTStackCover = dynamic(
	() => import("@/app/better-t-stack/slides/cover"),
);
const BetterTStackSelfIntro = dynamic(
	() => import("@/app/better-t-stack/slides/self-introduction"),
);
const BetterTStackCorporate = dynamic(
	() => import("@/app/better-t-stack/slides/corporate-philosophy"),
);
const BetterTStackBusiness = dynamic(
	() => import("@/app/better-t-stack/slides/business-content"),
);
const BetterTStackContent = dynamic(
	() => import("@/app/better-t-stack/slides/content"),
);
const BetterTStackBackCover = dynamic(
	() => import("@/app/better-t-stack/slides/back-cover"),
);

// react-three-fiber slides
const R3FCover = dynamic(() => import("@/app/react-three-fiber/slides/cover"));
const R3FSelfIntro = dynamic(
	() => import("@/app/react-three-fiber/slides/self-introduction"),
);
const R3FCorporate = dynamic(
	() => import("@/app/react-three-fiber/slides/corporate-philosophy"),
);
const R3FBusiness = dynamic(
	() => import("@/app/react-three-fiber/slides/business-content"),
);
const R3FBackCover = dynamic(
	() => import("@/app/react-three-fiber/slides/back-cover"),
);

// revealjs-slideDeck slides
const RevealCover = dynamic(
	() => import("@/app/revealjs-slideDeck/slides/cover"),
);
const RevealContent = dynamic(
	() => import("@/app/revealjs-slideDeck/slides/content"),
);

// tacotuesday slides
const TacoCover = dynamic(() => import("@/app/tacotuesday/slides/cover"));

// you-must-have-dotfiles slides
const DotfilesCover = dynamic(
	() => import("@/app/you-must-have-dotfiles/slides/cover"),
);
const DotfilesSlidesContent = dynamic(
	() => import("@/app/you-must-have-dotfiles/slides.mdx"),
);

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const BG_CONTENT = `${R2_BASE}/burioSlide/content.png`;

// 画像ファイル名の配列（react-three-fiber用）
const r3fImageFiles = [
	"20251114_React_Tokyo.png",
	...Array.from(
		{ length: 31 },
		(_, i) => `20251114_React_Tokyo (${i + 1}).png`,
	),
];

function BetterTStackSlides() {
	return (
		<>
			<BetterTStackCover />
			<BetterTStackSelfIntro />
			<BetterTStackCorporate />
			<BetterTStackBusiness />
			<BetterTStackContent />
			<BetterTStackBackCover />
		</>
	);
}

function TacotuesdaySlides() {
	return (
		<>
			<TacoCover />
			<section
				data-markdown="/slides/tacotuesday/slides.md"
				data-separator="^\n---\n$"
				data-separator-vertical="^\n--\n$"
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			/>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center text-white">
						というスライドを
						<br />
						reveal.jsを使用して作成しました。
					</h1>
				</div>
			</section>
			<RevealCover />
			<RevealContent />
		</>
	);
}

function ReactThreeFiberSlides() {
	return (
		<>
			<R3FCover />
			<R3FSelfIntro />
			<R3FCorporate />
			<R3FBusiness />
			{r3fImageFiles.map((filename) => (
				<section
					key={filename}
					data-background-image={`/slides/React-three-fiber/assets/${filename}`}
					data-background-size="contain"
					data-background-color="#000"
				/>
			))}
			<R3FBackCover />
		</>
	);
}

function RevealJsSlideDeckSlides() {
	return (
		<>
			<RevealCover />
			<RevealContent />
		</>
	);
}

function YouMustHaveDotfilesSlides() {
	return (
		<>
			<DotfilesCover />
			<DotfilesSlidesContent />
		</>
	);
}

interface SlideViewerProps {
	slug: string;
}

export default function SlideViewer({ slug }: SlideViewerProps) {
	const renderSlides = () => {
		switch (slug) {
			case "better-t-stack":
				return <BetterTStackSlides />;
			case "tacotuesday":
				return <TacotuesdaySlides />;
			case "react-three-fiber":
				return <ReactThreeFiberSlides />;
			case "revealjs-slideDeck":
				return <RevealJsSlideDeckSlides />;
			case "you-must-have-dotfiles":
				return <YouMustHaveDotfilesSlides />;
			default:
				notFound();
		}
	};

	return (
		<div className="h-full w-full">
			<RevealPresentation transition="slide" embedded>
				{renderSlides()}
			</RevealPresentation>
		</div>
	);
}
