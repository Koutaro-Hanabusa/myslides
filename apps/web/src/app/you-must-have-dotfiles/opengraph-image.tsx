import { ImageResponse } from "next/og";
import { createOgpProps } from "@/lib/slides/config";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const ogp = createOgpProps("you-must-have-dotfiles");

export const alt = ogp.alt;
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
				src={`${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_表紙.png`}
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
			{/* 表紙と同じテキストオーバーレイ */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: "0 60px",
				}}
			>
				<p
					style={{
						fontSize: 32,
						fontWeight: 700,
						color: "#fff",
						margin: 0,
					}}
				>
					{ogp.event}
				</p>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: "24px 0",
					}}
				>
					<span
						style={{
							fontSize: 56,
							fontWeight: 700,
							color: "#fff",
							lineHeight: 1.3,
						}}
					>
						Vim使いでなくても
					</span>
					<span
						style={{
							fontSize: 56,
							fontWeight: 700,
							color: "#fff",
							lineHeight: 1.3,
						}}
					>
						dotfilesを管理しよう
					</span>
				</div>
				<p
					style={{
						fontSize: 32,
						fontWeight: 700,
						color: "#fff",
						margin: 0,
					}}
				>
					{ogp.author}
				</p>
			</div>
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
