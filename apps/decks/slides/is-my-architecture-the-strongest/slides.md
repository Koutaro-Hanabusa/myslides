---
theme: none
title: "「ぼくの考えた最強のTanstack Routerディレクトリ構成」は最強だったのか"
titleTemplate: "%s | 社内LT会"
lang: ja
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "is-my-architecture-the-strongest"
  ogDescription: "社内LT会での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/is-my-architecture-the-strongest/og-image.png"
  ogUrl: "https://slide.burio16.com/is-my-architecture-the-strongest/"
  twitterCard: "summary_large_image"
  twitterTitle: "is-my-architecture-the-strongest"
  twitterDescription: "社内LT会での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/is-my-architecture-the-strongest/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/is-my-architecture-the-strongest/"
layout: cover
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

### 社内LT会

# 「ぼくの考えた最強の<br>Tanstack Routerディレクトリ構成 」は<br>最強だったのか

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

::photo::

![ぶりおの写真](/slides/vitest5-vrt/assets/profile.png){width="500" height="500" class="natural-image" style="height:500px;border-radius:50%;object-fit:cover"}

---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# こんなセッションがありました

---
background: "/slides/templates/af4e26a78715.png"
---

## 決定的なフロントエンドアーキテクチャがいい

つじさん [@t0daaay](https://x.com/t0daaay)

<SlideVideo width="1120" height="630" src="https://speakerdeck.com/player/830a177fbdb74ea5b220a9545c17d579" title="決定的なフロントエンドアーキテクチャがいい" allowfullscreen="true" allow="web-share" style="border:0;margin:0 auto;display:block" />

---
background: "/slides/templates/af4e26a78715.png"
---

## 概要

- AIでコーディングは速くなったが、アーキテクチャのレビューがボトルネックになる
- 「何をどこに置くか」「依存の向き」「どう書くか」が一意に決まる状態を「決定的」と呼ぶ
- 決定的なアーキテクチャをリンタールールに落とし込み、誰が書いても同じ形にする
- 結果、アーキテクチャの指摘が激減し、開発速度も上がった

---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# 🤔

---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# 💡

---
background: "/slides/templates/af4e26a78715.png"
---

## ぼくの考えた最強の TanStack Router ディレクトリ構成

<SlideVideo width="1120" height="630" src="https://slide.burio16.com/tanstack-router-dir-structure/#/1" title="ぼくの考えた最強の TanStack Router ディレクトリ構成" allowfullscreen="true" style="border:0;margin:0 auto;display:block" />

---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# おさらい

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 技術選定

- 社内で 0 から作り直す大規模なリプレイス中、フロントの技術選定を行った
- 候補は Next.js / React Router / TanStack Router の3案

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 3案の比較

- Next.js … Vercel 以外で運用するときの考慮の多さや、Cache Components などの難解さを考えて見送り
- React Router … 現状使用中。せっかく作り替えるのに同じ技術使っても楽しくない
- TanStack … Next.jsほど辛くなく、React Routerよりもモダンな印象があったので採用！！

→ TanStack Router を採用

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 案③ ハイブリッド（採用）

<CodePanel language="text">

```text
src/
├── features/<domain>/   ← ロジックの実体（Router 非依存）
│   └── api / hooks / components
└── routes/<route>/      ← TanStack Router 依存部分だけ
    ├── -components/  ← fallbacks / Page
    └── index.tsx     ← loader / validateSearch
```

</CodePanel>

- TanStack Router 依存部分だけ routes、ロジックの実体は features
- 機能はフル活用しつつ、Router 依存を routes に閉じ込められるいいとこ取り

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## ディレクトリ構成（+ server）

<CodePanel language="text">

```text
apps/<appname>/src/
├── features/
│   └── <domain>/
│       ├── api/        ← データ取得・更新 hook（queryOptions + useSuspenseQuery / useMutation）
│       ├── server/     ← ★ Server Function
│       │   ├── <entity>.functions.ts  ← createServerFn のラッパー
│       │   ├── <entity>-schema.ts     ← 入出力の schema
│       │   └── <verb>-<entity>.server.ts ← ロジック
│       ├── hooks/      ← form / フローなど画面ロジックの hook（Router 非依存）
│       ├── components/ ← View 断片（Router 非依存）
│       └── その他諸々
└── routes/
    └── <route>/
        ├── -components/ ← fallbacks / Page.tsx
        └── index.tsx    ← validateSearch / loader / アダプタの宣言のみ
```

</CodePanel>

- features に `server/`（schema / function / logic）を追加しただけ
- Routerの依存はroutes配下に、軸はブレていない

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 採用してどうなった

- features のベストプラクティスと TanStack Router の機能、両方を活かせる形に
- Router の変更影響は routes に閉じる → features は Router 非依存のまま
- テストの境界も明確に
  - features は依存を mock した単体 / コンポーネントテスト
  - routes は backend だけ mock したe2e ライクなテスト
- 反面、component の置き場が3 つに → AI が迷わない整備が重要に


---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# Q.本当に最強だったのか？


---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# A."理論上"は最強だった

---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# Q.何故最強ではなかったのか？


---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# A.決定論的ではなかったから


---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# 自分が思った最強 ≒ つじさんの決定論的

- 人には意図が明確で理解しやすい
-  AIに指示が明確で同じ内容が生成される

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## 考えていたアーキテクチャ

![routes から features への依存だけがリンターで検査され、features 内の components・hooks・api・server の依存と共通領域への依存は文書のルールのみであることを示す図](/slides/is-my-architecture-the-strongest/assets/architecture.png){width="1760" height="640" style="margin:0 auto;display:block;width:100%;height:auto"}

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## どこが決定論的ではなかったのか
パッと思いつくだけでも...
- 何をどこに置くか:features/domain/にutilsの考慮がない
  - これはutils/に置きませんか？が起きている
- 依存の向き:リントルール化がされておらず、 routes → features だけになっている
  - server/の定義などもあるが、ルールになっていない
- どう書くか:そもそも考慮された記述が無い
  - 私の怠慢 当初はdir構成を練っていたので(言い訳)

---
background: "/slides/templates/af4e26a78715.png"
layout: content
---

## lint ルールにできそうなこと

- features/domain/に utils の考慮がない → feature/domain 直下に置けるものを限定する
- server/ の粒度を定義していない → .server.ts の単位を決めて検査する

## 考慮したいこと {style="margin-top:60px"}

- 複数の箇所から使用されるfeatureの場合の扱い
  - コロケーションで片付けるのではなく、ドメインモデリング



---
background: "/slides/templates/af4e26a78715.png"
layout: content
---
## まとめ

- 決めたことをルールとして表わすことで最強を実現しよう
- アーキテクチャの理論だけで判断することは出来ないので、ドメインを理解しよう
- 最強のアーキテクチャは、作って終わりではなく育てていくもの

---
layout: statement
background: "/slides/templates/af4e26a78715.png"
---

# 「ぼくの考えた最強の<br>Tanstack Routerディレクトリ構成」は<br>"まだ"最強ではなかった

