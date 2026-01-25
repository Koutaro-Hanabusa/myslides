"use client";

import { use } from "react";
import SlideLoader from "@/components/slides/slide-loader";

interface EmbedPageProps {
  params: Promise<{ slug: string }>;
}

export default function EmbedPage({ params }: EmbedPageProps) {
  const { slug } = use(params);

  return (
    <div className="h-full w-full">
      <SlideLoader slug={slug} embedded={true} />
    </div>
  );
}
