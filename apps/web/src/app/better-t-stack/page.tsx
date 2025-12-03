"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import CorporatePhilosophy from "./slides/corporate-philosophy";
import BusinessContent from "./slides/business-content";
import SelfIntroduction from "./slides/self-introduction";
import Content from "./slides/content";
import BackCover from "./slides/back-cover";

export default function PresentationPage() {
  return (
    <div className="h-full w-full">
      <RevealPresentation transition="slide">
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
