import type { Metadata } from "next";
import { createPresentationMetadata } from "@/lib/presentation-metadata";

export async function generateMetadata(): Promise<Metadata> {
	return createPresentationMetadata("tacos");
}

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
