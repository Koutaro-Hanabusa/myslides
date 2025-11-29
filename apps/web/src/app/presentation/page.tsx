import SamplePreview from "./sample/preview";
import SpursPreview from "./spurs/preview";
import TacosPreview from "./tacos/preview";
import SencorpPreview from "./sencorp/preview";
import BuriPreview from "./buri/preview";

export default function PresentationListPage() {
	return (
		<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
			<h1>Presentations</h1>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "2rem",
				}}
			>
				<SamplePreview />
				<SpursPreview />
				<TacosPreview />
				<SencorpPreview />
				<BuriPreview />
			</div>
		</div>
	);
}
