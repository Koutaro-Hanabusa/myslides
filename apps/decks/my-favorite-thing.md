---
theme: "none"
title: "my-favorite-thing"
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

### MOSH Tech Meetup #5 あなたが「好きなこと」× エンジニアリング

# 大好きなアレをMCPにしてみた

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
layout: profile
color: white
---

## 自己紹介

- ぶりお([@burio_16](https://x.com/burio_16))
- しがない2年目フロントエンドエンジニア
- Tottenham Hotspur FCが大好き

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
layout: statement
contentClass: "statement-prose"
---

# Q.ぶりおと言えばなんでしょう？

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
layout: statement
contentClass: "statement-prose"
---

# A.タコス！！！！！🌮

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
layout: statement
contentClass: "statement-prose"
---

# CTOを名乗っています

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
layout: statement
contentClass: "statement-prose"
---

# Chief<br>Tacos<br>Ojisan

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
layout: statement
contentClass: "statement-prose"
---

# 好きなこと×エンジニアリング

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
layout: statement
contentClass: "statement-prose"
---

# タコス×MCP

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
contentClass: "release-demo"
layout: statement
---

# [Burio de Tacosをリリースしました！！]{class="block text-[0.8em]"}![Burio de Tacosのタコス店一覧と地図](/slides/my-favorite-thing/assets/burio-de-tacos.png){width="2048" height="1027" class="block h-auto w-[85%] rounded-lg" style="margin:2rem auto 0"}web:[tacos.burio16.com](https://tacos.burio16.com/)<br>mcp:[tacos.burio16.com/mcp](https://tacos.burio16.com/mcp)

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
layout: content
---

## コンセプト

- 自他共に認めるタコスおじさんが好きなタコスを共有したい！
- あくまで自分が行ったことある店しか掲載しない
- やってみたかったMCP Appsにも対応したい

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
layout: content
---

## 技術スタック

- **フロントエンド**：React 19 / TanStack Router / TanStack Query / MapLibre GL / Tailwind CSS
- **バックエンド**：Hono / MCP SDK / Drizzle ORM
- **言語**：TypeScript
- **インフラ**：Cloudflare Workers / D1 / R2 / Images / Alchemy
- **ツールチェイン**：Vite+

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
layout: statement
contentClass: "statement-prose"
---

# デモ

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
layout: content
---

## MCP Appsとは？

- MCPサーバーが、Toolと`ui://`形式のUIを紐づけて提供する
- ホストはToolの実行結果を渡し、UIをiframe内に表示する
- UIからToolの再実行や入力ができ、地図・グラフ・フォームなどを会話内で操作できる
- あくまでMCPの拡張機能の一つであり、非対応ホストでは通常のテキスト結果として動作する

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
layout: content
---

## 1. ToolをUIに紐づける

[公式Quickstart](https://apps.extensions.modelcontextprotocol.io/api/documents/quickstart.html)の時刻表示アプリを抜粋

<CodePanel language="ts">

```ts
const resourceUri = "ui://get-time/mcp-app.html";

registerAppTool(
  server,
  "get-time",
  {
    title: "Get Time",
    inputSchema: {},
    _meta: { ui: { resourceUri } },
  },
  async () => {
    const time = new Date().toISOString();
    return { content: [{ type: "text", text: time }] };
  },
);
```

</CodePanel>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
layout: content
---

## 2. UI Resourceを登録

同じURIで、iframeに表示するHTMLをResourceとして返す

<CodePanel language="ts">

```ts
registerAppResource(
  server,
  "Get Time UI",
  resourceUri,
  { mimeType: RESOURCE_MIME_TYPE },
  async () => {
    const html = await fs.readFile("dist/mcp-app.html", "utf-8");
    return {
      contents: [{
        uri: resourceUri,
        mimeType: RESOURCE_MIME_TYPE,
        text: html,
      }],
    };
  },
);
```

</CodePanel>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
layout: content
---

## MCP Appsが向いているケース

- 複雑なデータ探索：地図・グラフを操作して深掘りする
- 選択肢の多い設定：フォームでまとめて入力・検証する
- リッチメディア：PDF・3D・画像をその場で閲覧する
- リアルタイム監視：メトリクス・ログを継続的に更新する
- 複数ステップの作業：レビュー・承認を状態付きで進める

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
layout: statement
contentClass: "statement-prose"
---

# tacos mcp使って<br>お気に入りのタコス屋<br>見つけてください！[お店の提案は[GitHubのissue](https://github.com/Koutaro-Hanabusa/tacos/issues)から！]{class="slide-note"}

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
layout: statement
contentClass: "statement-prose"
---

# 皆様良きタコスライフを🌮

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
layout: statement
contentClass: "statement-prose"
---

# ¡Gracias!
