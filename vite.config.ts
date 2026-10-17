import { defineConfig } from "vite-plus";

export default defineConfig({
  // Generic Markdown formatters treat per-slide YAML as prose and split slides.
  fmt: { ignorePatterns: ["apps/decks/slides/**/*.md"] },
  staged: {
    "*.{ts,tsx,js,jsx,mjs}": "vp lint --fix",
    "*.{ts,tsx,css,json,yml}": "vp fmt",
    "!(apps/decks/slides/**/*.md)*.md": "vp fmt",
  },
  run: {
    tasks: {
      "slides:build": {
        command:
          "vp run --filter '@mySlides/slide-*' --fail-if-no-match --concurrency-limit 2 build:slidev",
        cache: false,
      },
    },
  },
  lint: {
    plugins: ["typescript", "unicorn", "oxc", "jsx-a11y", "nextjs"],
    categories: {
      correctness: "error",
    },
    rules: {
      "nextjs/no-img-element": "warn",
    },
    env: {
      builtin: true,
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
