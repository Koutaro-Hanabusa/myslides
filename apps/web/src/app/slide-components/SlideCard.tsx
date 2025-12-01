"use client";

import type { Route } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RevealPresentation from "@/components/reveal-presentation";

interface EventInfo {
	name: string;
	url: string;
}

interface SlideCardProps {
	href: Route;
	title: string;
	children: React.ReactNode;
	date?: string;
	event?: EventInfo;
}

export default function SlideCard({
	href,
	title,
	children,
	date,
	event,
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
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<div
				ref={cardRef}
				style={{
					border: "1px solid #ccc",
					borderRadius: "8px",
					overflow: "hidden",
					cursor: "pointer",
					maxWidth: "1000px",
					margin: "0 auto",
				}}
			>
				<div style={{ aspectRatio: "16/9", position: "relative" }}>
					{isVisible ? (
						<RevealPresentation embedded>{children}</RevealPresentation>
					) : (
						<div
							style={{
								width: "100%",
								height: "100%",
								background: "#1a1a1a",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#666",
							}}
						>
							Loading...
						</div>
					)}
				</div>
				<div style={{ padding: "1rem", background: "#fff" }}>
					<h3 style={{ margin: 0, color: "#333" }}>{title}</h3>
					{(date || event) && (
						<div
							style={{
								marginTop: "0.5rem",
								fontSize: "0.875rem",
								color: "#666",
								display: "flex",
								flexWrap: "wrap",
								gap: "0.5rem",
								alignItems: "center",
							}}
						>
							{date && <span>{date}</span>}
							{date && event && <span>•</span>}
							{event && (
								<a
									href={event.url}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									style={{
										color: "#0066cc",
										textDecoration: "underline",
									}}
								>
									{event.name}
								</a>
							)}
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}
