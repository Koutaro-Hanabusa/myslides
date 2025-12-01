import { generateOGPImage } from "@/lib/ogp/generate-image";

// OGP専用画像を使用
const OGP_BACKGROUND_IMAGE =
	"https://pub-12dea38316b14a799f73d17465eadeb1.r2.dev/外部登壇資料テンプレ/千_外部登壇OGP.png";

export const alt = "buri";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function Image() {
	return generateOGPImage({
		title: "buri",
		backgroundImage: OGP_BACKGROUND_IMAGE,
		backgroundSize: "cover",
	});
}
