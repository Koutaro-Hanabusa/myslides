"use client";

import { useEffect, useRef, useState } from "react";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

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
	theme = "black",
	transition = "slide",
	embedded = false,
	config = {},
}: RevealPresentationProps) {
	const deckDivRef = useRef<HTMLDivElement>(null);
	const deckRef = useRef<unknown>(null);
	const [_isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (deckRef.current) return;
		if (!deckDivRef.current) return;

		// Dynamic import to avoid esbuild __name issue
		import("reveal.js").then((RevealModule) => {
			const Reveal = RevealModule.default;

			if (!deckDivRef.current) return;

			// URLパラメータでprint-pdfモードを検出
			const urlParams = new URLSearchParams(window.location.search);
			const isPrintPdf = urlParams.has("print-pdf");

			const deck = new Reveal(deckDivRef.current, {
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
				// print-pdfモード時は'print'、通常時はnull（スワイプナビゲーション有効）
				view: isPrintPdf ? "print" : null,
				// モバイル幅でのスクロールビュー自動切り替えを無効化
				// これがないとビューポートが狭いときに自動でスクロールビューになる
				scrollActivationWidth: 0,
				// embeddedモード時はフォーカス時のみキーボード操作を有効に
				keyboardCondition: embedded ? "focused" : null,
				// embeddedモード時はコントロールを非表示
				controls: !embedded,
				progress: !embedded,

				// モバイル最適化設定
				touch: true, // タッチナビゲーションを明示的に有効化

				// パフォーマンス最適化
				viewDistance: embedded ? 1 : 3, // プリロードするスライド数
				mobileViewDistance: embedded ? 1 : 2, // モバイル向けのプリロード数

				// ナビゲーション設定
				navigationMode: "default", // 縦スライドを有効にするためdefaultに設定
				disableLayout: false, // レイアウト計算を有効化してプレビューでも正しくスケーリング

				...config,
			});

			deck.initialize().then(() => {
				setIsReady(true);
			});

			deckRef.current = deck;
		});

		return () => {
			try {
				if (deckRef.current) {
					(deckRef.current as { destroy: () => void }).destroy();
					deckRef.current = null;
				}
			} catch {
				console.warn("Reveal.js destroy call failed.");
			}
		};
	}, [transition, embedded, config]);

	return (
		<div
			className="reveal relative h-full w-full overflow-hidden"
			ref={deckDivRef}
		>
			<div className="slides">
				{children || (
					<>
						<section>Slide 1</section>
						<section>Slide 2</section>
					</>
				)}
			</div>
		</div>
	);
}
