import SlidevPresentation from "@/components/slidev-presentation";
import { getSlideConfig, getSlideTitle } from "@/lib/slides/config";

export default function PresentationPage() {
  return (
    <div className="relative h-full w-full">
      <SlidevPresentation
        slug="oss-and-community-v2"
        title={getSlideTitle(getSlideConfig("oss-and-community-v2"))}
      />
    </div>
  );
}
