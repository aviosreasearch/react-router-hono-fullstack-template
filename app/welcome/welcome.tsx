import { useState } from "react";
import { useCart } from "../components/CartProvider";

export default function Welcome({
  message,
}: {
  message: string;
}) {
  void message;

  const { addItem, cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});

  const products = [
    {
      name: "GLP3 R",
      amount: "Research Compound",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [
        { label: "10 mg", price: 29.99 },
        { label: "15 mg", price: 34.99 },
        { label: "20 mg", price: 44.99 },
        { label: "30 mg", price: 59.99 },
        { label: "40 mg", price: 74.99 },
        { label: "50 mg", price: 89.99 },
      ],
      image: "/avios-glp3r-product.PNG",
      href: "/products/glp3-r",
    },
    {
      name: "TRZP",
      amount: "Research Compound",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [
        { label: "10 mg", price: 29.99 },
        { label: "20 mg", price: 44.99 },
        { label: "30 mg", price: 59.99 },
      ],
      image: "/avios-trzp-product.PNG",
      href: "/products/trzp",
    },
    {
      name: "GLP-1",
      amount: "20 mg",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [{ label: "20 mg", price: 34.99 }],
      image: "/avios-semaglutide-product.PNG",
      href: "/products/semaglutide",
    },
    {
      name: "MOTS-C",
      amount: "Research Compound",
      category: "Metabolic / Mitochondrial Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [
        { label: "10 mg", price: 29.99 },
        { label: "20 mg", price: 39.99 },
      ],
      image: "/avios-motsc-product.PNG",
      href: "/products/mots-c",
    },
    {
      name: "NAD+",
      amount: "Research Material",
      category: "Metabolic / Cellular Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [
        { label: "500 mg", price: 34.99 },
        { label: "1000 mg", price: 49.99 },
      ],
      image: "/avios-nad-product.PNG",
      href: "/products/nad-plus",
    },
    {
      name: "SS-31",
      amount: "10 mg",
      category: "Mitochondrial Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [{ label: "10 mg", price: 39.99 }],
      image: "/avios-ss-31-product.PNG",
      href: "/products/ss-31",
    },
    {
      name: "Tesamorelin",
      amount: "5 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "5 mg", price: 36.99 }],
      image: "/avios-tesamorelin-product.PNG",
      href: "/products/tesamorelin",
    },
    {
      name: "Ipamorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-ipamorelin-product.PNG",
      href: "/products/ipamorelin",
    },
    {
      name: "Sermorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "10 mg", price: 36.99 }],
      image: "/avios-sermorelin-product.PNG",
      href: "/products/sermorelin",
    },
    {
      name: "Semax",
      amount: "10 mg",
      category: "Cognitive Research",
      group: "Cognitive & Sleep Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-semax-product.PNG",
      href: "/products/semax",
    },
    {
      name: "DSIP",
      amount: "10 mg",
      category: "Sleep & Circadian Research",
      group: "Cognitive & Sleep Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-dsip-product.PNG",
      href: "/products/dsip",
    },
    {
      name: "Melanotan II",
      amount: "10 mg",
      category: "Melanocortin Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-melanotanII-product.PNG",
      href: "/products/melanotan-ii",
    },
    {
      name: "BPC-157",
      amount: "10 mg",
      category: "Peptide Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "10 mg", price: 39.99 }],
      image: "/avios-bpc157-product.PNG",
      href: "/products/bpc-157",
    },
    {
      name: "Wolverine Blend",
      amount: "10 mg total",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "5 mg / 5 mg", price: 44.99 }],
      image: "/avios-wolverine-product.PNG",
      href: "/products/wolverine-blend",
    },
    {
      name: "GHK-CU",
      amount: "Research Compound",
      category: "Copper Peptide Research",
      group: "Peptide & Tissue Research",
      sizes: [
        { label: "50 mg", price: 32.99 },
        { label: "100 mg", price: 49.99 },
      ],
      image: "/ghk-cu-100mg.PNG",
      href: "/products/ghk-cu",
    },
    {
      name: "GLOW",
      amount: "70 mg",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "70 mg", price: 54.99 }],
      image: "/avios-glow-product.PNG",
      href: "/products/glow",
    },
    {
      name: "Epithalon",
      amount: "10 mg",
      category: "Cellular Aging Research",
      group: "Cellular Aging Research",
      sizes: [{ label: "10 mg", price: 36.99 }],
      image: "/avios-epithalon-product.PNG",
      href: "/products/epithalon",
    },
  ];

  const researchGroups = [
    "Metabolic Research",
    "Mitochondrial & Cellular Research",
    "Growth Hormone Research",
    "Cognitive & Sleep Research",
    "Peptide & Tissue Research",
    "Cellular Aging Research",
  ];

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function selectedSizeFor(product: (typeof products)[number]) {
    return (
      product.sizes.find(
        (size) => size.label === selectedSizes[product.name],
      ) ?? product.sizes[0]
    );
  }

  function addProduct(product: (typeof products)[number]) {
    const size = selectedSizeFor(product);

    addItem({
      id: `${product.href}-${size.label}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      name: product.name,
      strength: size.label,
      price: size.price,
      image: product.image,
    });
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      {/* Navigation */}
      <header className="relative z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center">
            <img
              src="/AVIOS Research logo.png"
              alt="Avios Research"
              className="h-12 w-auto object-contain sm:h-14 lg:h-16"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            <a href="#products" className="transition hover:text-sky-700">
              Research Compounds
            </a>
            <a href="#verification" className="transition hover:text-sky-700">
              COA Verification
            </a>
            <a href="#research" className="transition hover:text-sky-700">
              Research Library
            </a>
            <a href="#about" className="transition hover:text-sky-700">
              About
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#products"
              className="rounded-lg border border-sky-600 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
            >
              View Compounds
            </a>
            <a
              href="/cart"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
            >
              Cart ({cartCount})
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/cart"
              className="whitespace-nowrap rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
            >
              Cart ({cartCount})
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-900"
            >
              {mobileMenuOpen ? (
                <span className="text-2xl leading-none">×</span>
              ) : (
                <span className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 bg-slate-900" />
                  <span className="block h-0.5 w-5 bg-slate-900" />
                  <span className="block h-0.5 w-5 bg-slate-900" />
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col">
              {[
                ["Research Compounds", "#products"],
                ["COA Verification", "#verification"],
                ["Research Library", "#research"],
                ["About", "#about"],
                ["Contact", "/contact"],
                ["Shipping", "/shipping"],
                ["Returns & Refunds", "/returns"],
                ["Privacy", "/privacy"],
                ["Terms", "/terms"],
                ["Research Use Policy", "/research-use"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="border-b border-slate-100 py-3 text-slate-700 last:border-0"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 40%, rgba(14,165,233,0.12) 0%, rgba(224,242,254,0.35) 28%, rgba(255,255,255,0) 60%)",
          }}
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
              Research Peptide Catalog
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Premium Research Peptides.
              <br />
              Built for Research.
              <br />
              Backed by Documentation.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Research compounds supported by organized product information,
              supplier-provided laboratory documentation, lot records, and
              scientific literature.
            </p>

            <div
              id="about"
              className="mt-7 max-w-2xl border-t border-slate-200 pt-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-600">
                About Avios
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                Documentation-first research products.
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                Avios Research is designed around clear product identification,
                accessible documentation, laboratory report verification, and
                responsible presentation of scientific information.
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm sm:min-h-[390px] lg:min-h-[460px]">
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url("/avios-motsc-hero-v2.png")',
              }}
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-600">
              Avios Catalog
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Research Compounds
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Select an amount and add products directly to your cart. Product
              pages remain available for documentation and additional
              information.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {researchGroups.map((group) => {
              const groupProducts = products.filter(
                (product) => product.group === group,
              );

              return (
                <section key={group}>
                  <div className="mb-5 border-b border-slate-300 pb-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-600">
                      Research Category
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                      {group}
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {groupProducts.map((product) => {
                      const selectedSize = selectedSizeFor(product);

                      return (
                        <article
                          key={product.name}
                          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <a href={product.href} className="block">
                            <div className="flex h-56 items-center justify-center overflow-hidden border-b border-slate-200 bg-white sm:h-60">
                              <img
                                src={product.image}
                                alt={`${product.name} ${product.amount}`}
                                className="h-full w-full scale-[1.12] object-contain"
                              />
                            </div>
                          </a>

                          <div className="p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-600">
                              {product.category}
                            </p>

                            <h4 className="mt-1 text-xl font-bold text-slate-950">
                              {product.name}
                            </h4>

                            <p className="mt-0.5 text-sm text-slate-500">
                              {product.amount}
                            </p>

                            <label
                              htmlFor={`size-${product.name}`}
                              className="mt-3 block text-xs font-semibold text-slate-700"
                            >
                              Amount
                            </label>

                            <select
                              id={`size-${product.name}`}
                              value={selectedSize.label}
                              onChange={(event) =>
                                setSelectedSizes((current) => ({
                                  ...current,
                                  [product.name]: event.target.value,
                                }))
                              }
                              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            >
                              {product.sizes.map((size) => (
                                <option key={size.label} value={size.label}>
                                  {size.label} — ${size.price.toFixed(2)}
                                </option>
                              ))}
                            </select>

                            <p className="mt-3 text-xl font-bold text-slate-950">
                              ${selectedSize.price.toFixed(2)}
                            </p>

                            <button
                              type="button"
                              onClick={() => addProduct(product)}
                              className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2"
                            >
                              Add to Cart
                            </button>

                            <a
                              href={product.href}
                              className="mt-2 flex w-full items-center justify-center py-1 text-xs font-semibold text-sky-700 transition hover:text-sky-900"
                            >
                              Product details →
                            </a>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section
        id="verification"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-600">
              Documentation
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              COA & Lot Verification
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Product documentation can include supplier-provided certificates
              of analysis and third-party laboratory reports. Where laboratory
              verification is available, Avios will provide a direct
              verification link.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Documentation System
            </p>

            <div className="mt-5 space-y-4">
              {[
                ["Product", "Research Compound"],
                ["Lot Record", "Product Specific"],
                ["Documentation", "Lot Specific"],
                ["Laboratory", "Identified When Available"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-slate-200 pb-4 sm:flex-row sm:justify-between"
                >
                  <span className="text-slate-500">{label}</span>
                  <span className="font-semibold text-slate-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section id="research" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-600">
            Scientific Information
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Research Library
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <a
              href="#products"
              className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-300 hover:bg-white"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                Compound Profiles
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Organized background information for research compounds.
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-700">
                Browse compounds →
              </p>
            </a>

            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-300 hover:bg-white"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                Published Literature
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                References to published scientific studies and research
                literature.
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-700">
                Search PubMed ↗
              </p>
            </a>

            <a
              href="#verification"
              className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-300 hover:bg-white"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                Research Documentation
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Organized product, lot, and laboratory documentation where
                available.
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-700">
                View documentation →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold tracking-[0.15em]">AVIOS RESEARCH</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
              All products are sold strictly for laboratory research purposes
              only. Not for human or veterinary use or consumption.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-400 sm:flex sm:flex-wrap">
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
            <a href="/shipping" className="transition hover:text-white">
              Shipping
            </a>
            <a href="/returns" className="transition hover:text-white">
              Returns & Refunds
            </a>
          </nav>

          <p className="text-sm text-slate-500">© 2026 Avios Research</p>
        </div>
      </footer>
    </main>
  );
}
