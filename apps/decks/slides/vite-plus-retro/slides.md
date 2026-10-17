---
theme: "none"
title: "Vite+を爆速で社内デザインシステムに導入してみた"
titleTemplate: "%s | TSKaigi 2026事後勉強会"
lang: "ja"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "Vite+を爆速で社内デザインシステムに導入してみた"
  ogDescription: "TSKaigi 2026事後勉強会 での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/vite-plus-retro/og-image.png"
  ogUrl: "https://slide.burio16.com/vite-plus-retro/"
  twitterCard: "summary_large_image"
  twitterTitle: "Vite+を爆速で社内デザインシステムに導入してみた"
  twitterDescription: "TSKaigi 2026事後勉強会 での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/vite-plus-retro/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/vite-plus-retro/"
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

### TSKaigi 2026事後勉強会

# Vite+を爆速で社内デザインシステムに導入してみた

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
layout: profile
color: white
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- タコスとTottenham Hotspur FCが大好き
- TSKaigiは初参加でした
- VoidZeroのﾊｧﾝ

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## VoidZero のﾊｧﾝです

<SlideGroup class="image-stack mt-6">

![ぶりおが @vitejs を GitHub Sponsors でスポンサーしたツイート](/slides/vite-plus-retro/assets/sponsor-vite-tweet.png){class="" data-fragment-index="0" width="470" height="233" style="margin:0 auto;display:block;width:900px;height:auto;max-width:100%;border-radius:8px" v-click.hide="1"}

![TSKaigi 会場で「Vite+」と書かれた扇子を持つぶりおと VoidZero メンバーのツーショット](/slides/vite-plus-retro/assets/vite-plus-sensu.png){class="" data-fragment-index="0" width="2048" height="1536" style="margin:0 auto;display:block;width:1100px;height:auto;max-height:760px;max-width:100%;border-radius:8px" v-click="1"}

</SlideGroup>

スポンサーするくらいには好き。会場では扇子にVite+と入れてもらってAlexとツーショ撮った。

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# そもそも Vite+ って？

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Vite+ とは

- **test / lint / fmt / task / Node** を `vp` ひとつに束ねる統合ツールチェイン
- 中身は Vite / Vitest / Oxlint / Oxfmt / tsdown / Vite Task（VoidZero 製）
- 2026/3/13 公開・**まだ α 版**

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Vite+ が解決する課題

- 他の言語：統合ツールチェインが **当たり前**
- JS：ツールの選択肢が多く、環境ごとにバラバラになりがち
- → その課題を **Vite+ が解決**

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 設定ファイル、散らばりがち

<CodePanel language="text">

```text
Before: ツールごとに設定が散らばる
  turbo.json
  vitest.config.ts
  oxlint / oxfmt の設定
  lefthook.yml
  ...

After: vite.config.ts に寄せられた
  vite.config.ts  ← test / lint / fmt / build / task
```

</CodePanel>

- test / lint / fmt / build / task / hooks が **別々の道具**になりがち
- Vite+ はこの散らばりを **`vite.config.ts` に寄せる**

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# どこに導入した？

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 社内デザインシステム

- 社内で **デザインシステム** を開発中
- 構成は **Vite + Vitest + Oxlint + Oxfmt** のモノレポ（タスクは Turborepo）
- → Vite+ が束ねる範囲と **ほぼ重なっていた**

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 爆速(当社比)で移行

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 3/13 → 3/24

- 公開から移行完了まで、わずか **10日ちょっと**
- α版をもう本番に投入

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## なぜ飛び込めた？

