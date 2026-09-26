import RevealPresentation from "@/components/reveal-presentation";
import LanguageSwitch from "../language-switch";
import Cover from "./slides/cover";
import SlidesContent from "./slides.mdx";

export default function EnglishPresentationPage() {
  return (
    <div className="h-full w-full [--r-main-font-size:48px]">
      <LanguageSwitch href="/vite-plus-retro-v2" label="日本語" />
      <RevealPresentation transition="slide">
        <Cover />
        <SlidesContent />
      </RevealPresentation>
    </div>
  );
}
