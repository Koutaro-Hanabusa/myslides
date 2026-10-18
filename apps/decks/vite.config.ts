import { defineConfig } from "vite-plus";

export default defineConfig({
  run: {
    tasks: {
      "setup:browser": {
        command: "playwright install --with-deps chromium",
        // OS libraries are outside the task cache and must be installed on each build runner.
        cache: false,
      },
    },
  },
});
