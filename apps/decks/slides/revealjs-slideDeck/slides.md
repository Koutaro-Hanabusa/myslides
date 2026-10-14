---
theme: "none"
title: "revealjs-slideDeck"
layout: cover
canvasWidth: 1920
aspectRatio: "16/9"
routerMode: "hash"
wakeLock: false
preloadImages: false
transition: "slide-left"
download: false
drawings: { "enabled": false }
fonts: { "sans": "Source Sans Pro, Helvetica, sans-serif", "mono": "monospace", "provider": "none" }
defaults: { "layout": "default" }
highlighter: "shiki"
background: "/slides/templates/4830e1037835.png"
legacyHash: "0/0"
mdc: true
---

### 社内LT会

# 自分だけの<br>スライドデッキを作ってみた

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
layout: statement
---

# スライド作成して、登壇したら<br>PDFにして共有するのめんどくさくないですか？

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
layout: statement
---

# 作成したら、 自動的に<br>公開されるようになってほしい

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center">

<SlideGroup class="pr-12 text-left">

[https://slide.burio16.com](https://slide.burio16.com/)

自分のスライドを公開できる\
自分だけのスライドデッキを作りました。 {class="text-white"}

</SlideGroup>

![説明](/slides/migrated-assets/burioSlide.png){class="w-[50%]"}

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
layout: statement
---

# 自分だけのものって<br>かっこいいし、イケてるし、クール<br>じゃないですか？

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center">

<SlideGroup class="flex flex-col pr-12">

## 技術スタック

- フロントエンド：[React](https://ja.react.dev/)
- フロントエンド：[Next.js(app router)](https://nextjs.org/)
- スライド表示：[reveal.js](https://revealjs.com/)
- デプロイ：[Cloudflare Workers](https://www.cloudflare.com/ja-jp/developer-platform/products/workers/)
{class="text-left text-white"}

</SlideGroup>

![reveal.js](/slides/migrated-assets/reveal.png){class="w-[50%]"}

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center">

<SlideGroup class="flex flex-col pr-12">

## できること

- Next.js
  - スライドごとのOGP画像を設定する
- Reveal.js
  - プレゼンター表示
  - フルスクリーン表示
- Cloudflare
  - GitHub連携により、Mainブランチ\
    マージ時に自動デプロイ
{class="text-left text-white"}

</SlideGroup>

<SlideGroup class="image-stack">

![ogp画像](/slides/migrated-assets/ogp.png)

</SlideGroup>

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
layout: default
---

<SlideGroup class="flex flex-row">

<SlideGroup class="flex h-full flex-col justify-center">

## reveal.jsよかった点

- HTMLでもMarkdownでもスライド作成可能
- スライドを縦と横に展開可能
- Googleスライドでできることと同等のことができる
{class="text-white"}

</SlideGroup>

<SlideGroup class="image-stack">

```javascript

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
</section>
```

```markdown

<!-- .slide: style="color: white; text-align: left;" -->

## ぶりおがタコスを好きな理由<!-- .element: style="color: white;" -->

- 肉の種類
- 豊富なトッピング
- お酒との相性

---
```

</SlideGroup>

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/1"
layout: default
---

# こいつが縦のスライドです。<br>余談に使いやすい

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-start pl-16">

<SlideGroup class="flex flex-col pr-12">

## reveal.js残念だった点

- PDF出力が動作しない
- Tailwind競合して文字色が変わらなかった
{class="text-white"}

</SlideGroup>

![ogp画像](/slides/migrated-assets/pdfExport.png){class="w-[50%]"}

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-start pl-16">

<SlideGroup class="flex flex-col pr-12">

## まとめ

- reveal.jsはスライドをマークダウンやHTMLでかけるだけでなく、\
  プレゼンのための機能を提供してくれる
- 作成から登壇、共有まで全てを担えるものを作れる
- 自分だけのスライドデッキめちゃくちゃカッコいい！
{class="text-white"}

</SlideGroup>

</SlideGroup>
