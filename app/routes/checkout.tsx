import { useEffect, useState, type FormEvent } from "react";
import { useCart } from "../components/CartProvider";
const FREE_SHIPPING_THRESHOLD = 100;
const STANDARD_SHIPPING = 6.99;
export default function Checkout() {
  const {
    items,
    cartCount,
    cartTotal,
    updateQuantity,
    removeItem,
  } = useCart();
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  // Stripe payment state
  const [startingPayment, setStartingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [friendsFamilyCode, setFriendsFamilyCode] = useState("");
  const [friendsFamilyApplied, setFriendsFamilyApplied] = useState(false);
  const [friendsFamilyDiscountRate, setFriendsFamilyDiscountRate] =
    useState(0);
  const [friendsFamilyMessage, setFriendsFamilyMessage] = useState("");
  const [checkingFriendsFamilyCode, setCheckingFriendsFamilyCode] =
    useState(false);
  const [bogoSaleActive, setBogoSaleActive] = useState(false);
  const unitPricesCents = items.flatMap((item) =>
    Array.from(
      { length: item.quantity },
      () => Math.round(item.price * 100),
    ),
  );
  const bogoDiscountCents = bogoSaleActive
    ? unitPricesCents
        .sort((a, b) => a - b)
        .slice(0, Math.floor(unitPricesCents.length / 2))
        .reduce(
          (total, price) => total + Math.round(price * 0.75),
          0,
        )
    : 0;
  const bogoDiscount = bogoDiscountCents / 100;
  const friendsFamilyDiscount =
    !bogoSaleActive && friendsFamilyApplied
    ? cartTotal * friendsFamilyDiscountRate
    : 0;
  const qualifiesForFreeShipping =
    cartTotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = qualifiesForFreeShipping
    ? 0
    : STANDARD_SHIPPING;
  const amountUntilFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - cartTotal,
  );
  const orderTotal =
    cartTotal - bogoDiscount - friendsFamilyDiscount + shippingCost;
  useEffect(() => {
    let cancelled = false;
    fetch("/api/sale-status")
      .then((response) => response.json())
      .then((data) => {
        if (!cancelled && data?.active === true) {
          setBogoSaleActive(true);
          setFriendsFamilyApplied(false);
          setFriendsFamilyDiscountRate(0);
          setFriendsFamilyMessage("");
        }
      })
      .catch(() => {
        // Checkout remains usable with normal pricing if status lookup fails.
      });
    return () => {
      cancelled = true;
    };
  }, []);
  async function applyFriendsFamilyCode() {
    const code = friendsFamilyCode.trim();
    if (!code) {
      setFriendsFamilyApplied(false);
      setFriendsFamilyDiscountRate(0);
      setFriendsFamilyMessage("Enter a Friends & Family code.");
      return;
    }
    setCheckingFriendsFamilyCode(true);
    setFriendsFamilyMessage("");
    try {
      const response = await fetch("/api/friends-family", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
        }),
      });
      const data = await response.json();
      if (response.ok && data.valid === true) {
        setFriendsFamilyApplied(true);
        setFriendsFamilyDiscountRate(
          typeof data.discountRate === "number"
            ? data.discountRate
            : 0.2,
        );
        setFriendsFamilyMessage(
          "Friends & Family discount applied.",
        );
      } else {
        setFriendsFamilyApplied(false);
        setFriendsFamilyDiscountRate(0);
        setFriendsFamilyMessage(
          "That Friends & Family code is not valid.",
        );
      }
    } catch {
      setFriendsFamilyApplied(false);
      setFriendsFamilyDiscountRate(0);
      setFriendsFamilyMessage(
        "Unable to verify the code right now. Please try again.",
      );
    } finally {
      setCheckingFriendsFamilyCode(false);
    }
  }
  function handleFriendsFamilyCodeChange(
    value: string,
  ) {
    setFriendsFamilyCode(value);
    if (friendsFamilyApplied) {
      setFriendsFamilyApplied(false);
      setFriendsFamilyDiscountRate(0);
      setFriendsFamilyMessage(
        "Code changed. Apply it again to verify.",
      );
    }
  }
  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    if (
      !agreementAccepted ||
      items.length === 0 ||
      startingPayment
    ) {
      return;
    }
    const formData = new FormData(
      event.currentTarget,
    );
    const email = String(
      formData.get("email") ?? "",
    ).trim();
    setStartingPayment(true);
    setPaymentError("");
    try {
      const response = await fetch(
        "/api/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: items.map((item) => ({
              name:
item.name
,
              strength: item.strength,
              quantity: item.quantity,
            })),
            email,
            friendsFamilyCode:
              !bogoSaleActive && friendsFamilyApplied
                ? friendsFamilyCode.trim()
                : "",
            researchUseAcknowledged:
              agreementAccepted,
          }),
        },
      );
      const data = await response
        .json()
        .catch(() => null);
      if (!response.ok) {
        throw new Error(
          data?.error ??
            "Unable to start payment.",
        );
      }
      if (
        !data?.url ||
        typeof data.url !== "string"
      ) {
        throw new Error(
          "Payment provider did not return a checkout URL.",
        );
      }
      window.location.assign(data.url);
    } catch (error) {
      setPaymentError(
        error instanceof Error
          ? error.message
          : "Unable to start payment. Please try again.",
      );
      setStartingPayment(false);
    }
  }
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center">
            <img
              src="/AVIOS Research logo.png"
              alt="Avios Research"
              className="h-24 w-auto object-contain"
            />
          </a>
          <a
            href="/"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            ← Continue Shopping
          </a>
        </div>
      </header>
      {/* Checkout */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Secure Checkout
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Complete Your Order
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Review your research materials, provide shipping
            information, and confirm the required research-use
            acknowledgment before continuing to payment.
          </p>
        </div>
        {items.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-10 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>
            <p className="mt-3 text-slate-400">
              Add research compounds to your cart before beginning
              checkout.
            </p>
            <a
              href="/#products"
              className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Browse Research Compounds
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid gap-10 lg:grid-cols-[1fr_420px]"
          >
            {/* Checkout Information */}
            <div className="space-y-8">
              {/* Contact */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Step 1
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Contact Information
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>
                </div>
              </section>
              {/* Shipping */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Step 2
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Shipping Information
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Street address
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      autoComplete="street-address"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      autoComplete="address-level2"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      State
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      autoComplete="address-level1"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="postalCode"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      ZIP code
                    </label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      required
                      inputMode="numeric"
                      autoComplete="postal-code"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>
                </div>
              </section>
              {/* Research-use acknowledgment */}
              <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Step 3
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Purchase Confirmation
                </h2>
                <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-300">
                  <input
                    type="checkbox"
                    checked={agreementAccepted}
                    onChange={(event) =>
                      setAgreementAccepted(event.target.checked)
                    }
                    className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-950 text-sky-500"
                  />
                  <span>
                    I confirm I am purchasing these products for research purposes.
                  </span>
                </label>
              </section>
            </div>
            {/* Order summary */}
            <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900/60 p-7 lg:sticky lg:top-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Order Summary</h2>
                <span className="text-sm text-slate-400">
                  {cartCount} {cartCount === 1 ? "item" : "items"}
                </span>
              </div>
              {bogoSaleActive ? (
                <div className="mt-5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3">
                  <p className="font-semibold text-cyan-300">
                    Buy One, Get One 75% Off
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    The discount is automatically applied to the lowest-priced
                    item in each complete pair. Other discounts cannot be combined.
                  </p>
                </div>
              ) : null}
              <div className="mt-6 space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.name}-${item.strength}`}
                    className="border-b border-slate-800 pb-5"
                  >
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="mt-1 text-sm text-slate-400">
                          {item.strength}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-lg border border-slate-700">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          className="px-3 py-1.5 text-slate-300 hover:text-white"
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1,
                            )
                          }
                          className="px-3 py-1.5 text-slate-300 hover:text-white"
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-slate-500 transition hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {!bogoSaleActive ? (
                <div className="mt-6">
                  <label
                    htmlFor="friendsFamilyCode"
                    className="mb-2 block text-sm font-semibold text-slate-300"
                  >
                    Friends & Family code
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="friendsFamilyCode"
                      type="text"
                      value={friendsFamilyCode}
                      onChange={(event) =>
                        handleFriendsFamilyCodeChange(event.target.value)
                      }
                      className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-sky-500"
                    />
                    <button
                      type="button"
                      onClick={applyFriendsFamilyCode}
                      disabled={checkingFriendsFamilyCode}
                      className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {checkingFriendsFamilyCode ? "Checking…" : "Apply"}
                    </button>
                  </div>
                  {friendsFamilyMessage ? (
                    <p
                      className={`mt-2 text-sm ${
                        friendsFamilyApplied ? "text-emerald-400" : "text-slate-400"
                      }`}
                    >
                      {friendsFamilyMessage}
                    </p>
                  ) : null}
                </div>
              ) : null}
              {amountUntilFreeShipping > 0 ? (
                <p className="mt-6 rounded-lg border border-sky-500/20 bg-sky-500/10 px-4 py-3 text-sm text-sky-300">
                  Add ${amountUntilFreeShipping.toFixed(2)} more for free shipping.
                </p>
              ) : (
                <p className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  Your order qualifies for free shipping.
                </p>
              )}
              <div className="mt-6 space-y-3 border-t border-slate-800 pt-6 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                {bogoSaleActive && bogoDiscount > 0 ? (
                  <div className="flex justify-between text-cyan-300">
                    <span>BOGO 75% savings</span>
                    <span>−${bogoDiscount.toFixed(2)}</span>
                  </div>
                ) : null}
                {!bogoSaleActive && friendsFamilyApplied ? (
                  <div className="flex justify-between text-emerald-400">
                    <span>Friends & Family discount</span>
                    <span>−${friendsFamilyDiscount.toFixed(2)}</span>
                  </div>
                ) : null}
                <div className="flex justify-between text-slate-300">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-4 text-xl font-semibold text-white">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
              {paymentError ? (
                <p className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {paymentError}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={!agreementAccepted || startingPayment}
                className="mt-6 w-full rounded-lg bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {startingPayment ? "Opening secure payment…" : "Continue to Payment"}
              </button>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Payment is completed securely through Stripe.
              </p>
            </aside>
          </form>
        )}
      </section>
    </main>
  );
}
