import { type NextRequest, NextResponse } from "next/server";
import { getSlideConfig } from "@/lib/slides/config";
import {
	generatePresentermMarkdown,
	generateSlideIndex,
} from "@/lib/slides/presenterm";

export async function GET(
	_request: NextRequest,
	{ params }: { params: Promise<{ slug: string }> },
) {
	const { slug } = await params;

	// "index" の場合は全スライド一覧を返す
	if (slug === "index") {
		const markdown = generateSlideIndex();
		return new Response(markdown, {
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"Cache-Control": "public, max-age=3600",
			},
		});
	}

	const config = getSlideConfig(slug);
	if (!config) {
		return NextResponse.json({ error: "Slide not found" }, { status: 404 });
	}

	const markdown = await generatePresentermMarkdown(slug);
	if (!markdown) {
		return NextResponse.json(
			{ error: "Failed to generate presenterm markdown" },
			{ status: 500 },
		);
	}

	return new Response(markdown, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
			"X-Markdown-Format": "presenterm",
		},
	});
}
