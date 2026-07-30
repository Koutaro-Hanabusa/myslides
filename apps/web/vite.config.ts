import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import vinext from "vinext";

export default defineConfig({
  plugins: [
    vinext(),
    cloudflare({
      // 既定の9229番が他プロセスと競合しないよう、OSに空きポートを割り当てさせる。
      inspectorPort: 0,
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
    }),
  ],
});
