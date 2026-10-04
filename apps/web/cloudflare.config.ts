import { bindings, defineConfig } from "cf/config";

export default defineConfig((ctx) => {
  const staging = ctx.mode === "staging";

  return {
    worker: {
      name: staging ? "myslides-staging" : "myslides",
      compatibilityDate: "2026-02-12",
      compatibilityFlags: ["nodejs_compat"],
      entrypoint: "vinext/server/app-router-entry",
      observability: {
        logs: {
          enabled: false,
          headSamplingRate: 1,
          invocationLogs: true,
          persist: true,
        },
      },
      assets: {
        notFoundHandling: "none",
      },
      env: {
        NEXT_PUBLIC_BASE_URL: bindings.text(
          staging
            ? "https://myslides-staging.koutarouhanabusa.workers.dev"
            : "https://slide.burio16.com",
        ),
        NEXT_PUBLIC_SERVER_URL: bindings.text(
          "https://myslides-server.koutarouhanabusa.workers.dev",
        ),
        ASSETS: bindings.assets(),
      },
    },
  };
});
