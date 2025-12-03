"use client";

import Cover from "./better-t-stack/slides/cover";
import SlideCard from "./slide-components/SlideCard";

export default function Home() {
  return (
    <div className="mx-auto w-1/2 p-8">
      <h1 className="text-center text-6xl">Burio's slide deck</h1>
      <div className="grid grid-cols-1 gap-8">
        <SlideCard
          href="/better-t-stack"
          title="より良い技術スタックでcloudflareにデプロイしよう"
          date="2025/12/10"
          event="Cloudflare Meet-up Tokyo Vol.9"
          url="https://cfm-cts.connpass.com/event/374413/"
        >
          <Cover />
        </SlideCard>
      </div>
    </div>
  );
}
