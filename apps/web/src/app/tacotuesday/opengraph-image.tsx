import { ImageResponse } from "next/og";

export const alt = "tacotuesday";
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
				src="https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/burioSlideOGP.png"
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
