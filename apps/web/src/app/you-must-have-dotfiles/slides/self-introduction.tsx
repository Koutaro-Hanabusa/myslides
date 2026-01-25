import type { ReactNode } from "react";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

interface SelfIntroductionProps {
	children: ReactNode;
}

export default function SelfIntroduction({ children }: SelfIntroductionProps) {
	return (
		<section
			data-background-image={`${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_本文.png`}
			data-background-size="contain"
		>
			<div className="flex h-full flex-row flex-row items-center justify-evenly">
				{/* biome-ignore lint/performance/noImgElement: Reveal.js requires img element */}
				<img
					src="/slides/react-three-fiber/assets/burio.png"
					alt="ぶりおの写真"
					className="r-stretch"
				/>

				<div className="flex flex-col">
					<h2 className="text-black">自己紹介</h2>

					<div className="space-y-2 text-left text-black md:space-y-4 lg:space-y-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 md:[&_ul]:space-y-4 lg:[&_ul]:space-y-6">
						{children}
					</div>
				</div>
			</div>
		</section>
	);
}
