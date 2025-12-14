"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Content from "../revealjs-slideDeck/slides/content";
import Cover from "../revealjs-slideDeck/slides/cover";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export default function PresentationPage() {
	return (
		<div className="h-full w-full">
			<RevealPresentation transition="slide">
				<section
					data-markdown="/slides/tacotuesday/slides.md"
					data-separator="^\n---\n$"
					data-separator-vertical="^\n--\n$"
				/>
				<section
					data-background-image={`${R2_BASE}/burioSlide/content.png`}
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
				<Cover />
				<Content />
			</RevealPresentation>
		</div>
	);
}
