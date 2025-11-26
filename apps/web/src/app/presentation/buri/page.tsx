"use client";

import RevealPresentation from "@/components/reveal-presentation";
import Cover from "./slides/cover";
import CorporatePhilosophy from "./slides/corporate-philosophy";
import BusinessContent from "./slides/business-content";
import SelfIntroduction from "./slides/self-introduction";
import Heading from "./slides/heading";
import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import BackCover from "./slides/back-cover";

export default function PresentationPage() {
	return (
		<div style={{ width: "100%", height: "100%" }}>
			<RevealPresentation transition="slide">
				<Cover />
				<CorporatePhilosophy />
				<BusinessContent />
				<SelfIntroduction />
				<Heading />
				<Slide1 />
				<Slide2 />
				<Slide3 />
				<Slide4 />
				<Slide5 />
				<BackCover />
			</RevealPresentation>
		</div>
	);
}
