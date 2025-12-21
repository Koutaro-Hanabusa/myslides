import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// reveal.jsのCSSを先に読み込み、その後Tailwindで上書きできるようにする
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "../index.css";
import Providers from "@/components/providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
	preload: false,
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
	preload: false,
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3001",
	),
	title: "mySlides",
	description: "mySlides",
	icons: {
		icon: "/assets/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<div className="grid h-svh grid-rows-[auto_1fr]">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
