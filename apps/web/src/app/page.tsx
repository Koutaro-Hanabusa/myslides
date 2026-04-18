"use client";

import type { Route } from "next";
import { SlideCard } from "@/components/slides";
import { SLIDES_CONFIG } from "@/lib/slides/config";
import GraduateCover from "./25-graduate/slides/cover";
import AutofocusCover from "./autofocus-correct-usage/slides/cover";
import Cover from "./better-t-stack/slides/cover";
import VitestCover from "./oss-and-community/slides/cover";
import VitestCoverV2 from "./oss-and-community-v2/slides/cover";
import R3FCover from "./react-three-fiber/slides/cover";
import RevealCover from "./revealjs-slideDeck/slides/cover";
import TacosCover from "./tacotuesday/slides/cover";
import YouMustHaveDotfilesCover from "./you-must-have-dotfiles/slides/cover";

const autofocus = SLIDES_CONFIG["autofocus-correct-usage"];
const ossV2 = SLIDES_CONFIG["oss-and-community-v2"];
const oss = SLIDES_CONFIG["oss-and-community"];
const graduate = SLIDES_CONFIG["25-graduate"];
const dotfiles = SLIDES_CONFIG["you-must-have-dotfiles"];
const reveal = SLIDES_CONFIG["revealjs-slideDeck"];
const tacos = SLIDES_CONFIG.tacotuesday;
const betterT = SLIDES_CONFIG["better-t-stack"];
const r3f = SLIDES_CONFIG["react-three-fiber"];

export default function Home() {
  return (
    <div className="mx-auto w-full p-4 md:w-3/4 md:p-8 lg:w-1/2">
      <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">Burio's slide deck</h1>
      <div className="grid grid-cols-1 gap-4 md:gap-8">
        <SlideCard
          href={`/${autofocus.slug}` as Route}
          title={autofocus.title}
          date={autofocus.date}
          event={autofocus.event}
        >
          <AutofocusCover />
        </SlideCard>

        <SlideCard
          href={`/${ossV2.slug}` as Route}
          title={ossV2.title}
          date={ossV2.date}
          event={ossV2.event}
          url={ossV2.eventUrl}
        >
          <VitestCoverV2 />
        </SlideCard>

        <SlideCard
          href={`/${oss.slug}` as Route}
          title={oss.title}
          date={oss.date}
          event={oss.event}
        >
          <VitestCover />
        </SlideCard>

        <SlideCard
          href={`/${graduate.slug}` as Route}
          title={graduate.title}
          date={graduate.date}
          event={graduate.event}
          url={graduate.eventUrl}
        >
          <GraduateCover />
        </SlideCard>

        <SlideCard
          href={`/${dotfiles.slug}` as Route}
          title={dotfiles.title}
          date={dotfiles.date}
          event={dotfiles.event}
          url={dotfiles.eventUrl}
        >
          <YouMustHaveDotfilesCover />
        </SlideCard>

        <SlideCard
          href={`/${reveal.slug}` as Route}
          title={reveal.title}
          date={reveal.date}
          event={reveal.event}
        >
          <RevealCover />
        </SlideCard>
        <SlideCard
          href={`/${tacos.slug}` as Route}
          title={tacos.title}
          date={tacos.date}
          event={tacos.event}
        >
          <TacosCover />
        </SlideCard>
        <SlideCard
          href={`/${betterT.slug}` as Route}
          title={betterT.title}
          date={betterT.date}
          event={betterT.event}
          url={betterT.eventUrl}
        >
          <Cover />
        </SlideCard>
        <SlideCard
          href={`/${r3f.slug}` as Route}
          title={r3f.title}
          date={r3f.date}
          event={r3f.event}
          url={r3f.eventUrl}
        >
          <R3FCover />
        </SlideCard>
      </div>
    </div>
  );
}
