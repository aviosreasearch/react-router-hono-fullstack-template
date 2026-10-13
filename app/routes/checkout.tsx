import { useEffect, useRef, useState, type FormEvent } from "react";
import { useCart } from "../components/CartProvider";

const FREE_SHIPPING_THRESHOLD = 100;
const STANDARD_SHIPPING = 6.99;

type PaymentView = "checking" | "success" | "cancelled" | "unverified" | null;

export default function Checkout() {
  const {
    items,
    cartCount,
    cartTotal,
    updateQuantity,
    removeItem,
    clearCart,
    loaded: cartLoaded,
  } = useCart();

  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [startingPayment, setStartingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [paymentView, setPaymentView] = useState<PaymentView>(null);
  const [friendsFamilyCode, setFriendsFamilyCode] = useState("");
  const [friendsFamilyApplied, setFriendsFamilyApplied] = useState(false);
  const [friendsFamilyDiscountRate, setFriendsFamilyDiscountRate] = useState(0);
  const [friendsFamilyMessage, setFriendsFamilyMessage] = useState("");
  const [checkingFriendsFamilyCode, setCheckingFriendsFamilyCode] = useState(false);
  const [bogoSaleActive, setBogoSaleActive] = useState(false);
  const verifiedSession = useRef<string | null>(null);
  const clearCartRef = useRef(clearCart);
  clearCartRef.current = clearCart;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment");

    if (payment === "cancelled") {
      setPaymentView("cancelled");
      return;
    }
    if (payment !== "success") return;

    const sessionId = params.get("session_id");
    if (!sessionId) {
      setPaymentView("unverified");
      return;
    }
    if (!cartLoaded || verifiedSession.current === sessionId) return;

    verifiedSession.current = sessionId;
    let cancelled = false;
    setPaymentView("checking");

    fetch(`/api/verify-checkout-session?session_id=${encodeURIComponent(sessionId)}`, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    })
      .then(async (response) => {
        const data = await response.json().catch(() => null);
        if (!response.ok || data?.paid !== true) {
          throw new Error("Payment could not be verified.");
        }
        if (!cancelled) {
          clearCartRef.current();
          setPaymentView("success");
          window.history.replaceState({}, "", "/checkout?payment=success");
        }
      })
      .catch(() => {
        if (!cancelled) setPaymentView("unverified");
      });

    return () => {
      cancelled = true;
      if (verifiedSession.current === sessionId) verifiedSession.current = null;
    };
  }, [cartLoaded]);

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
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  const unitPricesCents = items.flatMap((item) =>
    Array.from({ length: item.quantity }, () => Math.round(item.price * 100)),
  );
  const bogoDiscountCents = bogoSaleActive
    ? [...unitPricesCents]
        .sort((a, b) => a - b)
        .slice(0, Math.floor(unitPricesCents.length / 2))
        .reduce((total, price) => total + Math.round(price * 0.75), 0)
    : 0;
  const bogoDiscount = bogoDiscountCents / 100;
  const friendsFamilyDiscount = !bogoSaleActive && friendsFamilyApplied
    ? cartTotal * friendsFamilyDiscountRate
    : 0;
  const shippingCost = cartTotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  const amountUntilFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
  const orderTotal = cartTotal - bogoDiscount - friendsFamilyDiscount + shippingCost;

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      if (response.ok && data.valid === true) {
        setFriendsFamilyApplied(true);
        setFriendsFamilyDiscountRate(typeof data.discountRate === "number" ? data.discountRate : 0.1);
        setFriendsFamilyMessage("Friends & Family discount applied.");
      } else {
        setFriendsFamilyApplied(false);
        setFriendsFamilyDiscountRate(0);
        setFriendsFamilyMessage("That Friends & Family code is not valid.");
      }
    } catch {
      setFriendsFamilyApplied(false);
      setFriendsFamilyDiscountRate(0);
      setFriendsFamilyMessage("Unable to verify the code right now. Please try again.");
    } finally {
      setCheckingFriendsFamilyCode(false);
    }
  }

  function handleFriendsFamilyCodeChange(value: string) {
    setFriendsFamilyCode(value);
    if (friendsFamilyApplied) {
      setFriendsFamilyApplied(false);
      setFriendsFamilyDiscountRate(0);
      setFriendsFamilyMessage("Code changed. Apply it again to verify.");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agreementAccepted || items.length === 0 || startingPayment) return;

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    setStartingPayment(true);
    setPaymentError("");

    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "begin_checkout", {
        currency: "USD",
        value: orderTotal,
        items: items.map((item) => ({
          item_id: item.id,
          item_name: item.name,
          item_variant: item.strength,
          price: item.price,
          quantity: item.quantity,
        })),
      });
    }

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            name: item.name,
            strength: item.strength,
            quantity: item.quantity,
          })),
          email,
          friendsFamilyCode: !bogoSaleActive && friendsFamilyApplied ? friendsFamilyCode.trim() : "",
          researchUseAcknowledged: agreementAccepted,
        }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok) throw new Error(data?.error ?? "Unable to start payment.");
      if (!data?.url || typeof data.url !== "string") {
        throw new Error("Payment provider did not return a checkout URL.");
      }
      window.location.assign(data.url);
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : "Unable to start payment. Please try again.");
      setStartingPayment(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center">
            <img src="/AVIOS Research logo.png" alt="Avios Research" className="h-24 w-auto object-contain" />
          </a>
          <a href="/" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white">
            ← Continue Shopping
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {paymentView === "checking" ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/60 p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Secure Checkout</p>
            <h1 className="mt-3 text-3xl font-bold">Confirming your payment…</h1>
            <p className="mt-4 text-slate-400">Please keep this page open while we verify your order with Stripe.</p>
          </div>
        ) : paymentView === "success" ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-emerald-500/30 bg-slate-900/60 p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Payment Confirmed</p>
            <h1 className="mt-3 text-4xl font-bold">Thank you for your order.</h1>
            <p className="mt-4 leading-7 text-slate-300">Stripe confirmed your payment. Your cart has been cleared, and Stripe will email your receipt and order details.</p>
            <a href="/" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">Continue Shopping</a>
          </div>
        ) : paymentView === "unverified" ? (
          <div className="mx-auto max-w-2xl rounded-2xl border border-amber-500/30 bg-slate-900/60 p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Payment Status</p>
            <h1 className="mt-3 text-3xl font-bold">We couldn’t verify the payment yet.</h1>
            <p className="mt-4 leading-7 text-slate-300">Your cart is still saved. Check your Stripe receipt before trying payment again. If Stripe shows a completed charge, contact us and include your receipt email.</p>
            <a href="/contact" className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">Contact Us</a>
          </div>
        ) : (
          <>
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Secure Checkout</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Complete Your Order</h1>
              <p className="mt-4 max-w-2xl text-slate-400">Review your order and confirm the required research-use acknowledgment. Stripe securely collects your payment and shipping address.</p>
            </div>

            {paymentView === "cancelled" && (
              <p className="mb-8 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">Payment was cancelled. Your cart is still here if you’d like to try again.</p>
            )}

            {items.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-10 text-center">
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="mt-3 text-slate-400">Add research compounds to your cart before beginning checkout.</p>
                <a href="/#products" className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">Browse Research Compounds</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-10 lg:grid-cols-[1fr_420px]">
                <div className="space-y-8">
                  <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Step 1</p>
                    <h2 className="mt-2 text-2xl font-semibold">Contact Information</h2>
                    <div className="mt-6">
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-300">Email address</label>
                      <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500" />
                    </div>
                  </section>

                  <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Step 2</p>
                    <h2 className="mt-2 text-2xl font-semibold">Shipping Information</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-400">Enter your shipping address securely on the Stripe payment page. We’ll use it to fulfill your order.</p>
                  </section>

                  <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">Step 3</p>
                    <h2 className="mt-2 text-2xl font-semibold">Purchase Confirmation</h2>
                    <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-300">
                      <input type="checkbox" checked={agreementAccepted} onChange={(event) => setAgreementAccepted(event.target.checked)} className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-950 text-sky-500" />
                      <span>I confirm I am purchasing these products for research purposes.</span>
                    </label>
                  </section>
                </div>

                <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900/60 p-7 lg:sticky lg:top-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">Order Summary</h2>
                    <span className="text-sm text-slate-400">{cartCount} {cartCount === 1 ? "item" : "items"}</span>
                  </div>

                  {bogoSaleActive && (
                    <div className="mt-5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3">
                      <p className="font-semibold text-cyan-300">Buy One, Get One 75% Off</p>
                      <p className="mt-1 text-xs leading-5 text-slate-300">The discount applies to the lowest-priced item in each complete pair. Other discounts cannot be combined.</p>
                    </div>
                  )}

                  <div className="mt-6 space-y-5">
                    {items.map((item) => (
                      <div key={`${item.name}-${item.strength}`} className="border-b border-slate-800 pb-5">
                        <div className="flex justify-between gap-4">
                          <div><p className="font-semibold text-white">{item.name}</p><p className="mt-1 text-sm text-slate-400">{item.strength}</p></div>
                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center rounded-lg border border-slate-700">
                            <button type="button" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-3 py-1.5 text-slate-300 hover:text-white" aria-label={`Decrease ${item.name} quantity`}>−</button>
                            <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                            <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1.5 text-slate-300 hover:text-white" aria-label={`Increase ${item.name} quantity`}>+</button>
                          </div>
                          <button type="button" onClick={() => removeItem(item.id)} className="text-sm text-slate-500 transition hover:text-red-400">Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!bogoSaleActive && (
                    <div className="mt-6">
                      <label htmlFor="friendsFamilyCode" className="mb-2 block text-sm font-semibold text-slate-300">Friends &amp; Family code</label>
                      <div className="flex gap-2">
                        <input id="friendsFamilyCode" type="text" value={friendsFamilyCode} onChange={(event) => handleFriendsFamilyCodeChange(event.target.value)} className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-sky-500" />
                        <button type="button" onClick={applyFriendsFamilyCode} disabled={checkingFriendsFamilyCode} className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-60">{checkingFriendsFamilyCode ? "Checking…" : "Apply"}</button>
                      </div>
                      {friendsFamilyMessage && <p className={`mt-2 text-sm ${friendsFamilyApplied ? "text-emerald-400" : "text-slate-400"}`}>{friendsFamilyMessage}</p>}
                    </div>
                  )}

                  {amountUntilFreeShipping > 0 ? (
                    <p className="mt-6 rounded-lg border border-sky-500/20 bg-sky-500/10 px-4 py-3 text-sm text-sky-300">Add ${amountUntilFreeShipping.toFixed(2)} more for free shipping.</p>
                  ) : (
                    <p className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">Your order qualifies for free shipping.</p>
                  )}

                  <div className="mt-6 space-y-3 border-t border-slate-800 pt-6 text-sm">
                    <div className="flex justify-between text-slate-300"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                    {bogoSaleActive && bogoDiscount > 0 && <div className="flex justify-between text-cyan-300"><span>BOGO 75% savings</span><span>−${bogoDiscount.toFixed(2)}</span></div>}
                    {!bogoSaleActive && friendsFamilyApplied && <div className="flex justify-between text-emerald-400"><span>Friends &amp; Family discount</span><span>−${friendsFamilyDiscount.toFixed(2)}</span></div>}
                    <div className="flex justify-between text-slate-300"><span>Shipping</span><span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span></div>
                    <div className="flex justify-between border-t border-slate-800 pt-4 text-xl font-semibold text-white"><span>Total</span><span>${orderTotal.toFixed(2)}</span></div>
                  </div>

                  {paymentError && <p className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{paymentError}</p>}
                  <button type="submit" disabled={!agreementAccepted || startingPayment} className="mt-6 w-full rounded-lg bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50">{startingPayment ? "Opening secure payment…" : "Continue to Payment"}</button>
                  <p className="mt-3 text-center text-xs leading-5 text-slate-500">Payment is completed securely through Stripe.</p>
                </aside>
              </form>
            )}
          </>
        )}
      </section>
    </main>
  );
}
