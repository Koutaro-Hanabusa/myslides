import { defineConfig } from "vite-plus";

export default defineConfig({
  run: {
    tasks: {
      "build:slidev": {
        command: "node ../../scripts/build-slidev.mjs",
        dependsOn: ["@mySlides/decks#setup:browser"],
        cache: {
          input: [
            "slides.md",
            "package.json",
            "vite.config.ts",
            { pattern: "package.json", base: "workspace" },
            { pattern: "bun.lock", base: "workspace" },
            { pattern: "vite.config.ts", base: "workspace" },
            { pattern: "apps/decks/decks.json", base: "workspace" },
            { pattern: "apps/decks/scripts/build-slidev.mjs", base: "workspace" },
            { pattern: "apps/decks/scripts/publish.mjs", base: "workspace" },
            { pattern: "apps/decks/slides/vite.config.ts", base: "workspace" },
            { pattern: "apps/decks/theme/**", base: "workspace" },
            { pattern: "apps/web/public/slides/**", base: "workspace" },
          ],
          output: [{ auto: true }, "!node_modules/.slidev/**", "!.slidev-og-image/**"],
        },
      },
    },
  },
});
