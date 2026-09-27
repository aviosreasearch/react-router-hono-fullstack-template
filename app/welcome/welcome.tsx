import { useState } from "react";
import { useCart } from "../components/CartProvider";

type Size = {
  label: string;
  price: number;
};

type Product = {
  name: string;
  amount: string;
  category: string;
  group: string;
  sizes: Size[];
  image: string;
  href: string;
  description: string;
};

export default function Welcome({
  message,
}: {
  message: string;
}) {
  void message;

  const { addItem, cartCount } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [addedProduct, setAddedProduct] = useState("");

  const products: Product[] = [
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
      description: "Research compound with batch documentation and third-party laboratory records.",
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
      description: "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "GLP-1",
      amount: "20 mg",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [{ label: "20 mg", price: 34.99 }],
      image: "/avios-semaglutide-product.PNG",
      href: "/products/semaglutide",
      description: "Research compound with organized product documentation and available laboratory records.",
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
      description: "Research compound with batch documentation and third-party laboratory records.",
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
      description: "Research material with associated documentation and laboratory records.",
    },
    {
      name: "SS-31",
      amount: "10 mg",
      category: "Mitochondrial Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [{ label: "10 mg", price: 39.99 }],
      image: "/avios-ss-31-product.PNG",
      href: "/products/ss-31",
      description: "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Tesamorelin",
      amount: "5 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "5 mg", price: 36.99 }],
      image: "/avios-tesamorelin-product.PNG",
      href: "/products/tesamorelin",
      description: "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "Ipamorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-ipamorelin-product.PNG",
      href: "/products/ipamorelin",
      description: "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Sermorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "10 mg", price: 36.99 }],
      image: "/avios-sermorelin-product.PNG",
      href: "/products/sermorelin",
      description: "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Semax",
      amount: "10 mg",
      category: "Cognitive Research",
      group: "Cognitive & Sleep Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-semax-product.PNG",
      href: "/products/semax",
      description: "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "DSIP",
      amount: "10 mg",
      category: "Sleep & Circadian Research",
      group: "Cognitive & Sleep Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-dsip-product.PNG",
      href: "/products/dsip",
      description: "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Melanotan II",
      amount: "10 mg",
      category: "Melanocortin Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-melanotanII-product.PNG",
      href: "/products/melanotan-ii",
      description: "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "BPC-157",
      amount: "10 mg",
      category: "Peptide Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "10 mg", price: 39.99 }],
      image: "/avios-bpc157-product.PNG",
      href: "/products/bpc-157",
      description: "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Wolverine Blend",
      amount: "5 mg BPC-157 / 5 mg TB-500",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "5 mg BPC-157 / 5 mg TB-500", price: 44.99 }],
      image: "/avios-wolverine-product.PNG",
      href: "/products/wolverine-blend",
      description: "BPC-157 and TB-500 research blend with organized product documentation and available laboratory records.",
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
      description: "Research peptide with associated product information and laboratory documentation.",
    },
    {
      name: "GLOW",
      amount: "70 mg",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "70 mg", price: 54.99 }],
      image: "/avios-glow-product.PNG",
      href: "/products/glow",
      description: "Research peptide blend with organized product documentation and available laboratory records.",
    },
    {
      name: "Epithalon",
      amount: "10 mg",
      category: "Cellular Aging Research",
      group: "Cellular Aging Research",
      sizes: [{ label: "10 mg", price: 36.99 }],
      image: "/avios-epithalon-product.PNG",
      href: "/products/epithalon",
      description: "Research peptide with organized product documentation and available laboratory records.",
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

  function selectedSizeFor(product: Product) {
    const selectedLabel = selectedSizes[product.name] ?? product.sizes[0]?.label;
    return product.sizes.find((size) => size.label === selectedLabel) ?? product.sizes[0];
  }

  function addProductToCart(product: Product) {
    const size = selectedSizeFor(product);
    if (!size) return;

    const id = `${product.href.split("/").filter(Boolean).pop() ?? product.name}-${size.label}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    addItem({
      id,
      name: product.name,
      strength: size.label,
      price: size.price,
      image: product.image,
    });

    setAddedProduct(`${product.name} — ${size.label}`);
    window.setTimeout(() => setAddedProduct(""), 1800);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      {/* Navigation */}
      <header className="relative z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-3">
          <a href="/" className="flex min-w-0 items-center">
            <img
              src="/AVIOS Research logo.png"
              alt="Avios Research"
              className="h-14 w-auto object-contain sm:h-16 lg:h-20"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
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
              className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Shop Compounds
            </a>
            <a
              href="/cart"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
            >
              Cart ({cartCount})
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/cart"
              className="whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
            >
              Cart ({cartCount})
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-900"
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
                  className="border-b border-slate-100 py-3 text-slate-700"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sky-600">
              Research Peptide Catalog
            </p>

            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Premium Research Peptides.
              <span className="block text-sky-700">
                Backed by Documentation.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Research compounds supported by organized product information,
              laboratory documentation, lot records, and scientific literature.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-700"
              >
                Browse Compounds
              </a>
              <a
                href="#verification"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-700"
              >
                COA Verification
              </a>
            </div>

            <div id="about" className="mt-7 max-w-2xl border-t border-slate-200 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                About Avios
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Documentation-first research products.
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                Clear product identification, accessible documentation,
                laboratory report verification, and organized scientific information.
              </p>
            </div>
          </div>

          <div className="relative mx-auto h-[260px] w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg sm:h-[330px] lg:h-[380px]">
            <div
              className="absolute inset-0 bg-[length:135%] bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/avios-motsc-hero-v2.png")' }}
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-b border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
              Avios Catalog
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Research Compounds
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Choose an amount and add directly to your cart. Click a product image
              or name for documentation and additional product information.
            </p>
          </div>

          {addedProduct ? (
            <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl">
              Added to cart: {addedProduct}
            </div>
          ) : null}

          <div className="mt-8 space-y-9">
            {researchGroups.map((group) => {
              const groupProducts = products.filter(
                (product) => product.group === group,
              );

              return (
                <section key={group}>
                  <div className="mb-4 border-b border-slate-300 pb-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-600">
                      Research Category
                    </p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {group}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {groupProducts.map((product) => {
                      const selectedSize = selectedSizeFor(product);

                      return (
                        <article
                          key={product.name}
                          className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-sky-300 hover:shadow-md"
                        >
                          <a href={product.href} className="block bg-white">
                            <div className="flex h-36 items-center justify-center overflow-hidden border-b border-slate-100 p-2 sm:h-44 lg:h-40">
                              <img
                                src={product.image}
                                alt={`${product.name} ${product.amount}`}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          </a>

                          <div className="flex flex-1 flex-col p-3 sm:p-4">
                            <p className="truncate text-[9px] font-bold uppercase tracking-[0.1em] text-sky-600 sm:text-[10px]">
                              {product.category}
                            </p>

                            <a href={product.href}>
                              <h4 className="mt-1 text-base font-bold leading-tight text-slate-950 transition hover:text-sky-700 sm:text-lg">
                                {product.name}
                              </h4>
                            </a>

                            <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                              {product.amount}
                            </p>

                            <div className="mt-3">
                              {product.sizes.length > 1 ? (
                                <select
                                  aria-label={`Select ${product.name} amount`}
                                  value={selectedSize?.label ?? ""}
                                  onChange={(event) =>
                                    setSelectedSizes((current) => ({
                                      ...current,
                                      [product.name]: event.target.value,
                                    }))
                                  }
                                  className="w-full rounded-lg border border-slate-300 bg-white px-2 py-2 text-xs font-semibold text-slate-700 outline-none transition focus:border-sky-500 sm:text-sm"
                                >
                                  {product.sizes.map((size) => (
                                    <option key={size.label} value={size.label}>
                                      {size.label} — ${size.price.toFixed(2)}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-2 text-xs font-semibold text-slate-700 sm:text-sm">
                                  {selectedSize?.label}
                                </div>
                              )}
                            </div>

                            <p className="mt-3 text-lg font-bold text-slate-950 sm:text-xl">
                              ${selectedSize?.price.toFixed(2)}
                            </p>

                            <button
                              type="button"
                              onClick={() => addProductToCart(product)}
                              className="mt-3 w-full rounded-lg bg-sky-600 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-sky-700 sm:text-sm"
                            >
                              Add to Cart
                            </button>

                            <a
                              href={product.href}
                              className="mt-2 block text-center text-[10px] font-semibold text-slate-500 transition hover:text-sky-700 sm:text-xs"
                            >
                              Product details
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
      <section id="verification" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
              Documentation
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              COA & Lot Verification
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Product documentation can include supplier-provided certificates
              of analysis and third-party laboratory reports. Where laboratory
              verification is available, Avios provides verification information.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Documentation System
            </p>
            <div className="mt-4 divide-y divide-slate-200">
              {[
                ["Product", "Research Compound"],
                ["Lot Record", "Product Specific"],
                ["Documentation", "Lot Specific"],
                ["Laboratory", "Identified When Available"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="text-slate-500">{label}</span>
                  <span className="text-right font-semibold text-slate-800">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section id="research" className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            Scientific Information
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Research Library
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <a
              href="#products"
              className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900">Compound Profiles</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Organized background information for research compounds.
              </p>
              <p className="mt-4 text-sm font-bold text-sky-600">Browse compounds →</p>
            </a>

            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900">Published Literature</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                References to published scientific studies and research literature.
              </p>
              <p className="mt-4 text-sm font-bold text-sky-600">Search PubMed ↗</p>
            </a>

            <a
              href="#verification"
              className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-300 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900">
                Research Documentation
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Organized product, lot, and laboratory documentation where available.
              </p>
              <p className="mt-4 text-sm font-bold text-sky-600">
                View documentation →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-9 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold tracking-[0.15em] text-slate-900">
              AVIOS RESEARCH
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              All products are sold strictly for laboratory research purposes only.
              Not for human or veterinary use or consumption.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-500 sm:flex sm:flex-wrap">
            <a href="/contact" className="transition hover:text-sky-700">Contact</a>
            <a href="/research-use" className="transition hover:text-sky-700">Research Use Policy</a>
            <a href="/terms" className="transition hover:text-sky-700">Terms</a>
            <a href="/privacy" className="transition hover:text-sky-700">Privacy</a>
            <a href="/shipping" className="transition hover:text-sky-700">Shipping</a>
            <a href="/returns" className="transition hover:text-sky-700">Returns & Refunds</a>
          </nav>

          <p className="text-sm text-slate-400">© 2026 Avios Research</p>
        </div>
      </footer>
    </main>
  );
}
