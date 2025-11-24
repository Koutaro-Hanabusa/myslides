import { env } from "cloudflare:workers";
import { trpcServer } from "@hono/trpc-server";
import { createContext } from "@mySlides/api/context";
import { appRouter } from "@mySlides/api/routers/index";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

const allowedOrigins = (env.CORS_ORIGIN || "")
	.split(",")
	.map((origin) => origin.trim())
	.filter(Boolean);

app.use(
	"/*",
	cors({
		origin: (origin) => {
			if (allowedOrigins.includes(origin)) {
				return origin;
			}
			return null;
		},
		allowMethods: ["GET", "POST", "OPTIONS"],
	}),
);

app.use(
	"/trpc/*",
	trpcServer({
		router: appRouter,
		createContext: (_opts, context) => {
			return createContext({ context });
		},
	}),
);

app.get("/", (c) => {
	return c.text("OK");
});

export default app;
