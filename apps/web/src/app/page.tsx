"use client";

import BuriCover from "./buri/slides/cover";
import SampleSlide1 from "./sample/slides/slide1";
import SencorpCover from "./sencorp/slides/cover";
import SlideCard from "./slide-components/SlideCard";
import SpursSlide1 from "./spurs/slides/slide1";
import TacosSlide1 from "./tacos/slides/slide1";

export default function Home() {
	return (
		<div style={{ padding: "2rem", width: "50%", margin: "0 auto" }}>
			<h1 style={{ fontSize: "5rem", textAlign: "center" }}>
				Burio's slide deck
			</h1>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr",
					gap: "2rem",
				}}
			>
				<SlideCard href="/sample" title="Sample" date="2025/10/25">
					<SampleSlide1 />
				</SlideCard>

				<SlideCard href="/spurs" title="Spurs" date="2025/10/25">
					<SpursSlide1 />
				</SlideCard>

				<SlideCard href="/tacos" title="Tacos" date="2025/10/25">
					<TacosSlide1 />
				</SlideCard>

				<SlideCard
					href="/sencorp"
					title="Sencorp"
					date="2025/10/25"
					event="ゆるプット"
					url="https://sencorp.connpass.com/event/357406/"
				>
					<SencorpCover />
				</SlideCard>

				<SlideCard href="/buri" title="Buri" date="2025/10/25">
					<BuriCover />
				</SlideCard>
			</div>
		</div>
	);
}
