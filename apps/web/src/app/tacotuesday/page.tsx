import RevealPresentation from "@/components/reveal-presentation";
import Content from "../revealjs-slideDeck/slides/content";
import RevealCover from "../revealjs-slideDeck/slides/cover";
import TacoCover from "./slides/cover";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const BG_CONTENT = `${R2_BASE}/burioSlide/content.png`;

export default function PresentationPage() {
	return (
		<div className="h-full w-full">
			<RevealPresentation transition="slide">
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
				<Content />
			</RevealPresentation>
		</div>
	);
}
