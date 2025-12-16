"use client";

import RevealPresentation from "@/components/reveal-presentation";
import BackCover from "./slides/back-cover";
import BusinessContent from "./slides/business-content";
import CorporatePhilosophy from "./slides/corporate-philosophy";
import Cover from "./slides/cover";
import SelfIntroduction from "./slides/self-introduction";

// 画像ファイル名の配列を作成（番号なし→1→2→...→31の順）
const imageFiles = [
	"20251114_React_Tokyo.png",
	...Array.from(
		{ length: 31 },
		(_, i) => `20251114_React_Tokyo (${i + 1}).png`,
	),
];

export default function PresentationPage() {
	return (
		<div className="h-full w-full">
			<RevealPresentation transition="slide">
				<Cover />
				<SelfIntroduction />
				<CorporatePhilosophy />
				<BusinessContent />
				{imageFiles.map((filename) => (
					<section
						key={filename}
						data-background-image={`/slides/React-three-fiber/assets/${filename}`}
						data-background-size="contain"
						data-background-color="#000"
					/>
				))}
				<BackCover />
			</RevealPresentation>
		</div>
	);
}
