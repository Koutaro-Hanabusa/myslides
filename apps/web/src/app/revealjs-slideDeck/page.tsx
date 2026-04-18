import RevealPresentation from "@/components/reveal-presentation";
import Content from "./slides/content";
import Cover from "./slides/cover";

export default function PresentationPage() {
  return (
    <div className="h-full w-full">
      <RevealPresentation transition="slide">
        <Cover />
        <Content />
      </RevealPresentation>
    </div>
  );
}
