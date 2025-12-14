const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export default function Cover() {
	return (
		<section
			data-background-image={`${R2_BASE}/burioSlide/burio16Cover.png`}
			data-background-size="contain"
		>
			<div className="text-left">
				<h3 className="!text-white">12/15 社内 LT 会</h3>
				<h1 className="!text-white leading-tight">全人類タコスを食え</h1>
				<br />
				<h3 className="!text-white">ぶりお @burio_16</h3>
			</div>
		</section>
	);
}
