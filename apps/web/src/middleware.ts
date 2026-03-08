import { NextResponse, type NextRequest } from "next/server";
import { getAllSlideSlugs } from "@/lib/slides/config";

/**
 * Content negotiation middleware:
 * Accept: text/markdown ヘッダーを持つリクエストがスライドページに来た場合、
 * presenterm 形式のマークダウンAPIにリダイレクトする
 */
export function middleware(request: NextRequest) {
	const accept = request.headers.get("accept") || "";
	const pathname = request.nextUrl.pathname;

	// Accept: text/markdown を含み、スライドのパスにアクセスしている場合
	if (accept.includes("text/markdown")) {
		const slugs = getAllSlideSlugs();
		const pathSlug = pathname.replace(/^\//, "").split("/")[0];

		if (pathSlug && slugs.includes(pathSlug)) {
			const presentermUrl = new URL(
				`/api/slides/${pathSlug}/presenterm`,
				request.url,
			);
			return NextResponse.rewrite(presentermUrl);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/((?!api|_next/static|_next/image|favicon.ico|slides/).*)",
	],
};
