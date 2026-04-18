"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import SlidesContent from "./slides.mdx";

export default function PresentationPage() {
  return (
    <div className="h-full w-full">
      <RevealPresentation transition="slide">
        <Cover />
        <SlidesContent />
      </RevealPresentation>
    </div>
  );
}
