import SlidevPresentation from "@/components/slidev-presentation";
import { getSlideConfig, getSlideTitle } from "@/lib/slides/config";

export default function PresentationPage() {
  return (
    <div className="relative h-full w-full">
      <SlidevPresentation
        slug="react-three-fiber"
        title={getSlideTitle(getSlideConfig("react-three-fiber"))}
      />
    </div>
  );
}
