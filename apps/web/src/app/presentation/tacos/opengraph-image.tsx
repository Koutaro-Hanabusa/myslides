import { generateOGPImage, gradientPresets } from "@/lib/ogp/generate-image";
export const alt = "Welcome to My Slides";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return generateOGPImage({
		title: "Welcome to My Slides",
		gradient: gradientPresets.orange,
	});
}
