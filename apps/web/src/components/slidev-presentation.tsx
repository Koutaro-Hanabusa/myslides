"use client";

import { useEffect, useRef, useState } from "react";
import decks from "../../../decks/decks.json";

export default function SlidevPresentation({ slug, title }: { slug: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    const base = `/presentations/${slug}/`;
    const deck = decks[slug as keyof typeof decks];
    const legacy = deck.legacy as Record<string, number>;
    const toSlidevHash = () => {
      const match = window.location.hash.match(/^#\/(\d+)(?:\/(\d+))?$/);
      const page = match ? legacy[`${match[1]}/${match[2] || "0"}`] || 1 : 1;
      return `#/${page}`;
    };
    setSrc(`${base}${toSlidevHash()}`);
    const onHashChange = () =>
      frame.current?.contentWindow?.postMessage(
        { type: "myslides:navigate", hash: toSlidevHash() },
        window.location.origin,
      );
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow)
        return;
      if (
        event.data?.type === "myslides:slide" &&
        /^#\/\d+(?:\?clicks=\d+)?$/.test(event.data.hash)
      ) {
        const page = Number(event.data.hash.match(/^#\/(\d+)/)?.[1]);
        const position = Object.entries(legacy).find(([, value]) => value === page)?.[0];
        if (position) window.history.replaceState(null, "", `#/${position}`);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("message", onMessage);
    };
  }, [slug]);

  return (
    <iframe
      ref={frame}
      src={src}
      title={title}
      className="h-full w-full border-0"
      allow="fullscreen"
      onLoad={() => frame.current?.focus()}
    />
  );
}
