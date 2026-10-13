---
theme: "none"
title: "vite-plus-retro-v2"
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
contentClass: "large-type"
---

<div class="slide-body"><div class="text-left"><h3>Vue Fes Japan 2026</h3><br><h1 class="leading-tight">Vite+を爆速でデザインシステムに導入してみた</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
contentClass: "h-full large-type"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center w-1/2 pr-12"><h2 class="text-left text-white">English</h2><div class="text-left text-white"><div><p>I don't speak English🙏</p><p class="text-4xl">Read this presentation in English</p><div class="break-all text-3xl underline"><p><a href="https://slide.burio16.com/vite-plus-retro-v2/en">https://slide.burio16.com/vite-plus-retro-v2/en</a></p></div></div></div></div><aside class="absolute right-0 top-1/2 aspect-square w-1/2 -translate-y-1/2"><img :src="'/slides/vite-plus-retro-v2/assets/english-slides-qr.png'" alt="QR code for the English version of this presentation" width="2000" height="2000" class="size-full rounded-xl object-contain" style="max-width:none;max-height:none"></aside></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>千株式会社 フロントエンドエンジニア</li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;<li>普段はVue書きません()</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>そもそも Vite+ って？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Vite+ とは</h2><div class="text-left text-white"><ul>&#10;<li>test / lint / fmt / task などを <code>vp</code> ひとつに束ねる統合ツールチェイン</li>&#10;<li>中身は Vite / Vitest / Oxlint / Oxfmt / tsdown / Vite Task（VoidZero 製）</li>&#10;<li>2026/3/13 公開</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Vite+ が解決する課題</h2><div class="text-left text-white"><ul>&#10;<li>他の言語：統合ツールチェインが当たり前</li>&#10;<li>JS：ツールの選択肢が多く、環境ごとにバラバラになりがち</li>&#10;<li>→ その課題をVite+ が解決</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>どこに導入した？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">社内デザインシステム</h2><div class="text-left text-white"><ul>&#10;<li>社内で デザインシステム を開発中</li>&#10;<li>構成は Vite + Vitest + Oxlint + Oxfmt のモノレポ（タスクは Turborepo）</li>&#10;<li>→ Vite+ が束ねる範囲と ほぼ重なっていた</li>&#10;<li>まだ本格運用前で試せる時期。</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>爆速(当社比)で移行</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>マネージャー<br>「ビルドできれば<br>いいんじゃない？」</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ほな導入したろか！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>爆速！！(当社比)</p><img :src="'/slides/vite-plus-retro/assets/pr-135.png'" alt="Vite+ への移行 PR #135（Turborepo 廃止・ツールチェーン統合、25 commits を main にマージ）" width="1069" height="254" style="margin:1.5rem auto 0;display:block;width:1600px;height:auto;max-width:100%;max-height:520px;border-radius:8px"><p>Vite+ 0.1.13</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>実際どうだった？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった① vp migrate が最高</h2><div class="text-left text-white"><ul>&#10;<li>既存プロジェクトを Vite+ に移行するための スタート地点</li>&#10;<li>依存関係・import・設定・scripts を まとめて更新し、既存ツールを統合</li>&#10;<li>テスト import は <code>vite-plus/test</code>、CI は <code>voidzero-dev/setup-vp</code> へ移行</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった② 設定が一箇所に</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// vite.config.ts （実物）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">export</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">default</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">defineConfig</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">test</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Vitest</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">staged</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// git hooks（pre-commit）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">fmt</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">   </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Oxfmt</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">run</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">   </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// タスク実行（キャッシュ付き）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">lint</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Oxlint</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span></code></pre></div><ul>&#10;<li>test / staged / fmt / run / lint を <code>vite.config.ts</code> に集約</li>&#10;<li>hooks は <code>staged</code>、Node は <code>.node-version</code> で管理</li>&#10;<li><code>vp lint</code> で type linting（oxlint-tsgolint）まで実行</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">良かった③ vp pack でライブラリビルドを改善</h2><div class="text-left text-white"><div class="grid grid-cols-2 gap-4"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// packages/hoge/vite.config.ts</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--identifier" style="color:var(--sh-identifier)">pack</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">entry</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">./src/index.ts</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">format</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">esm</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">cjs</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">dts</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">       </span><span class="sh__token--comment" style="color:var(--sh-comment)">// 型定義も出力</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">sourcemap</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">minify</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">deps</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">alwaysBundle</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">clsx</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">tailwind-merge</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">dayjs</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">}</span></span></code></pre></div><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>             Before              After&#10;             vp build(Vite/lib)  vp pack(tsdown)&#10;  ESM  gzip   117KB         →     36KB   (459KB→144KB)&#10;  CJS  gzip   102KB         →     36KB   (340KB→148KB)&#10;  build       ~1.59s        →     ~1.0s&#10;  型定義      vite-plugin-dts →    tsdown 内蔵</code></pre></div></div><ul>&#10;<li><code>vp build</code>（Vite Library Mode）→ <a href="https://viteplus.dev/guide/pack">vp pack</a>（tsdown）へ移行</li>&#10;<li><code>dts: true</code> だけで型定義を生成。<code>vite-plugin-dts</code> の追加インストール・設定が不要</li>&#10;<li>移行設定込みの実測で、gzip ESM 117KB → 36KB（約1/3）、ビルド時間 約1.59s → 約1.0s(※ 4月時点)</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>もちろん辛みもあった</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">辛かった① lefthook使用時にmigrateされない</h2><div class="text-left text-white"><ul>&#10;<li><code>vp migrate</code> 時、lefthook は自動移行されず警告のみ</li>&#10;<li>気づかず pre-commit が壊れていた → 設定を手動修正</li>&#10;<li>バグだと思い <a href="https://github.com/voidzero-dev/vite-plus/issues/1854">Issue #1854</a> を起票 → 実は仕様で、<a href="https://github.com/voidzero-dev/vite-plus/pull/1901">PR #1901</a> で Migration Guide に追記</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">辛かった② Astro のビルドが壊れた</h2><div class="text-left text-white"><ul>&#10;<li>docサイトに使用してるAstro 6 は Vite 7 前提。<code>overrides.vite</code> で Vite+ の Vite 8 系に置換</li>&#10;<li>dev-toolbar が使う esbuild API の互換処理で <code>Not implemented</code> が発生し、ビルド失敗していた</li>&#10;<li>override を外し、Astro が使う Vite 7 に戻して復旧</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">最小構成で再現して比較</h2><div class="text-left text-white"><table><thead><tr><th>Astro</th><th>Vite+</th><th>ビルド結果</th></tr></thead><tbody><tr><td>6.1.10</td><td>未使用（Vite 7.3.3）</td><td>成功</td></tr><tr><td>6.1.10</td><td>0.1.19</td><td>失敗（<code>Not implemented</code>）</td></tr><tr><td>7.0.0-beta.3</td><td>0.1.19</td><td>成功</td></tr><tr><td>7.0.0-beta.3</td><td>0.1.24</td><td>成功</td></tr></tbody></table><p>この最小構成では、Vite+ 0.1.19 のまま Astro 7 beta へ更新すると成功&#10;Vite+ 使用時は <code>vite</code> override を適用。integration なし・1ページで検証。</p><p><a href="https://github.com/Koutaro-Hanabusa/astro-vite-plus-repro">検証コード・実行手順（GitHub）</a></p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">まとめ</h2><div class="text-left text-white"><ul>&#10;<li>vite.config.tsに全ての設定を記述でき、体験が良い</li>&#10;<li>9/28 Vite+ 1.0リリース今回紹介したつらみも、解消済み</li>&#10;<li>Vite / Vitest / Oxlint / Oxfmt を使うなら、もう Vite+ にフルベットしよう</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>余談</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "22/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Vite Task：自動キャッシュ</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>$ vp run -r build      # 2回目（変更なし）&#10;  ~/packages/hoge$     vp pack  ◉ cache hit, replaying&#10;  ~/packages/fuga$      tsc ...   ◉ cache hit, replaying&#10;  ~/packages/piyo$ vp pack  ◉ cache hit, replaying&#10;  ──────────────────────────────────────&#10;  vp run: 4/5 cache hit (80%), 27.38s saved&#10;  ↑ ui-preview(Astro) だけは入力を書き換えるので非キャッシュ</code></pre></div><ul>&#10;<li>使ったファイルを 自動追跡 → 変化なしなら 実行せずリプレイ</li>&#10;<li>実測で 4/5 cache hit・27.38s 短縮</li>&#10;<li>詳しくはこちらがとても参考になります&#10;<ul>&#10;<li><a href="https://zenn.dev/herp_inc/articles/strange-task-runner">https://zenn.dev/herp_inc/articles/strange-task-runner</a></li>&#10;</ul>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "23/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Viteに依存しているわけではない</h2><div class="text-left text-white"><img :src="'/slides/vite-plus-retro/assets/pr-220.png'" alt="mySlides を Vite+ へ移行した PR #220（build: Vite+ への移行・ツールチェーン統合、26 files・+10366 -285）" width="1200" height="600" style="margin:0 auto 1rem;display:block;width:1000px;height:auto;max-width:100%;max-height:500px;border-radius:8px"><ul>&#10;<li>初期導入では、Next.js の <code>next build</code> を維持したまま Vite+ へ移行（<a href="https://github.com/Koutaro-Hanabusa/myslides/pull/220">PR #220</a>）</li>&#10;<li>アプリのビルドを Vite へ移行しなくても導入できる</li>&#10;<li>lint / fmt / task / staged を <code>vp</code> に統一。既存の build は <code>vp run build</code> で実行できる</li>&#10;</ul></div></div></div>
