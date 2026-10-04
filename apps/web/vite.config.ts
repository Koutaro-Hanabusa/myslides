import { cloudflare } from "@cloudflare/vite-plugin";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";
import vinext from "vinext";

export default defineConfig({
  plugins: [
    { ...mdx({ remarkPlugins: [remarkGfm] }), enforce: "pre" },
    vinext(),
    cloudflare({
      persistState: { path: ".wrangler/state" },
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
    }),
  ],
});
