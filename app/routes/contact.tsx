
import { Link } from "react-router";

export default function Contact() {
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
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Have a question about an order, product documentation, shipping, or
            general customer support? Contact Avios Research and include as much
            relevant information as possible so we can assist you efficiently.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-lg font-semibold">Customer Support</h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                For order questions, shipping concerns, documentation requests,
                or general assistance, please contact our support team.
              </p>

              <p className="mt-5 text-sm text-slate-300">
                Email:
                <a
                  href="mailto:support@aviospeptides.com"
                  className="ml-2 font-medium text-sky-400 transition hover:text-sky-300"
                >
                  support@aviospeptides.com
                </a>
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-6">
              <h2 className="text-lg font-semibold">Order Assistance</h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                When contacting us about an existing order, please include your
                order number and the email address used during checkout.
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Please do not send sensitive payment information, passwords, or
                full financial account details by email.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-sky-900/50 bg-sky-950/20 p-6">
            <h2 className="text-lg font-semibold text-white">
              Research Use Notice
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Avios Research products are intended exclusively for laboratory,
              analytical, and research purposes. They are not intended for human
              consumption.
            </p>

            <Link
              to="/research-use"
              className="mt-4 inline-block text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Read our Research Use Policy →
            </Link>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6">
            <p className="text-sm leading-6 text-slate-500">
              We aim to respond to customer inquiries as promptly as reasonably
              possible during normal business operations.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
