import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*.{ts,tsx,js,jsx,mjs}": "vp lint --fix",
    "*.{ts,tsx,css,md,json,yml}": "vp fmt",
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
