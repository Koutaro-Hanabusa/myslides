"use client";

import type { ComponentType } from "react";

// 各プレゼンテーションの最初のスライドをインポート
import SampleSlide1 from "../sample/slides/slide1";
import SpursSlide1 from "../spurs/slides/slide1";
import TacosSlide1 from "../tacos/slides/slide1";
import SencorpCover from "../sencorp/slides/cover";
import BuriCover from "../buri/slides/cover";

// プレゼンテーションIDとプレビュースライドのマッピング
export const slidePreviewComponents: Record<string, ComponentType> = {
	sample: SampleSlide1,
	spurs: SpursSlide1,
	tacos: TacosSlide1,
	sencorp: SencorpCover,
	buri: BuriCover,
};
