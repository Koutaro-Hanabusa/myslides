import Link from "next/link";
import SlidevPresentation from "@/components/slidev-presentation";
import { getSlideConfig, getSlideTitle } from "@/lib/slides/config";

export default function PresentationPage() {
  return (
    <div className="relative h-full w-full">
      <Link
        href="/vite-plus-retro-v2"
        className="absolute right-4 top-4 z-50 rounded bg-black/70 px-3 py-2 text-white"
      >
        日本語
      </Link>
      <SlidevPresentation
        slug="vite-plus-retro-v2/en"
        title={getSlideTitle(getSlideConfig("vite-plus-retro-v2/en"))}
      />
    </div>
  );
}
