---
theme: "none"
title: "timesとwork out loudで働き方を再考する"
titleTemplate: "%s | 社内LT会"
lang: "ja"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "timesとwork out loudで働き方を再考する"
  ogDescription: "社内LT会 での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/times-working-out-aloud/og-image.png"
  ogUrl: "https://slide.burio16.com/times-working-out-aloud/"
  twitterCard: "summary_large_image"
  twitterTitle: "timesとwork out loudで働き方を再考する"
  twitterDescription: "社内LT会 での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/times-working-out-aloud/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/times-working-out-aloud/"
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
mdc: true
---

### 社内LT会

# timesとwork out loudで<br>働き方を再考する

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
layout: profile
color: white
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- 絶賛禁酒中
- W杯が終ったら次はプレミアリーグか開幕が待ち遠しい

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# チームメンバーが<br>何しているか<br>何を考えているか<br>知っていますか？

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## このLTの動機

- 最近、プロジェクトのメンバーが何をやっているのか\
  分からない状態が自分の中で課題になっている
- 少し前はtimesが盛んだった気がするけれど、最近は静かになってきた
- チームメンバーが何をしているか,考えているかを知ることができる状態になれば、\
  より良いものが作れる環境にできそう

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# そこで、timesを再考してみる

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## timesとは

- [Slackで簡単に「日報」ならぬ「分報」をチームで実現する3ステップ 〜Problemが10分で解決するチャットを作ろう〜](https://craftsman-software.com/posts/56)が初出とされる
- 日報のさらに細かい版のような立ち位置

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## timesをやる意味(個人的見解)

- 証跡となり、あとから自分のやっていたことを遡れる
- 思考の整理にもつかうことできる
- チャンネル参加者からの知見共有がおこる

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## timesのデメリット

<SlideGroup class="flex items-center gap-8">

<SlideGroup class="shrink-0">

- 井戸端会議化する
  - 見えていない人には、タバコ部屋以上にタチが悪い
- 承認欲求の過激化

</SlideGroup>

<SlideGroup class="m-0 flex min-w-0 flex-1 flex-col gap-2" as="figure">

![個人timesを、物理的に見えないためタバコ部屋以上にタチが悪いと表現したsongmuの投稿](/slides/times-working-out-aloud/assets/songmu-times-tobacco-room.png){width="970" height="392" class="h-auto w-full rounded-lg"}

[[@songmu, 2017](https://x.com/songmu/status/831505012857544704?s=20)]{class="slide-note"}

</SlideGroup>

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 業務上の真実を<br>timesに書いてはいけない(戒め)

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 必ずしもtimesをやる必要はない

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# チームメンバーが<br>何をしているか、何を考えているかを<br>知ることができる状態を目指したい

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# Working Out Loud

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Working Out Loudとは

- 作業を見えるようにして、考えていることも言葉にすること
  - **Observable Work** + **Narrating Your Work**
- 作りかけを見せ、詰まったらすぐに聞く
- 早いフィードバックや、思いがけないコラボレーションを生む

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
---

# ![Working Out Loud を実践するよう呼びかけるSlack投稿](/slides/times-working-out-aloud/assets/working-out-loud-in-slack.png){width="2360" height="1550" class="h-auto w-auto max-w-full rounded-lg"}

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# しかし

<SlideGroup class="flex flex-col gap-6">

<SlideGroup class="m-0 self-center" as="figure">

![7月は本当にエンジニアとしてやさぐれているため、業務以外でPCを触っていないというぶりおの投稿](/slides/times-working-out-aloud/assets/burio-yasagure.png){width="486" height="190" class="h-auto w-[80rem] max-w-full rounded-lg"}

</SlideGroup>

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 注:人としてもやさぐれています<br><br>自分の考えを一方的に<br>押し付けてしまっています

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# ソフトウェア開発は<br>チームスポーツである。[出典: Team Geek 1.4「チームがすべて」]{class="slide-note"}

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## HRT

- **Humility**: 全知全能ではないので、自らも改善しよう
- **Respect**: 相手の能力や功績を称えよう
- **Trust**: 有能と信じ、任せる

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# HRTをもった上でのチーム開発<br>チームビルディング

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## timesはWOLを実現する手段のひとつ

- timesでなくてもよい
  - プロジェクトのチャンネル、作業用スレッド、カンバンなど
- 大事なのは、作業や思考が必要な人に見えること
- だから重要な議論や決定を個人timesで閉じない

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# まとめ（自戒)<br>まずはHRTを持ち、チームと対話することで適した手段を模索しよう

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# ご清聴ありがとうございました
