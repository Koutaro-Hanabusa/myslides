---
theme: "none"
title: "oss-and-community"
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

<div class="slide-body"><div class="text-left"><h3>社内LT会</h3><br><h1 class="leading-tight">実績解除：OSSコントリビュート</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;<li>いろんな人にタコスの人だと思われている</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">昨日もタコスを作りました</h2><div class="text-left text-white"><ul>&#10;<li>チキンティンガタコス</li>&#10;<li>マンゴーとハラペーニョのサルサ</li>&#10;</ul><img :src="'/slides/oss-and-community/assets/chikintinga.JPG'" alt="チキンティンガ" width="1474" height="1110" style="margin:0 auto;display:block;max-height:700px"></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center">vitestにPRマージされました</h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">vitestとは？</h2><div class="text-left text-white"><ul>&#10;<li>JavaScriptの世界的なテストフレームワーク</li>&#10;<li>あのvoidzeroが開発しているテストフレームワーク</li>&#10;<li>GitHubスター数 16k+</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>きっかけはPRのレビュー中</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">バグ発見の経緯</h2><div class="text-left text-white"><ul>&#10;<li>Storybook用にインタラクションテストのconfigを作成</li>&#10;<li>ファイル名: <code>vitest.storybook-browser.config.ts</code>（ハイフン入り）</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">原因を突き止めた</h2><div class="text-left text-white"><ul>&#10;<li>CLIでファイルを直接指定すると動く</li>&#10;<li>Storybookから実行するとglobでconfigを検索 → 引っかからない</li>&#10;<li>原因: <code>resolveProjects.ts</code> の正規表現 <code>\w+</code> がハイフンを許容していなかった</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">人生初のissue</h2><div class="text-left text-white"><ul>&#10;<li>恐る恐るissueを立ててみた</li>&#10;<li><a href="https://github.com/vitest-dev/vitest/issues/9739">vitest-dev/vitest #9739</a></li>&#10;<li>「とりあえず報告だけ...」くらいの温度感</li>&#10;<li>この時はドキュメントを直そうぜの提案</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">コミュニティイベントでの出会い</h2><div class="text-left text-white"><ul>&#10;<li>React Tokyoフェスでvoidzeroの人と話す機会が！</li>&#10;<li>「こんなissue立てたんですよ」と話してみた</li>&#10;<li>「初めてなんですが、どんなスタンスでいればいいですか？」と聞いた</li>&#10;<li><strong>この会話はコミュニティという場がなければ絶対に生まれなかった</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">PR提出 → マージ</h2><div class="text-left text-white"><ul>&#10;<li>修正は <code>\w+</code> → <code>[\w-]+</code> のたった1文字</li>&#10;<li>2人のメンテナーにapproveされてマージ（2026/3/5）</li>&#10;<li>PR: <a href="https://github.com/vitest-dev/vitest/pull/9760">vitest-dev/vitest #9760</a></li>&#10;</ul><img :src="'/slides/oss-and-community/assets/vitest.png'" alt="vitest PR #9760" width="1200" height="600" style="margin:0 auto"></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">changelogにも名前が載った✌️</h2><div class="text-left text-white"><img :src="'/slides/oss-and-community/assets/changelog.png'" alt="vitest changelog" width="1760" height="326" style="margin:0 auto;display:block"></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>外に出たから<br>できたOSSコントリビュート</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>今日話したいことは<br>自分語りではありません！！！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><span style="color:#dc2626">外に出たから</span><br><p>できたOSSコントリビュート</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">そもそもどのくらい行ってんねん</h2><div class="text-left text-white"><ul>&#10;<li>初めて外部のイベントに行ったのはフロントエンドカンファレンス東京</li>&#10;<li>9/21~3/22の間で33回</li>&#10;<li>月5.5回、年間換算で約66回ペース（ほぼ週1以上）</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">なんでそんなに行くのか</h2><div class="text-left text-white"><ul>&#10;<li>強いエンジニアがそこにいるから</li>&#10;<li>自分を表現することが好きだから(コレはLTの話)</li>&#10;<li>シンプルに楽しいから</li>&#10;</ul><iframe width="720" height="405" src="https://www.youtube.com/embed/ELzOJBhPXrs?start=539" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin:0 auto;display:block"></iframe></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">外部コミュニティに出て得たもの</h2><div class="text-left text-white"><ul>&#10;<li>刺激</li>&#10;<li>同じ技術に興味を持つ仲間との出会い</li>&#10;<li>自分の仕事が世界中のOSSに繋がる体験</li>&#10;<li>新卒でも、やってみたら意外とできた</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">外に出るハードル、実は低い</h2><div class="text-left text-white"><ul>&#10;<li>connpassでイベントを探すだけ</li>&#10;<li>最初は聞くだけでもOK</li>&#10;<li>懇親会で1人に話しかけるだけで世界が広がる&#10;<ul>&#10;<li>お酒を手にもって乾杯すれば誰とでも喋れます</li>&#10;</ul>&#10;</li>&#10;<li>勇気がいるのは最初の1回だけ</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>外部イベントは遠足！！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">外部イベントは遠足</h2><div class="text-left text-white"><ul>&#10;<li>ワクワクするものにいきましょう</li>&#10;<li>定期開催、または第n回など回数を重ねるタイプのイベントに<br>行くといっぱいワクワクできます</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>みんなも一緒に外に出ていこう！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "22/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">まとめ</h2><div class="text-left text-white"><ul>&#10;<li>外部イベントに参加したら、思わぬ出会いと機会があった</li>&#10;<li>その出会いがOSSコントリビュートに繋がった</li>&#10;<li>新卒ペーペーでも世界的なOSSに貢献できた</li>&#10;<li><strong>社内にいるだけでは得られない経験がそこにある</strong></li>&#10;<li>一緒にイベント行きましょう！声かけてください！</li>&#10;</ul></div></div></div>
