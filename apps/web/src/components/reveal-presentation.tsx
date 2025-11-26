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
  config?: Record<string, unknown>;
}

export default function RevealPresentation({
  children,
  theme = "black",
  transition = "slide",
  config = {},
}: RevealPresentationProps) {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<unknown>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (deckRef.current) return;
    if (!deckDivRef.current) return;

    // Dynamic import to avoid esbuild __name issue
    import("reveal.js").then((RevealModule) => {
      const Reveal = RevealModule.default;

      if (!deckDivRef.current) return;

      const deck = new Reveal(deckDivRef.current, {
        transition,
        // 16:9アスペクト比（Full HD）
        width: 1920,
        height: 1080,
        margin: 0.1,
        minScale: 0.1,
        maxScale: 0.5,
        center: true,
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
  }, [transition, config]);

  return (
    <div
      className="reveal"
      ref={deckDivRef}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
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
