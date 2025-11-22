import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typedRoutes: true,
	// reactCompiler: true, // Disabled due to __name esbuild helper conflict with Cloudflare Workers
};

export default nextConfig;

initOpenNextCloudflareForDev();
