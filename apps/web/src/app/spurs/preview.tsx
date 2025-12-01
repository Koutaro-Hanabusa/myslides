import Link from "next/link";
import { SlidePreviewCard } from "../slide-components/SlidePreviewCard";
import Slide1 from "./slides/slide1";

export default function SpursPreview() {
	return (
		<Link href="/spurs" style={{ textDecoration: "none", color: "inherit" }}>
			<SlidePreviewCard title="Welcome to spurs">
				<Slide1 />
			</SlidePreviewCard>
		</Link>
	);
}
