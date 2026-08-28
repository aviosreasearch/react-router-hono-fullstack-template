
import { useState, type FormEvent } from "react";
import { useCart } from "../components/CartProvider";

export default function Checkout() {
  const {
    items,
    cartCount,
    cartTotal,
    updateQuantity,
    removeItem,
    isMember,
    memberDiscount,
    discountedCartTotal,
  } = useCart();

  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!agreementAccepted || items.length === 0) {
      return;
    }

    setSubmitted(true);
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
            Review your research materials, provide shipping information, and
            confirm the required research-use acknowledgment before continuing
            to payment.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-10 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-slate-400">
              Add research compounds to your cart before beginning checkout.
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
                      htmlFor="zip"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      ZIP code
                    </label>

                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      required
                      autoComplete="postal-code"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="mb-2 block text-sm font-semibold text-slate-300"
                    >
                      Country
                    </label>

                    <select
                      id="country"
                      name="country"
                      required
                      defaultValue="US"
                      autoComplete="country"
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
                    >
                      <option value="US">
                        United States
                      </option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Research Use Agreement */}
              <section className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                  Step 3
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Research Use Agreement
                </h2>

                <div className="mt-5 rounded-xl border border-slate-700 bg-slate-950/60 p-5">
                  <p className="leading-7 text-slate-300">
                    Products offered by Avios Research are sold solely as
                    research materials and are not intended for human
                    consumption, therapeutic use, diagnosis, treatment, or
                    prevention of disease.
                  </p>

                  <p className="mt-4 leading-7 text-slate-400">
                    By completing this purchase, the purchaser confirms that
                    the products are being obtained solely for research
                    purposes and accepts responsibility for their lawful
                    handling, storage, and use.
                  </p>
                </div>

                <label className="mt-6 flex cursor-pointer items-start gap-4 rounded-xl border border-slate-700 bg-slate-950 p-5">
                  <input
                    type="checkbox"
                    checked={agreementAccepted}
                    onChange={(event) =>
                      setAgreementAccepted(event.target.checked)
                    }
                    required
                    className="mt-1 h-5 w-5 shrink-0 accent-sky-500"
                  />

                  <span className="text-sm leading-6 text-slate-300">
                    I confirm that I am purchasing these products solely for
                    research use and not for human consumption.
                  </span>
                </label>
              </section>

              {submitted ? (
                <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-5">
                  <p className="font-semibold text-sky-300">
                    Checkout information accepted.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    The checkout page is working. The payment processor will
                    be connected in the next step.
                  </p>
                </div>
              ) : null}
            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900/60 p-7 lg:sticky lg:top-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">
                  Order Summary
                </h2>

                <span className="text-sm text-slate-500">
                  {cartCount} {cartCount === 1 ? "item" : "items"}
                </span>
              </div>

              {isMember ? (
                <div className="mt-5 rounded-xl border border-sky-500/30 bg-sky-500/10 p-4">
                  <p className="text-sm font-semibold text-sky-300">
                    Avios Membership Active
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Your 15% member discount is applied below.
                  </p>
                </div>
              ) : null}

              <div className="mt-6 space-y-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-slate-800 pb-5"
                  >
                    <div className="flex gap-4">
                      {item.image ? (
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-white">
                          <img
                            src={item.image}
                            alt={`${item.name} ${item.strength}`}
                            className="h-full w-full object-contain p-2"
                          />
                        </div>
                      ) : null}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-white">
                              {item.name}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                              {item.strength}
                            </p>
                          </div>

                          <p className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-4">
                          <div className="flex items-center rounded-lg border border-slate-700">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.quantity - 1
                                )
                              }
                              className="px-3 py-1.5 text-slate-300 transition hover:text-white"
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
                                  item.quantity + 1
                                )
                              }
                              className="px-3 py-1.5 text-slate-300 transition hover:text-white"
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
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Subtotal</span>

                  <span>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                {isMember ? (
                  <div className="flex items-center justify-between text-sky-400">
                    <span>Member Discount (15%)</span>

                    <span className="font-semibold">
                      -${memberDiscount.toFixed(2)}
                    </span>
                  </div>
                ) : null}

                <div className="flex items-center justify-between text-slate-400">
                  <span>Shipping</span>

                  <span>
                    Calculated at payment
                  </span>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                      Total
                    </span>

                    <span className="text-2xl font-bold">
                      $
                      {(isMember
                        ? discountedCartTotal
                        : cartTotal
                      ).toFixed(2)}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Shipping and any applicable taxes are not included yet.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={!agreementAccepted || items.length === 0}
                className="mt-7 w-full rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
              >
                Continue to Payment
              </button>

              {!agreementAccepted ? (
                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                  Research-use acknowledgment is required before continuing.
                </p>
              ) : null}
            </aside>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold tracking-[0.15em]">
              AVIOS RESEARCH
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Research use only. Not intended for human consumption.
            </p>
          </div>

          <p className="text-sm text-slate-600">
            © 2026 Avios Research
          </p>
        </div>
      </footer>
    </main>
  );
}
