import type { ReactNode } from "react";

type SlidePreviewCardProps = {
	title: string;
	children: ReactNode;
	backgroundImage?: string;
};

export function SlidePreviewCard({
	title,
	children,
	backgroundImage,
}: SlidePreviewCardProps) {
	return (
		<div className="cursor-pointer overflow-hidden rounded-lg border border-gray-300 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
			<div
				className="pointer-events-none relative flex aspect-video items-center justify-center overflow-hidden bg-center bg-cover bg-neutral-900 p-4 text-center text-white"
				style={
					backgroundImage
						? { backgroundImage: `url(${backgroundImage})` }
						: undefined
				}
			>
				{children}
			</div>
			<div className="bg-white p-4">
				<h3 className="m-0 mb-2 text-gray-700">{title}</h3>
			</div>
		</div>
	);
}
