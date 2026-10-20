---
theme: "none"
title: "Vite+を爆速でデザインシステムに導入してみた"
titleTemplate: "%s | Vue Fes Japan 2026"
lang: "ja"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "Vite+を爆速でデザインシステムに導入してみた"
  ogDescription: "Vue Fes Japan 2026 での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/vite-plus-retro-v2/og-image.png"
  ogUrl: "https://slide.burio16.com/vite-plus-retro-v2/"
  twitterCard: "summary_large_image"
  twitterTitle: "Vite+を爆速でデザインシステムに導入してみた"
  twitterDescription: "Vue Fes Japan 2026 での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/vite-plus-retro-v2/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/vite-plus-retro-v2/"
layout: cover
canvasWidth: 1920
aspectRatio: "16/9"
routerMode: "hash"
wakeLock: false
preloadImages: false
transition: "slide-left"
download: false
drawings: { "enabled": false }
fonts:
  {
    "sans": "Source Sans Pro, Helvetica, sans-serif",
    "mono": "monospace",
    "provider": "none",
  }
defaults: { "layout": "default" }
highlighter: "shiki"
background: "/slides/templates/4830e1037835.png"
contentClass: "large-type"
mdc: true
---

### Vue Fes Japan 2026

# Vite+を爆速でデザインシステムに導入してみた

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "h-full large-type"
layout: split

---

## English

I don't speak English🙏

Read this presentation in English {class="text-4xl"}

<SlideGroup class="break-all text-3xl underline">

