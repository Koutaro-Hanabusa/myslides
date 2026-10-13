---
theme: "none"
title: "autofocus-correct-usage"
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

<div class="slide-body"><div class="text-left"><h3>社内LT会 / Frontend Conference Nagoya 2026 前夜祭！</h3><br><h1 class="leading-tight">autofocusの正しい用法を<br>知っていますか？</h1><br><h3>ぶりお @burio_16</h3></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "1/0"
---

<div class="slide-body"><div class="flex h-full flex-row items-center justify-evenly"><img :src="'/slides/react-three-fiber/assets/burio.png'" alt="ぶりおの写真" width="500" height="500" class="r-stretch"><div class="flex flex-col"><h2 class="text-white">自己紹介</h2><div class="space-y-2 text-left text-white md:space-y-4 lg:space-y-6 [&amp;_ul]:list-disc [&amp;_ul]:space-y-2 [&amp;_ul]:pl-6 md:[&amp;_ul]:space-y-4 lg:[&amp;_ul]:space-y-6"><ul>&#10;<li>ぶりお <a href="https://x.com/burio_16">@burio_16</a></li>&#10;<li>タコスとTottenham Hotspur FCが大好き</li>&#10;<li>最近食品衛生責任者の資格講習を受けたので<br>みんなにタコスを振る舞うことができるようになりました🌮</li>&#10;</ul></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "2/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>フロントエンドカンファレンスで<br>プロポーザル通らなかったので<br>ここで発散します！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "3/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>autofocusってなーに？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "4/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">autofocus属性</h2><div class="text-left text-white"><ul>&#10;<li>HTMLの<strong>グローバル属性</strong>で、ページ読み込み時に要素にフォーカスを当てる</li>&#10;<li>どの要素にも付与できる（フォーカス可能な要素でのみ効果あり）</li>&#10;<li>複数の要素に付与することができるが、フォーカスは最初のものに当たる</li>&#10;</ul><pre v-pre><code class="language-html">&lt;input type="text" autofocus /&gt;&#10;</code></pre></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "5/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>なんで遭遇したんだ？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "6/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">ESLint jsx-a11yの導入</h2><div class="text-left text-white"><div class="flex items-start gap-8"><div><ul>&#10;<li>SonarQubeでa11yの指摘を受けたPRがきっかけ</li>&#10;<li>「そもそもa11yのLintルール入ってなくない？」と気づいた</li>&#10;<li><code>eslint-plugin-jsx-a11y</code>を自分で導入</li>&#10;<li>すると<code>jsx-a11y/no-autofocus</code>の警告が発生</li>&#10;<li><strong>そこで初めてautofocusという属性の存在を知った</strong></li>&#10;</ul></div><img :src="'/slides/autofocus-correct-usage/assets/pr-532.png'" alt="a11y周り修正 PR #532" width="1820" height="1316" class="max-w-[40%] h-auto rounded-lg"></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "7/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">最初の選択肢</h2><div class="text-left text-white"><ul>&#10;<li>ESLintのエラーなので、単純にautofocusを消すこともできた</li>&#10;<li>でも知らなかった属性だったので、ちゃんと調べてみた</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "8/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>なんでエラーなるん？</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "9/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">jsx-a11y/no-autofocusの理由</h2><div class="text-left text-white"><div class="flex items-start gap-8"><div><ul>&#10;<li>autofocusはページ読み込み時にフォーカスを強制的に移動させる</li>&#10;<li>スクリーンリーダーユーザーにとって混乱の原因になる&#10;<ul>&#10;<li>ページの先頭から読み上げが始まらない</li>&#10;<li>フォーカスが突然移動し、現在位置を見失う</li>&#10;</ul>&#10;</li>&#10;</ul></div><img :src="'/slides/autofocus-correct-usage/assets/oxlint-no-autofocus.png'" alt="oxlint jsx-a11y/no-autofocus の警告出力" width="1108" height="211" class="max-w-[45%] h-auto rounded-lg"></div></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "10/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Demo: よくないautofocusの使い方</h2><div class="text-left text-white"><p>ページ読み込み時に意図しない場所へフォーカスが飛ぶ</p><AutofocusDemo kind="bad" /></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "11/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>正しい使い方も知りたい！！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "12/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">読んだドキュメント</h2><div class="text-left text-white"><ul>&#10;<li><a href="https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/autofocus">MDN - autofocus</a></li>&#10;<li><a href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/dialog">MDN - dialog</a></li>&#10;<li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/">W3C APG - Dialog (Modal) Pattern</a></li>&#10;<li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/examples/alertdialog/">W3C APG - Alert Dialog Example</a></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "13/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>ドキュメント読んだ感じ<br>こう使うのが良さそう！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "14/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">W3Cの推奨</h2><div class="text-left text-white"><ul>&#10;<li>autofocusは<strong>ユーザーの操作に応じて表示される要素</strong>で使うべき&#10;<ul>&#10;<li>ダイアログ / モーダル</li>&#10;<li>ポップオーバー</li>&#10;<li>ドロワー</li>&#10;</ul>&#10;</li>&#10;<li>ページの初期読み込み時には使わない</li>&#10;<li><strong>「ユーザーがアクションを起こした結果、フォーカスが移る」のが正しい</strong></li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "15/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">なぜダイアログでは正しいのか</h2><div class="text-left text-white"><ul>&#10;<li>ユーザーが能動的にダイアログを開いている</li>&#10;<li>フォーカスがダイアログ内に移ることは期待される動作</li>&#10;<li>スクリーンリーダーでも自然な流れになる</li>&#10;<li>フォーカストラップと組み合わせるとさらに良い</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "16/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Demo: 正しい用法 — ダイアログ内のautofocus</h2><div class="text-left text-white"><p>ユーザーの操作でダイアログが開き、入力欄にフォーカス</p><AutofocusDemo kind="login" /></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "17/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Demo: W3C APG推奨 — キャンセルにautofocus</h2><div class="text-left text-white"><p>不可逆な操作ではキャンセルにフォーカスを置き、誤操作を防ぐ</p><AutofocusDemo kind="cancel" /></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "18/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">デザインシステムとDialog</h2><div class="text-left text-white"><ul>&#10;<li>最近チームでデザインシステムを構築中</li>&#10;<li>チームメンバーがDialogコンポーネントを実装</li>&#10;<li>レビュー時に「フォーカス制御あるかな？」と確認したら…あった！</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "19/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Radix UI Dialog の onOpenAutoFocus</h2><div class="text-left text-white"><ul>&#10;<li><code>Dialog.Content</code> に <code>onOpenAutoFocus</code> propがある</li>&#10;<li>HTML <code>autofocus</code> を使わずにフォーカス制御ができる → Linterにも怒られない</li>&#10;</ul><pre v-pre><code class="language-tsx">&lt;Dialog.Content&#10;  onOpenAutoFocus={(event) =&gt; {&#10;    event.preventDefault();&#10;    cancelButtonRef.current?.focus();&#10;  &#125;&#125;&#10;&gt;&#10;  ...&#10;&lt;/Dialog.Content&gt;&#10;</code></pre><ul>&#10;<li><code>onCloseAutoFocus</code> で閉じた後のフォーカス先も制御できる</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "20/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Demo: onOpenAutoFocus でキャンセルにフォーカス</h2><div class="text-left text-white"><p>HTML autofocusなしで、Linterにも怒られない</p><AutofocusDemo kind="radix" /></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "21/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">Base UIにも同様の仕組みがある</h2><div class="text-left text-white"><ul>&#10;<li>Base UIのDialogには <code>initialFocus</code> propがある</li>&#10;<li>Radix UI: <code>onOpenAutoFocus</code> / Base UI: <code>initialFocus</code> — アプローチは違うが同じことができる</li>&#10;<li><strong>shadcn/uiはどちらのプリミティブにも対応</strong>しているので、いい感じにフォーカス制御できる</li>&#10;</ul><table><thead><tr><th></th><th>Radix UI</th><th>Base UI</th></tr></thead><tbody><tr><td>開いた時</td><td><code>onOpenAutoFocus</code></td><td><code>initialFocus</code></td></tr><tr><td>閉じた時</td><td><code>onCloseAutoFocus</code></td><td><code>finalFocus</code></td></tr></tbody></table></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "22/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>まとめ</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "23/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">まとめ</h2><div class="text-left text-white"><ul>&#10;<li><strong>autofocus</strong>はどの要素にも付けられるグローバル属性</li>&#10;<li>Linterが警告するのはa11y的にユーザーを混乱させる可能性がある</li>&#10;<li><strong>ダイアログやモーダル内での使用が正しいパターン</strong></li>&#10;<li>UIライブラリにもフォーカス制御の仕組みが用意されている</li>&#10;<li>ESLintのエラーを「消す」のではなく「調べた」ことで正しい知識を得られた</li>&#10;</ul></div></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "24/0"
---

