import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

async function getPresentations() {
	const presentationDir = path.join(process.cwd(), "src/app/presentation");

	// Read all directories in the presentation folder
	const entries = await fs.promises.readdir(presentationDir, {
		withFileTypes: true,
	});

	// Filter only directories that have a page.tsx file
	const presentations = await Promise.all(
		entries
			.filter((entry) => entry.isDirectory())
			.map(async (entry) => {
				const pagePath = path.join(presentationDir, entry.name, "page.tsx");
				const slide1Path = path.join(
					presentationDir,
					entry.name,
					"slides/slide1.tsx",
				);

				try {
					await fs.promises.access(pagePath);

					// Extract title from first slide
					let title = entry.name.charAt(0).toUpperCase() + entry.name.slice(1);
					try {
						const slide1Content = await fs.promises.readFile(
							slide1Path,
							"utf-8",
						);
						// Extract text from h1, h2, or h3 tags
						const h1Match = slide1Content.match(/<h1[^>]*>(.*?)<\/h1>/);
						const h2Match = slide1Content.match(/<h2[^>]*>(.*?)<\/h2>/);
						const h3Match = slide1Content.match(/<h3[^>]*>(.*?)<\/h3>/);
						const titleMatch = h1Match || h2Match || h3Match;
						if (titleMatch) {
							title = titleMatch[1];
						}
					} catch {
						// If slide1.tsx doesn't exist, use directory name
					}

					return {
						id: entry.name,
						name: title,
						href: `/presentation/${entry.name}` as const,
					};
				} catch {
					return null;
				}
			}),
	);

	return presentations.filter((p) => p !== null);
}

export default async function PresentationListPage() {
	const presentations = await getPresentations();

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
