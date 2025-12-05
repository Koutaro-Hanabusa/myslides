import Image from "next/image";
import betterTstackImg from "./assets/better-t-stack.png";
import burioImg from "./assets/burio-com.png";

export default function Content() {
	return (
		<>
			{/* 見出しスライド */}
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_見出し.png"
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">
						個人で作成したものを
						<br />
						どこにデプロイしてますか？？
					</h1>
				</div>
			</section>

			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_見出し.png"
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">
						もちろん
						<br />
						Cloudflare Workers/Pagesですよね
					</h1>
				</div>
			</section>
			{/* 本文スライド */}
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_本文.png"
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-center">
					<div className="!text-black text-left">
						私も自分のサイトを
						<br />
						Cloudflareにデプロイしました
					</div>
					<Image src={burioImg} alt="説明" />
				</div>
			</section>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_見出し.png"
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">できたッ！LT完！🫵</h1>
				</div>
			</section>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_裏表紙.png"
				data-background-size="contain"
			/>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_見出し.png"
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">
						ではどんな技術スタックで
						<br />
						デプロイしてますか？
					</h1>
				</div>
			</section>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_本文.png"
				data-background-size="contain"
			>
				{/* biome-ignore lint/performance/noImgElement: reveal.jsのr-stretchクラスにはimg要素が必要 */}
				<img
					src={betterTstackImg.src}
					alt="Better T-Stackのアーキテクチャ図"
					className="r-stretch"
				/>
			</section>
		</>
	);
}
