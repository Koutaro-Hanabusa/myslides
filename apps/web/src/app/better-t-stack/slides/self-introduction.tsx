import burioImg from "./assets/burio.png";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export default function SelfIntroduction() {
	return (
		<section
			data-background-image={`${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_本文.png`}
			data-background-size="contain"
		>
			<div className="flex h-full flex-row flex-row items-center justify-evenly">
				<img src={burioImg.src} alt="ぶりおの写真" className="r-stretch" />

				<div className="flex flex-col">
					<h2 className="text-black">自己紹介</h2>

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
