import { Hono } from "hono";
import { createRequestHandler } from "react-router";

type Bindings = {
  FRIENDS_FAMILY_CODE: string;
  STRIPE_SECRET_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

/*
  Server-side product pricing.

  IMPORTANT:
  Stripe prices are generated from this table,
  NOT from prices sent by the customer's browser.
*/
const PRODUCT_PRICES: Record<string, Record<string, number>> = {
  "GLP3 R": {
    "10 mg": 49.99,
    "15 mg": 69.99,
    "20 mg": 89.99,
    "30 mg": 119.99,
    "40 mg": 159.99,
    "50 mg": 189.99,
  },

  TRZP: {
    "10 mg": 54.99,
    "20 mg": 79.99,
  },

  Semaglutide: {
    "20 mg": 69.99,
  },

  "MOTS-C": {
    "20 mg": 54.99,
  },

  "NAD+": {
    "500 mg": 54.99,
    "1000 mg": 89.99,
  },

  "SS-31": {
    "10 mg": 44.99,
  },

  Tesamorelin: {
    "5 mg": 44.99,
  },

  Ipamorelin: {
    "10 mg": 39.99,
  },

  Sermorelin: {
    "10 mg": 44.99,
  },

  Semax: {
    "10 mg": 39.99,
  },

  DSIP: {
    "10 mg": 39.99,
  },

  "GHK-CU": {
    "100 mg": 59.99,
  },

  GLOW: {
    "70 mg": 79.99,
  },

  Epithalon: {
    "10 mg": 44.99,
  },
};

/*
  Friends & Family discount validation
*/
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

/*
  Prevent direct browser GET requests from hitting React Router.
*/
app.get("/api/friends-family", (c) => {
  return c.json(
    {
      valid: false,
      error: "Method not allowed",
    },
    405,
  );
});

/*
  Create Stripe Checkout Session
*/
app.post("/api/create-checkout-session", async (c) => {
  try {
    if (!c.env.STRIPE_SECRET_KEY) {
      console.error(
        "STRIPE_SECRET_KEY secret is not configured.",
      );

      return c.json(
        {
          error: "Payment processing is not configured.",
        },
        500,
      );
    }

    const body = await c.req.json().catch(() => null);

    if (!body || !Array.isArray(body.items)) {
      return c.json(
        {
          error: "Invalid checkout request.",
        },
        400,
      );
    }

    if (body.items.length === 0) {
      return c.json(
        {
          error: "Your cart is empty.",
        },
        400,
      );
    }

    const stripeParams = new URLSearchParams();

    /*
      Build Stripe line items using ONLY prices stored
      on the server.
    */
    body.items.forEach(
      (
        item: {
          name?: unknown;
          strength?: unknown;
          quantity?: unknown;
        },
        index: number,
      ) => {
        const name =
          typeof item.name === "string"
            ? item.name.trim()
            : "";

        const strength =
          typeof item.strength === "string"
            ? item.strength.trim()
            : "";

        const quantity =
          typeof item.quantity === "number"
            ? Math.floor(item.quantity)
            : 0;

        if (!name || !strength) {
          throw new Error("Invalid product.");
        }

        if (
          !Number.isInteger(quantity) ||
          quantity < 1 ||
          quantity > 25
        ) {
          throw new Error("Invalid quantity.");
        }

        const product = PRODUCT_PRICES[name];

        if (!product) {
          throw new Error(
            `Unknown product: ${name}`,
          );
        }

        const price = product[strength];

        if (typeof price !== "number") {
          throw new Error(
            `Unknown strength for ${name}: ${strength}`,
          );
        }

        /*
          Convert dollars to cents for Stripe.
        */
        const unitAmount = Math.round(price * 100);

        stripeParams.append(
          `line_items[${index}][price_data][currency]`,
          "usd",
        );

        stripeParams.append(
          `line_items[${index}][price_data][unit_amount]`,
          String(unitAmount),
        );

        stripeParams.append(
          `line_items[${index}][price_data][product_data][name]`,
          `${name} — ${strength}`,
        );

        stripeParams.append(
          `line_items[${index}][quantity]`,
          String(quantity),
        );
      },
    );

    /*
      Revalidate Friends & Family discount on the server.
      Never trust the browser's discount percentage.
    */
    const submittedFriendsFamilyCode =
      typeof body.friendsFamilyCode === "string"
        ? body.friendsFamilyCode.trim()
        : "";

    let friendsFamilyValid = false;

    if (
      submittedFriendsFamilyCode &&
      c.env.FRIENDS_FAMILY_CODE
    ) {
      friendsFamilyValid =
        submittedFriendsFamilyCode.toLowerCase() ===
        c.env.FRIENDS_FAMILY_CODE
          .trim()
          .toLowerCase();
    }

    /*
      If the private Friends & Family code is valid,
      create a one-time 20% Stripe coupon for this
      checkout session.
    */
    if (friendsFamilyValid) {
      const couponParams = new URLSearchParams();

      couponParams.append(
        "percent_off",
        "20",
      );

      couponParams.append(
        "duration",
        "once",
      );

      couponParams.append(
        "name",
        "Friends & Family",
      );

      const couponResponse = await fetch(
        "https://api.stripe.com/v1/coupons",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${c.env.STRIPE_SECRET_KEY}`,
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: couponParams.toString(),
        },
      );

      const couponData: any =
        await couponResponse.json();

      if (!couponResponse.ok) {
        console.error(
          "Stripe coupon creation failed:",
          couponData,
        );

        return c.json(
          {
            error:
              "Unable to apply the discount right now.",
          },
          500,
        );
      }

      stripeParams.append(
        "discounts[0][coupon]",
        couponData.id,
      );
    }

    /*
      Stripe Checkout settings
    */
    stripeParams.append(
      "mode",
      "payment",
    );

    stripeParams.append(
      "payment_method_types[0]",
      "card",
    );

    /*
      Stripe will collect the customer's shipping
      address securely during payment.
    */
    stripeParams.append(
      "shipping_address_collection[allowed_countries][0]",
      "US",
    );

    /*
      Email can be prefilled from the checkout form.
    */
    if (
      typeof body.email === "string" &&
      body.email.trim()
    ) {
      stripeParams.append(
        "customer_email",
        body.email.trim(),
      );
    }

    /*
      These URLs send the customer back to Avios
      after Stripe Checkout.
    */
    stripeParams.append(
      "success_url",
      `${new URL(c.req.url).origin}/checkout?payment=success&session_id={CHECKOUT_SESSION_ID}`,
    );

    stripeParams.append(
      "cancel_url",
      `${new URL(c.req.url).origin}/checkout?payment=cancelled`,
    );

    /*
      Research-use acknowledgement recorded with
      the Stripe session metadata.
    */
    stripeParams.append(
      "metadata[research_use_acknowledged]",
      "true",
    );

    /*
      Create the Stripe Checkout Session.
    */
    const stripeResponse = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${c.env.STRIPE_SECRET_KEY}`,
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: stripeParams.toString(),
      },
    );

    const stripeData: any =
      await stripeResponse.json();

    if (!stripeResponse.ok) {
      console.error(
        "Stripe Checkout Session failed:",
        stripeData,
      );

      return c.json(
        {
          error:
            stripeData?.error?.message ??
            "Unable to start payment.",
        },
        500,
      );
    }

    if (!stripeData.url) {
      return c.json(
        {
          error:
            "Stripe did not return a checkout URL.",
        },
        500,
      );
    }

    return c.json({
      url: stripeData.url,
    });
  } catch (error) {
    console.error(
      "Checkout session error:",
      error,
    );

    return c.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to start checkout.",
      },
      400,
    );
  }
});

/*
  Prevent GET requests to the payment API.
*/
app.get("/api/create-checkout-session", (c) => {
  return c.json(
    {
      error: "Method not allowed",
    },
    405,
  );
});

/*
  React Router handles the rest of the website.
*/
app.get("*", (c) => {
  const requestHandler = createRequestHandler(
    () =>
      import(
        "virtual:react-router/server-build"
      ),
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
