---
theme: "none"
title: "revealjs-slideDeck"
layout: "migrated"
canvasWidth: 1920
aspectRatio: "16/9"
routerMode: "hash"
wakeLock: false
preloadImages: false
transition: "slide-left"
download: false
drawings: { "enabled": false }
fonts: { "sans": "Source Sans Pro, Helvetica, sans-serif", "mono": "monospace", "provider": "none" }
defaults: { "layout": "migrated" }
highlighter: "shiki"
background: "/slides/templates/4830e1037835.png"
legacyHash: "0/0"
---

<div class="slide-body"><div class="text-left"><h3>社内LT会</h3><br><h1 class="leading-tight">自分だけの<br>スライドデッキを作ってみた</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">スライド作成して、登壇したら<br>PDFにして共有するのめんどくさくないですか？</h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">作成したら、 自動的に<br>公開されるようになってほしい</h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center"><div class="pr-12 text-left text-black"><a href="https://slide.burio16.com/">https://slide.burio16.com</a><p class="text-white">自分のスライドを公開できる<br>自分だけのスライドデッキを作りました。</p></div><img :src="'/slides/migrated-assets/burioSlide.png'" alt="説明" class="w-[50%]"></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">自分だけのものって<br>かっこいいし、イケてるし、クール<br>じゃないですか？</h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center"><div class="flex flex-col pr-12"><h2 class="text-left text-white">技術スタック </h2><ul class="text-left text-white"><li>フロントエンド：<a href="https://ja.react.dev/">React</a></li><li> フロントエンド：<a href="https://nextjs.org/">Next.js(app router)</a></li><li>スライド表示：<a href="https://revealjs.com/">reveal.js</a></li><li>デプロイ：<a href="https://www.cloudflare.com/ja-jp/developer-platform/products/workers/">Cloudflare Workers</a></li></ul></div><img :src="'/slides/migrated-assets/reveal.png'" alt="reveal.js" class="w-[50%]"></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center"><div class="flex flex-col pr-12"><h2 class="text-left text-white">できること</h2><ul class="text-left text-white"><li>Next.js<ul><li>スライドごとのOGP画像を設定する</li></ul></li><li>Reveal.js<ul><li>プレゼンター表示</li><li>フルスクリーン表示</li></ul></li><li>Cloudflare<ul><li>GitHub連携により、Mainブランチ<br>マージ時に自動デプロイ</li></ul></li></ul></div><div class="r-stack"><img :src="'/slides/migrated-assets/ogp.png'" alt="ogp画像"></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex flex-row"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">reveal.jsよかった点</h2><ul class="text-white"><li>HTMLでもMarkdownでもスライド作成可能</li><li> スライドを縦と横に展開可能</li><li>Googleスライドでできることと同等のことができる</li></ul></div><div class="r-stack"><pre v-pre class="" data-fragment-index="0" v-click.hide="1"><code class="language-javascript" data-trim="true" data-noescape="true">&#10;&lt;section&#10;  data-background-image={BG_CONTENT}&#10;  data-background-size="contain"&#10;&gt;&#10;  &lt;div className="flex h-full flex-col items-center justify-center"&gt;&#10;    &lt;h2 className="text-left text-white"&gt;reveal.jsよかった点&lt;/h2&gt;&#10;    &lt;ul className="text-white"&gt;&#10;      &lt;li&gt;HTMLでもMarkdownでもスライド作成可能&lt;/li&gt;&#10;      &lt;li&gt;スライドを縦と横に展開可能&lt;/li&gt;&#10;      &lt;li&gt;Googleスライドでできることと同等のことができる&lt;/li&gt;&#10;    &lt;/ul&gt;&#10;  &lt;/div&gt;&#10;&lt;/section&gt;</code></pre><pre v-pre class="" data-fragment-index="0" v-click="1"><code class="language-markdown" data-trim="true" data-noescape="true">&#10;&lt;!-- .slide: style="color: white; text-align: left;" --&gt;&#10;&#10;## ぶりおがタコスを好きな理由&lt;!-- .element: style="color: white;" --&gt;&#10;&#10;- 肉の種類&#10;- 豊富なトッピング&#10;- お酒との相性&#10;&#10;---</code></pre></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/1"
---

<div class="slide-body"><h1>こいつが縦のスライドです。<br>余談に使いやすい</h1></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-start pl-16"><div class="flex flex-col pr-12"><h2 class="text-left text-white">reveal.js残念だった点</h2><ul class="text-white"><li>PDF出力が動作しない</li><li>Tailwind競合して文字色が変わらなかった</li></ul></div><img :src="'/slides/migrated-assets/pdfExport.png'" alt="ogp画像" class="w-[50%]"></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-start pl-16"><div class="flex flex-col pr-12"><h2 class="text-left text-white">まとめ</h2><ul class="text-white"><li>reveal.jsはスライドをマークダウンやHTMLでかけるだけでなく、<br>プレゼンのための機能を提供してくれる</li><li>作成から登壇、共有まで全てを担えるものを作れる</li><li>自分だけのスライドデッキめちゃくちゃカッコいい！</li></ul></div></div></div>
