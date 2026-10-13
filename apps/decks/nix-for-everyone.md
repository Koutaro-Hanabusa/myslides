---
theme: "none"
title: "nix-for-everyone"
layout: "migrated"
canvasWidth: 1920
aspectRatio: "16/9"
routerMode: "hash"
wakeLock: false
preloadImages: false
transition: "slide-left"
download: false
drawings: { "enabled": false }
fonts: { "sans": "Source Sans Pro, Helvetica, sans-serif", "mono": "monospace", "provider": "none" }
defaults: { "layout": "migrated" }
highlighter: "shiki"
background: "/slides/templates/4830e1037835.png"
legacyHash: "0/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="text-left"><h3>フロントエンドカンファレンス関西2026</h3><br><h1 class="leading-tight">AI時代に、みんなでフロントを<br>作るためのNix</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお(<a href="https://x.com/burio_16">@burio_16</a>)</li>&#10;<li>千株式会社所属 フロントエンドエンジニア</li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;<li>カンファレンスでは初登壇！</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Nix = dotfiles<br>フロントエンド...?</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">このLTのモチベーション</h2><div class="text-left text-white"><ul>&#10;<li>Claude CodeなどのAIにより、<br>エンジニアでなくてもコードを書くハードルは下がった</li>&#10;<li>エンジニア側でデザイナーが再現できる環境を<br>提供し、環境構築の手間を減らしたい</li>&#10;<li>そのために、開発ツールの構成・バージョンを揃えられるNixを活用！</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">そもそもNixとは...?</h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white"><span class="inline-flex items-center gap-6"><img :src="'/slides/nix-for-everyone/assets/nixos-logomark.svg'" alt="NixOSの雪片ロゴ" width="104" height="96" class="h-24 w-auto"><a href="https://nixos.org/" target="_blank" rel="noopener noreferrer">Nix</a></span></h2><div class="text-left text-white"><ul>&#10;<li>純粋関数型パッケージマネージャー</li>&#10;<li>Reproducible（再現性）：同じ定義・依存関係から環境を再現できる</li>&#10;<li>Declarative（宣言的）：必要なパッケージや開発環境を設定ファイルに宣言する</li>&#10;<li>Reliable（信頼性）：パッケージの追加・更新で、ほかのパッケージを壊しにくい</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white"><a href="https://nix.dev/concepts/flakes.html" target="_blank" rel="noopener noreferrer">flake</a></h2><div class="text-left text-white"><ul>&#10;<li><code>flake.nix</code> に、利用する開発ツールや環境を定義する</li>&#10;<li>生成される<code>flake.lock</code> で、nixpkgsなど入力元のバージョンを固定する</li>&#10;<li>両方を共有すると、定義した開発ツールの構成・バージョンを揃えられる（再現性）</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white"><a href="https://nix.dev/manual/nix/stable/command-ref/new-cli/nix3-develop.html" target="_blank" rel="noopener noreferrer">devShell</a></h2><div class="text-left text-white"><ul>&#10;<li>プロジェクトで使うツールを利用できるシェル環境</li>&#10;<li><code>mkShell</code> で必要なツールを宣言的に定義し、<code>nix develop</code> でその環境に入る</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "h-full large-type"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center w-1/2 pr-12"><h2 class="text-left text-white">cowsayを導入する</h2><div class="text-left text-white"><p class="mt-0 text-[40px] font-bold">flake.nix（抜粋）</p><div class="[&amp;_.sh-code__pre]:!text-[40px]"><div class="sh-code"><pre v-pre class="sh-code__pre"><code>devShells.${system}.default =&#10;  pkgs.mkShellNoCC {&#10;    packages = [ pkgs.cowsay ];&#10;  };</code></pre></div></div><p>cowsayを宣言して <code>nix develop</code> すると、そのシェルでcowsayが使える。<br><code>exit</code> すると元のシェルに戻る。</p></div></div><aside class="absolute right-0 top-1/2 aspect-square w-1/2 -translate-y-1/2"><img :src="'/slides/nix-for-everyone/assets/cowsay-dev-shell-terminal.png'" alt="nix developの前後とexit後にcowsayを実行し、devShell内だけTacotuesdayと話す牛が表示されるターミナル画面" width="673" height="324" class="size-full rounded-lg object-contain" style="max-width:none;max-height:none"></aside></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white"><span class="inline-flex items-center gap-6"><img :src="'/slides/nix-for-everyone/assets/direnv-logo.svg'" alt="direnvのロゴ" width="96" height="96" class="size-24"><a href="https://direnv.net/" target="_blank" rel="noopener noreferrer">direnv</a></span></h2><div class="text-left text-white"><ul>&#10;<li>ディレクトリごとに、環境変数を切り替えるツール</li>&#10;<li><code>.envrc</code> に <code>use flake</code> と書き、<code>direnv allow</code> で読み込みを許可する</li>&#10;<li>利用中のシェルと連携することが出き、<code>nix develop</code>を毎回する必要は無い</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Nixめっちゃええ感じやん！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Nix ≠ dotfiles</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Nix = (開発)環境の管理<br>フロントエンドでも活用できる！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>実際に活用してみた</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">課題</h2><div class="text-left text-white"><ul>&#10;<li>認識合わせやユーザーテストにプロトタイプを使いたい</li>&#10;<li>Figma MakeのAIクレジット上限による<br>都度追加課金と、社外共有がネックに</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "h-full large-type"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center w-1/2 pr-12"><h2 class="text-left text-white">プロトタイプ環境</h2><div class="text-left text-white"><ul>&#10;<li>デザイナーが同じリポジトリにプロトタイプを追加</li>&#10;<li>一覧から各画面のプロトタイプを開いて確認できる</li>&#10;</ul></div></div><aside class="absolute right-0 top-1/2 aspect-square w-1/2 -translate-y-1/2"><img :src="'/slides/nix-for-everyone/assets/prototype-dashboard.png'" alt="複数のプロトタイプがカード形式で並び、それぞれの画面を開けるプロトタイプ環境の一覧" width="2342" height="1772" class="size-full rounded-lg object-contain" style="max-width:none;max-height:none"></aside></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">取り組み</h2><div class="text-left text-white"><ul>&#10;<li>開発環境を定義した<code>flake.nix</code>を用意</li>&#10;<li>自社デザインシステム（MCP・Skills）を活用し、<br>ローカルのClaude Codeでプロトタイプを作成できるように</li>&#10;<li>Gitの操作なども意識しなくていいように、skillsを用意</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">できるようになったこと</h2><div class="text-left text-white"><ul>&#10;<li>環境構築の手間と時間が減り、デザイナーが共通のリポジトリで<br>プロトタイプを作成することができるように</li>&#10;<li>デザイナーがプロトタイプ作成→ ユーザーテスト → FigmaのUI改善を回せるように</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">つまずき</h2><div class="text-left text-white"><ul>&#10;<li>private registry認証用のGitHubトークンを<br>direnv経由で読み込んでいたが、VS Code側に伝わらなかった</li>&#10;<li>CLI・Neovimでは使えていたため気づかず、<br>VS Code用のdirenv拡張を導入して解決</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">まとめ</h2><div class="text-left text-white"><div class="text-[1.25em] leading-relaxed"><ul>&#10;<li>非エンジニアに環境を渡して開発してもらうケースで<br>Nixはかなり有用</li>&#10;<li>AI時代に、みんなでフロントを作るためにNixを活用しよう！</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
contentClass: "large-type nix-deck"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">話せなかったこと</h2><div class="text-left text-white"><ul>&#10;<li>デザインシステムのこと</li>&#10;<li>プロトタイピング環境自体のこと</li>&#10;</ul><p>ぜひ懇親会などで話しましょう！</p></div></div></div>
