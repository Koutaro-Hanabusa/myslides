"use client";

import { Deck } from "@revealjs/react";
import Markdown from "reveal.js/plugin/markdown/markdown";
import { type ComponentProps, useEffect, useState } from "react";

// reveal.jsのCSSはlayout.tsxで一括読み込み済み

// reveal.js のバージョン差で型 export が揺れるため、Deck の prop 型から導出する
type DeckConfig = NonNullable<ComponentProps<typeof Deck>["config"]>;
type DeckPlugins = NonNullable<ComponentProps<typeof Deck>["plugins"]>;

const plugins: DeckPlugins = [Markdown as unknown as DeckPlugins[number]];

interface RevealPresentationProps {
  children?: React.ReactNode;
  theme?:
    | "black"
    | "white"
    | "league"
    | "beige"
    | "sky"
    | "night"
    | "serif"
    | "simple"
    | "solarized";
  transition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
  embedded?: boolean;
  config?: Record<string, unknown>;
}

export default function RevealPresentation({
  children,
  theme: _theme = "black",
  transition = "slide",
  embedded = false,
  config = {},
}: RevealPresentationProps) {
  // reveal.js はクライアントで DOM を書き換えるため、SSR では Deck を描画せず
  // マウント後にのみ描画して hydration mismatch を防ぐ
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="reveal relative h-full w-full overflow-hidden" />;
  }

  const deckConfig: DeckConfig = {
    transition,
    // URLにスライド番号を反映（#/0, #/1 など）
    hash: true,
    // 16:9アスペクト比を維持しつつレスポンシブ対応
    width: 1920,
    height: 1080,
    margin: 0.04,
    minScale: 0.1,
    maxScale: 2.0,
    center: true,
    embedded,
    // 通常のスライドビューを使用（スワイプナビゲーション有効）
    // 'scroll'にするとスクロールビューになりスワイプが効かない
    view: null,
    // モバイル幅でのスクロールビュー自動切り替えを無効化
    scrollActivationWidth: 0,
    // embeddedモード時はフォーカス時のみキーボード操作を有効に
    keyboardCondition: embedded ? "focused" : null,
    // embeddedモード時はコントロールを非表示
    controls: !embedded,
    progress: !embedded,
    // タッチナビゲーションを明示的に有効化
    touch: true,
    // プリロードするスライド数
    viewDistance: embedded ? 1 : 3,
    mobileViewDistance: embedded ? 1 : 2,
    // 縦スライドを有効にするためdefaultに設定
    navigationMode: "default",
    // レイアウト計算を有効化してプレビューでも正しくスケーリング
    disableLayout: false,
    ...config,
  };

  return (
    <Deck className="relative h-full w-full overflow-hidden" config={deckConfig} plugins={plugins}>
      {children || (
        <>
          <section>Slide 1</section>
          <section>Slide 2</section>
        </>
      )}
    </Deck>
  );
}
