---
theme: "none"
title: "oss-and-community-v2"
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

<div class="slide-body"><div class="text-left"><h3>React Tokyo ミートアップ #15</h3><br><h1 class="leading-tight">実績解除：OSSコントリビュート V2</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-black">自己紹介</h2><div class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>ついに2年目になってしまいました</li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;<li>いろんな人にタコスの人だと思われている</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>みなさんReact Tokyo Fes<br>行きましたか？</p></h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">もちろん行きました</h2><div class="text-left text-black"><div class="r-stack"><img :src="'/slides/oss-and-community-v2/assets/tacos.JPG'" alt="React Tokyoフェス" class="" data-fragment-index="0" width="4032" height="3024" style="margin:0 auto;display:block;max-height:700px" v-click.hide="1"><img :src="'/slides/oss-and-community-v2/assets/react-tokyo-fes.JPG'" alt="タコス" class="" data-fragment-index="0" width="4032" height="3024" style="margin:0 auto;display:block;max-height:700px" v-click="1"></div></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">レポートも出てましたね</h2><div class="text-left text-black"><ul>&#10;<li>ぜひ読んでください！(書いた人ではありません)</li>&#10;<li><a href="https://zenn.dev/react_tokyo/articles/2026-02-28-fest-report">React Tokyoフェス2026イベントレポート</a></li>&#10;</ul><img :src="'/slides/oss-and-community-v2/assets/reacttokyo-report.png'" alt="React Tokyoフェス 2026 イベントレポート" width="1200" height="630" style="margin:0 auto;display:block;max-height:700px"></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ただの参加者の感想</p></h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>めちゃくちゃ<br><del>タコスがうまかったです</del><br>学びも多く楽しかったです！</p></h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>終</p></h1></div></div>

---
background: "/slides/templates/ce83e2a9c143.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="text-left"><h3>React Tokyo ミートアップ #15</h3><br><h1 class="leading-tight">実績解除：OSSコントリビュート V2</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>今日はReact Tokyoフェスに参加したからできたことの話です</p></h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">VitestにPRマージされました</h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">Vitestとは？</h2><div class="text-left text-black"><ul>&#10;<li>JavaScriptの世界的なテストフレームワーク</li>&#10;<li>あのvoidzeroが開発しているテストフレームワーク</li>&#10;<li>GitHubスター数 16k+</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>きっかけはPRのレビュー中</p></h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">バグ発見の経緯</h2><div class="text-left text-black"><ul>&#10;<li>Storybook用にインタラクションテストのconfigを作成</li>&#10;<li>ファイル名: <code>vitest.storybook-browser.config.ts</code>（ハイフン入り）</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">原因を突き止めた</h2><div class="text-left text-black"><ul>&#10;<li>Storybookから実行するとglobでconfigを検索 → 引っかからない</li>&#10;<li><code>resolveProjects.ts</code> の正規表現がハイフンを許容していなかった</li>&#10;<li><a href="https://github.com/vitest-dev/vitest/blob/main/packages/vitest/src/node/projects/resolveProjects.ts">実際のコード</a></li>&#10;</ul><pre v-pre><code class="language-typescript" data-trim="true" data-noescape="true">// packages/vitest/src/node/projects/resolveProjects.ts&#10;&#10;// vitest.config.*&#10;// vite.config.*&#10;// vitest.unit.config.*&#10;// vitest.unit-test.config.* ← これがマッチしない！&#10;&#10;const CONFIG_REGEXP = /^vite(?:st)?(?:\.\w+)?\.config\./&#10;//                                     ^^^^&#10;// \w+ は [a-zA-Z0-9_] のみ → "-" にマッチしない 😱&#10;// vitest.storybook-browser.config.ts → マッチしない</code></pre></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">実際のglobの挙動</h2><div class="text-left text-black"><ul>&#10;<li>CLIで直接指定 → そのまま使うのでOK ✅</li>&#10;</ul><pre v-pre><code class="language-bash" data-trim="true" data-noescape="true"># CLI直接指定 → 問題なし&#10;$ vitest --config vitest.storybook-browser.config.ts&#10;&#10;# glob検索 → ハイフン入りファイル名がマッチしない&#10;vitest.storybook-browser.config.ts&#10;     ^^^^^^^^^^^^^^^^^^&#10;     \w+ は [a-zA-Z0-9_] のみ → "-" にマッチしない</code></pre></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">人生初のissue</h2><div class="text-left text-black"><ul>&#10;<li>恐る恐るissueを立ててみた</li>&#10;<li><a href="https://github.com/vitest-dev/vitest/issues/9739">vitest-dev/vitest #9739</a></li>&#10;<li>「とりあえず報告だけ...」くらいの温度感</li>&#10;<li>この時はドキュメントを直そうぜの提案</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">偶然の出会い</h2><div class="text-left text-black"><ul>&#10;<li>React Tokyoフェスでvoidzeroの人と話す機会が！</li>&#10;<li>「こんなissue立てたんですよ」と話してみた</li>&#10;<li>「初めてなんですが、どんなスタンスでいればいいですか？」と聞いた</li>&#10;<li><strong>この会話はReact Tokyoフェスがなければ絶対に生まれなかった</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">PR提出 → マージ</h2><div class="text-left text-black"><ul>&#10;<li>修正はたった1文字の変更</li>&#10;<li>2人のメンテナーにapproveされてマージ（2026/3/5）</li>&#10;<li>PR: <a href="https://github.com/vitest-dev/vitest/pull/9760">vitest-dev/vitest #9760</a></li>&#10;</ul><pre v-pre><code class="language-diff" data-trim="true" data-noescape="true">// packages/vitest/src/node/projects/resolveProjects.ts&#10;&#10;- const CONFIG_REGEXP = /^vite(?:st)?(?:\.\w+)?\.config\./&#10;+ const CONFIG_REGEXP = /^vite(?:st)?(?:\.[\w-]+)?\.config\./&#10;//                                       ^^^&#10;//                                   ハイフンを追加！</code></pre></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">changelogにも名前が載った✌️</h2><div class="text-left text-black"><img :src="'/slides/oss-and-community/assets/changelog.png'" alt="vitest changelog" width="1760" height="326" style="margin:0 auto;display:block"></div></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">感謝</h2><div class="text-left text-black"><ul>&#10;<li>React TokyoフェスのおかげでまさかのOSSコントリビュート！&#10;<ul>&#10;<li><a href="https://x.com/hiroshi_18181">Hiroshi Ogawa</a>さんありがとうございます</li>&#10;</ul>&#10;</li>&#10;<li>フロントエンドをやりたいけど知識不足な自分にも少し自信がついた&#10;<ul>&#10;<li>コミュニティに参加して良かった！イベントに参加して良かった！！</li>&#10;</ul>&#10;</li>&#10;<li>今年もフェス楽しみにしてます！&#10;<ul>&#10;<li>次はスタッフ側としてReact Tokyoに貢献する動きをしたいと思います！</li>&#10;</ul>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>以上、Vitestコントリビューター(語弊)<br>ぶりおの自分語りLTでした。</p></h1></div></div>
