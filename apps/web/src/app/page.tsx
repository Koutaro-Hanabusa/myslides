"use client";

import Cover from "./better-t-stack/slides/cover";
import RevealCover from "./revealjs-slideDeck/slides/cover";
import SlideCard from "./slide-components/SlideCard";
import TacosCover from "./tacotuesday/slides/cover";
export default function Home() {
	return (
		<div className="mx-auto w-full p-4 md:w-3/4 md:p-8 lg:w-1/2">
			<h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
				Burio's slide deck
			</h1>
			<div className="grid grid-cols-1 gap-4 md:gap-8">
				<SlideCard
					href="/revealjs-slideDeck"
					title="自分だけのスライドデッキを作ってみた"
					date="2025/12/15"
					event="社内LT会"
				>
					<RevealCover />
				</SlideCard>
				<SlideCard
					href="/tacotuesday"
					title="全人類タコスを食え"
					date="2025/12/15"
					event="社内LT会"
				>
					<TacosCover />
				</SlideCard>
				<SlideCard
					href="/better-t-stack"
					title="より良い技術スタックでcloudflareにデプロイしよう"
					date="2025/12/10"
					event="Cloudflare Meet-up Tokyo Vol.9"
					url="https://cfm-cts.connpass.com/event/374413/"
				>
					<Cover />
				</SlideCard>
			</div>
		</div>
	);
}
