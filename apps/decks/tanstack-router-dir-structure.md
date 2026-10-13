---
theme: "none"
title: "tanstack-router-dir-structure"
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

<div class="slide-body"><div class="text-left"><h3>TSKaigi2026〜アフターパーティー〜 / TSKaigi Mashup #5 any</h3><br><h1 class="leading-tight">ぼくの考えた最強の <br>TanStack Router ディレクトリ構成</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;<li>TSKaigiは初参加でした</li>&#10;<li>会場で5回くらいタコスの人ですか！？と言われた(???)</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">タコスといえば...?</h2><div class="text-left text-white"><div class="flex items-center gap-8"><div class="flex-1 text-left"><ul>&#10;<li>エブリーさんが出した記事</li>&#10;<li><strong>「タコス」の検索頻度が昨年比 2 倍！</strong> 🌮</li>&#10;<li>自分も月１くらいで家でタコス作ってます</li>&#10;<li>(タコスについて<a href="https://prtimes.jp/main/html/rd/p/000000455.000018729.html">プレスリリース</a>出してるの面白い)</li>&#10;</ul></div><div class="r-stack shrink-0" style="width:760px"><img :src="'/slides/tanstack-router-dir-structure/assets/taco-line-message.png'" alt="あかがわまさともさんから「ぶりおへ」と PR TIMES のリンクが共有されたチャット画面" class="" data-fragment-index="0" width="538" height="326" style="display:block;width:380px;height:auto;border-radius:8px" v-click.hide="1"><img :src="'/slides/tanstack-router-dir-structure/assets/taco-prtimes-article.png'" alt="エブリーのプレスリリース「タコスの検索頻度が昨年比2倍！GWに楽しめるメキシコ料理レシピを公開」" class="" data-fragment-index="0" width="2332" height="1648" style="display:block;width:100%;height:auto;border-radius:8px" v-click="1"></div></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">TSKaigi2026</h2><div class="text-left text-white"><p>みなさん楽しかったですか？？</p><div class="r-stack mt-6"><img :src="'/slides/tanstack-router-dir-structure/assets/tskaigi-banner.jpg'" alt="Welcome to TSKaigi 2026 のスポンサーバナー" class="" data-fragment-index="0" width="2443" height="1559" style="margin:0 auto;display:block;width:auto;height:auto;max-height:700px;max-width:100%" v-click.hide="1"><img :src="'/slides/tanstack-router-dir-structure/assets/tskaigi-group.jpg'" alt="TSKaigi 2026 アフターパーティーでの集合写真" class="" data-fragment-index="0" width="2048" height="1536" style="margin:0 auto;display:block;width:auto;height:auto;max-height:700px;max-width:100%" v-click="1"></div><p>初参加でしたが、とても楽しかったです！<a href="https://burio16.com/blog/8">参加レポート</a>も書きました</p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">本題に入る前に</h2><div class="text-left text-white"><ul>&#10;<li>TanStack Router / Start は事例が少なく、手探りです！</li>&#10;<li>「これが正解」ではなく、試行錯誤の途中を共有したい</li>&#10;<li>もし知見を持っている方は懇親会でマサカリしてください</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>そもそも、なぜ TanStack Router？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">技術選定</h2><div class="text-left text-white"><ul>&#10;<li>社内で 0 から作り直す大規模なリプレイス中、フロントの技術選定を行った</li>&#10;<li>候補は <strong>Next.js / React Router / TanStack Router</strong> の3案</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">3案の比較</h2><div class="text-left text-white"><ul>&#10;<li><strong>Next.js</strong> … Vercel 以外で運用するときの考慮の多さや、Cache Components などの難解さを考えて見送り</li>&#10;<li><strong>React Router</strong> … 現状使用中。せっかく作り替えるのに同じ技術使っても楽しくない</li>&#10;<li><strong>TanStack</strong> … Next.jsほど辛くなく、React Routerよりもモダンな印象があったので採用！！</li>&#10;</ul><p>→ <strong>TanStack Router を採用</strong></p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">でも、現実は無法地帯だった</h2><div class="text-left text-white"><ul>&#10;<li>なんとなく作ってたら <strong>書き方バラバラ</strong> に</li>&#10;<li>このままだと AI が <strong>クソコード生成マシン</strong> になってまう</li>&#10;<li><strong>ゼロから好きに設計できる絶好のチャンス</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>TanStack Routerの良さって？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">TanStack Routerの良さ</h2><div class="text-left text-white"><ul>&#10;<li>型安全なルーティング</li>&#10;<li>型安全な search params</li>&#10;<li>ファイルベースルーティング</li>&#10;<li><code>-</code> prefix コロケーション</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">① 型安全なルーティング</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">tsx</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// パスも params も補完が効く・存在しないパスはコンパイルエラー</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--sign" style="color:var(--sh-sign)">&lt;</span><span class="sh__token--entity" style="color:var(--sh-entity)">Link</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--property" style="color:var(--sh-property)">to</span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">/contracts/$contractId</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--property" style="color:var(--sh-property)">params</span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">contractId</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">/&gt;</span></span>&#10;<span class="sh__line"></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// 受け取る側も型付き（contractId: string）</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">contractId</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">Route</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">useParams</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span></code></pre></div><ul>&#10;<li><code>Link</code> / <code>params</code> が補完され、存在しないパスは <strong>コンパイルエラー</strong></li>&#10;<li>リンク切れや typo を <strong>型で</strong>潰せる</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">② 型安全な search params</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">tsx</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// URL の ?page=2&amp;tab=archived を schema で定義</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">export</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">Route</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">createFileRoute</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">/contracts</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">validateSearch</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">z</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">object</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">page</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">z</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">number</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--identifier" style="color:var(--sh-identifier)">default</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--class" style="color:var(--sh-class)">1</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">    </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">tab</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">z</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">enum</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">[</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">active</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">archived</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">]</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--identifier" style="color:var(--sh-identifier)">default</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">active</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// 読む側は完全に型付き → URL がそのまま型安全な state に</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">page</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">tab</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">Route</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">useSearch</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span></code></pre></div><ul>&#10;<li>戻る / 進む / 直リンクで来た値も <strong>検証済み</strong>で受け取れる</li>&#10;<li>URL state のための <strong>nuqs</strong> のような追加ライブラリも要らない</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">③ - prefix でコロケーション</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>routes/contracts/&#10;├── index.tsx        ← これだけが /contracts になる&#10;└── -components/     ← `-` prefix で route tree から除外&#10;    ├── Page.tsx&#10;    └── fallbacks/   ← ルート専用の物を隣に置ける</code></pre></div><ul>&#10;<li>ルートに関わる物を <strong>同じ階層</strong>に置けて、URL も汚さない</li>&#10;<li>この性質が、後の <strong>構成の3案</strong> を考える土台になる</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>構成、どうする？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">意外と大変だった</h2><div class="text-left text-white"><ul>&#10;<li>実際の事例が少なく、採用してみると躓いた</li>&#10;<li>PoC を進めつつ、どうすれば TanStack Router の良さを活かせるかを考えた</li>&#10;<li>この辺を参考に考えた&#10;<ul>&#10;<li><a href="https://speakerdeck.com/ytaisei/tanstack-routerwo-xin-gui-purodakutode1nian-jian-yun-yong-sitemitajie-guo">https://speakerdeck.com/ytaisei/tanstack-routerwo-xin-gui-purodakutode1nian-jian-yun-yong-sitemitajie-guo</a></li>&#10;</ul>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">呟いたらメンテナーが降臨した</h2><div class="text-left text-white"><div class="flex items-center gap-8"><div class="flex-1 text-left"><ul>&#10;<li>何も分からず X で「本日も TanStack Router に頭を悩ませた」と呟く</li>&#10;<li>すると TanStack Router メンテナーが降臨</li>&#10;<li>悩みを伝えると → <strong>「どっちでもええんちゃう？</strong></li>&#10;<li>……たぶん悩みをうまく伝えきれてなかった説</li>&#10;</ul></div><div class="r-stack shrink-0" style="width:760px"><img :src="'/slides/tanstack-router-dir-structure/assets/maintainer-x-question.png'" alt="X で TanStack Router の構成について悩みを伝えているスクリーンショット" class="" data-fragment-index="0" width="1006" height="838" style="display:block;width:100%;height:auto;border-radius:8px" v-click.hide="1"><img :src="'/slides/tanstack-router-dir-structure/assets/maintainer-x-answer.png'" alt="メンテナー Manuel Schiller さんが matter of taste と返信し Virtual File Routes を案内しているスクリーンショット" class="" data-fragment-index="0" width="960" height="698" style="display:block;width:100%;height:auto;border-radius:8px" v-click="1"></div></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">3案を考えた</h2><div class="text-left text-white"><ol>&#10;<li><strong>features に寄せる</strong></li>&#10;<li><strong>routes に全部押し込む</strong></li>&#10;<li><strong>ハイブリッド</strong></li>&#10;</ol><p>→ 結果的に <strong>3つ目（ハイブリッド）</strong> を採用</p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">案① features に寄せる</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>src/&#10;├── features/&lt;domain&gt;/   ← api / hooks / components / Page まで集約&#10;└── routes/&lt;route&gt;/&#10;    └── index.tsx         ← features を読むだけの薄い wrapper</code></pre></div><ul>&#10;<li><code>Page</code> まで features に集約、routes は読むだけの薄い wrapper</li>&#10;<li>シンプルだが、<code>-</code> コロケーションなど <strong>TanStack Router の機能を活かしきれない</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">案② routes に全部押し込む</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>src/routes/&lt;route&gt;/&#10;├── -api/         ← queryOptions / mutationOptions&#10;├── -hooks/       ← hook&#10;├── -components/  ← View 断片 / fallbacks / Page&#10;└── index.tsx     ← loader / validateSearch</code></pre></div><ul>&#10;<li><code>-</code> prefix で全部 routes に詰め込める → <strong>機能はフル活用</strong></li>&#10;<li>ただしルートが肥大化して <strong>ぐちゃぐちゃ</strong>になりがち</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">案③ ハイブリッド（採用）</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>src/&#10;├── features/&lt;domain&gt;/   ← ロジックの実体（Router 非依存）&#10;│   └── api / hooks / components&#10;└── routes/&lt;route&gt;/      ← TanStack Router 依存部分だけ&#10;    ├── -components/  ← fallbacks / Page&#10;    └── index.tsx     ← loader / validateSearch</code></pre></div><ul>&#10;<li>TanStack Router 依存部分だけ routes、ロジックの実体は features</li>&#10;<li>機能はフル活用しつつ、<strong>Router 依存を routes に閉じ込められる</strong>いいとこ取り</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>こんな感じにしました！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "22/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">ディレクトリ構成</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>apps/&lt;appname&gt;/src/&#10;├── features/&#10;│   └── &lt;domain&gt;/&#10;│       ├── api/        ← データ取得・更新 hook（queryOptions + useSuspenseQuery / useMutation）&#10;│       ├── hooks/      ← form / フローなど画面ロジックの hook（Router 非依存）&#10;│       ├── components/ ← View 断片（Router 非依存）&#10;│       └── その他もろもろ&#10;└── routes/&#10;    └── &lt;route&gt;/&#10;        ├── -components/&#10;        │   ├── fallbacks/  ← 必要なルートのみ（pending / error の中身）&#10;        │   └── Page.tsx    ← Page 本体（components/を使用して画面を構築、Router 依存を features に注入）&#10;        └── index.tsx       ← validateSearch / loader / アダプタの宣言のみ</code></pre></div><ul>&#10;<li><strong>Router 依存の宣言は routes</strong>、ドメインの実体は features に</li>&#10;<li>routes と features の分担が <strong>ディレクトリ構造で見える</strong>形に</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "23/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">なぜ fallbacks が要る？</h2><div class="text-left text-white"><ul>&#10;<li>loader で <code>ensureQueryData</code>、component は <code>useSuspenseQuery</code> で読む</li>&#10;<li>loader が一定時間 pending になると <code>pendingComponent</code>、失敗すると <code>errorComponent</code> が出る&#10;<ul>&#10;<li><code>ensureQueryData</code> で先に埋めておくので、<code>Page</code> 側は「取得済み前提」で書ける</li>&#10;</ul>&#10;</li>&#10;<li><code>-components/fallbacks/</code> に中身を用意する</li>&#10;<li>prefetch するルートだけなので <strong>「必要なルートのみ」</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "24/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">コードで見ると</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">tsx</span></div><pre v-pre class="sh-code__pre"><code><span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// routes/contracts/index.tsx — 宣言だけ</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">export</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">Route</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">createFileRoute</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--string" style="color:var(--sh-string)">/contracts</span><span class="sh__token--string" style="color:var(--sh-string)">"</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">loader</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">context</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--sign" style="color:var(--sh-sign)">&gt;</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">context</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">queryClient</span><span class="sh__token--sign" style="color:var(--sh-sign)">.</span><span class="sh__token--property" style="color:var(--sh-property)">ensureQueryData</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--identifier" style="color:var(--sh-identifier)">contractsQueryOptions</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">pendingComponent</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">ContractsPending</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">// -components/fallbacks/</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">errorComponent</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">ContractsError</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--comment" style="color:var(--sh-comment)">//    -components/fallbacks/</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">component</span><span class="sh__token--sign" style="color:var(--sh-sign)">:</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">Page</span><span class="sh__token--sign" style="color:var(--sh-sign)">,</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)">// -components/Page.tsx — データは取得済みとして読む</span></span>&#10;<span class="sh__line"><span class="sh__token--comment" style="color:var(--sh-comment)"></span><span class="sh__token--keyword" style="color:var(--sh-keyword)">function</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--class" style="color:var(--sh-class)">Page</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">const</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">data</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--identifier" style="color:var(--sh-identifier)">useSuspenseQuery</span><span class="sh__token--sign" style="color:var(--sh-sign)">(</span><span class="sh__token--identifier" style="color:var(--sh-identifier)">contractsQueryOptions</span><span class="sh__token--sign" style="color:var(--sh-sign)">)</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"><span class="sh__token--space" style="color:var(--sh-space)">  </span><span class="sh__token--keyword" style="color:var(--sh-keyword)">return</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">&lt;</span><span class="sh__token--entity" style="color:var(--sh-entity)">ContractList</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--property" style="color:var(--sh-property)">items</span><span class="sh__token--sign" style="color:var(--sh-sign)">=</span><span class="sh__token--sign" style="color:var(--sh-sign)">{</span><span class="sh__token--identifier" style="color:var(--sh-identifier)">data</span><span class="sh__token--sign" style="color:var(--sh-sign)">}</span><span class="sh__token--space" style="color:var(--sh-space)"> </span><span class="sh__token--sign" style="color:var(--sh-sign)">/&gt;</span><span class="sh__token--sign" style="color:var(--sh-sign)">;</span></span>&#10;<span class="sh__line"><span class="sh__token--sign" style="color:var(--sh-sign)">}</span></span></code></pre></div><ul>&#10;<li><code>index</code> は宣言だけ、<code>Page</code> は「取得済み前提」で <code>useSuspenseQuery</code></li>&#10;<li>loader の <code>ensureQueryData</code> が <strong>routes と features の繋ぎ目</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "25/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">採用してどうなった</h2><div class="text-left text-white"><ul>&#10;<li>features のベストプラクティスと TanStack Router の機能、<strong>両方を活かせる形</strong>に</li>&#10;<li>Router の変更影響は <strong>routes に閉じる</strong> → features は Router 非依存のまま</li>&#10;<li>テストの境界も明確に&#10;<ul>&#10;<li>features は依存を mock した単体 / コンポーネントテスト</li>&#10;<li>routes は backend だけ mock した <strong>e2e ライクなテスト</strong></li>&#10;</ul>&#10;</li>&#10;<li>反面、component の置き場が <strong>3 つ</strong>に → <strong>AI が迷わない整備</strong>が重要に</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "26/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>しかし！<br>突如として<br>server 処理が必要になった</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "27/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">思い切って Start を採用</h2><div class="text-left text-white"><ul>&#10;<li>PoC を進めるなか、認証周りなど <strong>server で処理する必要性</strong> が出てきた</li>&#10;<li><strong>React Router の SSR モード</strong>に乗り換える / <strong>Hono などで BFF</strong> を立てる</li>&#10;<li>すでに <strong>TanStack Router 採用済み</strong> → 既存設計を活かしたまま server function / SSR を足せる&#10;<ul>&#10;<li>思い切って <strong>TanStack Start</strong> に踏み切った（PoC なので「失敗してもええやろ」の精神）</li>&#10;</ul>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "28/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>とはいえ何も分からん！！！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "29/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>TSKaigi のこの 2 本が刺さった</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "30/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Server Function の置き場</h2><div class="text-left text-white"><ul>&#10;<li><a href="https://2026.tskaigi.org/talks/25">TanStack Start の createServerFn で作る、型が通る API（yt4）</a></li>&#10;<li><a href="https://2026.tskaigi.org/talks/26">実践 TanStack Start：サーバーとクライアント境界の設計パターン（kaminashi）</a></li>&#10;</ul><p>→ この 2 つを参考に Server Function の置き場を決めた</p></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "31/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">2 本から学んだこと</h2><div class="text-left text-white"><ul>&#10;<li>2 本に共通していたのは <strong>「<code>createServerFn</code> の中身は薄く保つ」</strong> という点</li>&#10;<li>→ ロジックは serverFn の外に出す</li>&#10;<li>さらに <strong>schema / server / function</strong> に分けると良い&#10;<ul>&#10;<li><a href="https://tanstack.com/start/v0/docs/framework/react/guide/server-functions#file-organization">https://tanstack.com/start/v0/docs/framework/react/guide/server-functions#file-organization</a></li>&#10;</ul>&#10;</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "32/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>serverFn、どこに置く？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "33/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">また3案を考えた</h2><div class="text-left text-white"><ol>&#10;<li><strong>src/server に寄せる</strong></li>&#10;<li><strong>routes にハイブリッド</strong></li>&#10;<li><strong>features に寄せる</strong></li>&#10;</ol></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "34/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">案① src/server に集約</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>src/&#10;├── features/&lt;domain&gt;/   ← api / hooks / components&#10;├── routes/&lt;route&gt;/      ← ルーティング宣言のみ&#10;└── server/&lt;entity&gt;/     ← ★ serverFn を全部ここへ集約&#10;    ├── &lt;entity&gt;.functions.ts      wrapper&#10;    ├── &lt;entity&gt;-schema.ts         schema&#10;    └── &lt;verb&gt;-&lt;entity&gt;.server.ts  logic</code></pre></div><ul>&#10;<li>serverFn を横断の <code>src/server</code> に全部集約</li>&#10;<li>分かりやすいが、管理する場所が <strong>3 つ目</strong>に増える</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "35/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">案② routes にハイブリッド</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>src/&#10;├── features/&lt;domain&gt;/&#10;│   ├── &lt;entity&gt;-schema.ts         schema&#10;│   └── &lt;verb&gt;-&lt;entity&gt;.server.ts  logic（実体）&#10;└── routes/&lt;route&gt;/&#10;    └── -api/&#10;        └── &lt;entity&gt;.functions.ts  ★ wrapper だけ routes 側</code></pre></div><ul>&#10;<li>wrapper だけ routes、schema / logic は features</li>&#10;<li>serverFn は <code>useServerFn</code> で <strong>component（features 側）から呼べる</strong></li>&#10;<li>→ wrapper を routes に置くと <strong>features が routes に依存する逆転構造</strong>になる</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "36/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">案③ features に集約</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>src/features/&lt;domain&gt;/&#10;└── server/                        ← ★ wrapper も含めて全部 features&#10;    ├── &lt;entity&gt;.functions.ts      wrapper&#10;    ├── &lt;entity&gt;-schema.ts         schema&#10;    └── &lt;verb&gt;-&lt;entity&gt;.server.ts  logic</code></pre></div><ul>&#10;<li>wrapper も含めて <code>features/&lt;domain&gt;/server</code> に全部</li>&#10;<li>管理対象が増えず、「<strong>ロジックの処理</strong>」という性質とも合う</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "37/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">features 寄せを採用</h2><div class="text-left text-white"><ul>&#10;<li>判断基準は同じ → <strong>Router 依存なら routes、ドメインに関係するなら features</strong></li>&#10;<li><code>createServerFn</code> の wrapper は <code>Page</code> のような薄い層ではなく、ドメインに関係していた</li>&#10;<li>routes に切り出すと、ドメインが routes と features の <strong>2 箇所に分散</strong> する</li>&#10;<li>→ serverFn は <strong>2つ目（routes ハイブリッド）を蹴って、3つ目（features 寄せ）</strong> を採用</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "38/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>そしてこんな形にした！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "39/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">ディレクトリ構成（+ server）</h2><div class="text-left text-white"><div class="sh-code"><div class="sh-code__bar"><span class="sh-code__lang">text</span></div><pre v-pre class="sh-code__pre"><code>apps/&lt;appname&gt;/src/&#10;├── features/&#10;│   └── &lt;domain&gt;/&#10;│       ├── api/        ← データ取得・更新 hook（queryOptions + useSuspenseQuery / useMutation）&#10;│       ├── server/     ← ★ Server Function&#10;│       │   ├── &lt;entity&gt;.functions.ts  ← createServerFn のラッパー&#10;│       │   ├── &lt;entity&gt;-schema.ts     ← 入出力の schema&#10;│       │   └── &lt;verb&gt;-&lt;entity&gt;.server.ts ← ロジック&#10;│       ├── hooks/      ← form / フローなど画面ロジックの hook（Router 非依存）&#10;│       ├── components/ ← View 断片（Router 非依存）&#10;│       └── その他諸々&#10;└── routes/&#10;    └── &lt;route&gt;/&#10;        ├── -components/ ← fallbacks / Page.tsx&#10;        └── index.tsx    ← validateSearch / loader / アダプタの宣言のみ</code></pre></div><ul>&#10;<li>features に <code>server/</code>（schema / function / logic）を追加しただけ</li>&#10;<li>Routerの依存はroutes配下に、軸はブレていない</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "40/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">TSKaigi が学びになった</h2><div class="text-left text-white"><ul>&#10;<li>何も分からなかった server 周りを、TSKaigi のセッションのおかげで前に進められた</li>&#10;<li>「<code>createServerFn</code> は薄く保つ」という共通の指針が、構成を決める軸になった</li>&#10;<li>カンファレンスで得た知見を、 <strong>設計に落とし込めた</strong></li>&#10;<li>TSKaigi最高！！！</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "41/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">まとめ</h2><div class="text-left text-white"><ul>&#10;<li>TanStack Router / Start は事例が少なく、決まり事がないと機能を活かしきれない</li>&#10;<li>TanStack Router の機能を活かしつつ、<strong>Router 依存は routes、ドメインの実体は features</strong> と線引きした</li>&#10;<li>TSKaigiでの学びを活かし、serverFn の置き場もまとめて決められた</li>&#10;<li>成熟した Vite のエコシステムに乗れるので、Next より採用されてほしい</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "42/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ご清聴ありがとうございました</p></h1></div></div>
