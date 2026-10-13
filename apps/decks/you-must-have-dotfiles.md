---
theme: "none"
title: "you-must-have-dotfiles"
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
legacyHash: "0/0"
mdc: true
---

### Yoriai.cafe 二日間限定オープン！

# Vim使いでなくても<br>dotfilesを管理しよう

### ぶりお @burio_16

---
background: "/slides/templates/1e8424e4716c.png"
legacyHash: "1/0"
layout: blank
---



---
background: "/slides/templates/02c1527ee49d.png"
legacyHash: "2/0"
layout: blank
---



---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "3/0"
layout: profile
color: black
---

## 自己紹介

- ぶりお [@burio_16](https://x.com/burio_16)
- 千株式会社システム開発部(25卒)
- 社内向け管理画面を開発
- タコスとTottenham Hotspur FCが大好き

::photo::

![ぶりおの写真](/slides/react-three-fiber/assets/burio.png){width="500" height="500" class="natural-image"}

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "4/0"
layout: content
color: black
---

## 本編に入る前にお詫び

現在のdotfiles管理はNixのHome managerなどを使った手法で行うのが流行りとなっています。
今回のLTではNixでのやり方は出てきません。
Nixを使ってdotfilesをやりたい方は、[2026年にnixを始める方法](https://zenn.dev/koba_e964/articles/32a7e0c345affe)などをご参照ください

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "5/0"
layout: statement
---

# みなさん dotfilesって管理してますか？？

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "6/0"
layout: content
color: black
---

<SlideGroup class="flex items-center gap-8" bare>

私は管理してます

![mydotfiles](/slides/you-must-have-dotfiles/assets/mydotfiles.png){width="1850" height="1138" class="max-w-[75%] h-auto"}

</SlideGroup>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "7/0"
layout: statement
---

# 最近こんなことがありました

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "8/0"
layout: content
color: black
---

<SlideGroup class="flex items-center gap-8">

- どういう設定をしているのかよくわからない！！！
- 設定してる部分送ってくれや！\
  でもLINEだと送りにくいか😢

![同期とのLINEのやりとり](/slides/you-must-have-dotfiles/assets/LINE.png){width="768" height="348" class="max-w-[75%] h-auto"}

</SlideGroup>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "9/0"
layout: statement
contentClass: "statement-prose"
---

# みんなAIを使っているということは、<br>~~/.claude/や~~/.codex/が存在しているはず

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "10/0"
layout: statement
contentClass: "statement-prose"
---

# こういう設定ファイルも<br>dotfilesで管理できると便利じゃない？

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "11/0"
layout: content
color: black
---

## そもそもdotfilesとは

- zshやbashなどのホームディレクトリにある\
  ドットから始まるファイル(.zshrcなど)を管理しているリポジトリ
- たくさんのエンジニアが設定を公開するためにGitHubにあげている

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "12/0"
layout: content
color: black
---

## dotfilesを管理することのメリット

- 仕事用、私用PCなど異なるPC間で設定を共有できる
- 自分の設定の履歴を管理することができる
- 他の人が簡単に設定を参照できる(~~そしてパクれる~~)

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "13/0"
layout: statement
---

# よし、dotfilesで管理しましょう！！！！！

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "14/0"
layout: statement
---

# まずはchezmoiを使って気軽に管理し始めよう

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "15/0"
layout: content
color: black
---

## chezmoiとは

<SlideGroup class="flex flex-row gap-8 items-center">

- [chezmoi(読みはシェモア)](https://github.com/twpayne/chezmoi)
- dotfilesを複数のPC間で安全に管理するためのgo製ツール
- GitHub上でスター数が17k以上ありdotfilesの管理ツールとして人気

![chezmoiの画像](/slides/you-must-have-dotfiles/assets/chezmoi.png){width="2510" height="1586" class="max-w-[50%]"}

</SlideGroup>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "16/0"
layout: content
color: black
---

## 始め方

※前提：macユーザー(brewを使用します)、Git/GitHubの基本的な操作ができる人

chezmoiをインストールする

```bash
brew install chezmoi
```

出力例

```text
1126buri@MacBook-Air-2 ~ % brew install chezmoi
==> Fetching downloads for: chezmoi
✔︎ Bottle chezmoi (2.69.3) Downloaded 12.1MB
==> Pouring chezmoi--2.69.3.arm64_sequoia.bottle.tar.gz
🍺  /opt/homebrew/Cellar/chezmoi/2.69.3: 9 files, 33.3MB
```

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "17/0"
layout: content
color: black
---

chezmoiを初期化する

```bash
chezmoi init
```

CLAUDE.mdやskillsを管理下にする（※mcp.jsonはAPIキーが含まれるので追加しない）

```bash
chezmoi add ~/.claude/CLAUDE.md ~/.claude/settings.json ~/.claude/commands ~/.claude/skills ~/.claude/agents ~/.claude/plugins/installed_plugins.json
```

管理下になったことを確認する

```bash
chezmoi managed
```

出力例(一部抜粋)

```text
.claude/CLAUDE.md
.claude/agents/frontend-developer.md
.claude/plugins/installed_plugins.json
.claude/settings.json
.claude/skills/frontend-design/SKILL.md
```

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "18/0"
layout: content
color: black
---

chezmoiが管理しているディレクトリが生成されるので移動する

```bash
chezmoi cd
```

ホームディレクトリ配下にこのようなディレクトリが作成されていることを確認できればOK

```bash
pwd
# ~/.local/share/chezmoi
```

あとはいつも通りコミットしてPushすればOK!

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "19/0"
layout: content
color: black
---

## 他のPCでも設定を共通化したい場合

```bash
chezmoi init --apply https://github.com/username/dotfiles.git
```

`--apply`オプションで初期化と同時に設定を適用できる

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "20/0"
layout: content
color: black
---

## まとめ

- dotfilesとは、zshやbashの設定だけでなくAIの設定を管理するためにも有用
- chezmoiはdotfilesを管理し始めるためにはもってこいのツールだった
- 他の人に設定を共有することも簡単になる(~~パクりやすくなる~~)

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "21/0"
layout: statement
---

# コレで君も今日からdotfilerだ！！！！

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "22/0"
layout: statement
contentClass: "statement-prose"
---

# このLTを見てdotfilesを作成したら [ぶりおのTwitter](https://x.com/burio_16)までご連絡ください！

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "23/0"
layout: statement
contentClass: "statement-prose"
---

# おれの設定か？<br>欲しけりゃくれてやるぜ...<br>この世の全てを[そこ](https://github.com/Koutaro-Hanabusa/dotfiles)に置いてきた

---
background: "/slides/templates/fa74e1541fa0.png"
legacyHash: "24/0"
layout: blank
---
