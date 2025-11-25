import {
	generateOGPImage,
	gradientPresets,
} from "@/lib/ogp/generate-image";

export const runtime = "edge";
export const alt = "Welcome to spurs";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return generateOGPImage({
		title: "Welcome to spurs",
		gradient: gradientPresets.green,
	});
}
