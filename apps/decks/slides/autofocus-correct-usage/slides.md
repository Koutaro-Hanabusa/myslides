---
theme: "none"
title: "autofocusの正しい用法を知っていますか？"
titleTemplate: "%s | 社内LT会 / Frontend Conference Nagoya 2026 前夜祭！"
lang: "ja"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "autofocusの正しい用法を知っていますか？"
  ogDescription: "社内LT会 / Frontend Conference Nagoya 2026 前夜祭！ での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/autofocus-correct-usage/og-image.png"
  ogUrl: "https://slide.burio16.com/autofocus-correct-usage/"
  twitterCard: "summary_large_image"
  twitterTitle: "autofocusの正しい用法を知っていますか？"
  twitterDescription: "社内LT会 / Frontend Conference Nagoya 2026 前夜祭！ での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/autofocus-correct-usage/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/autofocus-correct-usage/"
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

### 社内LT会 / Frontend Conference Nagoya 2026 前夜祭！

# autofocusの正しい用法を<br>知っていますか？

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
layout: profile
color: white
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- タコスとTottenham Hotspur FCが大好き
- 最近食品衛生責任者の資格講習を受けたので\
  みんなにタコスを振る舞うことができるようになりました🌮

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# フロントエンドカンファレンスで<br>プロポーザル通らなかったので<br>ここで発散します！

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# autofocusってなーに？

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## autofocus属性

- HTMLの**グローバル属性**で、ページ読み込み時に要素にフォーカスを当てる
- どの要素にも付与できる（フォーカス可能な要素でのみ効果あり）
- 複数の要素に付与することができるが、フォーカスは最初のものに当たる

```html
<input type="text" autofocus />
```

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# なんで遭遇したんだ？

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## ESLint jsx-a11yの導入

<SlideGroup class="flex items-start gap-8">

- SonarQubeでa11yの指摘を受けたPRがきっかけ
- 「そもそもa11yのLintルール入ってなくない？」と気づいた
- `eslint-plugin-jsx-a11y`を自分で導入
- すると`jsx-a11y/no-autofocus`の警告が発生
- **そこで初めてautofocusという属性の存在を知った**

![a11y周り修正 PR #532](/slides/autofocus-correct-usage/assets/pr-532.png){width="1820" height="1316" class="max-w-[40%] h-auto rounded-lg"}

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 最初の選択肢

- ESLintのエラーなので、単純にautofocusを消すこともできた
- でも知らなかった属性だったので、ちゃんと調べてみた

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# なんでエラーなるん？

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## jsx-a11y/no-autofocusの理由

<SlideGroup class="flex items-start gap-8">

- autofocusはページ読み込み時にフォーカスを強制的に移動させる
- スクリーンリーダーユーザーにとって混乱の原因になる
  - ページの先頭から読み上げが始まらない
  - フォーカスが突然移動し、現在位置を見失う

![oxlint jsx-a11y/no-autofocus の警告出力](/slides/autofocus-correct-usage/assets/oxlint-no-autofocus.png){width="1108" height="211" class="max-w-[45%] h-auto rounded-lg"}

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Demo: よくないautofocusの使い方

ページ読み込み時に意図しない場所へフォーカスが飛ぶ

<AutofocusDemo kind="bad" />

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 正しい使い方も知りたい！！

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 読んだドキュメント

- [MDN - autofocus](https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/autofocus)
- [MDN - dialog](https://developer.mozilla.org/ja/docs/Web/HTML/Element/dialog)
- [W3C APG - Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [W3C APG - Alert Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/examples/alertdialog/)

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# ドキュメント読んだ感じ<br>こう使うのが良さそう！

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## W3Cの推奨

- autofocusは**ユーザーの操作に応じて表示される要素**で使うべき
  - ダイアログ / モーダル
  - ポップオーバー
  - ドロワー
- ページの初期読み込み時には使わない
- **「ユーザーがアクションを起こした結果、フォーカスが移る」のが正しい**

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## なぜダイアログでは正しいのか

- ユーザーが能動的にダイアログを開いている
- フォーカスがダイアログ内に移ることは期待される動作
- スクリーンリーダーでも自然な流れになる
- フォーカストラップと組み合わせるとさらに良い

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Demo: 正しい用法 — ダイアログ内のautofocus

ユーザーの操作でダイアログが開き、入力欄にフォーカス

<AutofocusDemo kind="login" />

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Demo: W3C APG推奨 — キャンセルにautofocus

不可逆な操作ではキャンセルにフォーカスを置き、誤操作を防ぐ

<AutofocusDemo kind="cancel" />

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## デザインシステムとDialog

- 最近チームでデザインシステムを構築中
- チームメンバーがDialogコンポーネントを実装
- レビュー時に「フォーカス制御あるかな？」と確認したら…あった！

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Radix UI Dialog の onOpenAutoFocus

- `Dialog.Content` に `onOpenAutoFocus` propがある
- HTML `autofocus` を使わずにフォーカス制御ができる → Linterにも怒られない

```tsx
<Dialog.Content
  onOpenAutoFocus={(event) => {
    event.preventDefault();
    cancelButtonRef.current?.focus();
  }}
>
  ...
</Dialog.Content>
```

- `onCloseAutoFocus` で閉じた後のフォーカス先も制御できる

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Demo: onOpenAutoFocus でキャンセルにフォーカス

HTML autofocusなしで、Linterにも怒られない

<AutofocusDemo kind="radix" />

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## Base UIにも同様の仕組みがある

- Base UIのDialogには `initialFocus` propがある
- Radix UI: `onOpenAutoFocus` / Base UI: `initialFocus` — アプローチは違うが同じことができる
- **shadcn/uiはどちらのプリミティブにも対応**しているので、いい感じにフォーカス制御できる

|  | Radix UI | Base UI |
| --- | --- | --- |
| 開いた時 | `onOpenAutoFocus` | `initialFocus` |
| 閉じた時 | `onCloseAutoFocus` | `finalFocus` |

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# まとめ

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## まとめ

- **autofocus**はどの要素にも付けられるグローバル属性
- Linterが警告するのはa11y的にユーザーを混乱させる可能性がある
- **ダイアログやモーダル内での使用が正しいパターン**
- UIライブラリにもフォーカス制御の仕組みが用意されている
- ESLintのエラーを「消す」のではなく「調べた」ことで正しい知識を得られた

---
background: "/slides/templates/af4e26a78715.png"
layout: statement
contentClass: "statement-prose"
---

# 次は絶対にプロポーザル通すぞ！！！！<br>目指せカンファレンス登壇！！

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 【宣伝】Frontend Conference Nagoya 2026 前夜祭！

<SlideGroup class="flex items-center gap-8">

![Frontend Conference Nagoya 2026 前夜祭 - 2026.05.08(Fri) 19:00 株式会社スタメン 名古屋オフィス](/slides/autofocus-correct-usage/assets/fcn2026-eve.png){width="762" height="443" class="max-w-[55%] h-auto rounded-lg"}

- **2026.05.08(Fri) 19:00**
- 株式会社スタメン 名古屋オフィス
- プロポーザルの供養がてら登壇してきます！！
- [stmn.connpass.com/event/390165](https://stmn.connpass.com/event/390165/)

</SlideGroup>
