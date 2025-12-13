"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Content from "../revealjs-slideDeck/slides/content";
import Cover from "../revealjs-slideDeck/slides/cover";

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
					data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/burioSlide/content.png"
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
