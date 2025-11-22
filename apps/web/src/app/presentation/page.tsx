import Link from "next/link";
import { presentations } from "./presentations";

export default function PresentationListPage() {
	return (
		<div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
			<h1>Presentations</h1>
			<p>Available presentations: {presentations.length}</p>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
					gap: "2rem",
				}}
			>
				{presentations.map((presentation) => {
					return (
						<Link
							key={presentation.id}
							// @ts-expect-error Dynamic route with typedRoutes
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
								<div
									style={{
										position: "relative",
										aspectRatio: "16/9",
										background: "#f5f5f5",
										pointerEvents: "none",
									}}
								>
									<iframe
										src={presentation.href}
										style={{
											width: "100%",
											height: "100%",
											border: "none",
										}}
										title={`Preview of ${presentation.name}`}
									/>
								</div>
								<div style={{ padding: "1rem", background: "#fff" }}>
									<h3 style={{ margin: "0 0 0.5rem 0" }}>
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
