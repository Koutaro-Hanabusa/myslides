import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import {
	getPresentationConfig,
	gradientPresets,
} from "@/lib/presentation-config";

// Use Node.js runtime for file system access
export const runtime = "nodejs";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;
	const config = await getPresentationConfig(slug);

	if (!config) {
		return new Response("Presentation not found", { status: 404 });
	}

	const gradient = config.gradient ?? gradientPresets.purple;

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
				{config.title}
			</div>
			<div
				style={{
					fontSize: 28,
					opacity: 0.7,
					marginTop: 24,
				}}
			>
				Reveal.js Presentation
			</div>
			{config.author && (
				<div
					style={{
						fontSize: 24,
						opacity: 0.6,
						marginTop: 16,
					}}
				>
					by {config.author}
				</div>
			)}
		</div>,
		{
			width: 1200,
			height: 630,
		},
	);
}
