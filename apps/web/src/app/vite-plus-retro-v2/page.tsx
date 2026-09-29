import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import SlidesContent from "./slides.mdx";
import LanguageSwitch from "./language-switch";

export default function PresentationPage() {
  return (
    <div className="h-full w-full [--r-main-font-size:48px]">
      <LanguageSwitch href="/vite-plus-retro-v2/en" label="English" />
      <RevealPresentation transition="slide">
        <Cover />
        <SlidesContent />
      </RevealPresentation>
    </div>
  );
}