- まだ **本格運用前**（リプレイス後に使う想定）
- 元から **ツールがほぼ Vite+ の範囲内**（Vite/Vitest/Oxlint/Oxfmt）
- とはいえ α 版なので **最後の一歩は躊躇**

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# マネージャー<br>「**ビルドできればいいんじゃない？**」

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# ほな導入したろか！

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 爆速！！(当社比)![Vite+ への移行 PR #135（Turborepo 廃止・ツールチェーン統合、25 commits を main にマージ）](/slides/vite-plus-retro/assets/pr-135.png){width="1069" height="254" style="margin:1.5rem auto 0;display:block;width:1600px;height:auto;max-width:100%;max-height:520px;border-radius:8px"}

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 移行 PR でやったこと

- `vp migrate` で **Vite / Vitest / Oxlint / Oxfmt / Turborepo** を統合
- `turbo.json` ほか各種設定ファイルを **まとめて削除**
- テスト import を **`vitest` → `vite-plus/test`** に変更
- CI も **`voidzero-dev/setup-vp`** ベースに変更

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 実際どうだった？

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 良かった① vp migrate が最高

- 既存プロジェクトを Vite+ に移行するための **スタート地点**
- 依存関係・import・設定ファイル・scripts を **まとめて更新**
- hooks・AI agent・エディタ設定のセットアップにも対応

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 良かった② 設定が一箇所に

<CodePanel language="ts">

```ts
// vite.config.ts （実物）
export default defineConfig({
  test:   { … },  // Vitest
  staged: { … },  // git hooks（pre-commit）
  fmt:    { … },  // Oxfmt
  run:    { … },  // タスク実行（キャッシュ付き）
  lint:   { … },  // Oxlint
});
```

</CodePanel>

- `vite.config.ts` の `defineConfig` に **設定が全部同居**
- test / staged / fmt / run / lint が **1ファイル**で完結
- `vp lint` だけで **type linting**（oxlint-tsgolint）まで実行

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 良かった③ Vite Task (vp run)

<CodePanel language="ts">

```ts
// package.json
"build": "vp run -r build"
// -r = 全 workspace を依存順に実行（既定で最大4並列）

// vite.config.ts
run: {
  cache: { scripts: true }, // 使ったファイルを自動追跡してキャッシュ
}
```

</CodePanel>

- `-r` で **全 workspace を依存順に実行**
- **モノレポでも問題なく動作**
- Turborepo 的なタスク実行を **Vite+ の中**で完結

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 良かった③ キャッシュがあると爆速

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

- 使ったファイルを **自動追跡** → 変化なしなら **実行せずリプレイ**
- 実測で **4/5 cache hit・27.38s 短縮**
- 詳しくはこちらがとても参考になります
  - [https://zenn.dev/herp_inc/articles/strange-task-runner](https://zenn.dev/herp_inc/articles/strange-task-runner)

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 良かった⑤ ライブラリモード = vp pack

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
    // react 系は peer で external、それ以外はバンドル
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

- `dts: true` の1行で型定義（**`vite-plugin-dts` 不要**）、React 系は **external 扱い**
- rollup → **tsdown** で gzip **ESM 117KB → 36KB（約1/3）**

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 良かった⑥ 個別ツールが要らない

<CodePanel language="ts">

```ts
// vite.config.ts ← lefthook.yml を置き換え
staged: {
  "*.{ts,tsx,js,jsx,mjs}": "vp lint --fix",
  "*.{ts,tsx,css,md,json,yml}": "vp fmt",
}

// vp config が hooks を生成 → .vite-hooks/pre-commit の中身は1行
vp staged
```

</CodePanel>

- git hooks も **`vp` 同梱**（`staged` に書くだけ）→ **husky / lefthook 不要**
- 独自の pre-commit は **`.vite-hooks/`** で対応
- Node も **`.node-version` だけ**（今回の用途では mise / volta 不要）

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# もちろん辛みもあった

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 辛かった① lefthook使用時にmigrateされない

- `vp migrate` 時、**lefthook** は自動移行されず警告のみ
- 気づかず **pre-commit が壊れていた** → 設定を手動修正
- 自動移行されたのは **husky / lint-staged** だけ

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## その後 → 実は仕様でした

- **バグだと思って issue 起票**（[#1854](https://github.com/voidzero-dev/vite-plus/issues/1854)）
- よく見ると **仕様だった**（RFC に記載あり）
- → **Migration Guide に追記**する形で対応（[PR #1901](https://github.com/voidzero-dev/vite-plus/pull/1901)・マージ済み）

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 辛かった② Astro がよく壊れた

- 直後に **Astro 6 へ手動移行**（#198）
- `core@0.1.14` で Astro 互換リグレッション → **0.1.15 で解消**
- `overrides.vite` が Astro 内部の Vite まで置換 → **Release 失敗**
  →AstroV7でVite8がデフォになったり、同じCloudflareになったことで上手いこと行くことに期待

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 気をつけた③ AI が vp を知らない

- **AI が `Vite+` / `vp` を知らない**ことが多い
- α版ゆえ学習データに無く、提案を外しがち
- **`npx` で実行しがち**

→`AGENTS.md` / `CLAUDE.md` / Cursor rules などに **`vp` 前提の運用を書く**

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 導入しやすい / 注意したい条件

- **導入しやすい**
  - Vite / Vitest / Oxlint / Oxfmt を **すでに使っている**
  - **新規リポジトリ**、または本格運用前
- **注意したい**
- framework 側の Vite 依存
- α版の破壊的変更を追えない

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 余談：このスライドも Vite+ です

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Next 製でも Vite+ に乗れる

![mySlides を Vite+ へ移行した PR #220（build: Vite+ への移行・ツールチェーン統合、26 files・+10366 -285）](/slides/vite-plus-retro/assets/pr-220.png){width="1200" height="600" style="margin:0 auto 1rem;display:block;width:1000px;height:auto;max-width:100%;max-height:500px;border-radius:8px"}

- この LT スライド（mySlides）自体も Vite+ へ移行（[PR #220](https://github.com/Koutaro-Hanabusa/myslides/pull/220)）
- web は **Next 製**（OGP を `opengraph-image.tsx` で組みたくて採用）、ビルドは **Next のまま**
- `vp` は **lint / fmt / task / staged** 担当 → 名前は Vite+ でも中身は **バンドラ非依存**

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## そして Vite+ の沼へ

![Vite+への熱中がさらに深まっていく様子を表した悪循環ポスター](/slides/vite-plus-retro/assets/vite-plus-bad-spiral.png){width="515" height="645" style="margin:0 auto 0.5rem;display:block;width:600px;height:auto;max-width:100%;max-height:720px;border-radius:8px"}

［[悪循環画像ジェネレータ](https://furandon-pig.github.io/fpig_sample/hobby/bad_spiral/)で作成］

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## まとめ

- 設定を **`vite.config.ts` 一つに集約**できるのが最高
- Vite / Vitest / Oxlint / Oxfmt を使っているなら、**導入価値はかなり高い**
- 新規リポジトリや本格運用前なら、**早めに試す価値あり**
- α 版なので注意は必要だが、今回の辛みは **改善・運用で吸収できる範囲**

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# ご清聴ありがとうございました
