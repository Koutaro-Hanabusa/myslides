const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const TEMPLATE_PATH = "外部登壇資料テンプレ";

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_表紙.png`}
			data-background-size="contain"
		>
			<div className="text-left">
				<h3 className="block text-[2vw]">
					【25卒】新卒のつまずきを糧にしNight
				</h3>
				<h1 className="mt-[2vw] text-[3vw] leading-tight">つまずき共有会！</h1>
				<h3 className="mt-[12vw] text-[2vw]">ぶりお @burio_16</h3>
			</div>
		</section>
	);
}
