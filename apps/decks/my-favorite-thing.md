---
theme: "none"
title: "my-favorite-thing"
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

<div class="slide-body"><div class="text-left"><h3>MOSH Tech Meetup #5 あなたが「好きなこと」× エンジニアリング</h3><br><h1 class="leading-tight">大好きなアレをMCPにしてみた</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお(<a href="https://x.com/burio_16">@burio_16</a>)</li>&#10;<li>しがない2年目フロントエンドエンジニア</li>&#10;<li>Tottenham Hotspur FCが大好き</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Q.ぶりおと言えばなんでしょう？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>A.タコス！！！！！🌮</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>CTOを名乗っています</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>Chief<br>Tacos<br>Ojisan</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>好きなこと×エンジニアリング</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>タコス×MCP</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
contentClass: "release-demo"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><span class="block text-[0.8em]">Burio de Tacosをリリースしました！！</span><img :src="'/slides/my-favorite-thing/assets/burio-de-tacos.png'" alt="Burio de Tacosのタコス店一覧と地図" width="2048" height="1027" class="block h-auto w-[85%] rounded-lg" style="margin:2rem auto 0"><p>web:<a href="https://tacos.burio16.com/">tacos.burio16.com</a>&#10;mcp:<a href="https://tacos.burio16.com/mcp">tacos.burio16.com/mcp</a></p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">コンセプト</h2><div class="text-left text-white"><ul>&#10;<li>自他共に認めるタコスおじさんが好きなタコスを共有したい！</li>&#10;<li>あくまで自分が行ったことある店しか掲載しない</li>&#10;<li>やってみたかったMCP Appsにも対応したい</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">技術スタック</h2><div class="text-left text-white"><ul>&#10;<li><strong>フロントエンド</strong>：React 19 / TanStack Router / TanStack Query / MapLibre GL / Tailwind CSS</li>&#10;<li><strong>バックエンド</strong>：Hono / MCP SDK / Drizzle ORM</li>&#10;<li><strong>言語</strong>：TypeScript</li>&#10;<li><strong>インフラ</strong>：Cloudflare Workers / D1 / R2 / Images / Alchemy</li>&#10;<li><strong>ツールチェイン</strong>：Vite+</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>デモ</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">MCP Appsとは？</h2><div class="text-left text-white"><ul>&#10;<li>MCPサーバーが、Toolと<code>ui://</code>形式のUIを紐づけて提供する</li>&#10;<li>ホストはToolの実行結果を渡し、UIをiframe内に表示する</li>&#10;<li>UIからToolの再実行や入力ができ、地図・グラフ・フォームなどを会話内で操作できる</li>&#10;<li>あくまでMCPの拡張機能の一つであり、非対応ホストでは通常のテキスト結果として動作する</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">1. ToolをUIに紐づける</h2><div class="text-left text-white"><p><a href="https://apps.extensions.modelcontextprotocol.io/api/documents/quickstart.html">公式Quickstart</a>の時刻表示アプリを抜粋</p><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">resourceUri</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">ui://get-time/mcp-app.html</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"></span>&#10;<span class="sh__line"><span class="sh__token--identifier" style="color:var(--sh-identifier)">registerAppTool</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">server</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">get-time</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">title</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">Get Time</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">inputSchema</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--class" style="color:var(--sh-class)">_meta</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">ui</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">resourceUri</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">async</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--sign" style="color:var(--sh-sign)">&gt;</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">time</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">new</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">Date</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--identifier" style="color:var(--sh-identifier)">toISOString</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">return</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">content</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">type</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">text</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">text</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">time</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span></code></pre></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">2. UI Resourceを登録</h2><div class="text-left text-white"><p>同じURIで、iframeに表示するHTMLをResourceとして返す</p><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">ts</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--identifier" style="color:var(--sh-identifier)">registerAppResource</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">server</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">Get Time UI</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">resourceUri</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">mimeType</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">RESOURCE_MIME_TYPE</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">async</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--sign" style="color:var(--sh-sign)">&gt;</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">html</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">await</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">fs</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">readFile</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">dist/mcp-app.html</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">utf-8</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">return</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">      </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">contents</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">        </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">uri</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">resourceUri</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">        </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">mimeType</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">RESOURCE_MIME_TYPE</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">        </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">text</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">html</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">      </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span></code></pre></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">MCP Appsが向いているケース</h2><div class="text-left text-white"><ul>&#10;<li>複雑なデータ探索：地図・グラフを操作して深掘りする</li>&#10;<li>選択肢の多い設定：フォームでまとめて入力・検証する</li>&#10;<li>リッチメディア：PDF・3D・画像をその場で閲覧する</li>&#10;<li>リアルタイム監視：メトリクス・ログを継続的に更新する</li>&#10;<li>複数ステップの作業：レビュー・承認を状態付きで進める</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>tacos mcp使って<br>お気に入りのタコス屋<br>見つけてください！</p><small>お店の提案は<a href="https://github.com/Koutaro-Hanabusa/tacos/issues">GitHubのissue</a>から！</small></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>皆様良きタコスライフを🌮</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>¡Gracias!</p></h1></div></div>
