"use client";

import RevealPresentation from "@/components/reveal-presentation";
import BackCover from "./slides/back-cover";
import BusinessContent from "./slides/business-content";
import Content from "./slides/content";
import CorporatePhilosophy from "./slides/corporate-philosophy";
import Cover from "./slides/cover";
import SelfIntroduction from "./slides/self-introduction";

interface SlideContentProps {
  embedded?: boolean;
}

export default function SlideContent({ embedded = false }: SlideContentProps) {
  return (
    <div className="h-full w-full">
      <RevealPresentation transition="slide" embedded={embedded}>
        <Cover />
        <SelfIntroduction />
        <CorporatePhilosophy />
        <BusinessContent />
        <Content />
        <BackCover />
      </RevealPresentation>
    </div>
  );
}
