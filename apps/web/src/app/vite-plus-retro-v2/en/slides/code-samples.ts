// Code snippets displayed by CodeBlock in slides.mdx.
// They live here because MDX strips leading indentation from template literals.

export const BEFORE_AFTER_CONFIG = `Before: configuration scattered across tools
  turbo.json
  vitest.config.ts
  Oxlint / Oxfmt config
  lefthook.yml
  ...

After: consolidated in vite.config.ts
  vite.config.ts  ← test / lint / fmt / build / task`;

export const ALL_IN_ONE_CONFIG = `// vite.config.ts (from the actual project)
export default defineConfig({
  test:   { … },  // Vitest
  staged: { … },  // git hooks (pre-commit)
  fmt:    { … },  // Oxfmt
  run:    { … },  // cached task runner
  lint:   { … },  // Oxlint
});`;

export const VP_TASK_CACHE_LOG = `$ vp run -r build      # second run (no changes)
  ~/packages/hoge$     vp pack  ◉ cache hit, replaying
  ~/packages/fuga$      tsc ...   ◉ cache hit, replaying
  ~/packages/piyo$ vp pack  ◉ cache hit, replaying
  ──────────────────────────────────────
  vp run: 4/5 cache hit (80%), 27.38s saved
  ↑ Only ui-preview (Astro) rewrites its input, so it is not cached`;

export const LIBRARY_MODE_CONFIG = `// packages/hoge/vite.config.ts
pack: {
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,        // generate type declarations
  sourcemap: true,
  minify: true,
  deps: {
    // Externalize React peer deps
    alwaysBundle: ["clsx", "tailwind-merge", "dayjs"],
  },
}`;

export const PACK_SIZE_DIFF = `             Before              After
             vp build(Vite/lib)  vp pack(tsdown)
  ESM gzip    117KB         →     36KB   (459KB→144KB)
  CJS gzip    102KB         →     36KB   (340KB→148KB)
  build       ~1.59s        →     ~1.0s
  types       vite-plugin-dts →    built into tsdown`;

export const STAGED_HOOKS_CONFIG = `// vite.config.ts replaces lefthook.yml
staged: {
  "*.{ts,tsx,js,jsx,mjs}": "vp lint --fix",
  "*.{ts,tsx,css,md,json,yml}": "vp fmt",
}

// vp config generates the hooks; .vite-hooks/pre-commit is one line
vp staged`;
