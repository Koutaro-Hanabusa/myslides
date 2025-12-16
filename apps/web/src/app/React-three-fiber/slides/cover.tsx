const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_表紙.png`}
			data-background-size="contain"
		>
			<div className="text-left">
				<h3>React Tokyo ミートアップ#11</h3>
				<br />
				<h1 className="leading-tight">
					WebGL入門
					<br />
					Three.jsで良さげなプロフィールサイト作ってみた
				</h1>
				<br />
				<h3>ぶりお @burio_16</h3>
			</div>
		</section>
	);
}
