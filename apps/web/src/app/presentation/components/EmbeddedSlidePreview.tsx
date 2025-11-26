"use client";

import { useEffect, useRef, useState } from "react";
import { slidePreviewComponents } from "./slide-previews";

type EmbeddedSlidePreviewProps = {
	presentationId: string;
	name: string;
};

export function EmbeddedSlidePreview({
	presentationId,
}: EmbeddedSlidePreviewProps) {
	const SlideComponent = slidePreviewComponents[presentationId];
	const containerRef = useRef<HTMLDivElement>(null);
	const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

	useEffect(() => {
		if (containerRef.current) {
			const section = containerRef.current.querySelector("section");
			if (section) {
				const bgImage = section.getAttribute("data-background-image");
				if (bgImage) {
					setBackgroundImage(bgImage);
				}
			}
		}
	}, []);

	if (!SlideComponent) {
		return (
			<div
				style={{
					aspectRatio: "16/9",
					background: "#f5f5f5",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<p>Preview not available</p>
			</div>
		);
	}

	return (
		<div
			ref={containerRef}
			style={{
				position: "relative",
				aspectRatio: "16/9",
				background: "#1a1a1a",
				backgroundImage: backgroundImage
					? `url(${backgroundImage})`
					: undefined,
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
			<SlideComponent />
		</div>
	);
}
