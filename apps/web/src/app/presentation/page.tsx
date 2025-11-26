import Link from "next/link";
import { EmbeddedSlidePreview } from "./components";
import { presentations } from "./presentations";

export default function PresentationListPage() {
	return (
		<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
			<h1>Presentations</h1>
			<p>Available presentations: {presentations.length}</p>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gap: "2rem",
				}}
			>
				{presentations.map((presentation) => {
					return (
						<Link
							key={presentation.id}
							href={presentation.href}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<div
								style={{
									border: "1px solid #ccc",
									borderRadius: "8px",
									overflow: "hidden",
									cursor: "pointer",
									transition: "transform 0.2s, box-shadow 0.2s",
								}}
							>
								<EmbeddedSlidePreview
									presentationId={presentation.id}
									name={presentation.name}
								/>
								<div style={{ padding: "1rem", background: "#fff" }}>
									<h3 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>
										{presentation.name}
									</h3>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
