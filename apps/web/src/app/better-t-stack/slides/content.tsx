import Image from "next/image";
import betterTstackImg from "./assets/better-t-stack.png";
import burioImg from "./assets/burio-com.png";
import vercelImg from "./assets/vercel.png";
import cliBuilderImg from "./assets/スクリーンショット 2025-12-05 21.04.30.png";
import webBuilderImg from "./assets/スクリーンショット 2025-12-05 21.06.19.png";

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
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_見出し.png"
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">
						ライブラリいちいち入れて
						<br />
						設定するのめんどくさくないですか？
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
					alt="Better T-Stackのトップ画面"
					className="r-stretch"
				/>
			</section>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_本文.png"
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-center">
					<div className="flex flex-col">
						<h2 className="!text-black text-left">Better T Stack</h2>

						<div className="!text-black text-left">
							TypeScriptを使用して開発するためのプロジェクトビルダー
						</div>
						<ul className="!text-black text-left">
							<li> Webでの選択形式</li>
							<li> CLIでの対話形式</li>
						</ul>
					</div>

					<div className="r-stack">
						{/* biome-ignore lint/performance/noImgElement: reveal.jsのr-stackクラスにはimg要素が必要 */}
						<img
							src={webBuilderImg.src}
							className="fragment fade-out"
							data-fragment-index="0"
							alt="Web Builder"
						/>
						{/* biome-ignore lint/performance/noImgElement: reveal.jsのr-stackクラスにはimg要素が必要 */}
						<img
							src={cliBuilderImg.src}
							className="fragment fade-in"
							data-fragment-index="0"
							alt="CLI Builder"
						/>
					</div>
				</div>
			</section>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_本文.png"
				data-background-size="contain"
			>
				<div className="flex h-full flex-col justify-center">
					<h2 className="!text-black text-left">
						Better T Stack使ってみて良かったところ
					</h2>
					<ul className="!text-black text-left">
						<li>一発で環境構築完了</li>
						<li>選択肢が多く新たな出会いがある</li>
						<li>オプションが優秀</li>
					</ul>
				</div>
			</section>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_本文.png"
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-center">
					<h2 className="!text-black text-left">
						Better T Stack使ってみて残念だったところ
					</h2>
				</div>
			</section>
			<section
				data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_本文.png"
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-center">
					<div className="!text-black text-left">
						vercelのOSS支援プログラムに選ばれていました🔥
					</div>
					<img
						src={vercelImg.src}
						alt="vercelの支援プログラム"
						className="r-stretch"
					/>{" "}
				</div>
			</section>
		</>
	);
}
