import type { ReactNode } from "react";

type SlidePreviewCardProps = {
	title: string;
	children: ReactNode;
	backgroundImage?: string;
};

export function SlidePreviewCard({ title, children, backgroundImage }: SlidePreviewCardProps) {
	return (
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
					background: "#1a1a1a",
					backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
					backgroundSize: "cover",
					backgroundPosition: "center",
					pointerEvents: "none",
					overflow: "hidden",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "#fff",
					textAlign: "center",
					padding: "1rem",
				}}
			>
				{children}
			</div>
			<div style={{ padding: "1rem", background: "#fff" }}>
				<h3 style={{ margin: "0 0 0.5rem 0", color: "#333" }}>{title}</h3>
			</div>
		</div>
	);
}
