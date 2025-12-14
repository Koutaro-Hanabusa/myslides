import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	// reactCompiler: true, // Disabled due to __name esbuild helper conflict with Cloudflare Workers
	devIndicators: process.env.NEXT_PUBLIC_HIDE_DEVTOOLS ? false : undefined,
};

export default nextConfig;

initOpenNextCloudflareForDev();
