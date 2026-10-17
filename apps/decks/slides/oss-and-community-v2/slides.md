---
theme: "none"
title: "実績解除：OSSコントリビュート V2"
titleTemplate: "%s | React Tokyo ミートアップ #15"
lang: "ja"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "実績解除：OSSコントリビュート V2"
  ogDescription: "React Tokyo ミートアップ #15 での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/oss-and-community-v2/og-image.png"
  ogUrl: "https://slide.burio16.com/oss-and-community-v2/"
  twitterCard: "summary_large_image"
  twitterTitle: "実績解除：OSSコントリビュート V2"
  twitterDescription: "React Tokyo ミートアップ #15 での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/oss-and-community-v2/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/oss-and-community-v2/"
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
mdc: true
---

### React Tokyo ミートアップ #15

# 実績解除：OSSコントリビュート V2

### ぶりお @burio_16

---
background: "/slides/templates/1e9b011d7127.png"
layout: profile
color: black
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- ついに2年目になってしまいました
- タコスとTottenham Hotspur FCが大好き
- いろんな人にタコスの人だと思われている

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
contentClass: "statement-prose"
---

# みなさんReact Tokyo Fes<br>行きましたか？

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## もちろん行きました

<SlideGroup class="image-stack">

![React Tokyoフェス](/slides/oss-and-community-v2/assets/tacos.JPG){class="" data-fragment-index="0" width="4032" height="3024" style="margin:0 auto;display:block;max-height:700px" v-click.hide="1"}

![タコス](/slides/oss-and-community-v2/assets/react-tokyo-fes.JPG){class="" data-fragment-index="0" width="4032" height="3024" style="margin:0 auto;display:block;max-height:700px" v-click="1"}

</SlideGroup>

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## レポートも出てましたね

- ぜひ読んでください！(書いた人ではありません)
- [React Tokyoフェス2026イベントレポート](https://zenn.dev/react_tokyo/articles/2026-02-28-fest-report)

![React Tokyoフェス 2026 イベントレポート](/slides/oss-and-community-v2/assets/reacttokyo-report.png){width="1200" height="630" style="margin:0 auto;display:block;max-height:700px"}

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
contentClass: "statement-prose"
---

# ただの参加者の感想

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
contentClass: "statement-prose"
---

# めちゃくちゃ<br>~~タコスがうまかったです~~<br>学びも多く楽しかったです！

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
contentClass: "statement-prose"
---

# 終

---
background: "/slides/templates/ce83e2a9c143.png"
layout: cover
---

### React Tokyo ミートアップ #15

# 実績解除：OSSコントリビュート V2

### ぶりお @burio_16

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
contentClass: "statement-prose"
---

# 今日はReact Tokyoフェスに参加したからできたことの話です

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
---

# VitestにPRマージされました

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## Vitestとは？

- JavaScriptの世界的なテストフレームワーク
- あのvoidzeroが開発しているテストフレームワーク
- GitHubスター数 16k+

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
contentClass: "statement-prose"
---

# きっかけはPRのレビュー中

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## バグ発見の経緯

- Storybook用にインタラクションテストのconfigを作成
- ファイル名: `vitest.storybook-browser.config.ts`（ハイフン入り）

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## 原因を突き止めた

- Storybookから実行するとglobでconfigを検索 → 引っかからない
- `resolveProjects.ts` の正規表現がハイフンを許容していなかった
- [実際のコード](https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/projects/resolveProjects.ts)

```typescript
// packages/vitest/src/node/projects/resolveProjects.ts

// vitest.config.*
// vite.config.*
// vitest.unit.config.*
// vitest.unit-test.config.* ← これがマッチしない！

const CONFIG_REGEXP = /^vite(?:st)?(?:\.\w+)?\.config\./
//                                     ^^^^
// \w+ は [a-zA-Z0-9_] のみ → "-" にマッチしない 😱
// vitest.storybook-browser.config.ts → マッチしない
```

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## 実際のglobの挙動

- CLIで直接指定 → そのまま使うのでOK ✅

```bash
# CLI直接指定 → 問題なし
$ vitest --config vitest.storybook-browser.config.ts

# glob検索 → ハイフン入りファイル名がマッチしない
vitest.storybook-browser.config.ts
     ^^^^^^^^^^^^^^^^^^
     \w+ は [a-zA-Z0-9_] のみ → "-" にマッチしない
```

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## 人生初のissue

- 恐る恐るissueを立ててみた
- [vitest-dev/vitest #9739](https://github.com/vitest-dev/vitest/issues/9739)
- 「とりあえず報告だけ...」くらいの温度感
- この時はドキュメントを直そうぜの提案

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## 偶然の出会い

- React Tokyoフェスでvoidzeroの人と話す機会が！
- 「こんなissue立てたんですよ」と話してみた
- 「初めてなんですが、どんなスタンスでいればいいですか？」と聞いた
- **この会話はReact Tokyoフェスがなければ絶対に生まれなかった**

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## PR提出 → マージ

- 修正はたった1文字の変更
- 2人のメンテナーにapproveされてマージ（2026/3/5）
- PR: [vitest-dev/vitest #9760](https://github.com/vitest-dev/vitest/pull/9760)

```diff
// packages/vitest/src/node/projects/resolveProjects.ts

- const CONFIG_REGEXP = /^vite(?:st)?(?:\.\w+)?\.config\./
+ const CONFIG_REGEXP = /^vite(?:st)?(?:\.[\w-]+)?\.config\./
//                                       ^^^
//                                   ハイフンを追加！
```

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## changelogにも名前が載った✌️

![vitest changelog](/slides/oss-and-community/assets/changelog.png){width="1760" height="326" style="margin:0 auto;display:block"}

---
background: "/slides/templates/1e9b011d7127.png"
layout: content
color: black
---

## 感謝

- React TokyoフェスのおかげでまさかのOSSコントリビュート！
  - [Hiroshi Ogawa](https://x.com/hiroshi_18181)さんありがとうございます
- フロントエンドをやりたいけど知識不足な自分にも少し自信がついた
  - コミュニティに参加して良かった！イベントに参加して良かった！！
- 今年もフェス楽しみにしてます！
  - 次はスタッフ側としてReact Tokyoに貢献する動きをしたいと思います！

---
background: "/slides/templates/ee839a2ae1b8.png"
layout: statement
contentClass: "statement-prose"
---

# 以上、Vitestコントリビューター(語弊)<br>ぶりおの自分語りLTでした。
