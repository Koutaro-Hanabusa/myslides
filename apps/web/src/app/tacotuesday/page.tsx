"use client";

import RevealPresentation from "@/components/reveal-presentation";

export default function PresentationPage() {
	return (
		<div className="h-full w-full">
			<RevealPresentation transition="slide">
				<section
					data-markdown="/slides/tacotuesday/slides.md"
					data-separator="^\n---\n$"
					data-separator-vertical="^\n--\n$"
				/>
			</RevealPresentation>
		</div>
	);
}
