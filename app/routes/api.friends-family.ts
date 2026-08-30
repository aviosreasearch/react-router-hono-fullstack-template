import { env } from "cloudflare:workers";
import type { Route } from "./+types/api.friends-family";

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== "POST") {
    return Response.json(
      { valid: false, error: "Method not allowed" },
      { status: 405 },
    );
  }

  const body = await request.json().catch(() => null);

  const submittedCode =
    typeof body?.code === "string"
      ? body.code.trim()
      : "";

  if (!submittedCode) {
    return Response.json(
      { valid: false, discountRate: 0 },
      { status: 400 },
    );
  }

  const validCode = env.FRIENDS_FAMILY_CODE;

  if (
    typeof validCode !== "string" ||
    validCode.length === 0
  ) {
    console.error(
      "FRIENDS_FAMILY_CODE secret is not configured.",
    );

    return Response.json(
      {
        valid: false,
        discountRate: 0,
        error: "Discount service is not configured",
      },
      { status: 500 },
    );
  }

  const valid =
    submittedCode.toLowerCase() ===
    validCode.trim().toLowerCase();

  return Response.json({
    valid,
    discountRate: valid ? 0.2 : 0,
  });
}
