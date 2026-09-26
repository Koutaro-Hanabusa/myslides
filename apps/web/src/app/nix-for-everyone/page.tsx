import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import SlidesContent from "./slides.mdx";
import styles from "./slides.module.css";

export default function PresentationPage() {
  return (
    <div className={`${styles.deck} h-full w-full`}>
      <RevealPresentation transition="slide">
        <Cover />
        <SlidesContent />
      </RevealPresentation>
    </div>
  );
}
