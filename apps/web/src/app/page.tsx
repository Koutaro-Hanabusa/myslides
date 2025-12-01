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
				<SlideCard
					href="/sample"
					title="Sample"
					date="2024-01-01"
					event={{ name: "Sample Event", url: "https://example.com" }}
				>
					<SampleSlide1 />
				</SlideCard>

				<SlideCard
					href="/spurs"
					title="Spurs"
					date="2024-02-15"
					event={{ name: "Spurs Meetup", url: "https://example.com/spurs" }}
				>
					<SpursSlide1 />
				</SlideCard>

				<SlideCard
					href="/tacos"
					title="Tacos"
					date="2024-03-20"
					event={{ name: "Tacos Conference", url: "https://example.com/tacos" }}
				>
					<TacosSlide1 />
				</SlideCard>

				<SlideCard
					href="/sencorp"
					title="Sencorp"
					date="2024-04-10"
					event={{
						name: "Sencorp Tech Talk",
						url: "https://example.com/sencorp",
					}}
				>
					<SencorpCover />
				</SlideCard>

				<SlideCard
					href="/buri"
					title="Buri"
					date="2024-05-25"
					event={{ name: "Buri Workshop", url: "https://example.com/buri" }}
				>
					<BuriCover />
				</SlideCard>
			</div>
		</div>
	);
}
