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
			style={{
				border: "1px solid #ccc",
				borderRadius: "8px",
				overflow: "hidden",
				width: "100%",
			}}
		>
			<Link
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				style={{ textDecoration: "none", color: "inherit", display: "block" }}
			>
				<div
					style={{
						aspectRatio: "16/9",
						position: "relative",
						cursor: "pointer",
					}}
				>
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
			</Link>
			<div style={{ padding: "1rem", background: "#fff" }}>
				<h3 style={{ fontSize: "2rem", margin: 0, color: "#333" }}>{title}</h3>
				{(date || event) && (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
							marginTop: "0.5rem",
							fontSize: "1rem",
							color: "#666",
						}}
					>
						{date && <span>{date}</span>}
						{date && event && <span style={{ color: "#ccc" }}>|</span>}
						{event &&
							(url ? (
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#0066cc",
										textDecoration: "none",
										fontSize: "1rem",
									}}
								>
									{event}
								</a>
							) : (
								<span style={{ fontSize: "1rem" }}>{event}</span>
							))}
					</div>
				)}
			</div>
		</div>
	);
}
