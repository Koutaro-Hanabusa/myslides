---
theme: "none"
title: "better-t-stack"
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

<div class="slide-body"><div class="text-left"><h3>Cloudflare Meet-up Tokyo Vol.9</h3><br><h1 class="leading-tight">より良い技術スタックで<br>Cloudflareにデプロイしよう</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-black">自己紹介</h2><div class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul><li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li><li>千株式会社システム開発部(25卒)</li><li>社内向け管理画面を開発</li><li>タコスとTottenham Hotspur FCが大好き</li></ul></div></div></div></div>

---
background: "/slides/templates/1e8424e4716c.png"
legacyHash: "2/0"
---

<div class="slide-body"></div>

---
background: "/slides/templates/02c1527ee49d.png"
legacyHash: "3/0"
---

<div class="slide-body"></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">個人で作成したものを<br>どこにデプロイしてますか？？</h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">もちろん<br>Cloudflare Workers/Pagesですよね</h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center"><div class="text-left text-black">私も自分のサイトを<br>Cloudflareにデプロイしました</div><img :src="'/slides/migrated-assets/burio-com.png'" alt="説明"></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">できたッ！LT完！🫵</h1></div></div>

---
background: "/slides/templates/fa74e1541fa0.png"
legacyHash: "8/0"
---

<div class="slide-body"></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">ではどんな技術スタックで<br>デプロイしてますか？</h1></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">ライブラリいちいち入れて<br>設定するのめんどくさくないですか？</h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "11/0"
---

<div class="slide-body"><img :src="'/slides/migrated-assets/better-t-stack.png'" alt="Better T-Stackのトップ画面" class="r-stretch"></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center"><div class="flex flex-col"><h2 class="text-left text-black">Better T Stack</h2><div class="text-left text-black">TypeScriptを使用して開発するためのプロジェクトビルダー</div><ul class="text-left text-black"><li> Webでの選択形式</li><li> CLIでの対話形式</li></ul></div><div class="r-stack"><img :src="'/slides/migrated-assets/web-builder.png'" alt="Web Builder" class="" data-fragment-index="0" v-click.hide="1"><img :src="'/slides/migrated-assets/cli-builder.png'" alt="CLI Builder" class="" data-fragment-index="0" v-click="1"></div></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full flex-col items-center justify-center"><h1 class="text-center">実際にやってみた</h1><a href="https://www.better-t-stack.dev/new" class="text-blue-600">https://www.better-t-stack.dev/new</a></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">Better T Stack使ってみて良かったところ</h2><ul class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6"><li>一発で環境構築完了</li><li>選択肢が多く新たな出会いがある</li><li>オプションが優秀</li></ul></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">Better T Stack使ってみて残念だったところ</h2><ul class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6"><li>CSS,UIライブラリの選択ができない</li><li>テストライブラリが搭載されてない</li><li>wranglerのサポートを終了していた</li><li>日本語のドキュメントがない</li></ul></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "15/1"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center"><div class="text-left text-black">vercelのOSS支援プログラムに選ばれていました🔥</div><img :src="'/slides/migrated-assets/vercel.png'" alt="vercelの支援プログラム" class="r-stretch"> </div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center gap-8"><div class="w-[30%] text-left text-black">issue建ててみました。</div><img :src="'/slides/migrated-assets/burioIssue.png'" alt="ぶりおがissue建てている様子" class="r-stretch !max-w-[60%]"></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center gap-8"><div class="w-[30%] text-left text-black">ここであることに気づきました。<br><br>日本好きそうじゃね...?</div><img :src="'/slides/migrated-assets/amanProfile.png'" alt="アマンのプロフィール" class="r-stretch !max-w-[60%]"></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center gap-8"><div class="w-[30%] text-left text-black">Twitterで釣ろうとしてみました。</div><img :src="'/slides/migrated-assets/buriotweet.png'" alt="ぶりおのツイート" class="r-stretch !max-w-[60%]"></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center gap-8"><div class="w-[30%] text-left text-black">普通に釣れたので、<br>お願いしてみました。</div><img :src="'/slides/migrated-assets/amanReply.png'" alt="アマンのリプライ" class="r-stretch !max-w-[60%]"></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-center gap-8"><div class="w-[30%] text-left text-black">ふられました。<br>無念。</div><img :src="'/slides/migrated-assets/Sorry.png'" alt="ごめんなさい" class="r-stretch !max-w-[60%]"></div></div>

---
background: "/slides/templates/ee839a2ae1b8.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="text-center">やんわりと断られましたが、<br>これからもBetter T Stack使い倒すぞ！！</h1></div></div>

---
background: "/slides/templates/1e9b011d7127.png"
legacyHash: "22/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-black">まとめ</h2><ul class="space-y-2 text-left text-black md:space-y-4 lg:space-y-6"><li>Better T Stackは TypeScriptを使用して開発するための環境を<br>一発で作成できる</li><li>Cloudflareにデプロイするための選択肢も入っていて、<br>Cloudflare側のテンプレよりも便利なものを簡単に入れることができる</li><li>欠点もまだまだあるが、vercelのプログラムに選ばれており、今後の進化に期待</li></ul></div></div>

---
background: "/slides/templates/fa74e1541fa0.png"
legacyHash: "23/0"
---

<div class="slide-body"></div>
