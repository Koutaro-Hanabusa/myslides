---
theme: "none"
title: "AI時代に、みんなでフロントを作るためのNix"
titleTemplate: "%s | フロントエンドカンファレンス関西2026"
lang: "ja"
favicon: "/assets/favicon.ico"
seoMeta:
  ogTitle: "AI時代に、みんなでフロントを作るためのNix"
  ogDescription: "フロントエンドカンファレンス関西2026 での発表資料 by ぶりお @burio_16"
  ogImage: "https://slide.burio16.com/nix-for-everyone/og-image.png"
  ogUrl: "https://slide.burio16.com/nix-for-everyone/"
  twitterCard: "summary_large_image"
  twitterTitle: "AI時代に、みんなでフロントを作るためのNix"
  twitterDescription: "フロントエンドカンファレンス関西2026 での発表資料 by ぶりお @burio_16"
  twitterImage: "https://slide.burio16.com/nix-for-everyone/og-image.png"
  twitterSite: "@burio_16"
  twitterUrl: "https://slide.burio16.com/nix-for-everyone/"
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
contentClass: "large-type nix-deck"
mdc: true
---

### フロントエンドカンファレンス関西2026

# AI時代に、みんなでフロントを<br>作るためのNix

### ぶりお @burio_16

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: profile
color: white
---

## 自己紹介

- ぶりお([@burio_16](https://x.com/burio_16))
- 千株式会社所属 フロントエンドエンジニア
- タコスとTottenham Hotspur FCが大好き
- カンファレンスでは初登壇！

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck statement-prose"
layout: statement
---

# Nix = dotfiles<br>フロントエンド...?

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## このLTのモチベーション

- Claude CodeなどのAIにより、\
  エンジニアでなくてもコードを書くハードルは下がった
- エンジニア側でデザイナーが再現できる環境を\
  提供し、環境構築の手間を減らしたい
- そのために、開発ツールの構成・バージョンを揃えられるNixを活用！

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: statement
---

# そもそもNixとは...?

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## ![NixOSの雪片ロゴ](/slides/nix-for-everyone/assets/nixos-logomark.svg){width="104" height="96" class="h-24 w-auto"}[Nix](https://nixos.org/){target="_blank" rel="noopener noreferrer"} {class="flex items-center gap-6"}

- 純粋関数型パッケージマネージャー
- Reproducible（再現性）：同じ定義・依存関係から環境を再現できる
- Declarative（宣言的）：必要なパッケージや開発環境を設定ファイルに宣言する
- Reliable（信頼性）：パッケージの追加・更新で、ほかのパッケージを壊しにくい

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## [flake](https://nix.dev/concepts/flakes.html){target="_blank" rel="noopener noreferrer"}

- `flake.nix` に、利用する開発ツールや環境を定義する
- 生成される`flake.lock` で、nixpkgsなど入力元のバージョンを固定する
- 両方を共有すると、定義した開発ツールの構成・バージョンを揃えられる（再現性）

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## [devShell](https://nix.dev/manual/nix/stable/command-ref/new-cli/nix3-develop.html){target="_blank" rel="noopener noreferrer"}

- プロジェクトで使うツールを利用できるシェル環境
- `mkShell` で必要なツールを宣言的に定義し、`nix develop` でその環境に入る

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "h-full large-type"
layout: split
---

## cowsayを導入する

flake.nix（抜粋） {class="mt-0 text-[40px] font-bold"}

<CodePanel>

```text
devShells.${system}.default =
  pkgs.mkShellNoCC {
    packages = [ pkgs.cowsay ];
  };
```

</CodePanel>

cowsayを宣言して `nix develop` すると、そのシェルでcowsayが使える。\
`exit` すると元のシェルに戻る。

::right::

![nix developの前後とexit後にcowsayを実行し、devShell内だけTacotuesdayと話す牛が表示されるターミナル画面](/slides/nix-for-everyone/assets/cowsay-dev-shell-terminal.png){width="673" height="324" class="size-full rounded-lg object-contain" style="max-width:none;max-height:none"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## ![direnvのロゴ](/slides/nix-for-everyone/assets/direnv-logo.svg){width="96" height="96" class="size-24"}[direnv](https://direnv.net/){target="_blank" rel="noopener noreferrer"} {class="flex items-center gap-6"}

- ディレクトリごとに、環境変数を切り替えるツール
- `.envrc` に `use flake` と書き、`direnv allow` で読み込みを許可する
- 利用中のシェルと連携することが出き、`nix develop`を毎回する必要は無い

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck statement-prose"
layout: statement
---

# Nixめっちゃええ感じやん！

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck statement-prose"
layout: statement
---

# Nix ≠ dotfiles

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck statement-prose"
layout: statement
---

# Nix = (開発)環境の管理<br>フロントエンドでも活用できる！

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck statement-prose"
layout: statement
---

# 実際に活用してみた

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## 課題

- 認識合わせやユーザーテストにプロトタイプを使いたい
- Figma MakeのAIクレジット上限による\
  都度追加課金と、社外共有がネックに

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "h-full large-type"
layout: split
---

## プロトタイプ環境

- デザイナーが同じリポジトリにプロトタイプを追加
- 一覧から各画面のプロトタイプを開いて確認できる

::right::

![複数のプロトタイプがカード形式で並び、それぞれの画面を開けるプロトタイプ環境の一覧](/slides/nix-for-everyone/assets/prototype-dashboard.png){width="2342" height="1772" class="size-full rounded-lg object-contain" style="max-width:none;max-height:none"}

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## 取り組み

- 開発環境を定義した`flake.nix`を用意
- 自社デザインシステム（MCP・Skills）を活用し、\
  ローカルのClaude Codeでプロトタイプを作成できるように
- Gitの操作なども意識しなくていいように、skillsを用意

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## できるようになったこと

- 環境構築の手間と時間が減り、デザイナーが共通のリポジトリで\
  プロトタイプを作成することができるように
- デザイナーがプロトタイプ作成→ ユーザーテスト → FigmaのUI改善を回せるように

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## つまずき

- private registry認証用のGitHubトークンを\
  direnv経由で読み込んでいたが、VS Code側に伝わらなかった
- CLI・Neovimでは使えていたため気づかず、\
  VS Code用のdirenv拡張を導入して解決

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## まとめ

<SlideGroup class="text-[1.25em] leading-relaxed">

- 非エンジニアに環境を渡して開発してもらうケースで\
  Nixはかなり有用
- AI時代に、みんなでフロントを作るためにNixを活用しよう！

</SlideGroup>

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "large-type nix-deck"
layout: content
---

## 話せなかったこと

- デザインシステムのこと
- プロトタイピング環境自体のこと

ぜひ懇親会などで話しましょう！
