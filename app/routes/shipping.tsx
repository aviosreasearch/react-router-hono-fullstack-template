
import { Link } from "react-router";

export default function Shipping() {
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
            Shipping Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: August 29, 2026
          </p>

          <div className="mt-10 space-y-9 text-sm leading-7 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Order Processing
              </h2>
              <p className="mt-3">
                Orders are processed as promptly as reasonably possible after
                payment authorization is received. Processing times may vary
                during periods of high order volume, holidays, inventory
                verification, or other circumstances requiring additional
                review.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Shipping Methods
              </h2>
              <p className="mt-3">
                Available shipping methods and applicable shipping charges will
                be displayed during checkout. Carriers may include USPS, FedEx,
                UPS, or another carrier selected by Avios Research.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Tracking Information
              </h2>
              <p className="mt-3">
                When tracking is available, tracking information may be sent to
                the email address provided with the order after the shipment
                has been prepared or transferred to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. Delivery Estimates
              </h2>
              <p className="mt-3">
                Delivery dates and transit times are estimates and are not
                guaranteed. Carrier delays, weather events, holidays, service
                interruptions, transportation issues, and other circumstances
                outside our reasonable control may affect delivery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Shipping Addresses
              </h2>
              <p className="mt-3">
                Customers are responsible for providing a complete and accurate
                shipping address at checkout. Avios Research is not responsible
                for delays, returns, or losses caused by incorrect or
                incomplete address information supplied by the customer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Lost or Delayed Shipments
              </h2>
              <p className="mt-3">
                If a shipment appears lost or significantly delayed, please
                contact us with your order number and tracking information.
                Avios Research may assist with carrier inquiries when
                appropriate, although carrier investigations and delivery
                determinations may require additional time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                7. Damaged Shipments
              </h2>
              <p className="mt-3">
                If an order arrives visibly damaged, please contact Avios
                Research promptly and provide your order number along with
                photographs of the packaging and affected items when possible.
                This information helps us evaluate replacement or refund
                eligibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                8. Returned or Undeliverable Packages
              </h2>
              <p className="mt-3">
                Packages returned because of an incorrect address, refusal,
                failure to retrieve the shipment, or another delivery issue may
                require additional shipping charges before reshipment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                9. Domestic Shipping
              </h2>
              <p className="mt-3">
                Unless otherwise stated during checkout, Avios Research
                currently fulfills orders only to eligible addresses within the
                United States. Shipping availability may be restricted when
                required by law, carrier limitations, or business policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                10. Research Materials
              </h2>
              <p className="mt-3">
                All products are intended exclusively for laboratory,
                analytical, and research purposes and are not intended for human
                consumption. Customers are responsible for ensuring that
                receipt, possession, storage, and use of ordered materials
                comply with applicable requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                11. Contact
              </h2>
              <p className="mt-3">
                For shipping questions or concerns, contact{" "}
                <a
                  href="mailto:support@aviospeptides.com"
                  className="font-medium text-sky-400 transition hover:text-sky-300"
                >
                  support@aviospeptides.com
                </a>
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
