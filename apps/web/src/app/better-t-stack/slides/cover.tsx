import { getSlideConfig } from "@/lib/slides/config";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const config = getSlideConfig("better-t-stack");

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_表紙.png`}
			data-background-size="contain"
		>
			<div className="text-left">
				<h3>{config.event}</h3>
				<br />
				<h1 className="leading-tight">
					より良い技術スタックで
					<br />
					Cloudflareにデプロイしよう
				</h1>
				<br />
				<h3>{config.author} @burio_16</h3>
			</div>
		</section>
	);
}
