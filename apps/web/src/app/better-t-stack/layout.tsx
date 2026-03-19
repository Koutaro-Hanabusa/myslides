import type { Viewport } from "next";
import { createSlideMetadata } from "@/lib/slides/config";

export const metadata = createSlideMetadata("better-t-stack");

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="fixed inset-0 h-dvh w-full overflow-hidden">{children}</div>
	);
}
