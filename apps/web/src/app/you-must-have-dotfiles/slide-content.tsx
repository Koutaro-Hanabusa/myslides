"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import SlidesContent from "./slides.mdx";

interface SlideContentProps {
  embedded?: boolean;
}

export default function SlideContent({ embedded = false }: SlideContentProps) {
  return (
    <div className="h-full w-full">
      <RevealPresentation transition="slide" embedded={embedded}>
        <Cover />
        <SlidesContent />
      </RevealPresentation>
    </div>
  );
}
