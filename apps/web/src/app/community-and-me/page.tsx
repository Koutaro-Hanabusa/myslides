"use client";

import { Fragment } from "react";
import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import SlidesContent from "./slides.mdx";

export default function PresentationPage() {
  return (
    <div className="h-full w-full">
      <RevealPresentation transition="slide">
        <Cover />
        <SlidesContent components={{ p: Fragment }} />
      </RevealPresentation>
    </div>
  );
}
