
S {/* Research Library */}
<section
  id="research"
  className="border-y border-slate-800 bg-slate-900/40"
>
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
      Scientific Information
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
      Research Library
    </h2>

    <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-3">
      <a
        href="#products"
        className="group block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold transition group-hover:text-sky-300">
            Compound Profiles
          </h3>

          <span className="text-xl text-sky-400 transition group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="mt-3 leading-7 text-slate-400">
          Organized background information for research compounds.
        </p>

        <p className="mt-5 text-sm font-semibold text-sky-400">
          Browse compound profiles
        </p>
      </a>

      <a
        href="#literature"
        className="group block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold transition group-hover:text-sky-300">
            Published Literature
          </h3>

          <span className="text-xl text-sky-400 transition group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="mt-3 leading-7 text-slate-400">
          References to published scientific studies and research literature.
        </p>

        <p className="mt-5 text-sm font-semibold text-sky-400">
          Explore scientific literature
        </p>
      </a>

      <a
        href="#verification"
        className="group block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900 sm:p-7"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold transition group-hover:text-sky-300">
            Research Documentation
          </h3>

          <span className="text-xl text-sky-400 transition group-hover:translate-x-1">
            →
          </span>
        </div>

        <p className="mt-3 leading-7 text-slate-400">
          Organized product, lot, and laboratory documentation where
          available.
        </p>

        <p className="mt-5 text-sm font-semibold text-sky-400">
          View documentation system
        </p>
      </a>
    </div>
  </div>
</section>

{/* Published Literature */}
<section
  id="literature"
  className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
>
  <div className="max-w-3xl">
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
      Scientific References
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
      Published Literature
    </h2>

    <p className="mt-5 leading-7 text-slate-400 sm:leading-8">
      Search established scientific databases for published research
      concerning compounds represented in the Avios Research catalog.
      External literature is provided for general scientific reference
      and is independent of Avios Research products.
    </p>
  </div>

  <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product) => (
      <a
        key={`literature-${product.name}`}
        href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(
          product.name,
        )}`}
        target="_blank"
        rel="noreferrer"
        className="group rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-sky-500/50 hover:bg-slate-900"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white transition group-hover:text-sky-300">
              {product.name}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Search published research
            </p>
          </div>

          <span className="text-sky-400 transition group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </a>
    ))}
  </div>

  <p className="mt-8 text-sm leading-6 text-slate-500">
    Links open PubMed, a publicly accessible scientific literature database.
    References are provided for research and informational purposes only.
  </p>
</section>
