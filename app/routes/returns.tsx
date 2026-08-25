
import { Link } from "react-router";

export default function Returns() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <Link
            to="/"
            className="text-sm font-medium text-sky-400 transition hover:text-sky-300"
          >
            ← Back to Avios Research
          </Link>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Avios Research
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Returns & Refunds
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: August 24, 2026
          </p>

          <div className="mt-10 space-y-9 text-sm leading-7 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Return Policy
              </h2>
              <p className="mt-3">
                Due to the nature of laboratory research materials, Avios
                Research generally cannot accept returns of products after they
                have been delivered. This policy helps protect product
                integrity and ensures that returned materials are not placed
                back into inventory.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Damaged or Incorrect Orders
              </h2>
              <p className="mt-3">
                If your order arrives damaged or you receive an item different
                from what you ordered, please contact Avios Research promptly.
                Include your order number, a description of the issue, and
                photographs of the product and packaging when applicable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Replacement or Refund Review
              </h2>
              <p className="mt-3">
                Verified claims involving damaged, defective, missing, or
                incorrectly shipped products may qualify for a replacement,
                store credit, or refund at the discretion of Avios Research.
                Each request will be reviewed based on the circumstances of the
                order.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. Order Cancellations
              </h2>
              <p className="mt-3">
                Cancellation requests should be submitted as soon as possible.
                Orders that have already been processed or transferred to the
                shipping carrier may no longer be eligible for cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Shipping Charges
              </h2>
              <p className="mt-3">
                Original shipping charges are generally non-refundable unless
                the refund results from an error by Avios Research or another
                circumstance where we determine reimbursement is appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Research Materials
              </h2>
              <p className="mt-3">
                All products offered by Avios Research are sold exclusively for
                laboratory, analytical, and research purposes and are not
                intended for human consumption or administration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                7. Contact Us
              </h2>
              <p className="mt-3">
                Questions regarding an order, replacement, or refund request
                should be sent to{" "}
                <span className="font-medium text-sky-400">
                  support@aviospeptides.com
                </span>
                .
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link
              to="/contact"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Contact Avios Research →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
