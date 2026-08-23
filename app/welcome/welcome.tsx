
export default function Welcome() {
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
            href="#products"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            View Compounds
          </a>
        </div>
      </header>

 
{/* Hero */}
<section className="border-b border-slate-800">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
    {/* Hero Copy */}
    <div>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
        Research Materials & Laboratory Documentation
      </p>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Research compounds with documentation at the center.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Avios Research organizes compound information, lot records,
        laboratory documentation, and research-use materials in one
        clear, professional catalog.
      </p>

      <div className="mt-8 rounded-2xl border border-cyan-900/70 bg-slate-900/70 p-5">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
          For Research Use Only
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Products and information presented by Avios Research are
          intended for laboratory and research purposes only and are not
          intended for human consumption.
        </p>
      </div>

      <div className="mt-8">
        <a
          href="#products"
          className="inline-flex rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Browse Compounds
        </a>
      </div>
    </div>

    {/* MOTS-C Hero Image */}
    <div className="flex items-center justify-center">
      <img
        src="/avios-motsc-hero-v2.png"
        alt="Avios Research MOTS-C"
        className="max-h-[560px] w-full max-w-xl object-contain"
      />
    </div>
  </div>
</section>

      {/* Products */}
      <section id="products" className="scroll-mt-8">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Research Catalog
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Compounds
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Select a compound to view available strengths, product
              information, lot records, and laboratory documentation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* GLP3 R */}
            <a
              href="/products/glp3-r"
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition hover:-translate-y-1 hover:border-cyan-500/70"
            >
              <div className="aspect-[4/3] bg-white p-8">
                <img
                  src="/avios-glp3r-product.png"
                  alt="GLP3 R research compound"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">
                  Metabolic Research
                </p>

                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">GLP3 R</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Multiple research quantities available with organized
                      product and laboratory documentation.
                    </p>
                  </div>

                  <span className="shrink-0 text-xl text-cyan-300">→</span>
                </div>
              </div>
            </a>

            {/* MOTS-C */}
            <a
              href="/products/mots-c"
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 transition hover:-translate-y-1 hover:border-cyan-500/70"
            >
              <div className="aspect-[4/3] bg-white p-8">
                <img
                  src="/avios-motsc-product.png"
                  alt="MOTS-C 20 mg research compound"
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">
                  Metabolic / Mitochondrial Research
                </p>

                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">MOTS-C</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Available in 20 mg with dedicated product information,
                      lot records, and laboratory documentation.
                    </p>
                  </div>

                  <span className="shrink-0 text-xl text-cyan-300">→</span>
                </div>
              </div>
            </a>
          </div>

          {/* Catalog note */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Lot Records
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Batch Traceability
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Product documentation can be associated with applicable
                inventory and source records.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Documentation
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Laboratory Records
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Independent and supplier-provided laboratory records are
                identified according to their source when available.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Research Use
              </p>
              <h3 className="mt-3 text-lg font-semibold">
                Clear Product Information
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Compound pages are organized around research-material details,
                available quantities, and applicable documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <p className="text-sm font-semibold text-slate-300">
            Avios Research
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            For Research Use Only — Not for Human Consumption.
          </p>
        </div>
      </footer>
    </main>
  );
}
