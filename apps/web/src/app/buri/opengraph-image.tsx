import { generateOGPImage, gradientPresets } from "@/lib/ogp/generate-image";
export const alt = "buri";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return generateOGPImage({
		title: "buri",
		gradient: gradientPresets.purple,
	});
}
