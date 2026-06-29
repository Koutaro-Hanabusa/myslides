import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const monorepoRoot = join(dirname(fileURLToPath(import.meta.url)), "../..");

const nextConfig: NextConfig = {
  typedRoutes: true,
  turbopack: {
    root: monorepoRoot,
  },
  devIndicators: process.env.NEXT_PUBLIC_HIDE_DEVTOOLS ? false : undefined,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // /_next/image の Cache-Control max-age を制御。headers() では上書き不可。
    minimumCacheTTL: 3600,
  },
  async headers() {
    return [
      {
        source: "/embed/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *",
          },
        ],
      },
      {
        // /api 配下を除外して全 HTML に edge cache を効かせる
        source: "/((?!api/).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
