---
theme: none
title: "Vitest 5を使ってみようとしたらVRTがめちゃくちゃ改善しちゃった"
titleTemplate: "%s | Vue Fes Japan 2026 After Talk"
lang: ja
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "Vitest 5を使ってみようとしたらVRTがめちゃくちゃ改善しちゃった"
  ogDescription: "Vitest 5を試したことをきっかけにVRTを改善した話"
  ogImage: "https://slide.burio16.com/vitest5-vrt/og-image.png"
  ogUrl: "https://slide.burio16.com/vitest5-vrt/"
  twitterCard: "summary_large_image"
  twitterTitle: "Vitest 5を使ってみようとしたらVRTがめちゃくちゃ改善しちゃった"
  twitterDescription: "Vitest 5を試したことをきっかけにVRTを改善した話"
  twitterImage: "https://slide.burio16.com/vitest5-vrt/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/vitest5-vrt/"
layout: cover
contentClass: compact-cover
canvasWidth: 1920
aspectRatio: 16/9
routerMode: hash
wakeLock: false
preloadImages: false
transition: slide-left
mdc: true
fonts:
  provider: none
  sans: Source Sans Pro, Helvetica, sans-serif
defaults:
  layout: content
background: "/slides/templates/4830e1037835.png"
---

### Vue Fes Japan 2026 After Talk
# Vitest 5を使ってみようとしたら<br>VRTがめちゃくちゃ改善しちゃったので<br>話したい
### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
layout: profile
color: white
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- タコスとTottenham Hotspur FCが好き
- 先日Vue Fes Japan 2026にてLT登壇しました(スタッフも)
- Vitestのファイル名判定の正規表現に、`-`を追加するPRを出したことがある

::photo::

![ぶりおの写真](/slides/vitest5-vrt/assets/profile.png){width="500" height="500" class="natural-image" style="height:500px;border-radius:50%;object-fit:cover"}

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# デザインシステムを<br>やることになった

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
---

# VRTが必要


---
background: "/slides/templates/af4e26a78715.png"
layout: statement
---

# ワイ:やってみたいです！！！

---
background: "/slides/templates/af4e26a78715.png"
---

## まずはこうしてみた

Docker内のPlaywrightでAstroのページを開く<br>→ 表示されるコンポーネントを撮影<br>→ 基準画像と比較する

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

### 実装当時のワイ

# まだコンポーネントも少ないし<br>速度も気にならんな！

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

### 最近のワイ

# 遅すぎて話にならん！！

---
background: "/slides/templates/af4e26a78715.png"
layout: split
contentClass: "h-full large-type"
---

## ちょうどVitest 5が出た

Browser Modeが大幅改善したらしい

[Vitest 5の発表](https://vitest.dev/blog/vitest-5#performance-improvements)

::right::

![VoidZeroによるVitest 5の告知投稿](/slides/vitest5-vrt/assets/vitest5-announcement.png){class="size-full object-contain" style="max-width:none;max-height:none"}

---
background: "/slides/templates/af4e26a78715.png"
---

## Vitest 5、こういう改善が入ったらしい！

- ランタイムを事前にバンドル（[#10713](https://github.com/vitest-dev/vitest/pull/10713)）
- Vite起動とブラウザの準備を並行（[#10727](https://github.com/vitest-dev/vitest/pull/10727)）
- ファイルごとの余分な往復を削減（[#10730](https://github.com/vitest-dev/vitest/pull/10730)）

[Vitest 5.0.0-beta.7のリリースノート](https://github.com/vitest-dev/vitest/releases/tag/v5.0.0-beta.7){class="slide-note"}


---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# つかってみたい！！！

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# やってみた🤖

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
---

# 🤖:撮影の仕方にも問題が有りそう!

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
---

## Astroの描画を待ってから撮影

```ts
await page.goto("/catalog/{コンポーネント名}", { waitUntil: "load" });
await page.waitForFunction(
  () => document.querySelectorAll("astro-island[ssr]").length === 0,
);
await expect(page).toHaveScreenshot({ fullPage: true });
```

ページのloadに加えて、Astro islandの描画完了も待っていた

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
---

## PlaywrightにもComponent Testingがある

```ts
import { test, expect } from "@playwright/test";

test("ボタンの見た目", async ({ mount }) => {
  const component = await mount("components/Button/Primary");
  await expect(component).toHaveScreenshot();
});
```

自前のstory galleryで表示し、Astroを撮影経路から外せる

[Playwright公式ガイド](https://playwright.dev/docs/test-components){class="slide-note"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
---

## VitestはBrowser Modeで描画

```tsx
import { expect, test } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";
import { Button } from "./Button";

test("ボタンの見た目", async () => {
  await render(<Button>保存</Button>);
  await expect(page.getByRole("button")).toMatchScreenshot();
});
```

ブラウザ操作にはPlaywright providerを使える

[Component Testing](https://vitest.dev/guide/browser/component-testing) / [Visual Regression Testing](https://vitest.dev/guide/browser/visual-regression-testing) {class="slide-note"}

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 直接描画できるなら<br>VRTの構成を変えられる！

---
background: "/slides/templates/af4e26a78715.png"
---

## 今回変えたこと

Astroのページを開いて撮影<br>→ Reactコンポーネントを直接描画して撮影

VRTにはVitest Browser Modeを採用
---
background: "/slides/templates/af4e26a78715.png"
---

## PRマージ前後の通常CI

### マージ前：4分21秒

![マージ前の通常CI、Run VRT 4分21秒](/slides/vitest5-vrt/assets/vrt-ci-before.png){width="1600" class="natural-image"}

### マージ後：1分51秒

![マージ後の通常CI、Run VRT 1分51秒](/slides/vitest5-vrt/assets/vrt-ci-after.png){width="1600" class="natural-image"}

どちらも183テスト全件成功

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# VRTの実行が<br>2分30秒短くなった！

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
---

![Evan Youのkeynoteにある、速いtoolingがagentの生産性へ効くという図](/slides/vitest5-vrt/assets/evan-keynote-feedback.png){height="560" class="natural-image" style="height:560px;width:auto"}

[Evan You / ViteConf 2026 keynote（9:14〜）](https://www.youtube.com/watch?v=PfyIEgLzNYI&t=554s){class="slide-note"}

### フィードバックが速いと、人もエージェントも検証を回しやすい

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# Vitest 5を試そうとしたら<br>VRTの構成ごと見直せた
