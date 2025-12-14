const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/burioSlide/burio16Cover.png`}
			data-background-size="contain"
		>
			<div className="text-left">
				<h3>社内LT会</h3>
				<br />
				<h1 className="leading-tight">
					自分だけの
					<br />
					スライドデッキを作ってみた
				</h1>
				<br />
				<h3>ぶりお @burio_16</h3>
			</div>
		</section>
	);
}
