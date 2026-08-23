export default function Welcome({ message }: { message: string }) {
  void message;

  const products = [
    {
      name: "GLP3 R",
      amount: "Research Compound",
      category: "Metabolic Research",
      sizes: [
        { label: "10 mg", price: 59.99 },
        { label: "15 mg", price: 79.99 },
        { label: "30 mg", price: 129.99 },
        { label: "50 mg", price: 199.99 },
      ],
      image: "/avios-glp3r-product.png",
      href: "/products/glp3-r",
      description:
        "Research compound with batch documentation and third-party laboratory records.",
    },
    {
      name: "MOTS-C",
      amount: "Research Compound",
      category: "Metabolic / Mitochondrial Research",
      sizes: [{ label: "20 mg", price: 59.99 }],
      image: "/avios-motsc-product.png",
      href: "/products/mots-c",
      description:
        "Research compound with batch documentation and third-party laboratory records.",
    },

{
  name: "NAD+",
  amount: "500 mg",
  category: "Metabolic / Cellular Research",
  sizes: [{ label: "500 mg", price: 54.99 }],
  image: "/avios-nad-product.PNG",
  href: "/products/nad-plus",
  description:
    "Research material with associated documentation and laboratory records.",
  },
  {
    name: "GHK-CU",
    amount: "100 mg",
    category: "Copper Peptide Research",
    sizes: [{ label: "100 mg", price: 59.99 }],
    image: "/ghk-cu-100mg.PNG",
    href: "/products/ghk-cu",
    description:
      "Research peptide with associated product information and laboratory documentation.",
  },
];

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

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a
              href="#products"
              className="transition hover:text-white"
            >
              Research Compounds
            </a>

            <a
              href="#verification"
              className="transition hover:text-white"
            >
              COA Verification
            </a>

            <a
              href="#research"
              className="transition hover:text-white"
            >
              Research Library
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>
          </nav>

          <a
            href="#products"
            className="rounded-lg border border-sky-500/50 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:text-white"
          >
            View Compounds
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Hero Text */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
              RESEARCH PEPTIDE CATALOG
            </p>

            <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Premium Research Peptides.
              <br />
              Built for Research.
              <br />
              Backed by Documentation.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Research compounds supported by organized product information,
              supplier-provided laboratory documentation, lot records, and
              scientific literature.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-lg bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Browse Research Compounds
              </a>

              <a
                href="#verification"
                className="rounded-lg border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:border-slate-500"
              >
                Verify a COA
              </a>
            </div>
          </div>

          {/* Enlarged MOTS-C Hero Image */}
          <div className="relative hidden min-h-[560px] overflow-hidden rounded-3xl lg:block">
            <div
              className="absolute inset-0 bg-[length:190%] bg-[position:center_58%] bg-no-repeat"
              style={{
                backgroundImage: 'url("/avios-motsc-hero-v2.png")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                Avios Catalog
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Research Compounds
              </h2>

              <p className="mt-4 max-w-2xl text-slate-400">
                Browse available research compounds and review associated
                documentation, lot information, and laboratory reports.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
              >
                {/* Product Image */}
               {product.image ? (
  <a href={product.href} className="block">
    <div className="aspect-square overflow-hidden border-b border-slate-800 bg-white">
      <img
        src={product.image}
        alt={`${product.name} ${product.amount}`}
        className="h-full w-full object-contain p-6"
      />
    </div>
  </a>
) : (
                  <div className="flex aspect-square items-center justify-center border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950">
                    <div className="text-center">
                      <div className="mx-auto flex h-24 w-16 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 shadow-2xl">
                        <span className="text-xs font-bold tracking-wider text-sky-400">
                          AVIOS
                        </span>
                      </div>

                      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-600">
                        Product Image
                      </p>
                    </div>
                  </div>
                )}

                {/* Product Details */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {product.amount}
                  </p>

                  {product.sizes.length > 0 ? (
                    <div className="mt-5">
                      <label className="mb-2 block text-sm font-semibold text-slate-300">
                        Available amounts
                      </label>

                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span
                            key={size.label}
                            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300"
                          >
                            {size.label}
                          </span>
                        ))}
                      </div>

                      <p className="mt-4 text-xl font-semibold text-white">
                        From $
                        {Math.min(
                          ...product.sizes.map((size) => size.price)
                        ).toFixed(2)}
                      </p>
                    </div>
                  ) : null}

                  <p className="mt-4 leading-7 text-slate-400">
                    {product.description}
                  </p>

                  <a
                    href={product.href}
                    className="mt-6 inline-flex items-center font-semibold text-white transition hover:text-sky-300"
                  >
                    View research details
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section
        id="verification"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Documentation
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              COA & Lot Verification
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-300">
              Product documentation can include supplier-provided certificates
              of analysis and third-party laboratory reports. Where laboratory
              verification is available, Avios will provide a direct
              verification link.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Documentation System
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex justify-between border-b border-slate-800 pb-4">
                <span className="text-slate-400">
                  Product
                </span>

                <span className="font-semibold">
                  Research Compound
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-4">
                <span className="text-slate-400">
                  Lot Record
                </span>

                <span className="font-semibold">
                  Product Specific
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-4">
                <span className="text-slate-400">
                  Documentation
                </span>

                <span className="font-semibold">
                  Lot Specific
                </span>
              </div>

              <div className="flex justify-between border-b border-slate-800 pb-4">
                <span className="text-slate-400">
                  Laboratory
                </span>

                <span className="font-semibold">
                  Identified When Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section
        id="research"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Scientific Information
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Research Library
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-semibold">
                Compound Profiles
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Organized background information for research compounds.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-semibold">
                Published Literature
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                References to published scientific studies and research
                literature.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <h3 className="text-xl font-semibold">
                Research Documentation
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Organized product, lot, and laboratory documentation where
                available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            About Avios
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Documentation-first research products.
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Avios Research is designed around clear product identification,
            accessible documentation, laboratory report verification, and
            responsible presentation of scientific information.
          </p>
        </div>
      </section>

      {/* Footer */}
     
<footer className="border-t border-slate-800">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="font-bold tracking-[0.15em]">
        AVIOS RESEARCH
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Research use only. Not intended for human consumption.
      </p>
    </div>

    <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
      <a href="/contact" className="transition hover:text-white">
        Contact
      </a>

      <a href="/research-use" className="transition hover:text-white">
        Research Use Policy
      </a>

      <a href="/terms" className="transition hover:text-white">
        Terms
      </a>

      <a href="/privacy" className="transition hover:text-white">
        Privacy
      </a>

      <a href="/shipping-returns" className="transition hover:text-white">
        Shipping & Returns
      </a>
    </nav>

    <p className="text-sm text-slate-600">
      © 2026 Avios Research
    </p>
  </div>
</footer>
        </div>
      </footer>
    </main>
  );
}
