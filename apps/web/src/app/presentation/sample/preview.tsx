import Link from "next/link";
import { SlidePreviewCard } from "../components/SlidePreviewCard";
import Slide1 from "./slides/slide1";

export default function SamplePreview() {
	return (
		<Link
			href="/presentation/sample"
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<SlidePreviewCard title="Welcome to My Slides">
				<Slide1 />
			</SlidePreviewCard>
		</Link>
	);
}
