"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";

export default function PresentationPage() {
	return (
		<div style={{ width: "100%", height: "100%" }}>
			<RevealPresentation transition="slide">
				<Slide1 />
				<Slide2 />
				<Slide3 />
				<Slide4 />
				<Slide5 />
			</RevealPresentation>
		</div>
	);
}
