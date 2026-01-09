"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const TEMPLATE_PATH = "外部登壇資料テンプレ";
const BG_CONTENT = `${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_本文.png`;

export default function PresentationPage() {
	return (
		<div className="h-full w-full">
			<RevealPresentation transition="slide">
				<Cover />
				<section
					data-markdown="/slides/karabiner/slides.md"
					data-separator="^\n---\n$"
					data-separator-vertical="^\n--\n$"
					data-background-image={BG_CONTENT}
					data-background-size="contain"
				/>
			</RevealPresentation>
		</div>
	);
}
