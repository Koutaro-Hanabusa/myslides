---
theme: "none"
title: "vite-plus-retro-v2/en"
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

<div class="slide-body"><div class="text-left"><h3>Vue Fes Japan 2026</h3><br><h1 class="leading-tight">We Tried Adopting Vite+ Into Our <br>Design System at Breakneck Speed</h1><br><h3>Burio @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">About This Translation</h2><div class="text-left text-white"><ul>&#10;<li>This English version was translated with generative AI.</li>&#10;<li>It may contain translation errors or awkward wording.</li>&#10;<li>Please refer to the <a href="https://slide.burio16.com/vite-plus-retro-v2">Japanese version</a> if anything is unclear.</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="Photo of Burio" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">About Me</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>Burio <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>Frontend Engineer at SEN, Corp.</li>&#10;<li>I love tacos and Tottenham Hotspur FC</li>&#10;<li>I don’t usually write Vue code!</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>What Is Vite+?</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">What Is Vite+?</h2><div class="text-left text-white"><ul>&#10;<li>A unified toolchain that brings test / lint / fmt / task and more under one <code>vp</code> command</li>&#10;<li>Built on Vite / Vitest / Oxlint / Oxfmt / tsdown / Vite Task, all by VoidZero</li>&#10;<li>Released on March 13, 2026</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">The Problem Vite+ Solves</h2><div class="text-left text-white"><ul>&#10;<li>Other languages commonly have unified toolchains</li>&#10;<li>JavaScript offers many tools, so every environment tends to use a different setup</li>&#10;<li>→ Vite+ solves this fragmentation</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Where Did We Adopt It?</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Our Internal Design System</h2><div class="text-left text-white"><ul>&#10;<li>We are building a design system in-house</li>&#10;<li>It is a Vite + Vitest + Oxlint + Oxfmt monorepo, with Turborepo for tasks</li>&#10;<li>→ Its toolset almost completely overlapped with Vite+</li>&#10;<li>It was still pre-production and easy to try</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Migrated at Breakneck Speed<br>(By Our Standards)</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Manager:<br>“As long as it builds,<br>isn't that enough?”</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Then Let's Do It!</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Breakneck Speed!!<br>(By Our Standards)</p><img :src="'/slides/vite-plus-retro/assets/pr-135.png'" alt="Vite+ migration PR #135: removed Turborepo, unified the toolchain, and merged 25 commits into main" width="1069" height="254" style="margin:1.5rem auto 0;display:block;width:1600px;height:auto;max-width:100%;max-height:520px;border-radius:8px"><p>Vite+ 0.1.13</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>How Did It Go?</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Win 1: vp migrate Is Excellent</h2><div class="text-left text-white"><ul>&#10;<li>A starting point for migrating an existing project to Vite+</li>&#10;<li>Updates dependencies, imports, config, and scripts together while unifying the existing tools</li>&#10;<li>Moved test imports to <code>vite-plus/test</code> and CI to <code>voidzero-dev/setup-vp</code></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Win 2: Configuration in One Place</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// vite.config.ts (from the actual project)</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">export</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">default</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">defineConfig</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">test</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Vitest</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">staged</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// git hooks (pre-commit)</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">fmt</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">   </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Oxfmt</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">run</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">   </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// cached task runner</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">lint</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">…</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Oxlint</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span></code></pre></div><ul>&#10;<li>test / staged / fmt / run / lint all live in <code>vite.config.ts</code></li>&#10;<li>Hooks are managed through <code>staged</code>, while Node is managed through <code>.node-version</code></li>&#10;<li><code>vp lint</code> even runs type-aware linting with oxlint-tsgolint</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Win 3: Better Library Builds with vp pack</h2><div class="text-left text-white"><div class="grid grid-cols-2 gap-4"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// packages/hoge/vite.config.ts</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--identifier" style="color:var(--sh-identifier)">pack</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">entry</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">./src/index.ts</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">format</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">esm</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">cjs</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">dts</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--space" style="color:var(--sh-space)">       </span><span class="sh__token--comment" style="color:var(--sh-comment)">// generate type declarations</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">sourcemap</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">minify</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">true</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">deps</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--comment" style="color:var(--sh-comment)">// Externalize React peer deps</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">alwaysBundle</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">clsx</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">tailwind-merge</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">dayjs</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">}</span></span></code></pre></div><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>             Before              After&#10;             vp build(Vite/lib)  vp pack(tsdown)&#10;  ESM gzip    117KB         →     36KB   (459KB→144KB)&#10;  CJS gzip    102KB         →     36KB   (340KB→148KB)&#10;  build       ~1.59s        →     ~1.0s&#10;  types       vite-plugin-dts →    built into tsdown</code></pre></div></div><ul>&#10;<li>Migrated from <code>vp build</code> (Vite Library Mode) to <a href="https://viteplus.dev/guide/pack">vp pack</a> (tsdown)</li>&#10;<li><code>dts: true</code> generates type declarations with no need to install or configure <code>vite-plugin-dts</code></li>&#10;<li>Migration results: gzipped ESM 117KB → 36KB (~1/3); build time ~1.59s → ~1.0s (April)</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Of Course, We Hit Some Pain Points</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Pain 1: lefthook Was Not Migrated</h2><div class="text-left text-white"><ul>&#10;<li>During <code>vp migrate</code>, lefthook was not migrated automatically; we only got a warning</li>&#10;<li>We missed it and our pre-commit hook broke, so we fixed the config manually</li>&#10;<li>We opened <a href="https://github.com/voidzero-dev/vite-plus/issues/1854">issue #1854</a>, then learned it was intentional; <a href="https://github.com/voidzero-dev/vite-plus/pull/1901">PR #1901</a> added it to the Migration Guide</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Pain 2: The Astro Build Broke</h2><div class="text-left text-white"><ul>&#10;<li>Astro 6 expects Vite 7, but <code>overrides.vite</code> replaced it with the Vite 8 version bundled by Vite+</li>&#10;<li>Compatibility code for an esbuild API used by dev-toolbar threw <code>Not implemented</code>, breaking the build</li>&#10;<li>Removing the override restored Astro's Vite 7 and fixed the build</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Reproducing and Comparing the Minimal Setup</h2><div class="text-left text-white"><table><thead><tr><th>Astro</th><th>Vite+</th><th>Build Result</th></tr></thead><tbody><tr><td>6.1.10</td><td>Not used (Vite 7.3.3)</td><td>Success</td></tr><tr><td>6.1.10</td><td>0.1.19</td><td>Failure (<code>Not implemented</code>)</td></tr><tr><td>7.0.0-beta.3</td><td>0.1.19</td><td>Success</td></tr><tr><td>7.0.0-beta.3</td><td>0.1.24</td><td>Success</td></tr></tbody></table><p>In this minimal setup, upgrading to the Astro 7 beta succeeded even while staying on Vite+ 0.1.19.&#10;When Vite+ was enabled, the <code>vite</code> override was applied. The test used no integrations and a single page.</p><p><a href="https://github.com/Koutaro-Hanabusa/astro-vite-plus-repro">Reproduction code and instructions (GitHub)</a></p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Takeaways</h2><div class="text-left text-white"><ul>&#10;<li>The experience is excellent: every setting can live in <code>vite.config.ts</code></li>&#10;<li>Vite+ 1.0 was released on September 28, and the pain points covered here have already been resolved</li>&#10;<li>If you use Vite / Vitest / Oxlint / Oxfmt, it is time to go all in on Vite+</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>As an Aside</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "22/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Vite Task: Automatic Caching</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>$ vp run -r build      # second run (no changes)&#10;  ~/packages/hoge$     vp pack  ◉ cache hit, replaying&#10;  ~/packages/fuga$      tsc ...   ◉ cache hit, replaying&#10;  ~/packages/piyo$ vp pack  ◉ cache hit, replaying&#10;  ──────────────────────────────────────&#10;  vp run: 4/5 cache hit (80%), 27.38s saved&#10;  ↑ Only ui-preview (Astro) rewrites its input, so it is not cached</code></pre></div><ul>&#10;<li>Automatically tracks files used by a task; if nothing changes, it skips execution and replays the result</li>&#10;<li>In our measurement, 4/5 tasks hit the cache, saving 27.38 seconds</li>&#10;<li>This article provides an excellent explanation:&#10;<ul>&#10;<li><a href="https://zenn.dev/herp_inc/articles/strange-task-runner">https://zenn.dev/herp_inc/articles/strange-task-runner</a></li>&#10;</ul>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "23/0"
contentClass: "large-type"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">You Don't Need a Vite App</h2><div class="text-left text-white"><img :src="'/slides/vite-plus-retro/assets/pr-220.png'" alt="mySlides migration PR #220: migrated to Vite+, unified the toolchain, changed 26 files with 10,366 additions and 285 deletions" width="1200" height="600" style="margin:0 auto 1rem;display:block;width:1000px;height:auto;max-width:100%;max-height:500px;border-radius:8px"><ul>&#10;<li>In our initial adoption, we migrated to Vite+ while keeping Next.js's <code>next build</code> (<a href="https://github.com/Koutaro-Hanabusa/myslides/pull/220">PR #220</a>)</li>&#10;<li>You can adopt Vite+ without moving your app build to Vite</li>&#10;<li>We unified lint / fmt / task / staged under <code>vp</code>; the existing build still runs through <code>vp run build</code></li>&#10;</ul></div></div></div>
