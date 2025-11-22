import type { Metadata } from "next";
import { createPresentationMetadata } from "@/lib/presentation-metadata";

export async function generateMetadata(): Promise<Metadata> {
	return createPresentationMetadata("spurs");
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
