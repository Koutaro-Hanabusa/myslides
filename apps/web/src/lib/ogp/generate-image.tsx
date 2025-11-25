import { ImageResponse } from "next/og";

export interface OGPImageParams {
	title: string;
	subtitle?: string;
	gradient?: [string, string];
	author?: string;
}

export const gradientPresets = {
	purple: ["#667eea", "#764ba2"] as [string, string],
	pink: ["#f093fb", "#f5576c"] as [string, string],
	dark: ["#000000", "#434343"] as [string, string],
	blue: ["#4facfe", "#00f2fe"] as [string, string],
	orange: ["#fa709a", "#fee140"] as [string, string],
	green: ["#11998e", "#38ef7d"] as [string, string],
	red: ["#ff416c", "#ff4b2b"] as [string, string],
	teal: ["#0cebeb", "#20e3b2"] as [string, string],
} as const;

export function generateOGPImage({
	title,
	subtitle = "Reveal.js Presentation",
	gradient = gradientPresets.purple,
	author,
}: OGPImageParams): ImageResponse {
	return new ImageResponse(
		<div
			style={{
				fontSize: 64,
				background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "white",
				fontFamily: "system-ui, sans-serif",
			}}
		>
			<div
				style={{
					fontSize: 32,
					opacity: 0.8,
					marginBottom: 16,
				}}
			>
				mySlides
			</div>
			<div
				style={{
					fontSize: 72,
					fontWeight: "bold",
					textAlign: "center",
					padding: "0 48px",
					lineHeight: 1.2,
				}}
			>
				{title}
			</div>
			<div
				style={{
					fontSize: 28,
					opacity: 0.7,
					marginTop: 24,
				}}
			>
				{subtitle}
			</div>
			{author && (
				<div
					style={{
						fontSize: 24,
						opacity: 0.6,
						marginTop: 16,
					}}
				>
					by {author}
				</div>
			)}
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
