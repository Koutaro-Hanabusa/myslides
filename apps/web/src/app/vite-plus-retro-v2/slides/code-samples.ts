// スライド本文（slides.mdx）の CodeBlock に渡すコード片。
// MDX のテンプレートリテラルは各行先頭インデントが剥がれるため、
// インデントを保持したいものはこの .ts ファイル側で定義する。

export const BEFORE_AFTER_CONFIG = `Before: ツールごとに設定が散らばる
  turbo.json
  vitest.config.ts
  oxlint / oxfmt の設定
  lefthook.yml
  ...

After: vite.config.ts に寄せられた
  vite.config.ts  ← test / lint / fmt / build / task`;

export const ALL_IN_ONE_CONFIG = `// vite.config.ts （実物）
export default defineConfig({
  test:   { … },  // Vitest
  staged: { … },  // git hooks（pre-commit）
  fmt:    { … },  // Oxfmt
  run:    { … },  // タスク実行（キャッシュ付き）
  lint:   { … },  // Oxlint
});`;

export const VP_TASK_CONFIG = `// package.json
"build": "vp run -r build"
// -r = 全 workspace を依存順に実行（既定で最大4並列）

// vite.config.ts
run: {
  cache: { scripts: true }, // 使ったファイルを自動追跡してキャッシュ
}`;

// ② cache ヒット時の実ターミナル出力（2回目・変更なし） 実測
export const VP_TASK_CACHE_LOG = `$ vp run -r build      # 2回目（変更なし）
  ~/packages/hoge$     vp pack  ◉ cache hit, replaying
  ~/packages/fuga$      tsc ...   ◉ cache hit, replaying
  ~/packages/piyo$ vp pack  ◉ cache hit, replaying
  ──────────────────────────────────────
  vp run: 4/5 cache hit (80%), 27.38s saved
  ↑ ui-preview(Astro) だけは入力を書き換えるので非キャッシュ`;

export const LIBRARY_MODE_CONFIG = `// packages/hoge/vite.config.ts
pack: {
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,        // 型定義も出力
  sourcemap: true,
  minify: true,
  deps: {
    // react 系は peer で external、それ以外はバンドル
    alwaysBundle: ["clsx", "tailwind-merge", "dayjs"],
  },
}`;

export const PACK_SIZE_DIFF = `             Before              After
             vp build(Vite/lib)  vp pack(tsdown)
  ESM  gzip   117KB         →     36KB   (459KB→144KB)
  CJS  gzip   102KB         →     36KB   (340KB→148KB)
  build       ~1.59s        →     ~1.0s
  型定義      vite-plugin-dts →    tsdown 内蔵`;

export const NODE_MANAGED_CONFIG = `// .node-version ← vp が読んで Node を用意
24.16.0

// package.json
"packageManager": "pnpm@11.5.1" // ※pnpm の管理は vp 未対応（自前で固定）`;

export const STAGED_HOOKS_CONFIG = `// vite.config.ts ← lefthook.yml を置き換え
staged: {
  "*.{ts,tsx,js,jsx,mjs}": "vp lint --fix",
  "*.{ts,tsx,css,md,json,yml}": "vp fmt",
}

// vp config が hooks を生成 → .vite-hooks/pre-commit の中身は1行
vp staged`;
