"use client";

import { useEffect, useRef, useState } from "react";

export default function SlidevPresentation({ slug, title }: { slug: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    const base = `/presentations/${slug}/`;
    const slideHash = () =>
      /^#\/[1-9]\d*(?:\?clicks=\d+)?$/.test(window.location.hash) ? window.location.hash : "#/1";
    setSrc(`${base}${slideHash()}`);
    const onHashChange = () =>
      frame.current?.contentWindow?.postMessage(
        { type: "myslides:navigate", hash: slideHash() },
        window.location.origin,
      );
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow)
        return;
      if (
        event.data?.type === "myslides:slide" &&
        /^#\/[1-9]\d*(?:\?clicks=\d+)?$/.test(event.data.hash)
      ) {
        window.history.replaceState(null, "", event.data.hash);
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
