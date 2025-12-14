import { ImageResponse } from "next/og";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export const alt = "revealjs-slideDeck";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
			}}
		>
			{/* biome-ignore lint/performance/noImgElement: next/og ImageResponseではimg要素が必要 */}
			<img
				src={`${R2_BASE}/burioSlide/burio16Cover.png`}
				alt="スライド表紙"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
			/>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
