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
