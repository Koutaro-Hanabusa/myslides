---
theme: "none"
title: "tanstack-router-dir-structure"
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

### TSKaigi2026〜アフターパーティー〜 / TSKaigi Mashup #5 any

# ぼくの考えた最強の <br>TanStack Router ディレクトリ構成

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
layout: profile
color: white
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- タコスとTottenham Hotspur FCが大好き
- TSKaigiは初参加でした
- 会場で5回くらいタコスの人ですか！？と言われた(???)

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
layout: content
---

## タコスといえば...?

<SlideGroup class="flex items-center gap-8">

<SlideGroup class="flex-1 text-left">

- エブリーさんが出した記事
- **「タコス」の検索頻度が昨年比 2 倍！** 🌮
- 自分も月１くらいで家でタコス作ってます
- (タコスについて[プレスリリース](https://prtimes.jp/main/html/rd/p/000000455.000018729.html)出してるの面白い)

</SlideGroup>

<SlideGroup class="image-stack shrink-0" style="width:760px">

![あかがわまさともさんから「ぶりおへ」と PR TIMES のリンクが共有されたチャット画面](/slides/tanstack-router-dir-structure/assets/taco-line-message.png){class="" data-fragment-index="0" width="538" height="326" style="display:block;width:380px;height:auto;border-radius:8px" v-click.hide="1"}

![エブリーのプレスリリース「タコスの検索頻度が昨年比2倍！GWに楽しめるメキシコ料理レシピを公開」](/slides/tanstack-router-dir-structure/assets/taco-prtimes-article.png){class="" data-fragment-index="0" width="2332" height="1648" style="display:block;width:100%;height:auto;border-radius:8px" v-click="1"}

</SlideGroup>

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
layout: content
---

## TSKaigi2026

みなさん楽しかったですか？？

<SlideGroup class="image-stack mt-6">

![Welcome to TSKaigi 2026 のスポンサーバナー](/slides/tanstack-router-dir-structure/assets/tskaigi-banner.jpg){class="" data-fragment-index="0" width="2443" height="1559" style="margin:0 auto;display:block;width:auto;height:auto;max-height:700px;max-width:100%" v-click.hide="1"}

![TSKaigi 2026 アフターパーティーでの集合写真](/slides/tanstack-router-dir-structure/assets/tskaigi-group.jpg){class="" data-fragment-index="0" width="2048" height="1536" style="margin:0 auto;display:block;width:auto;height:auto;max-height:700px;max-width:100%" v-click="1"}

</SlideGroup>

初参加でしたが、とても楽しかったです！[参加レポート](https://burio16.com/blog/8)も書きました

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
layout: content
---

## 本題に入る前に

- TanStack Router / Start は事例が少なく、手探りです！
- 「これが正解」ではなく、試行錯誤の途中を共有したい
- もし知見を持っている方は懇親会でマサカリしてください

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
layout: statement
contentClass: "statement-prose"
---

# そもそも、なぜ TanStack Router？

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
layout: content
---

## 技術選定

- 社内で 0 から作り直す大規模なリプレイス中、フロントの技術選定を行った
- 候補は **Next.js / React Router / TanStack Router** の3案

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
layout: content
---

## 3案の比較

- **Next.js** … Vercel 以外で運用するときの考慮の多さや、Cache Components などの難解さを考えて見送り
- **React Router** … 現状使用中。せっかく作り替えるのに同じ技術使っても楽しくない
- **TanStack** … Next.jsほど辛くなく、React Routerよりもモダンな印象があったので採用！！

→ **TanStack Router を採用**

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
layout: content
---

## でも、現実は無法地帯だった

- なんとなく作ってたら **書き方バラバラ** に
- このままだと AI が **クソコード生成マシン** になってまう
- **ゼロから好きに設計できる絶好のチャンス**

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
layout: statement
contentClass: "statement-prose"
---

# TanStack Routerの良さって？

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
layout: content
---

## TanStack Routerの良さ

- 型安全なルーティング
- 型安全な search params
- ファイルベースルーティング
- `-` prefix コロケーション

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
layout: content
---

## ① 型安全なルーティング

<CodePanel language="tsx">

```tsx
// パスも params も補完が効く・存在しないパスはコンパイルエラー
<Link to="/contracts/$contractId" params={{ contractId }} />

// 受け取る側も型付き（contractId: string）
const { contractId } = Route.useParams();
```

</CodePanel>

- `Link` / `params` が補完され、存在しないパスは **コンパイルエラー**
- リンク切れや typo を **型で**潰せる

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
layout: content
---

## ② 型安全な search params

<CodePanel language="tsx">

```tsx
// URL の ?page=2&tab=archived を schema で定義
export const Route = createFileRoute("/contracts")({
  validateSearch: z.object({
    page: z.number().default(1),
    tab: z.enum(["active", "archived"]).default("active"),
  }),
});

// 読む側は完全に型付き → URL がそのまま型安全な state に
const { page, tab } = Route.useSearch();
```

</CodePanel>

- 戻る / 進む / 直リンクで来た値も **検証済み**で受け取れる
- URL state のための **nuqs** のような追加ライブラリも要らない

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
layout: content
---

## ③ - prefix でコロケーション

<CodePanel language="text">

```text
routes/contracts/
├── index.tsx        ← これだけが /contracts になる
└── -components/     ← `-` prefix で route tree から除外
    ├── Page.tsx
    └── fallbacks/   ← ルート専用の物を隣に置ける
```

</CodePanel>

- ルートに関わる物を **同じ階層**に置けて、URL も汚さない
- この性質が、後の **構成の3案** を考える土台になる

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
layout: statement
contentClass: "statement-prose"
---

# 構成、どうする？

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
layout: content
---

## 意外と大変だった

- 実際の事例が少なく、採用してみると躓いた
- PoC を進めつつ、どうすれば TanStack Router の良さを活かせるかを考えた
- この辺を参考に考えた
  - [https://speakerdeck.com/ytaisei/tanstack-routerwo-xin-gui-purodakutode1nian-jian-yun-yong-sitemitajie-guo](https://speakerdeck.com/ytaisei/tanstack-routerwo-xin-gui-purodakutode1nian-jian-yun-yong-sitemitajie-guo)

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
layout: content
---

## 呟いたらメンテナーが降臨した

<SlideGroup class="flex items-center gap-8">

<SlideGroup class="flex-1 text-left">

- 何も分からず X で「本日も TanStack Router に頭を悩ませた」と呟く
- すると TanStack Router メンテナーが降臨
- 悩みを伝えると → **「どっちでもええんちゃう？**
- ……たぶん悩みをうまく伝えきれてなかった説

</SlideGroup>

<SlideGroup class="image-stack shrink-0" style="width:760px">

![X で TanStack Router の構成について悩みを伝えているスクリーンショット](/slides/tanstack-router-dir-structure/assets/maintainer-x-question.png){class="" data-fragment-index="0" width="1006" height="838" style="display:block;width:100%;height:auto;border-radius:8px" v-click.hide="1"}

![メンテナー Manuel Schiller さんが matter of taste と返信し Virtual File Routes を案内しているスクリーンショット](/slides/tanstack-router-dir-structure/assets/maintainer-x-answer.png){class="" data-fragment-index="0" width="960" height="698" style="display:block;width:100%;height:auto;border-radius:8px" v-click="1"}

</SlideGroup>

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
layout: content
---

## 3案を考えた

1. **features に寄せる**
2. **routes に全部押し込む**
3. **ハイブリッド**

→ 結果的に **3つ目（ハイブリッド）** を採用

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
layout: content
---

## 案① features に寄せる

<CodePanel language="text">

```text
src/
├── features/<domain>/   ← api / hooks / components / Page まで集約
└── routes/<route>/
    └── index.tsx         ← features を読むだけの薄い wrapper
```

</CodePanel>

- `Page` まで features に集約、routes は読むだけの薄い wrapper
- シンプルだが、`-` コロケーションなど **TanStack Router の機能を活かしきれない**

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
layout: content
---

## 案② routes に全部押し込む

<CodePanel language="text">

```text
src/routes/<route>/
├── -api/         ← queryOptions / mutationOptions
├── -hooks/       ← hook
├── -components/  ← View 断片 / fallbacks / Page
└── index.tsx     ← loader / validateSearch
```

</CodePanel>

- `-` prefix で全部 routes に詰め込める → **機能はフル活用**
- ただしルートが肥大化して **ぐちゃぐちゃ**になりがち

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
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
- 機能はフル活用しつつ、**Router 依存を routes に閉じ込められる**いいとこ取り

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
layout: statement
contentClass: "statement-prose"
---

# こんな感じにしました！

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "22/0"
layout: content
---

## ディレクトリ構成

<CodePanel language="text">

```text
apps/<appname>/src/
├── features/
│   └── <domain>/
│       ├── api/        ← データ取得・更新 hook（queryOptions + useSuspenseQuery / useMutation）
│       ├── hooks/      ← form / フローなど画面ロジックの hook（Router 非依存）
│       ├── components/ ← View 断片（Router 非依存）
│       └── その他もろもろ
└── routes/
    └── <route>/
        ├── -components/
        │   ├── fallbacks/  ← 必要なルートのみ（pending / error の中身）
        │   └── Page.tsx    ← Page 本体（components/を使用して画面を構築、Router 依存を features に注入）
        └── index.tsx       ← validateSearch / loader / アダプタの宣言のみ
```

</CodePanel>

- **Router 依存の宣言は routes**、ドメインの実体は features に
- routes と features の分担が **ディレクトリ構造で見える**形に

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "23/0"
layout: content
---

## なぜ fallbacks が要る？

- loader で `ensureQueryData`、component は `useSuspenseQuery` で読む
- loader が一定時間 pending になると `pendingComponent`、失敗すると `errorComponent` が出る
  - `ensureQueryData` で先に埋めておくので、`Page` 側は「取得済み前提」で書ける
- `-components/fallbacks/` に中身を用意する
- prefetch するルートだけなので **「必要なルートのみ」**

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "24/0"
layout: content
---

## コードで見ると

<CodePanel language="tsx">

```tsx
// routes/contracts/index.tsx — 宣言だけ
export const Route = createFileRoute("/contracts")({
  loader: ({ context }) => context.queryClient.ensureQueryData(contractsQueryOptions),
  pendingComponent: ContractsPending, // -components/fallbacks/
  errorComponent: ContractsError, //    -components/fallbacks/
  component: Page,
});

// -components/Page.tsx — データは取得済みとして読む
function Page() {
  const { data } = useSuspenseQuery(contractsQueryOptions);
  return <ContractList items={data} />;
}
```

</CodePanel>

- `index` は宣言だけ、`Page` は「取得済み前提」で `useSuspenseQuery`
- loader の `ensureQueryData` が **routes と features の繋ぎ目**

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "25/0"
layout: content
---

## 採用してどうなった

- features のベストプラクティスと TanStack Router の機能、**両方を活かせる形**に
- Router の変更影響は **routes に閉じる** → features は Router 非依存のまま
- テストの境界も明確に
  - features は依存を mock した単体 / コンポーネントテスト
  - routes は backend だけ mock した **e2e ライクなテスト**
- 反面、component の置き場が **3 つ**に → **AI が迷わない整備**が重要に

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "26/0"
layout: statement
contentClass: "statement-prose"
---

# しかし！<br>突如として<br>server 処理が必要になった

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "27/0"
layout: content
---

## 思い切って Start を採用

- PoC を進めるなか、認証周りなど **server で処理する必要性** が出てきた
- **React Router の SSR モード**に乗り換える / **Hono などで BFF** を立てる
- すでに **TanStack Router 採用済み** → 既存設計を活かしたまま server function / SSR を足せる
  - 思い切って **TanStack Start** に踏み切った（PoC なので「失敗してもええやろ」の精神）

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "28/0"
layout: statement
contentClass: "statement-prose"
---

# とはいえ何も分からん！！！

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "29/0"
layout: statement
contentClass: "statement-prose"
---

# TSKaigi のこの 2 本が刺さった

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "30/0"
layout: content
---

## Server Function の置き場

- [TanStack Start の createServerFn で作る、型が通る API（yt4）](https://2026.tskaigi.org/talks/25)
- [実践 TanStack Start：サーバーとクライアント境界の設計パターン（kaminashi）](https://2026.tskaigi.org/talks/26)

→ この 2 つを参考に Server Function の置き場を決めた

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "31/0"
layout: content
---

## 2 本から学んだこと

- 2 本に共通していたのは **「`createServerFn` の中身は薄く保つ」** という点
- → ロジックは serverFn の外に出す
- さらに **schema / server / function** に分けると良い
  - [https://tanstack.com/start/v0/docs/framework/react/guide/server-functions#file-organization](https://tanstack.com/start/v0/docs/framework/react/guide/server-functions#file-organization)

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "32/0"
layout: statement
contentClass: "statement-prose"
---

# serverFn、どこに置く？

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "33/0"
layout: content
---

## また3案を考えた

1. **src/server に寄せる**
2. **routes にハイブリッド**
3. **features に寄せる**

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "34/0"
layout: content
---

## 案① src/server に集約

<CodePanel language="text">

```text
src/
├── features/<domain>/   ← api / hooks / components
├── routes/<route>/      ← ルーティング宣言のみ
└── server/<entity>/     ← ★ serverFn を全部ここへ集約
    ├── <entity>.functions.ts      wrapper
    ├── <entity>-schema.ts         schema
    └── <verb>-<entity>.server.ts  logic
```

</CodePanel>

- serverFn を横断の `src/server` に全部集約
- 分かりやすいが、管理する場所が **3 つ目**に増える

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "35/0"
layout: content
---

## 案② routes にハイブリッド

<CodePanel language="text">

```text
src/
├── features/<domain>/
│   ├── <entity>-schema.ts         schema
│   └── <verb>-<entity>.server.ts  logic（実体）
└── routes/<route>/
    └── -api/
        └── <entity>.functions.ts  ★ wrapper だけ routes 側
```

</CodePanel>

- wrapper だけ routes、schema / logic は features
- serverFn は `useServerFn` で **component（features 側）から呼べる**
- → wrapper を routes に置くと **features が routes に依存する逆転構造**になる

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "36/0"
layout: content
---

## 案③ features に集約

<CodePanel language="text">

```text
src/features/<domain>/
└── server/                        ← ★ wrapper も含めて全部 features
    ├── <entity>.functions.ts      wrapper
    ├── <entity>-schema.ts         schema
    └── <verb>-<entity>.server.ts  logic
```

</CodePanel>

- wrapper も含めて `features/<domain>/server` に全部
- 管理対象が増えず、「**ロジックの処理**」という性質とも合う

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "37/0"
layout: content
---

## features 寄せを採用

- 判断基準は同じ → **Router 依存なら routes、ドメインに関係するなら features**
- `createServerFn` の wrapper は `Page` のような薄い層ではなく、ドメインに関係していた
- routes に切り出すと、ドメインが routes と features の **2 箇所に分散** する
- → serverFn は **2つ目（routes ハイブリッド）を蹴って、3つ目（features 寄せ）** を採用

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "38/0"
layout: statement
contentClass: "statement-prose"
---

# そしてこんな形にした！

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "39/0"
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
legacyHash: "40/0"
layout: content
---

## TSKaigi が学びになった

- 何も分からなかった server 周りを、TSKaigi のセッションのおかげで前に進められた
- 「`createServerFn` は薄く保つ」という共通の指針が、構成を決める軸になった
- カンファレンスで得た知見を、 **設計に落とし込めた**
- TSKaigi最高！！！

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "41/0"
layout: content
---

## まとめ

- TanStack Router / Start は事例が少なく、決まり事がないと機能を活かしきれない
- TanStack Router の機能を活かしつつ、**Router 依存は routes、ドメインの実体は features** と線引きした
- TSKaigiでの学びを活かし、serverFn の置き場もまとめて決められた
- 成熟した Vite のエコシステムに乗れるので、Next より採用されてほしい

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "42/0"
layout: statement
contentClass: "statement-prose"
---

# ご清聴ありがとうございました
