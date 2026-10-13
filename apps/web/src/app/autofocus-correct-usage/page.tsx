import SlidevPresentation from "@/components/slidev-presentation";
import { getSlideConfig, getSlideTitle } from "@/lib/slides/config";

export default function PresentationPage() {
  return (
    <div className="relative h-full w-full">
      <SlidevPresentation
        slug="autofocus-correct-usage"
        title={getSlideTitle(getSlideConfig("autofocus-correct-usage"))}
      />
    </div>
  );
}
