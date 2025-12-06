import burioImg from "./assets/burio.png";

export default function SelfIntroduction() {
	return (
		<section
			data-background-image="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_本文.png"
			data-background-size="contain"
		>
			<div className="flex h-full flex-row flex-row items-center justify-evenly">
				<img src={burioImg.src} alt="ぶりおの写真" className="r-stretch" />

				<div className="flex flex-col">
					<h2>自己紹介</h2>

					<ul className="space-y-2 text-left text-black md:space-y-4 lg:space-y-6">
						<li>
							ぶりお <a href="https://x.com/burio_16">@burio_16</a>
						</li>
						<li>千株式会社システム開発部(25卒)</li>
						<li>社内向け管理画面を開発</li>
						<li>タコスとTottenham Hotspur FCが大好き</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
