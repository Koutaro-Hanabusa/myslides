import type { Route } from "next";
import { SlideCard } from "@/components/slides";
import { getSlideTitle, SLIDES_CONFIG } from "@/lib/slides/config";

const slides = [
  {
    config: SLIDES_CONFIG["vite-plus-retro-v2"],
  },
  {
    config: SLIDES_CONFIG["nix-for-everyone"],
  },
  {
    config: SLIDES_CONFIG["my-favorite-thing"],
  },
  {
    config: SLIDES_CONFIG["tacos-spanish"],
  },
  { config: SLIDES_CONFIG["community-and-me"] },
  {
    config: SLIDES_CONFIG["times-working-out-aloud"],
  },
  { config: SLIDES_CONFIG["vite-plus-retro"] },
  {
    config: SLIDES_CONFIG["tanstack-router-dir-structure"],
  },
  { config: SLIDES_CONFIG["autofocus-correct-usage"] },
  { config: SLIDES_CONFIG["oss-and-community-v2"] },
  { config: SLIDES_CONFIG["oss-and-community"] },
  { config: SLIDES_CONFIG["25-graduate"] },
  {
    config: SLIDES_CONFIG["you-must-have-dotfiles"],
  },
  { config: SLIDES_CONFIG["revealjs-slideDeck"] },
  { config: SLIDES_CONFIG.tacotuesday },
  { config: SLIDES_CONFIG["better-t-stack"] },
  { config: SLIDES_CONFIG["react-three-fiber"] },
] as const;

export default function Home() {
  return (
    <div className="mx-auto w-full p-4 md:w-3/4 md:p-8 lg:w-1/2">
      <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">Burio's slide deck</h1>
      <div className="grid grid-cols-1 gap-4 md:gap-8">
        {slides.map(({ config }) => (
          <SlideCard
            key={config.slug}
            href={`/${config.slug}` as Route}
            title={getSlideTitle(config)}
            date={config.date}
            event={config.event}
            url={config.eventUrl}
            previewBase={config.slug === "nix-for-everyone" ? "/nix-for-everyone" : undefined}
          ></SlideCard>
        ))}
      </div>
    </div>
  );
}
