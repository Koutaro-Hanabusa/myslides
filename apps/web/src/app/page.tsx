import type { Route } from "next";
import AutofocusCover from "./autofocus-correct-usage/slides/cover";
import Cover from "./better-t-stack/slides/cover";
import CommunityAndMeCover from "./community-and-me/slides/cover";
import GraduateCover from "./25-graduate/slides/cover";
import MyFavoriteThingCover from "./my-favorite-thing/slides/cover";
import VitestCover from "./oss-and-community/slides/cover";
import VitestCoverV2 from "./oss-and-community-v2/slides/cover";
import R3FCover from "./react-three-fiber/slides/cover";
import RevealCover from "./revealjs-slideDeck/slides/cover";
import TacosCover from "./tacotuesday/slides/cover";
import TacosSpanishCover from "./tacos-spanish/slides/cover";
import TanstackRouterDirStructureCover from "./tanstack-router-dir-structure/slides/cover";
import TimesWorkingOutAloudCover from "./times-working-out-aloud/slides/cover";
import VitePlusRetroCover from "./vite-plus-retro/slides/cover";
import YouMustHaveDotfilesCover from "./you-must-have-dotfiles/slides/cover";
import { SlideCard } from "@/components/slides";
import { getSlideTitle, SLIDES_CONFIG } from "@/lib/slides/config";

const slides = [
  {
    config: SLIDES_CONFIG["my-favorite-thing"],
    Cover: MyFavoriteThingCover,
  },
  {
    config: SLIDES_CONFIG["tacos-spanish"],
    Cover: TacosSpanishCover,
  },
  { config: SLIDES_CONFIG["community-and-me"], Cover: CommunityAndMeCover },
  {
    config: SLIDES_CONFIG["times-working-out-aloud"],
    Cover: TimesWorkingOutAloudCover,
  },
  { config: SLIDES_CONFIG["vite-plus-retro"], Cover: VitePlusRetroCover },
  {
    config: SLIDES_CONFIG["tanstack-router-dir-structure"],
    Cover: TanstackRouterDirStructureCover,
  },
  { config: SLIDES_CONFIG["autofocus-correct-usage"], Cover: AutofocusCover },
  { config: SLIDES_CONFIG["oss-and-community-v2"], Cover: VitestCoverV2 },
  { config: SLIDES_CONFIG["oss-and-community"], Cover: VitestCover },
  { config: SLIDES_CONFIG["25-graduate"], Cover: GraduateCover },
  {
    config: SLIDES_CONFIG["you-must-have-dotfiles"],
    Cover: YouMustHaveDotfilesCover,
  },
  { config: SLIDES_CONFIG["revealjs-slideDeck"], Cover: RevealCover },
  { config: SLIDES_CONFIG.tacotuesday, Cover: TacosCover },
  { config: SLIDES_CONFIG["better-t-stack"], Cover },
  { config: SLIDES_CONFIG["react-three-fiber"], Cover: R3FCover },
] as const;

export default function Home() {
  return (
    <div className="mx-auto w-full p-4 md:w-3/4 md:p-8 lg:w-1/2">
      <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">Burio's slide deck</h1>
      <div className="grid grid-cols-1 gap-4 md:gap-8">
        {slides.map(({ config, Cover: SlideCover }) => (
          <SlideCard
            key={config.slug}
            href={`/${config.slug}` as Route}
            title={getSlideTitle(config)}
            date={config.date}
            event={config.event}
            url={config.eventUrl}
          >
            <SlideCover />
          </SlideCard>
        ))}
      </div>
    </div>
  );
}
