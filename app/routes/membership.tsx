
export default function Membership() {
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
            href="/#products"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            ← Back to Compounds
          </a>
        </div>
      </header>

      {/* Membership Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Avios Research Membership
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Save 15% on eligible orders.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Join the Avios Research membership for $5 per month and receive
            15% off eligible research product purchases while your membership
            remains active.
          </p>
        </div>

        {/* Membership Card */}
        <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-sky-500/30 bg-slate-900 p-8 shadow-2xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
              Monthly Membership
            </p>

            <div className="mt-5 flex items-end justify-center gap-2">
              <span className="text-5xl font-bold">
                $5
              </span>

              <span className="pb-1 text-slate-400">
                / month
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sky-400">✓</span>
              <p className="text-slate-300">
                15% off eligible research product purchases.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sky-400">✓</span>
              <p className="text-slate-300">
                Member pricing applied while membership is active.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sky-400">✓</span>
              <p className="text-slate-300">
                Cancel membership at any time.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-sky-400">✓</span>
              <p className="text-slate-300">
                Membership discount applies to eligible product subtotal only.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Join Membership
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Membership billing and account activation will be connected with
            the payment system before launch.
          </p>
        </div>

        {/* Terms */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
          <h2 className="text-2xl font-semibold">
            Membership Terms
          </h2>

          <div className="mt-5 space-y-4 leading-7 text-slate-400">
            <p>
              Avios Research membership is billed monthly until canceled.
              Active members receive a 15% discount on eligible research
              products.
            </p>

            <p>
              Membership discounts do not apply to shipping charges, taxes,
              fees, or other non-product charges.
            </p>

            <p>
              Membership benefits are intended for the registered member and
              may not be transferred or combined with other promotional
              discounts unless specifically stated.
            </p>
          </div>
        </div>
      </section>

      {/* Research Use Notice */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Research Use Only
          </p>

          <p className="mt-3 max-w-3xl leading-7 text-slate-400">
            Products offered by Avios Research are research materials only and
            are not intended for human consumption, therapeutic use, diagnosis,
            treatment, or prevention of disease.
          </p>
        </div>
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
