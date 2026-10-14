import SlidevPresentation from "@/components/slidev-presentation";
import { getSlideConfig, getSlideTitle } from "@/lib/slides/config";

export default function PresentationPage() {
  return (
    <div className="relative h-full w-full">
      <SlidevPresentation slug="25-graduate" title={getSlideTitle(getSlideConfig("25-graduate"))} />
    </div>
  );
}
