"use client";

import BuriCover from "./buri/slides/cover";
import SampleSlide1 from "./sample/slides/slide1";
import SencorpCover from "./sencorp/slides/cover";
import SlideCard from "./slide-components/SlideCard";
import SpursSlide1 from "./spurs/slides/slide1";
import TacosSlide1 from "./tacos/slides/slide1";

export default function Home() {
	return (
		<div style={{ padding: "2rem" }}>
			<h1>Presentations</h1>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr",
					gap: "2rem",
				}}
			>
				<SlideCard href="/sample" title="Sample">
					<SampleSlide1 />
				</SlideCard>

				<SlideCard href="/spurs" title="Spurs">
					<SpursSlide1 />
				</SlideCard>

				<SlideCard href="/tacos" title="Tacos">
					<TacosSlide1 />
				</SlideCard>

				<SlideCard href="/sencorp" title="Sencorp">
					<SencorpCover />
				</SlideCard>

				<SlideCard href="/buri" title="Buri">
					<BuriCover />
				</SlideCard>
			</div>
		</div>
	);
}
