"use client";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

interface RevealPresentationProps {
	children?: React.ReactNode;
	theme?:
		| "black"
		| "white"
		| "league"
		| "beige"
		| "sky"
		| "night"
		| "serif"
		| "simple"
		| "solarized";
	transition?: "none" | "fade" | "slide" | "convex" | "concave" | "zoom";
	config?: Reveal.Options;
}

export default function RevealPresentation({
	children,
	theme = "black",
	transition = "slide",
	config = {},
}: RevealPresentationProps) {
	const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
	const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return;

		if (!deckDivRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current, {
			transition,
			...config,
		});

		deckRef.current.initialize().then(() => {
			// good place for event handlers and plugin setups
			console.log("Reveal.js initialized successfully");
		});

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy();
					deckRef.current = null;
				}
			} catch (e) {
				console.warn("Reveal.js destroy call failed.");
			}
		};
	}, [transition, config]);

	return (
		// Your presentation is sized based on the width and height of
		// our parent element. Make sure the parent is not 0-height.
		<div
			className="reveal"
			ref={deckDivRef}
			style={{ width: "100%", height: "100%" }}
		>
			<div className="slides">
				{children || (
					<>
						<section>Slide 1</section>
						<section>Slide 2</section>
					</>
				)}
			</div>
		</div>
	);
}
