import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: "src/**/*.ts",
    sourcemap: true,
    dts: true,
  },
});
