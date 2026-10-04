import { bindings, defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "myslides-server",
    compatibilityDate: "2025-06-15",
    compatibilityFlags: ["nodejs_compat"],
    entrypoint: "src/index.ts",
    env: {
      NODE_ENV: bindings.text("production"),
      CORS_ORIGIN: bindings.text(
        "https://slide.burio16.com,https://myslides.koutarouhanabusa.workers.dev,https://myslides-staging.koutarouhanabusa.workers.dev",
      ),
      DB: bindings.d1({
        name: "myslides-db",
        id: "be09388c-f311-46f4-ae09-542da403fdf3",
      }),
      STORAGE: bindings.r2({
        name: "myslides-storage",
      }),
    },
  },
});
