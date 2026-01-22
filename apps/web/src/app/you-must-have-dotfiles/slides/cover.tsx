const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const TEMPLATE_PATH = "外部登壇資料テンプレ";

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_表紙.png`}
			data-background-size="contain"
		>
			<div className="text-left">
				<h3>
					Yoriai.cafe 二日間限定オープン！ 🍛ホタテカレーと出会いの「寄り合い」
				</h3>
				<br />
				<h1 className="leading-tight">
					Vim使いでなくても
					<br />
					dotfilesを管理しよう
				</h1>
				<br />
				<h3>ぶりお @burio_16</h3>
			</div>
		</section>
	);
}
