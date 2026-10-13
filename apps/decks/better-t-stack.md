---
theme: "none"
title: "better-t-stack"
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
background: "/slides/templates/ce83e2a9c143.png"
legacyHash: "0/0"
mdc: true
---

### Cloudflare Meet-up Tokyo Vol.9

# より良い技術スタックで<br>Cloudflareにデプロイしよう

### ぶりお @burio_16

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "1/0"
layout: profile
color: black
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- 千株式会社システム開発部(25卒)
- 社内向け管理画面を開発
- タコスとTottenham Hotspur FCが大好き

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/1e8424e4716c.png"
legacyHash: "2/0"
layout: blank
---



---
background: "/slides/templates/02c1527ee49d.png"
legacyHash: "3/0"
layout: blank
---



---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "4/0"
layout: statement
---

# 個人で作成したものを<br>どこにデプロイしてますか？？

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "5/0"
layout: statement
---

# もちろん<br>Cloudflare Workers/Pagesですよね

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "6/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center">

私も自分のサイトを\
Cloudflareにデプロイしました

![説明](/slides/migrated-assets/burio-com.png)

</SlideGroup>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "7/0"
layout: statement
---

# できたッ！LT完！🫵

---
background: "/slides/templates/fa74e1541fa0.png"
legacyHash: "8/0"
layout: blank
---



---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "9/0"
layout: statement
---

# ではどんな技術スタックで<br>デプロイしてますか？

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "10/0"
layout: statement
---

# ライブラリいちいち入れて<br>設定するのめんどくさくないですか？

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "11/0"
layout: default
---

![Better T-Stackのトップ画面](/slides/migrated-assets/better-t-stack.png){class="natural-image"}

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "12/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center">

<SlideGroup class="flex flex-col">

## Better T Stack

TypeScriptを使用して開発するためのプロジェクトビルダー

- Webでの選択形式
- CLIでの対話形式
{class="text-left text-black"}

</SlideGroup>

<SlideGroup class="image-stack">

![Web Builder](/slides/migrated-assets/web-builder.png){class="" data-fragment-index="0" v-click.hide="1"}

![CLI Builder](/slides/migrated-assets/cli-builder.png){class="" data-fragment-index="0" v-click="1"}

</SlideGroup>

</SlideGroup>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "13/0"
layout: statement
---

# 実際にやってみた

[https://www.better-t-stack.dev/new](https://www.better-t-stack.dev/new){class="text-blue-600"}

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "14/0"
layout: content
color: black
---

## Better T Stack使ってみて良かったところ

- 一発で環境構築完了
- 選択肢が多く新たな出会いがある
- オプションが優秀
{class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6"}

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "15/0"
layout: content
color: black
---

## Better T Stack使ってみて残念だったところ

- CSS,UIライブラリの選択ができない
- テストライブラリが搭載されてない
- wranglerのサポートを終了していた
- 日本語のドキュメントがない
{class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6"}

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "15/1"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center">

vercelのOSS支援プログラムに選ばれていました🔥

![vercelの支援プログラム](/slides/migrated-assets/vercel.png){class="natural-image"}

</SlideGroup>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "16/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center gap-8">

<SlideGroup class="w-[30%] text-left text-black" bare>

issue建ててみました。

</SlideGroup>

![ぶりおがissue建てている様子](/slides/migrated-assets/burioIssue.png){class="natural-image !max-w-[60%]"}

</SlideGroup>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "17/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center gap-8">

<SlideGroup class="w-[30%] text-left text-black" bare>

ここであることに気づきました。<br><br>日本好きそうじゃね...?

</SlideGroup>

![アマンのプロフィール](/slides/migrated-assets/amanProfile.png){class="natural-image !max-w-[60%]"}

</SlideGroup>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "18/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center gap-8">

<SlideGroup class="w-[30%] text-left text-black" bare>

Twitterで釣ろうとしてみました。

</SlideGroup>

![ぶりおのツイート](/slides/migrated-assets/buriotweet.png){class="natural-image !max-w-[60%]"}

</SlideGroup>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "19/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center gap-8">

<SlideGroup class="w-[30%] text-left text-black" bare>

普通に釣れたので、\
お願いしてみました。

</SlideGroup>

![アマンのリプライ](/slides/migrated-assets/amanReply.png){class="natural-image !max-w-[60%]"}

</SlideGroup>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "20/0"
layout: default
---

<SlideGroup class="flex h-full flex-row items-center justify-center gap-8">

<SlideGroup class="w-[30%] text-left text-black" bare>

ふられました。\
無念。

</SlideGroup>

![ごめんなさい](/slides/migrated-assets/Sorry.png){class="natural-image !max-w-[60%]"}

</SlideGroup>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "21/0"
layout: statement
---

# やんわりと断られましたが、<br>これからもBetter T Stack使い倒すぞ！！

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "22/0"
layout: content
color: black
---

## まとめ

- Better T Stackは TypeScriptを使用して開発するための環境を\
  一発で作成できる
- Cloudflareにデプロイするための選択肢も入っていて、\
  Cloudflare側のテンプレよりも便利なものを簡単に入れることができる
- 欠点もまだまだあるが、vercelのプログラムに選ばれており、今後の進化に期待
{class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6"}

---
background: "/slides/templates/fa74e1541fa0.png"
legacyHash: "23/0"
layout: blank
---
