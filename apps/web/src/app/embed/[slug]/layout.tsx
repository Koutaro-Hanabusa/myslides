import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	robots: "noindex, nofollow",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

export default function EmbedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="fixed inset-0 m-0 h-screen w-screen overflow-hidden p-0">
			{children}
		</div>
	);
}
