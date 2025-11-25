import {
	generateOGPImage,
	gradientPresets,
} from "@/lib/ogp/generate-image";

export const runtime = "edge";
export const alt = "Sencorp Presentation";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return generateOGPImage({
		title: "Sencorp",
		gradient: gradientPresets.dark,
	});
}
