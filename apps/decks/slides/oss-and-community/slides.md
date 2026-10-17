---
theme: "none"
title: "実績解除：OSSコントリビュート"
titleTemplate: "%s | 社内LT会"
lang: "ja"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "実績解除：OSSコントリビュート"
  ogDescription: "社内LT会 での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/oss-and-community/og-image.png"
  ogUrl: "https://slide.burio16.com/oss-and-community/"
  twitterCard: "summary_large_image"
  twitterTitle: "実績解除：OSSコントリビュート"
  twitterDescription: "社内LT会 での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/oss-and-community/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/oss-and-community/"
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

# 実績解除：OSSコントリビュート

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
layout: profile
color: white
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- タコスとTottenham Hotspur FCが大好き
- いろんな人にタコスの人だと思われている

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 昨日もタコスを作りました

- チキンティンガタコス
- マンゴーとハラペーニョのサルサ

![チキンティンガ](/slides/oss-and-community/assets/chikintinga.JPG){width="1474" height="1110" style="margin:0 auto;display:block;max-height:700px"}

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
---

# vitestにPRマージされました

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## vitestとは？

- JavaScriptの世界的なテストフレームワーク
- あのvoidzeroが開発しているテストフレームワーク
- GitHubスター数 16k+

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# きっかけはPRのレビュー中

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## バグ発見の経緯

- Storybook用にインタラクションテストのconfigを作成
- ファイル名: `vitest.storybook-browser.config.ts`（ハイフン入り）

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 原因を突き止めた

- CLIでファイルを直接指定すると動く
- Storybookから実行するとglobでconfigを検索 → 引っかからない
- 原因: `resolveProjects.ts` の正規表現 `\w+` がハイフンを許容していなかった

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 人生初のissue

- 恐る恐るissueを立ててみた
- [vitest-dev/vitest #9739](https://github.com/vitest-dev/vitest/issues/9739)
- 「とりあえず報告だけ...」くらいの温度感
- この時はドキュメントを直そうぜの提案

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## コミュニティイベントでの出会い

- React Tokyoフェスでvoidzeroの人と話す機会が！
- 「こんなissue立てたんですよ」と話してみた
- 「初めてなんですが、どんなスタンスでいればいいですか？」と聞いた
- **この会話はコミュニティという場がなければ絶対に生まれなかった**

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## PR提出 → マージ

- 修正は `\w+` → `[\w-]+` のたった1文字
- 2人のメンテナーにapproveされてマージ（2026/3/5）
- PR: [vitest-dev/vitest #9760](https://github.com/vitest-dev/vitest/pull/9760)

![vitest PR #9760](/slides/oss-and-community/assets/vitest.png){width="1200" height="600" style="margin:0 auto"}

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## changelogにも名前が載った✌️

![vitest changelog](/slides/oss-and-community/assets/changelog.png){width="1760" height="326" style="margin:0 auto;display:block"}

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 外に出たから<br>できたOSSコントリビュート

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 今日話したいことは<br>自分語りではありません！！！

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
---

# [外に出たから]{style="color:#dc2626"}<br>できたOSSコントリビュート

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## そもそもどのくらい行ってんねん

- 初めて外部のイベントに行ったのはフロントエンドカンファレンス東京
- 9/21~3/22の間で33回
- 月5.5回、年間換算で約66回ペース（ほぼ週1以上）

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## なんでそんなに行くのか

- 強いエンジニアがそこにいるから
- 自分を表現することが好きだから(コレはLTの話)
- シンプルに楽しいから

<SlideVideo width="720" height="405" src="https://www.youtube.com/embed/ELzOJBhPXrs?start=539" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin:0 auto;display:block" />

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 外部コミュニティに出て得たもの

- 刺激
- 同じ技術に興味を持つ仲間との出会い
- 自分の仕事が世界中のOSSに繋がる体験
- 新卒でも、やってみたら意外とできた

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 外に出るハードル、実は低い

- connpassでイベントを探すだけ
- 最初は聞くだけでもOK
- 懇親会で1人に話しかけるだけで世界が広がる
  - お酒を手にもって乾杯すれば誰とでも喋れます
- 勇気がいるのは最初の1回だけ

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 外部イベントは遠足！！

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 外部イベントは遠足

- ワクワクするものにいきましょう
- 定期開催、または第n回など回数を重ねるタイプのイベントに\
  行くといっぱいワクワクできます

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# みんなも一緒に外に出ていこう！

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## まとめ

- 外部イベントに参加したら、思わぬ出会いと機会があった
- その出会いがOSSコントリビュートに繋がった
- 新卒ペーペーでも世界的なOSSに貢献できた
- **社内にいるだけでは得られない経験がそこにある**
- 一緒にイベント行きましょう！声かけてください！
