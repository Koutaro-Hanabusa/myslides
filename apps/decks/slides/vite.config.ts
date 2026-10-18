import { defineConfig } from "vite-plus";

export default defineConfig({
  run: {
    tasks: {
      "generate:ogp": {
        command: [
          "slidev export slides.md --theme ../../theme --format png --range 1 --output .slidev-og-image --wait-until networkidle",
          "cp .slidev-og-image/1.png og-image.png",
          "rm -rf .slidev-og-image",
        ],
        dependsOn: ["@mySlides/decks#setup:browser"],
        cache: false,
      },
      "build:slidev": {
        command: "node ../../scripts/build-slidev.mjs",
        cache: {
          input: [
            "slides.md",
            "og-image.png",
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
          output: [{ auto: true }, "!node_modules/.slidev/**"],
        },
      },
    },
  },
});
