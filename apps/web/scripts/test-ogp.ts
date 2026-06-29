// OGP スモークテスト: 全 opengraph-image ルートを取得し
// 200 / image/* / 1KB 超 を満たすか検証する。
//
// 使い方:
//   bun run test:ogp                                # build → vinext start → 検証 → 停止
//   TEST_OGP_BASE_URL=http://localhost:3001 bun run test:ogp  # 既存サーバに直接当てる
//   TEST_OGP_BASE_URL=https://slide.burio16.com bun run test:ogp  # 本番

import { spawn, type ChildProcess } from "node:child_process";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const APP_DIR = join(fileURLToPath(new URL(".", import.meta.url)), "../src/app");
const PORT = Number(process.env.TEST_OGP_PORT ?? 3099);
const STARTUP_TIMEOUT_MS = 30_000;
const REQUEST_TIMEOUT_MS = 15_000;
const MIN_BODY_BYTES = 1024;

async function discoverRoutes(): Promise<string[]> {
  const routes: string[] = [];
  async function walk(dir: string, prefix: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) {
        if (e.name.startsWith("_") || e.name.startsWith(".") || e.name === "api") continue;
        await walk(join(dir, e.name), `${prefix}/${e.name}`);
      } else if (/^opengraph-image\.(tsx|png|jpg|jpeg|gif)$/.test(e.name)) {
        routes.push(prefix);
      }
    }
  }
  await walk(APP_DIR, "");
  return routes.sort();
}

async function waitForServer(url: string): Promise<void> {
  const deadline = Date.now() + STARTUP_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
      if (res.status < 500) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server did not respond within ${STARTUP_TIMEOUT_MS}ms at ${url}`);
}

async function startServer(): Promise<{ baseUrl: string; child: ChildProcess }> {
  const baseUrl = `http://localhost:${PORT}`;
  console.log(`▶ Starting vinext start on ${baseUrl} ...`);
  const child = spawn("bunx", ["vinext", "start", "--port", String(PORT)], {
    cwd: join(APP_DIR, "../.."),
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NODE_ENV: "production" },
  });
  child.stdout?.on("data", () => {});
  child.stderr?.on("data", (buf) => {
    const s = buf.toString();
    if (/error|Error/.test(s)) process.stderr.write(`[server] ${s}`);
  });
  await waitForServer(baseUrl);
  return { baseUrl, child };
}

interface Result {
  route: string;
  ok: boolean;
  status: number;
  contentType: string | null;
  size: number;
  error?: string;
}

async function probe(baseUrl: string, route: string): Promise<Result> {
  const url = `${baseUrl}${route}/opengraph-image.png`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
    const buf = await res.arrayBuffer();
    const contentType = res.headers.get("content-type");
    const ok =
      res.status === 200 &&
      (contentType?.startsWith("image/") ?? false) &&
      buf.byteLength > MIN_BODY_BYTES;
    return { route, ok, status: res.status, contentType, size: buf.byteLength };
  } catch (err) {
    return {
      route,
      ok: false,
      status: 0,
      contentType: null,
      size: 0,
      error: (err as Error).message,
    };
  }
}

async function main(): Promise<void> {
  const routes = await discoverRoutes();
  if (routes.length === 0)
    throw new Error("No opengraph-image.{tsx,png,jpg,jpeg,gif} routes found");
  console.log(`▶ Discovered ${routes.length} OGP route(s):`);
  for (const r of routes) console.log(`    ${r}/opengraph-image.png`);
  console.log();

  const external = process.env.TEST_OGP_BASE_URL;
  let baseUrl: string;
  let child: ChildProcess | undefined;

  if (external) {
    baseUrl = external.replace(/\/$/, "");
    console.log(`▶ Using external server: ${baseUrl}`);
    await waitForServer(baseUrl);
  } else {
    ({ baseUrl, child } = await startServer());
  }

  const cleanup = () => {
    if (child && !child.killed) child.kill("SIGTERM");
  };
  process.on("SIGINT", () => {
    cleanup();
    process.exit(130);
  });
  process.on("SIGTERM", () => {
    cleanup();
    process.exit(143);
  });

  try {
    console.log();
    const results = await Promise.all(routes.map((r) => probe(baseUrl, r)));
    let failed = 0;
    for (const r of results) {
      const mark = r.ok ? "\x1b[32m✓\x1b[0m" : "\x1b[31m✗\x1b[0m";
      const detail = r.error
        ? `ERROR ${r.error}`
        : `${r.status} ${r.contentType ?? "-"} ${r.size}B`;
      console.log(`  ${mark} ${r.route}/opengraph-image.png → ${detail}`);
      if (!r.ok) failed++;
    }
    console.log();
    if (failed > 0) {
      console.error(`\x1b[31m✗ ${failed}/${results.length} OGP routes failed\x1b[0m`);
      process.exitCode = 1;
    } else {
      console.log(`\x1b[32m✓ All ${results.length} OGP routes OK\x1b[0m`);
    }
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
