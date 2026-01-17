const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const TEMPLATE_PATH = "外部登壇資料テンプレ";

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/${TEMPLATE_PATH}/千_外部登壇スライド_表紙.png`}
			data-background-size="contain"
		>
			<h1>you-must-have-dotfiles</h1>
		</section>
	);
}
