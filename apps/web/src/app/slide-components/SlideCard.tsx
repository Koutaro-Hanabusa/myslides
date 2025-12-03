"use client";

import type { Route } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RevealPresentation from "@/components/reveal-presentation";

interface SlideCardProps {
	href: Route;
	title: string;
	date: string;
	event?: string;
	url?: string;
	children: React.ReactNode;
}

export default function SlideCard({
	href,
	title,
	date,
	event,
	url,
	children,
}: SlideCardProps) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						// 一度表示されたらObserverを解除
						observer.disconnect();
					}
				});
			},
			{
				rootMargin: "100px", // 100px手前でプリロード開始
				threshold: 0,
			},
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={cardRef}
			className="w-full overflow-hidden rounded-lg border border-gray-300"
		>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="block text-inherit no-underline"
			>
				<div className="relative aspect-video cursor-pointer">
					{isVisible ? (
						<RevealPresentation embedded>{children}</RevealPresentation>
					) : (
						<div className="flex h-full w-full items-center justify-center bg-neutral-900 text-gray-500">
							Loading...
						</div>
					)}
				</div>
			</Link>
			<div className="bg-white p-3 md:p-4">
				<h3 className="m-0 text-lg md:text-xl lg:text-3xl text-gray-700">{title}</h3>
				{(date || event) && (
					<div className="mt-1 md:mt-2 flex flex-wrap items-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base text-gray-500">
						{date && <span>{date}</span>}
						{date && event && <span className="text-gray-300">|</span>}
						{event &&
							(url ? (
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs md:text-sm lg:text-base text-blue-600 no-underline"
								>
									{event}
								</a>
							) : (
								<span className="text-xs md:text-sm lg:text-base">{event}</span>
							))}
					</div>
				)}
			</div>
		</div>
	);
}
