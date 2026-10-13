import { defineConfig } from "vite";
import { resolve, extname } from "node:path";
import { readFile } from "node:fs/promises";

export default defineConfig({
  resolve: { dedupe: ["vue", "vue-router"] },
  // Keep shared /slides and /fonts URLs at the site root, independent of --base.
  publicDir: false,
  plugins: [
    {
      name: "myslides-shared-assets",
      configureServer(server) {
        const publicDir = resolve(import.meta.dirname, "../web/public");
        server.middlewares.use(async (req, res, next) => {
          const pathname = decodeURIComponent((req.url || "").split("?")[0]);
          if (!/^\/(slides|fonts|assets)\//.test(pathname)) return next();
          const file = resolve(publicDir, `.${pathname}`);
          if (!file.startsWith(`${publicDir}/`)) return next();
          try {
            const types: Record<string, string> = {
              ".woff": "font/woff",
              ".png": "image/png",
              ".jpg": "image/jpeg",
              ".svg": "image/svg+xml",
            };
            res.setHeader("Content-Type", types[extname(file)] || "application/octet-stream");
            res.end(await readFile(file));
          } catch {
            next();
          }
        });
      },
    },
  ],
  build: { copyPublicDir: false },
});
