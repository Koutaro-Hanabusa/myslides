const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const TEMPLATE_PATH = "外部登壇資料テンプレ";

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_表紙.png`}
			data-background-size="contain"
		>
			<div className="text-left">
				<h3 className="!text-white">未定</h3>
				<h1 className="!text-white leading-tight">
					karabinerを使って
					<br />
					マウスを握るのをやめよう
				</h1>
				<br />
				<h3 className="!text-white">ぶりお @burio_16</h3>
			</div>
		</section>
	);
}
