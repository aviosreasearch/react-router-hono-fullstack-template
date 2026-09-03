import { Hono } from "hono";
import { createRequestHandler } from "react-router";

type Bindings = {
  FRIENDS_FAMILY_CODE: string;
  STRIPE_SECRET_KEY: string;
  SHIPSTATION_USERNAME: string;
  SHIPSTATION_PASSWORD: string;
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

    let merchandiseSubtotalCents = 0;

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

        merchandiseSubtotalCents +=
          unitAmount * quantity;

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
      Shipping:
      $6.99 for merchandise subtotals under $100.
      Free shipping for merchandise subtotals of $100 or more.
    */
    const qualifiesForFreeShipping =
      merchandiseSubtotalCents >= 10000;

    stripeParams.append(
      "shipping_options[0][shipping_rate_data][type]",
      "fixed_amount",
    );

    stripeParams.append(
      "shipping_options[0][shipping_rate_data][fixed_amount][currency]",
      "usd",
    );

    stripeParams.append(
      "shipping_options[0][shipping_rate_data][fixed_amount][amount]",
      qualifiesForFreeShipping ? "0" : "699",
    );

    stripeParams.append(
      "shipping_options[0][shipping_rate_data][display_name]",
      qualifiesForFreeShipping
        ? "Free Shipping"
        : "Standard Shipping",
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
  ShipStation Custom Store integration.
  Paid Stripe Checkout sessions are exported as orders.
*/
const xmlValue = (value: unknown) =>
  `<![CDATA[${String(value ?? "").replace(
    /]]>/g,
    "]]]]><![CDATA[>",
  )}]]>`;

const stripeMoney = (cents: unknown) =>
  (
    (typeof cents === "number" ? cents : 0) / 100
  ).toFixed(2);

const shipStationDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const pad = (value: number) =>
    String(value).padStart(2, "0");

  return `${pad(date.getUTCMonth() + 1)}/${pad(
    date.getUTCDate(),
  )}/${date.getUTCFullYear()} ${pad(
    date.getUTCHours(),
  )}:${pad(date.getUTCMinutes())}`;
};

const parseShipStationDate = (value: string | undefined) => {
  if (!value) return null;

  const match = value.match(
    /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/,
  );

  if (!match) return null;

  return Math.floor(
    Date.UTC(
      Number(match[3]),
      Number(match[1]) - 1,
      Number(match[2]),
      Number(match[4]),
      Number(match[5]),
    ) / 1000,
  );
};

const shipStationAuthorized = (
  authorization: string | undefined,
  username: string,
  password: string,
) => {
  if (!authorization || !username || !password) {
    return false;
  }

  return (
    authorization ===
    `Basic ${btoa(`${username}:${password}`)}`
  );
};

app.get("/api/shipstation", async (c) => {
  if (
    !c.env.SHIPSTATION_USERNAME ||
    !c.env.SHIPSTATION_PASSWORD
  ) {
    return c.text(
      "ShipStation credentials are not configured.",
      503,
    );
  }

  if (
    !shipStationAuthorized(
      c.req.header("Authorization"),
      c.env.SHIPSTATION_USERNAME,
      c.env.SHIPSTATION_PASSWORD,
    )
  ) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate":
          'Basic realm="Avios ShipStation"',
      },
    });
  }

  const action = c.req.query("action");

  if (action !== "export") {
    return c.text("Unsupported action.", 400);
  }

  const start =
    parseShipStationDate(c.req.query("start_date")) ??
    Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60;

  const end =
    parseShipStationDate(c.req.query("end_date")) ??
    Math.floor(Date.now() / 1000);

  const stripeUrl = new URL(
    "https://api.stripe.com/v1/checkout/sessions",
  );

  stripeUrl.searchParams.set("limit", "100");
  stripeUrl.searchParams.set(
    "created[gte]",
    String(start),
  );
  stripeUrl.searchParams.set(
    "created[lte]",
    String(end),
  );
  stripeUrl.searchParams.set("status", "complete");
  stripeUrl.searchParams.append(
    "expand[]",
    "data.line_items",
  );

  const stripeResponse = await fetch(stripeUrl, {
    headers: {
      Authorization: `Bearer ${c.env.STRIPE_SECRET_KEY}`,
    },
  });

  const stripeData: any =
    await stripeResponse.json();

  if (!stripeResponse.ok) {
    console.error(
      "Stripe order export failed:",
      stripeData,
    );

    return c.text(
      "Unable to retrieve Stripe orders.",
      502,
    );
  }

  const orders = (stripeData.data ?? [])
    .filter(
      (session: any) =>
        session.mode === "payment" &&
        session.status === "complete" &&
        session.payment_status === "paid",
    )
    .map((session: any) => {
      const shipping =
        session.collected_information
          ?.shipping_details ??
        session.shipping_details ??
        {};

      const address = shipping.address ?? {};
      const customer = session.customer_details ?? {};
      const email =
        customer.email ??
        session.customer_email ??
        "";
      const name =
        shipping.name ??
        customer.name ??
        "Customer";

      const orderNumber = `AV-${session.created}-${String(
        session.id,
      )
        .slice(-6)
        .toUpperCase()}`;

      const items = (
        session.line_items?.data ?? []
      )
        .map((item: any) => {
          const quantity =
            typeof item.quantity === "number"
              ? item.quantity
              : 1;

          const unitPrice =
            typeof item.amount_subtotal === "number"
              ? item.amount_subtotal /
                quantity
              : 0;

          const itemName =
            item.description ?? "Avios Research Product";

          const sku = itemName
            .toUpperCase()
            .replace(/[^A-Z0-9]+/g, "-")
            .replace(/^-|-$/g, "")
            .slice(0, 50);

          return `
            <Item>
              <LineItemID>${xmlValue(item.id)}</LineItemID>
              <SKU>${xmlValue(sku || item.id)}</SKU>
              <Name>${xmlValue(itemName)}</Name>
              <Quantity>${quantity}</Quantity>
              <UnitPrice>${stripeMoney(unitPrice)}</UnitPrice>
            </Item>`;
        })
        .join("");

      return `
        <Order>
          <OrderID>${xmlValue(
            String(
              session.payment_intent ?? session.id,
            ).slice(0, 50),
          )}</OrderID>
          <OrderNumber>${xmlValue(orderNumber)}</OrderNumber>
          <OrderDate>${shipStationDate(
            session.created,
          )}</OrderDate>
          <OrderStatus>${xmlValue("paid")}</OrderStatus>
          <LastModified>${shipStationDate(
            session.created,
          )}</LastModified>
          <ShippingMethod>${xmlValue(
            "Standard Shipping",
          )}</ShippingMethod>
          <PaymentMethod>${xmlValue(
            "Credit Card",
          )}</PaymentMethod>
          <CurrencyCode>USD</CurrencyCode>
          <OrderTotal>${stripeMoney(
            session.amount_total,
          )}</OrderTotal>
          <TaxAmount>${stripeMoney(
            session.total_details?.amount_tax,
          )}</TaxAmount>
          <ShippingAmount>${stripeMoney(
            session.shipping_cost?.amount_total,
          )}</ShippingAmount>
          <Customer>
            <CustomerCode>${xmlValue(
              email || orderNumber,
            )}</CustomerCode>
            <BillTo>
              <Name>${xmlValue(
                customer.name ?? name,
              )}</Name>
              <Company></Company>
              <Phone>${xmlValue(
                customer.phone ?? "",
              )}</Phone>
              <Email>${xmlValue(email)}</Email>
            </BillTo>
            <ShipTo>
              <Name>${xmlValue(name)}</Name>
              <Company>${xmlValue(
                shipping.company ?? "",
              )}</Company>
              <Address1>${xmlValue(
                address.line1,
              )}</Address1>
              <Address2>${xmlValue(
                address.line2,
              )}</Address2>
              <City>${xmlValue(
                address.city,
              )}</City>
              <State>${xmlValue(
                address.state,
              )}</State>
              <PostalCode>${xmlValue(
                address.postal_code,
              )}</PostalCode>
              <Country>${xmlValue(
                address.country ?? "US",
              )}</Country>
              <Phone>${xmlValue(
                customer.phone ?? "",
              )}</Phone>
            </ShipTo>
          </Customer>
          <Items>${items}</Items>
        </Order>`;
    })
    .join("");

  return c.body(
    `<?xml version="1.0" encoding="utf-8"?><Orders pages="1">${orders}</Orders>`,
    200,
    {
      "Content-Type": "application/xml; charset=utf-8",
    },
  );
});

app.post("/api/shipstation", (c) => {
  if (
    !shipStationAuthorized(
      c.req.header("Authorization"),
      c.env.SHIPSTATION_USERNAME,
      c.env.SHIPSTATION_PASSWORD,
    )
  ) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate":
          'Basic realm="Avios ShipStation"',
      },
    });
  }

  return c.text("Shipment notification received.", 200);
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
