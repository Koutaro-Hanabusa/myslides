import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [
    cloudflare({
      config:
        command === "serve"
          ? (config) => {
              const database = config.env?.DB;
              if (database?.type === "d1") database.id = "local-test-db";
            }
          : undefined,
      inspectorPort: 9230,
      persistState: { path: ".wrangler/state" },
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
  },
}));
