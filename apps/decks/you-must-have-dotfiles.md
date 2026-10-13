---
theme: "none"
title: "you-must-have-dotfiles"
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
background: "/slides/templates/ce83e2a9c143.png"
legacyHash: "0/0"
---

<div class="slide-body"><div class="text-left"><h3>Yoriai.cafe 二日間限定オープン！</h3><br><h1 class="leading-tight">Vim使いでなくても<br>dotfilesを管理しよう</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/1e8424e4716c.png"
legacyHash: "1/0"
---

<div class="slide-body"></div>

---
background: "/slides/templates/02c1527ee49d.png"
legacyHash: "2/0"
---

<div class="slide-body"></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-black">自己紹介</h2><div class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>千株式会社システム開発部(25卒)</li>&#10;<li>社内向け管理画面を開発</li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">本編に入る前にお詫び</h2><div class="text-left text-black"><p>現在のdotfiles管理はNixのHome managerなどを使った手法で行うのが流行りとなっています。&#10;今回のLTではNixでのやり方は出てきません。&#10;Nixを使ってdotfilesをやりたい方は、<a href="https://zenn.dev/koba_e964/articles/32a7e0c345affe">2026年にnixを始める方法</a>などをご参照ください</p></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">みなさん dotfilesって管理してますか？？</h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><div class="text-left text-black"><div class="flex items-center gap-8">私は管理してます<img :src="'/slides/you-must-have-dotfiles/assets/mydotfiles.png'" alt="mydotfiles" width="1850" height="1138" class="max-w-[75%] h-auto"></div></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">最近こんなことがありました</h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><div class="text-left text-black"><div class="flex items-center gap-8"><div><ul>&#10;<li>どういう設定をしているのかよくわからない！！！</li>&#10;<li>設定してる部分送ってくれや！<br>でもLINEだと送りにくいか😢</li>&#10;</ul></div><img :src="'/slides/you-must-have-dotfiles/assets/LINE.png'" alt="同期とのLINEのやりとり" width="768" height="348" class="max-w-[75%] h-auto"></div></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>みんなAIを使っているということは、&#10;<del>/.claude/や</del>/.codex/が存在しているはず</p></h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>こういう設定ファイルも&#10;dotfilesで管理できると便利じゃない？</p></h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">そもそもdotfilesとは</h2><div class="text-left text-black"><ul>&#10;<li>zshやbashなどのホームディレクトリにある<br>ドットから始まるファイル(.zshrcなど)を管理しているリポジトリ</li>&#10;<li>たくさんのエンジニアが設定を公開するためにGitHubにあげている</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">dotfilesを管理することのメリット</h2><div class="text-left text-black"><ul>&#10;<li>仕事用、私用PCなど異なるPC間で設定を共有できる</li>&#10;<li>自分の設定の履歴を管理することができる</li>&#10;<li>他の人が簡単に設定を参照できる(<del>そしてパクれる</del>)</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">よし、dotfilesで管理しましょう！！！！！</h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">まずはchezmoiを使って気軽に管理し始めよう</h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">chezmoiとは</h2><div class="text-left text-black"><div class="flex flex-row gap-8 items-center"><div><ul>&#10;<li><a href="https://github.com/twpayne/chezmoi">chezmoi(読みはシェモア)</a></li>&#10;<li>dotfilesを複数のPC間で安全に管理するためのgo製ツール</li>&#10;<li>GitHub上でスター数が17k以上ありdotfilesの管理ツールとして人気</li>&#10;</ul></div><img :src="'/slides/you-must-have-dotfiles/assets/chezmoi.png'" alt="chezmoiの画像" width="2510" height="1586" class="max-w-[50%]"></div></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">始め方</h2><div class="text-left text-black"><p>※前提：macユーザー(brewを使用します)、Git/GitHubの基本的な操作ができる人</p><p>chezmoiをインストールする</p><pre v-pre><code class="language-bash">brew install chezmoi&#10;</code></pre><p>出力例</p><pre v-pre><code>1126buri@MacBook-Air-2 ~ % brew install chezmoi&#10;==&gt; Fetching downloads for: chezmoi&#10;✔︎ Bottle chezmoi (2.69.3) Downloaded 12.1MB&#10;==&gt; Pouring chezmoi--2.69.3.arm64_sequoia.bottle.tar.gz&#10;🍺  /opt/homebrew/Cellar/chezmoi/2.69.3: 9 files, 33.3MB&#10;</code></pre></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><div class="text-left text-black"><div class="h-full"><p>chezmoiを初期化する</p><pre v-pre><code class="language-bash">chezmoi init&#10;</code></pre><p>CLAUDE.mdやskillsを管理下にする（※mcp.jsonはAPIキーが含まれるので追加しない）</p><pre v-pre><code class="language-bash">chezmoi add ~/.claude/CLAUDE.md ~/.claude/settings.json ~/.claude/commands ~/.claude/skills ~/.claude/agents ~/.claude/plugins/installed_plugins.json&#10;</code></pre><p>管理下になったことを確認する</p><pre v-pre><code class="language-bash">chezmoi managed&#10;</code></pre><p>出力例(一部抜粋)</p><pre v-pre><code>.claude/CLAUDE.md&#10;.claude/agents/frontend-developer.md&#10;.claude/plugins/installed_plugins.json&#10;.claude/settings.json&#10;.claude/skills/frontend-design/SKILL.md&#10;</code></pre></div></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><div class="text-left text-black"><p>chezmoiが管理しているディレクトリが生成されるので移動する</p><pre v-pre><code class="language-bash">chezmoi cd&#10;</code></pre><p>ホームディレクトリ配下にこのようなディレクトリが作成されていることを確認できればOK</p><pre v-pre><code class="language-bash">pwd&#10;# ~/.local/share/chezmoi&#10;</code></pre><p>あとはいつも通りコミットしてPushすればOK!</p></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">他のPCでも設定を共通化したい場合</h2><div class="text-left text-black"><pre v-pre><code class="language-bash">chezmoi init --apply https://github.com/username/dotfiles.git&#10;</code></pre><p><code>--apply</code>オプションで初期化と同時に設定を適用できる</p></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">まとめ</h2><div class="text-left text-black"><ul>&#10;<li>dotfilesとは、zshやbashの設定だけでなくAIの設定を管理するためにも有用</li>&#10;<li>chezmoiはdotfilesを管理し始めるためにはもってこいのツールだった</li>&#10;<li>他の人に設定を共有することも簡単になる(<del>パクりやすくなる</del>)</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">コレで君も今日からdotfilerだ！！！！</h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "22/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>このLTを見てdotfilesを作成したら <a href="https://x.com/burio_16">ぶりおのTwitter</a>までご連絡ください！</p></h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "23/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>おれの設定か？&#10;欲しけりゃくれてやるぜ...&#10;この世の全てを</p><p><a href="https://github.com/Koutaro-Hanabusa/dotfiles">そこ</a>に置いてきた</p></h1></div></div>

---
background: "/slides/templates/fa74e1541fa0.png"
legacyHash: "24/0"
---

<div class="slide-body"></div>
