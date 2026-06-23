// type-aware lint 用のアセット型宣言。
// @next/mdx 経由の *.mdx は React コンポーネントを default export する。
declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType<Record<string, unknown>>;
  export default MDXComponent;
}

// side-effect import (例: reveal.js の CSS) を解決するための空宣言。
declare module "*.css";
