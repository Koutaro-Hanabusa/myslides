"use client";

import { useState } from "react";
import { SlideLoading } from "./SlideLoading";

type SlidePreviewProps = {
  href: string;
  name: string;
};

export function SlidePreview({ href, name }: SlidePreviewProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "16/9",
        background: "#f5f5f5",
        pointerEvents: "none",
      }}
    >
      {!loaded && <SlideLoading />}
      <iframe
        src={href}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        title={`Preview of ${name}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