[https://slide.burio16.com/vite-plus-retro-v2/en](https://slide.burio16.com/vite-plus-retro-v2/en)

</SlideGroup>

::right::

![QR code for the English version of this presentation](/slides/vite-plus-retro-v2/assets/english-slides-qr.png){width="2000" height="2000" class="size-full rounded-xl object-contain" style="max-width:none;max-height:none"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: profile
color: white

---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- 千株式会社 フロントエンドエンジニア
- タコスとTottenham Hotspur FCが大好き
- 普段はVue書きません()

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# そもそも Vite+ って？

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## Vite+ とは

- [test](https://viteplus.dev/guide/test) / [lint](https://viteplus.dev/guide/lint) / [fmt](https://viteplus.dev/guide/fmt) / [task](https://viteplus.dev/guide/run) などをひとつに束ねる統合ツールチェイン
- 中身は [Vite](https://vite.dev/) / [Vitest](https://vitest.dev/) / [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) / [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) / [Vite Task](https://viteplus.dev/guide/run)（VoidZero 製）
- 2026/3/13 公開（[公式サイト](https://viteplus.dev/)）

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## Vite+ が解決する課題

- 他の言語：統合ツールチェインが当たり前
- JS：ツールの選択肢が多く、環境ごとにバラバラになりがち（[Why Vite+?](https://viteplus.dev/guide/why)）

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# どこに導入した？

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 社内デザインシステム

- 社内で デザインシステム を開発中
- 構成は Vite + Vitest + Oxlint + Oxfmt のモノレポ（タスクは Turborepo）
- → Vite+ が束ねる範囲と ほぼ重なっていた
- まだ本格運用前で試せる時期。

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# 爆速(当社比)で移行

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# マネージャー<br>「ビルドできれば<br>いいんじゃない？」

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# ほな導入したろか！

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# 爆速！！(当社比)![Vite+ への移行 PR #135（Turborepo 廃止・ツールチェーン統合、25 commits を main にマージ）](/slides/vite-plus-retro/assets/pr-135.png){width="1069" height="254" style="margin:1.5rem auto 0;display:block;width:1600px;height:auto;max-width:100%;max-height:520px;border-radius:8px"}Vite+ 0.1.13

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# 実際どうだった？

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 良かった① vp migrate が最高

- 既存プロジェクトを Vite+ に移行するためのコマンド
- 依存関係・import・設定を まとめて更新し、既存ツールを統合
- 加えてCI は [`voidzero-dev/setup-vp`](https://viteplus.dev/guide/ci) へ移行
- 参考:[vp migrate](https://viteplus.dev/guide/migrate)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 良かった② 設定が一箇所に

<CodePanel language="ts">

```ts
// vite.config.ts （実物）
export default defineConfig({
  test:   { … },  // Vitest
  fmt:    { … },  // Oxfmt
  lint:   { … },  // Oxlint
  run:    { … },  // タスク実行（キャッシュ付き）

});
```

</CodePanel>

- [test](https://viteplus.dev/config/test) / [staged](https://viteplus.dev/config/staged) / [fmt](https://viteplus.dev/config/fmt) / [run](https://viteplus.dev/config/run) / [lint](https://viteplus.dev/config/lint) を [`vite.config.ts`](https://viteplus.dev/config/) に集約
- [`vp lint`](https://viteplus.dev/guide/lint#type-aware-linting) で type linting（oxlint-tsgolint）まで実行

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 良かった③ vp pack でライブラリビルドを改善

<SlideGroup class="grid grid-cols-2 gap-4">

<CodePanel language="ts">

```ts
// packages/hoge/vite.config.ts
pack: {
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,        // 型定義も出力
  sourcemap: true,
  minify: true,
  deps: {
    alwaysBundle: ["clsx", "tailwind-merge", "dayjs"],
  },
}
```

</CodePanel>

<CodePanel language="text">

```text
             Before              After
             vp build(Vite/lib)  vp pack(tsdown)
  ESM  gzip   117KB         →     36KB   (459KB→144KB)
  CJS  gzip   102KB         →     36KB   (340KB→148KB)
  build       ~1.59s        →     ~1.0s
  型定義      vite-plugin-dts →    tsdown 内蔵
```

</CodePanel>

</SlideGroup>

- vp build（Vite Library Mode）→ [vp pack](https://viteplus.dev/guide/pack)（tsdown）へ移行
- dts: trueだけで型定義を生成。`vite-plugin-dts` の追加インストール・設定が不要
- 移行設定込みの実測で、gzip ESM 117KB → 36KB（約1/3）、ビルド時間 約1.59s → 約1.0s(※ 4月時点)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# もちろん辛みもあった

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 辛かった① lefthook使用時にmigrateされない

- [`vp migrate`](https://viteplus.dev/guide/migrate#git-hook-tools) 時、lefthook は自動移行されず警告のみ
- 設定を手動修正

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 実は仕様でした

- バグだと思い [Issue #1854](https://github.com/voidzero-dev/vite-plus/issues/1854) を起票 → [RFC](https://github.com/voidzero-dev/vite-plus/blob/main/rfcs/config-and-staged-commands.md#migration-edge-cases) に明記されていた
- [PR #1901](https://github.com/voidzero-dev/vite-plus/pull/1901) で [Migration Guide](https://viteplus.dev/guide/migrate#git-hook-tools) にも追記していただいた


![RFC の Migration Edge Cases：「simple-git-hooks・lefthook・yorkie は警告してスキップ」と明記されていた](/slides/vite-plus-retro-v2/assets/migration-edge-cases.png){width="1057" height="422" style="margin:1rem auto;display:block;width:1500px;height:auto;max-width:100%;max-height:600px;border-radius:8px"}
---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 辛かった② Astro のビルドが壊れた

- Astro 6 のドキュメントサイトが、`Not implemented` でビルド失敗
- overrideで、Astro 6 の Vite 7 まで Vite 8 に置き換えていた
- [Dev Toolbar](https://docs.astro.build/en/guides/dev-toolbar/)が使う API が、当時の Vite 8 では未対応
- override を外し、Astro 6 は Vite 7 を使う構成に戻して復旧

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## 最小構成で再現して比較

| Astro        | Vite+                | ビルド結果                |
| ------------ | -------------------- | ------------------------- |
| 6.1.10       | 未使用（Vite 7.3.3） | 成功                      |
| 6.1.10       | 0.1.19               | 失敗（`Not implemented`） |
| 7.0.0-beta.3 | 0.1.19               | 成功                      |
| 7.0.0-beta.3 | 0.1.24               | 成功                      |

Vite+ 0.1.19 のまま Astro 7 beta へ更新すると成功
Vite+ 使用時は `vite` override を適用。integration なし・1ページで検証。

[検証コード・実行手順（GitHub）](https://github.com/Koutaro-Hanabusa/astro-vite-plus-repro)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## まとめ

- vite.config.tsに全ての設定を記述でき、体験が良い
- OSSの仕様をしっかり読んでみるきっかけにもなった
- 9/28にv1がリリースされ、完全体に

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# Vite+ にフルベットしよう

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type statement-prose"
layout: statement

---

# 余談

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## Vite Task：自動キャッシュ

<CodePanel language="text">

```text
$ vp run -r build      # 2回目（変更なし）
  ~/packages/hoge$     vp pack  ◉ cache hit, replaying
  ~/packages/fuga$      tsc ...   ◉ cache hit, replaying
  ~/packages/piyo$ vp pack  ◉ cache hit, replaying
  ──────────────────────────────────────
  vp run: 4/5 cache hit (80%), 27.38s saved
  ↑ ui-preview(Astro) だけは入力を書き換えるので非キャッシュ
```

</CodePanel>

- 使ったファイルを [自動追跡](https://viteplus.dev/guide/automatic-data-tracking) → 変化なしなら 実行せず[リプレイ](https://viteplus.dev/guide/cache)
- 実測で 4/5 cache hit・27.38s 短縮
- 詳しくはこちらがとても参考になります
  - [https://zenn.dev/herp_inc/articles/strange-task-runner](https://zenn.dev/herp_inc/articles/strange-task-runner)

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type"
layout: content

---

## Viteに依存しているわけではない

![mySlides を Vite+ へ移行した PR #220（build: Vite+ への移行・ツールチェーン統合、26 files・+10366 -285）](/slides/vite-plus-retro/assets/pr-220.png){width="1200" height="600" style="margin:0 auto 1rem;display:block;width:1000px;height:auto;max-width:100%;max-height:500px;border-radius:8px"}

- 初期導入では、Next.js の `next build` を維持したまま Vite+ へ移行（[PR #220](https://github.com/Koutaro-Hanabusa/myslides/pull/220)）
- アプリのビルドを Vite へ移行しなくても導入できる
- [lint](https://viteplus.dev/guide/lint) / [fmt](https://viteplus.dev/guide/fmt) / [task](https://viteplus.dev/guide/run) / [staged](https://viteplus.dev/guide/commit-hooks) を `vp` に統一。既存の build は [`vp run build`](https://viteplus.dev/guide/run#built-in-commands-vs-scripts) で実行できる
