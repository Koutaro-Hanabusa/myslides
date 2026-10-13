---
theme: "none"
title: "vite-plus-retro"
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

<div class="slide-body"><div class="text-left"><h3>TSKaigi 2026事後勉強会</h3><br><h1 class="leading-tight">Vite+を爆速で社内デザインシステムに導入してみた</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;<li>TSKaigiは初参加でした</li>&#10;<li>VoidZeroのﾊｧﾝ</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">VoidZero のﾊｧﾝです</h2><div class="text-left text-white"><div class="r-stack mt-6"><img :src="'/slides/vite-plus-retro/assets/sponsor-vite-tweet.png'" alt="ぶりおが @vitejs を GitHub Sponsors でスポンサーしたツイート" class="" data-fragment-index="0" width="470" height="233" style="margin:0 auto;display:block;width:900px;height:auto;max-width:100%;border-radius:8px" v-click.hide="1"><img :src="'/slides/vite-plus-retro/assets/vite-plus-sensu.png'" alt="TSKaigi 会場で「Vite+」と書かれた扇子を持つぶりおと VoidZero メンバーのツーショット" class="" data-fragment-index="0" width="2048" height="1536" style="margin:0 auto;display:block;width:1100px;height:auto;max-height:760px;max-width:100%;border-radius:8px" v-click="1"></div><p>スポンサーするくらいには好き。会場では扇子にVite+と入れてもらってAlexとツーショ撮った。</p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>そもそも Vite+ って？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Vite+ とは</h2><div class="text-left text-white"><ul>&#10;<li><strong>test / lint / fmt / task / Node</strong> を <code>vp</code> ひとつに束ねる統合ツールチェイン</li>&#10;<li>中身は Vite / Vitest / Oxlint / Oxfmt / tsdown / Vite Task（VoidZero 製）</li>&#10;<li>2026/3/13 公開・<strong>まだ α 版</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Vite+ が解決する課題</h2><div class="text-left text-white"><ul>&#10;<li>他の言語：統合ツールチェインが <strong>当たり前</strong></li>&#10;<li>JS：ツールの選択肢が多く、環境ごとにバラバラになりがち</li>&#10;<li>→ その課題を <strong>Vite+ が解決</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">設定ファイル、散らばりがち</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>Before: ツールごとに設定が散らばる&#10;  turbo.json&#10;  vitest.config.ts&#10;  oxlint / oxfmt の設定&#10;  lefthook.yml&#10;  ...&#10;&#10;After: vite.config.ts に寄せられた&#10;  vite.config.ts  ← test / lint / fmt / build / task</code></pre></div><ul>&#10;<li>test / lint / fmt / build / task / hooks が <strong>別々の道具</strong>になりがち</li>&#10;<li>Vite+ はこの散らばりを <strong><code>vite.config.ts</code> に寄せる</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>どこに導入した？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">社内デザインシステム</h2><div class="text-left text-white"><ul>&#10;<li>社内で <strong>デザインシステム</strong> を開発中</li>&#10;<li>構成は <strong>Vite + Vitest + Oxlint + Oxfmt</strong> のモノレポ（タスクは Turborepo）</li>&#10;<li>→ Vite+ が束ねる範囲と <strong>ほぼ重なっていた</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>爆速(当社比)で移行</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">3/13 → 3/24</h2><div class="text-left text-white"><ul>&#10;<li>公開から移行完了まで、わずか <strong>10日ちょっと</strong></li>&#10;<li>α版をもう本番に投入</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">なぜ飛び込めた？</h2><div class="text-left text-white"><ul>&#10;<li>まだ <strong>本格運用前</strong>（リプレイス後に使う想定）</li>&#10;<li>元から <strong>ツールがほぼ Vite+ の範囲内</strong>（Vite/Vitest/Oxlint/Oxfmt）</li>&#10;<li>とはいえ α 版なので <strong>最後の一歩は躊躇</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>マネージャー<br>「<strong>ビルドできればいいんじゃない？</strong>」</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ほな導入したろか！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>爆速！！(当社比)</p><img :src="'/slides/vite-plus-retro/assets/pr-135.png'" alt="Vite+ への移行 PR #135（Turborepo 廃止・ツールチェーン統合、25 commits を main にマージ）" width="1069" height="254" style="margin:1.5rem auto 0;display:block;width:1600px;height:auto;max-width:100%;max-height:520px;border-radius:8px"></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">移行 PR でやったこと</h2><div class="text-left text-white"><ul>&#10;<li><code>vp migrate</code> で <strong>Vite / Vitest / Oxlint / Oxfmt / Turborepo</strong> を統合</li>&#10;<li><code>turbo.json</code> ほか各種設定ファイルを <strong>まとめて削除</strong></li>&#10;<li>テスト import を <strong><code>vitest</code> → <code>vite-plus/test</code></strong> に変更</li>&#10;<li>CI も <strong><code>voidzero-dev/setup-vp</code></strong> ベースに変更</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>実際どうだった？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった① vp migrate が最高</h2><div class="text-left text-white"><ul>&#10;<li>既存プロジェクトを Vite+ に移行するための <strong>スタート地点</strong></li>&#10;<li>依存関係・import・設定ファイル・scripts を <strong>まとめて更新</strong></li>&#10;<li>hooks・AI agent・エディタ設定のセットアップにも対応</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった② 設定が一箇所に</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// vite.config.ts （実物）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">export</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">default</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">defineConfig</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">test</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Vitest</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">staged</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// git hooks（pre-commit）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">fmt</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">   </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Oxfmt</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">run</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">   </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// タスク実行（キャッシュ付き）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">lint</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Oxlint</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span></code></pre></div><ul>&#10;<li><code>vite.config.ts</code> の <code>defineConfig</code> に <strong>設定が全部同居</strong></li>&#10;<li>test / staged / fmt / run / lint が <strong>1ファイル</strong>で完結</li>&#10;<li><code>vp lint</code> だけで <strong>type linting</strong>（oxlint-tsgolint）まで実行</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった③ Vite Task (vp run)</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// package.json</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">build</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">vp run -r build</span><span class="sh__token--string" style="color:var(--sh-string)">"</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// -r = 全 workspace を依存順に実行（既定で最大4並列）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// vite.config.ts</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--identifier" style="color:var(--sh-identifier)">run</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">cache</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">scripts</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// 使ったファイルを自動追跡してキャッシュ</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span></span></code></pre></div><ul>&#10;<li><code>-r</code> で <strong>全 workspace を依存順に実行</strong></li>&#10;<li><strong>モノレポでも問題なく動作</strong></li>&#10;<li>Turborepo 的なタスク実行を <strong>Vite+ の中</strong>で完結</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった③ キャッシュがあると爆速</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>$ vp run -r build      # 2回目（変更なし）&#10;  ~/packages/hoge$     vp pack  ◉ cache hit, replaying&#10;  ~/packages/fuga$      tsc ...   ◉ cache hit, replaying&#10;  ~/packages/piyo$ vp pack  ◉ cache hit, replaying&#10;  ──────────────────────────────────────&#10;  vp run: 4/5 cache hit (80%), 27.38s saved&#10;  ↑ ui-preview(Astro) だけは入力を書き換えるので非キャッシュ</code></pre></div><ul>&#10;<li>使ったファイルを <strong>自動追跡</strong> → 変化なしなら <strong>実行せずリプレイ</strong></li>&#10;<li>実測で <strong>4/5 cache hit・27.38s 短縮</strong></li>&#10;<li>詳しくはこちらがとても参考になります&#10;<ul>&#10;<li><a href="https://zenn.dev/herp_inc/articles/strange-task-runner">https://zenn.dev/herp_inc/articles/strange-task-runner</a></li>&#10;</ul>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった⑤ ライブラリモード = vp pack</h2><div class="text-left text-white"><div class="grid grid-cols-2 gap-4"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// packages/hoge/vite.config.ts</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--identifier" style="color:var(--sh-identifier)">pack</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">entry</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">./src/index.ts</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">format</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">esm</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">cjs</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">dts</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">       </span><span class="sh__token--comment" style="color:var(--sh-comment)">// 型定義も出力</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">sourcemap</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">minify</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">deps</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--comment" style="color:var(--sh-comment)">// react 系は peer で external、それ以外はバンドル</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">alwaysBundle</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">clsx</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">tailwind-merge</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">dayjs</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">}</span></span></code></pre></div><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>             Before              After&#10;             vp build(Vite/lib)  vp pack(tsdown)&#10;  ESM  gzip   117KB         →     36KB   (459KB→144KB)&#10;  CJS  gzip   102KB         →     36KB   (340KB→148KB)&#10;  build       ~1.59s        →     ~1.0s&#10;  型定義      vite-plugin-dts →    tsdown 内蔵</code></pre></div></div><ul>&#10;<li><code>dts: true</code> の1行で型定義（<strong><code>vite-plugin-dts</code> 不要</strong>）、React 系は <strong>external 扱い</strong></li>&#10;<li>rollup → <strong>tsdown</strong> で gzip <strong>ESM 117KB → 36KB（約1/3）</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "22/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった⑥ 個別ツールが要らない</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// vite.config.ts ← lefthook.yml を置き換え</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--identifier" style="color:var(--sh-identifier)">staged</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">*.{ts,tsx,js,jsx,mjs}</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">vp lint --fix</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">*.{ts,tsx,css,md,json,yml}</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">vp fmt</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">}</span></span>&#10;<span class="sh__line"></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// vp config が hooks を生成 → .vite-hooks/pre-commit の中身は1行</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--identifier" style="color:var(--sh-identifier)">vp</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">staged</span></span></code></pre></div><ul>&#10;<li>git hooks も <strong><code>vp</code> 同梱</strong>（<code>staged</code> に書くだけ）→ <strong>husky / lefthook 不要</strong></li>&#10;<li>独自の pre-commit は <strong><code>.vite-hooks/</code></strong> で対応</li>&#10;<li>Node も <strong><code>.node-version</code> だけ</strong>（今回の用途では mise / volta 不要）</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "23/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>もちろん辛みもあった</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "24/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">辛かった① lefthook使用時にmigrateされない</h2><div class="text-left text-white"><ul>&#10;<li><code>vp migrate</code> 時、<strong>lefthook</strong> は自動移行されず警告のみ</li>&#10;<li>気づかず <strong>pre-commit が壊れていた</strong> → 設定を手動修正</li>&#10;<li>自動移行されたのは <strong>husky / lint-staged</strong> だけ</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "25/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">その後 → 実は仕様でした</h2><div class="text-left text-white"><ul>&#10;<li><strong>バグだと思って issue 起票</strong>（<a href="https://github.com/voidzero-dev/vite-plus/issues/1854">#1854</a>）</li>&#10;<li>よく見ると <strong>仕様だった</strong>（RFC に記載あり）</li>&#10;<li>→ <strong>Migration Guide に追記</strong>する形で対応（<a href="https://github.com/voidzero-dev/vite-plus/pull/1901">PR #1901</a>・マージ済み）</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "26/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">辛かった② Astro がよく壊れた</h2><div class="text-left text-white"><ul>&#10;<li>&#10;<p>直後に <strong>Astro 6 へ手動移行</strong>（#198）</p>&#10;</li>&#10;<li>&#10;<p><code>core@0.1.14</code> で Astro 互換リグレッション → <strong>0.1.15 で解消</strong></p>&#10;</li>&#10;<li>&#10;<p><code>overrides.vite</code> が Astro 内部の Vite まで置換 → <strong>Release 失敗</strong></p>&#10;<p>→AstroV7でVite8がデフォになったり、同じCloudflareになったことで上手いこと行くことに期待</p>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "27/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">気をつけた③ AI が vp を知らない</h2><div class="text-left text-white"><ul>&#10;<li><strong>AI が <code>Vite+</code> / <code>vp</code> を知らない</strong>ことが多い</li>&#10;<li>α版ゆえ学習データに無く、提案を外しがち</li>&#10;<li><strong><code>npx</code> で実行しがち</strong></li>&#10;</ul><p>→<code>AGENTS.md</code> / <code>CLAUDE.md</code> / Cursor rules などに <strong><code>vp</code> 前提の運用を書く</strong></p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "28/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">導入しやすい / 注意したい条件</h2><div class="text-left text-white"><ul>&#10;<li>&#10;<p><strong>導入しやすい</strong></p>&#10;<ul>&#10;<li>Vite / Vitest / Oxlint / Oxfmt を <strong>すでに使っている</strong></li>&#10;<li><strong>新規リポジトリ</strong>、または本格運用前</li>&#10;</ul>&#10;</li>&#10;<li>&#10;<p><strong>注意したい</strong></p>&#10;</li>&#10;<li>&#10;<p>framework 側の Vite 依存</p>&#10;</li>&#10;<li>&#10;<p>α版の破壊的変更を追えない</p>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "29/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>余談：このスライドも Vite+ です</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "30/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Next 製でも Vite+ に乗れる</h2><div class="text-left text-white"><img :src="'/slides/vite-plus-retro/assets/pr-220.png'" alt="mySlides を Vite+ へ移行した PR #220（build: Vite+ への移行・ツールチェーン統合、26 files・+10366 -285）" width="1200" height="600" style="margin:0 auto 1rem;display:block;width:1000px;height:auto;max-width:100%;max-height:500px;border-radius:8px"><ul>&#10;<li>この LT スライド（mySlides）自体も Vite+ へ移行（<a href="https://github.com/Koutaro-Hanabusa/myslides/pull/220">PR #220</a>）</li>&#10;<li>web は <strong>Next 製</strong>（OGP を <code>opengraph-image.tsx</code> で組みたくて採用）、ビルドは <strong>Next のまま</strong></li>&#10;<li><code>vp</code> は <strong>lint / fmt / task / staged</strong> 担当 → 名前は Vite+ でも中身は <strong>バンドラ非依存</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "31/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">そして Vite+ の沼へ</h2><div class="text-left text-white"><img :src="'/slides/vite-plus-retro/assets/vite-plus-bad-spiral.png'" alt="Vite+への熱中がさらに深まっていく様子を表した悪循環ポスター" width="515" height="645" style="margin:0 auto 0.5rem;display:block;width:600px;height:auto;max-width:100%;max-height:720px;border-radius:8px"><p>［<a href="https://furandon-pig.github.io/fpig_sample/hobby/bad_spiral/">悪循環画像ジェネレータ</a>で作成］</p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "32/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">まとめ</h2><div class="text-left text-white"><ul>&#10;<li>設定を <strong><code>vite.config.ts</code> 一つに集約</strong>できるのが最高</li>&#10;<li>Vite / Vitest / Oxlint / Oxfmt を使っているなら、<strong>導入価値はかなり高い</strong></li>&#10;<li>新規リポジトリや本格運用前なら、<strong>早めに試す価値あり</strong></li>&#10;<li>α 版なので注意は必要だが、今回の辛みは <strong>改善・運用で吸収できる範囲</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "33/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ご清聴ありがとうございました</p></h1></div></div>
