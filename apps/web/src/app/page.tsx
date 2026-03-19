"use client";

import { SlideCard } from "@/components/slides";
import GraduateCover from "./25-graduate/slides/cover";
import Cover from "./better-t-stack/slides/cover";
import VitestCover from "./oss-and-community/slides/cover";
import R3FCover from "./react-three-fiber/slides/cover";
import RevealCover from "./revealjs-slideDeck/slides/cover";
import TacosCover from "./tacotuesday/slides/cover";
import YouMustHaveDotfilesCover from "./you-must-have-dotfiles/slides/cover";
export default function Home() {
	return (
		<div className="mx-auto w-full p-4 md:w-3/4 md:p-8 lg:w-1/2">
			<h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
				Burio's slide deck
			</h1>
			<div className="grid grid-cols-1 gap-4 md:gap-8">
				<SlideCard
					href="/oss-and-community"
					title="実績解除：OSSコントリビュート"
					date="2026/3/23"
					event="社内LT会"
				>
					<VitestCover />
				</SlideCard>

				<SlideCard
					href="/25-graduate"
					title="アウトプット、怖くないですか？"
					date="2026/3/6"
					event="【25卒】新卒のつまずきを糧にしNight"
					url="https://25-graduate.connpass.com/event/382072/"
				>
					<GraduateCover />
				</SlideCard>

				<SlideCard
					href="/you-must-have-dotfiles"
					title="Vim使いでなくてもdotfilesを管理しよう"
					date="2026/1/25"
					event="Yoriai.cafe 二日間限定オープン！ 🍛ホタテカレーと出会いの「寄り合い」"
					url="https://peatix.com/event/4736534"
				>
					<YouMustHaveDotfilesCover />
				</SlideCard>

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
				<SlideCard
					href="/react-three-fiber"
					title="WebGL入門 Three.jsで良さげなプロフィールサイト作ってみた"
					date="2025/11/14"
					event="React Tokyo ミートアップ#11"
					url="https://react-tokyo.connpass.com/event/372887/"
				>
					<R3FCover />
				</SlideCard>
			</div>
		</div>
	);
}
