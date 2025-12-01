"use client";

import type { Route } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RevealPresentation from "@/components/reveal-presentation";

interface SlideCardProps {
	href: Route;
	title: string;
	children: React.ReactNode;
}

export default function SlideCard({ href, title, children }: SlideCardProps) {
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
				</div>
			</div>
		</Link>
	);
}
