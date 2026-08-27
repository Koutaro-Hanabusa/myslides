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
    <main className="relative isolate min-h-full overflow-y-auto bg-[#11100f] text-stone-100 selection:bg-orange-300 selection:text-stone-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 right-[-12rem] -z-10 h-[36rem] w-[36rem] rounded-full bg-orange-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-16rem] top-[34rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-amber-200/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <header className="mb-10 border-b border-stone-100/15 pb-6 lg:mb-14 lg:pb-8">
          <h1 className="font-serif text-5xl font-medium tracking-[-0.05em] text-stone-50 sm:text-7xl lg:text-8xl">
            Burio's slide deck
          </h1>
        </header>

        <section aria-labelledby="slides-heading">
          <h2 id="slides-heading" className="sr-only">
            Slides
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {slides.map(({ config, Cover: SlideCover }, index) => (
              <article
                key={config.slug}
                className={`group rounded-[1.25rem] border border-stone-100/10 bg-stone-100/[0.035] p-1 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-stone-100/[0.07] ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-center justify-between px-3 pb-2 pt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-stone-500">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <SlideCard
                  href={`/${config.slug}` as Route}
                  title={getSlideTitle(config)}
                  date={config.date}
                  event={config.event}
                  url={config.eventUrl}
                >
                  <SlideCover />
                </SlideCard>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
