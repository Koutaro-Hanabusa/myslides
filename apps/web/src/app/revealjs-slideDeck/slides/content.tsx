import Image from "next/image";
import burioSlideImg from "./assets/burioSlide.png";
import ogpImg from "./assets/ogp.png";
import pdfExportImg from "./assets/pdfExport.png";
import revealImg from "./assets/reveal.png";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const BG_CONTENT = `${R2_BASE}/burioSlide/content.png`;

export default function Content() {
	return (
		<>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">
						スライド作成して、登壇したら
						<br />
						PDFにして共有するのめんどくさくないですか？
					</h1>
				</div>
			</section>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">
						作成したら、 自動的に
						<br />
						公開されるようになってほしい
					</h1>
				</div>
			</section>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-center">
					<div className="pr-12 text-left text-black">
						<a href="https://burio-slide.dev/">https://burio-slide.dev</a>
						<p className="text-white">
							自分のスライドを公開できる
							<br />
							自分だけのスライドデッキを作りました。
						</p>
					</div>
					<Image src={burioSlideImg} alt="説明" className="w-[50%]" />
				</div>
			</section>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full items-center justify-center">
					<h1 className="text-center">
						自分だけのものって
						<br />
						かっこいいし、イケてるし、クール
						<br />
						じゃないですか？
					</h1>
				</div>
			</section>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-center">
					<div className="flex flex-col pr-12">
						<h2 className="text-left text-white">技術スタック </h2>
						<ul className="text-left text-white">
							<li>
								フロントエンド：<a href="https://ja.react.dev/">React</a>
							</li>
							<li>
								{" "}
								フロントエンド：
								<a href="https://nextjs.org/">Next.js(app router)</a>
							</li>
							<li>
								スライド表示：<a href="https://revealjs.com/">reveal.js</a>
							</li>
							<li>
								デプロイ：
								<a href="https://www.cloudflare.com/ja-jp/developer-platform/products/workers/">
									Cloudflare Workers
								</a>
							</li>
						</ul>
					</div>
					{/* biome-ignore lint/performance/noImgElement: reveal.jsではimg要素が必要 */}
					<img src={revealImg.src} alt="reveal.js" className="w-[50%]" />
				</div>
			</section>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-center">
					<div className="flex flex-col pr-12">
						<h2 className="text-left text-white">できること</h2>
						<ul className="text-left text-white">
							<li>
								Next.js
								<ul>
									<li>スライドごとのOGP画像を設定する</li>
								</ul>
							</li>
							<li>
								Reveal.js
								<ul>
									<li>プレゼンター表示</li>
									<li>フルスクリーン表示</li>
								</ul>
							</li>
							<li>
								Cloudflare
								<ul>
									<li>
										GitHub連携により、Mainブランチ
										<br />
										マージ時に自動デプロイ
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className="r-stack">
						{/* biome-ignore lint/performance/noImgElement: reveal.jsのr-stackクラスにはimg要素が必要 */}
						<img src={ogpImg.src} alt="ogp画像" />
					</div>
				</div>
			</section>
			<section>
				<section
					data-background-image={BG_CONTENT}
					data-background-size="contain"
				>
					<div className="flex flex-row">
						<div className="flex h-full flex-col justify-center">
							<h2 className="text-left text-white">reveal.jsよかった点</h2>
							<ul className="text-white">
								<li>HTMLでもMarkdownでもスライド作成可能</li>
								<li> スライドを縦と横に展開可能</li>
								<li>Googleスライドでできることと同等のことができる</li>
							</ul>
						</div>
						<div className="r-stack">
							<pre className="fragment fade-out" data-fragment-index="0">
								<code className="language-javascript" data-trim data-noescape>
									{`
<section
  data-background-image={BG_CONTENT}
  data-background-size="contain"
>
  <div className="flex h-full flex-col items-center justify-center">
    <h2 className="text-left text-white">reveal.jsよかった点</h2>
    <ul className="text-white">
      <li>HTMLでもMarkdownでもスライド作成可能</li>
      <li>スライドを縦と横に展開可能</li>
      <li>Googleスライドでできることと同等のことができる</li>
    </ul>
  </div>
</section>`}
								</code>
							</pre>
							<pre className="fragment fade-in" data-fragment-index="0">
								<code className="language-markdown" data-trim data-noescape>
									{`
<!-- .slide: style="color: white; text-align: left;" -->

## ぶりおがタコスを好きな理由<!-- .element: style="color: white;" -->

- 肉の種類
- 豊富なトッピング
- お酒との相性

---`}
								</code>
							</pre>
						</div>
					</div>
				</section>
				<section
					data-background-image={BG_CONTENT}
					data-background-size="contain"
				>
					<h1>
						こいつが縦のスライドです。
						<br />
						余談に使いやすい
					</h1>
				</section>
			</section>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-start pl-16">
					<div className="flex flex-col pr-12">
						<h2 className="text-left text-white">reveal.js残念だった点</h2>
						<ul className="text-white">
							<li>PDF出力が動作しない</li>
							<li>Tailwind競合して文字色が変わらなかった</li>
						</ul>
					</div>
					<img src={pdfExportImg.src} alt="ogp画像" className="w-[50%]" />
				</div>
			</section>
			<section
				data-background-image={BG_CONTENT}
				data-background-size="contain"
			>
				<div className="flex h-full flex-row items-center justify-start pl-16">
					<div className="flex flex-col pr-12">
						<h2 className="text-left text-white">まとめ</h2>
						<ul className="text-white">
							<li>
								reveal.jsはスライドをマークダウンやHTMLでかけるだけでなく、
								<br />
								プレゼンのための機能を提供してくれる
							</li>
							<li>作成から登壇、共有まで全てを担えるものを作れる</li>
							<li>自分だけのスライドデッキめちゃくちゃカッコいい！</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