<div class="slide-body"><div class="flex h-full items-center justify-center"><h1 class="whitespace-pre-line text-center"><p>次は絶対にプロポーザル通すぞ！！！！<br>目指せカンファレンス登壇！！</p></h1></div></div>

---
background: "/slides/templates/af4e26a78715.png"
legacyHash: "25/0"
---

<div class="slide-body"><div class="flex h-full flex-col justify-center"><h2 class="text-left text-white">【宣伝】Frontend Conference Nagoya 2026 前夜祭！</h2><div class="text-left text-white"><div class="flex items-center gap-8"><img :src="'/slides/autofocus-correct-usage/assets/fcn2026-eve.png'" alt="Frontend Conference Nagoya 2026 前夜祭 - 2026.05.08(Fri) 19:00 株式会社スタメン 名古屋オフィス" width="762" height="443" class="max-w-[55%] h-auto rounded-lg"><div><ul>&#10;<li><strong>2026.05.08(Fri) 19:00</strong></li>&#10;<li>株式会社スタメン 名古屋オフィス</li>&#10;<li>プロポーザルの供養がてら登壇してきます！！</li>&#10;<li><a href="https://stmn.connpass.com/event/390165/">stmn.connpass.com/event/390165</a></li>&#10;</ul></div></div></div></div></div>
