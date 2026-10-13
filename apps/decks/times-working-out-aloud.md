---
theme: "none"
title: "times-working-out-aloud"
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
---

<div class="slide-body"><div class="text-left"><h3>社内LT会</h3><br><h1 class="leading-tight">timesとwork out loudで<br>働き方を再考する</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>絶賛禁酒中</li>&#10;<li>W杯が終ったら次はプレミアリーグか開幕が待ち遠しい</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>チームメンバーが&#10;何しているか&#10;何を考えているか&#10;知っていますか？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">このLTの動機</h2><div class="text-left text-white"><ul>&#10;<li>最近、プロジェクトのメンバーが何をやっているのか<br>分からない状態が自分の中で課題になっている</li>&#10;<li>少し前はtimesが盛んだった気がするけれど、最近は静かになってきた</li>&#10;<li>チームメンバーが何をしているか,考えているかを知ることができる状態になれば、<br>より良いものが作れる環境にできそう</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>そこで、timesを再考してみる</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">timesとは</h2><div class="text-left text-white"><ul>&#10;<li><a href="https://craftsman-software.com/posts/56">Slackで簡単に「日報」ならぬ「分報」をチームで実現する3ステップ 〜Problemが10分で解決するチャットを作ろう〜</a>が初出とされる</li>&#10;<li>日報のさらに細かい版のような立ち位置</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">timesをやる意味(個人的見解)</h2><div class="text-left text-white"><ul>&#10;<li>証跡となり、あとから自分のやっていたことを遡れる</li>&#10;<li>思考の整理にもつかうことできる</li>&#10;<li>チャンネル参加者からの知見共有がおこる</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">timesのデメリット</h2><div class="text-left text-white"><div class="flex items-center gap-8"><div class="shrink-0"><ul>&#10;<li>井戸端会議化する&#10;<ul>&#10;<li>見えていない人には、タバコ部屋以上にタチが悪い</li>&#10;</ul>&#10;</li>&#10;<li>承認欲求の過激化</li>&#10;</ul></div><figure class="m-0 flex min-w-0 flex-1 flex-col gap-2"><img :src="'/slides/times-working-out-aloud/assets/songmu-times-tobacco-room.png'" alt="個人timesを、物理的に見えないためタバコ部屋以上にタチが悪いと表現したsongmuの投稿" width="970" height="392" class="h-auto w-full rounded-lg"><figcaption class="text-right text-sm"><a href="https://x.com/songmu/status/831505012857544704?s=20">@songmu, 2017</a></figcaption></figure></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>業務上の真実を<br>timesに書いてはいけない(戒め)</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>必ずしもtimesをやる必要はない</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>チームメンバーが<br>何をしているか、何を考えているかを<br>知ることができる状態を目指したい</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Working Out Loud</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Working Out Loudとは</h2><div class="text-left text-white"><ul>&#10;<li>作業を見えるようにして、考えていることも言葉にすること&#10;<ul>&#10;<li><strong>Observable Work</strong> + <strong>Narrating Your Work</strong></li>&#10;</ul>&#10;</li>&#10;<li>作りかけを見せ、詰まったらすぐに聞く</li>&#10;<li>早いフィードバックや、思いがけないコラボレーションを生む</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><img :src="'/slides/times-working-out-aloud/assets/working-out-loud-in-slack.png'" alt="Working Out Loud を実践するよう呼びかけるSlack投稿" width="2360" height="1550" class="h-auto w-auto max-w-full rounded-lg"></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>しかし</p><div class="flex flex-col gap-6"><figure class="m-0 self-center"><img :src="'/slides/times-working-out-aloud/assets/burio-yasagure.png'" alt="7月は本当にエンジニアとしてやさぐれているため、業務以外でPCを触っていないというぶりおの投稿" width="486" height="190" class="h-auto w-[80rem] max-w-full rounded-lg"></figure></div></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>注:人としてもやさぐれています<br><br>自分の考えを一方的に<br>押し付けてしまっています</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ソフトウェア開発は<br>チームスポーツである。</p><small class="mt-8 block text-right text-2xl">出典: Team Geek 1.4「チームがすべて」</small></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">HRT</h2><div class="text-left text-white"><ul>&#10;<li><strong>Humility</strong>: 全知全能ではないので、自らも改善しよう</li>&#10;<li><strong>Respect</strong>: 相手の能力や功績を称えよう</li>&#10;<li><strong>Trust</strong>: 有能と信じ、任せる</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>HRTをもった上でのチーム開発<br>チームビルディング</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">timesはWOLを実現する手段のひとつ</h2><div class="text-left text-white"><ul>&#10;<li>timesでなくてもよい&#10;<ul>&#10;<li>プロジェクトのチャンネル、作業用スレッド、カンバンなど</li>&#10;</ul>&#10;</li>&#10;<li>大事なのは、作業や思考が必要な人に見えること</li>&#10;<li>だから重要な議論や決定を個人timesで閉じない</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>まとめ（自戒)&#10;まずはHRTを持ち、チームと対話することで適した手段を模索しよう</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ご清聴ありがとうございました</p></h1></div></div>
