"use client";

import type { Route } from "next";
import Link from "next/link";
import RevealPresentation from "@/components/reveal-presentation";

interface SlideCardProps {
	href: Route;
	title: string;
	children: React.ReactNode;
}

export default function SlideCard({ href, title, children }: SlideCardProps) {
	return (
		<Link href={href} style={{ textDecoration: "none", color: "inherit" }}>
			<div
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
					<RevealPresentation embedded>{children}</RevealPresentation>
				</div>
				<div style={{ padding: "1rem", background: "#fff" }}>
					<h3 style={{ margin: 0, color: "#333" }}>{title}</h3>
				</div>
			</div>
		</Link>
	);
}
