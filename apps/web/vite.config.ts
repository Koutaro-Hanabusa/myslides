import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import vinext from "vinext";

export default defineConfig({
  plugins: [
    vinext(),
    cloudflare({
      persistState: { path: ".wrangler/state" },
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
    }),
  ],
});
