import { Hono } from "hono";
import { createRequestHandler } from "react-router";

type Bindings = {
  FRIENDS_FAMILY_CODE: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// Friends & Family discount validation
app.post("/api/friends-family", async (c) => {
  const body = await c.req.json().catch(() => null);

  const submittedCode =
    typeof body?.code === "string"
      ? body.code.trim()
      : "";

  if (!submittedCode) {
    return c.json(
      {
        valid: false,
        discountRate: 0,
        error: "Code required",
      },
      400,
    );
  }

  const validCode = c.env.FRIENDS_FAMILY_CODE;

  if (!validCode) {
    console.error(
      "FRIENDS_FAMILY_CODE secret is not configured.",
    );

    return c.json(
      {
        valid: false,
        discountRate: 0,
        error: "Discount service is not configured",
      },
      500,
    );
  }

  const valid =
    submittedCode.toLowerCase() ===
    validCode.trim().toLowerCase();

  return c.json({
    valid,
    discountRate: valid ? 0.2 : 0,
  });
});

// Prevent direct browser GET requests from hitting React Router
app.get("/api/friends-family", (c) => {
  return c.json(
    {
      valid: false,
      error: "Method not allowed",
    },
    405,
  );
});

// React Router handles the rest of the website
app.get("*", (c) => {
  const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE,
  );

  return requestHandler(c.req.raw, {
    cloudflare: {
      env: c.env,
      ctx: c.executionCtx,
    },
  });
});

export default app;
