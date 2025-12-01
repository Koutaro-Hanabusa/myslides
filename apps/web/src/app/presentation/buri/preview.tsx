import Link from "next/link";
import { SlidePreviewCard } from "../components/SlidePreviewCard";
import Cover from "./slides/cover";

const BACKGROUND_IMAGE =
	"https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇スライド_表紙.png";

export default function BuriPreview() {
	return (
		<Link
			href="/presentation/buri"
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<SlidePreviewCard title="buri" backgroundImage={BACKGROUND_IMAGE}>
				<Cover />
			</SlidePreviewCard>
		</Link>
	);
}
