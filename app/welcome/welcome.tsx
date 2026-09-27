import { useState } from "react";
import { useCart } from "../components/CartProvider";

type ProductSize = {
  label: string;
  price: number;
};

type Product = {
  name: string;
  amount: string;
  category: string;
  group: string;
  sizes: ProductSize[];
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

  const bogoSaleActive =
    Date.now() < new Date("2026-09-14T05:59:59Z").getTime();

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
      description:
        "Research compound with batch documentation and third-party laboratory records.",
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
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "GLP-1",
      amount: "20 mg",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [{ label: "20 mg", price: 34.99 }],
      image: "/avios-semaglutide-product.PNG",
      href: "/products/semaglutide",
      description:
        "Research compound with organized product documentation and available laboratory records.",
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
      description:
        "Research compound with batch documentation and third-party laboratory records.",
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
      description:
        "Research material with associated documentation and laboratory records.",
    },
    {
      name: "SS-31",
      amount: "10 mg",
      category: "Mitochondrial Research",
      group: "Mitochondrial & Cellular Research",
      sizes: [{ label: "10 mg", price: 39.99 }],
      image: "/avios-ss-31-product.PNG",
      href: "/products/ss-31",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Tesamorelin",
      amount: "5 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "5 mg", price: 36.99 }],
      image: "/avios-tesamorelin-product.PNG",
      href: "/products/tesamorelin",
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "Ipamorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-ipamorelin-product.PNG",
      href: "/products/ipamorelin",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Sermorelin",
      amount: "10 mg",
      category: "Growth Hormone Research",
      group: "Growth Hormone Research",
      sizes: [{ label: "10 mg", price: 36.99 }],
      image: "/avios-sermorelin-product.PNG",
      href: "/products/sermorelin",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Semax",
      amount: "10 mg",
      category: "Cognitive Research",
      group: "Cognitive & Sleep Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-semax-product.PNG",
      href: "/products/semax",
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "DSIP",
      amount: "10 mg",
      category: "Sleep & Circadian Research",
      group: "Cognitive & Sleep Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-dsip-product.PNG",
      href: "/products/dsip",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Melanotan II",
      amount: "10 mg",
      category: "Melanocortin Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "10 mg", price: 34.99 }],
      image: "/avios-melanotanII-product.PNG",
      href: "/products/melanotan-ii",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "BPC-157",
      amount: "10 mg",
      category: "Peptide Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "10 mg", price: 39.99 }],
      image: "/avios-bpc157-product.PNG",
      href: "/products/bpc-157",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "Wolverine Blend",
      amount: "5 mg BPC-157 / 5 mg TB-500",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "5 mg / 5 mg", price: 44.99 }],
      image: "/avios-wolverine-product.PNG",
      href: "/products/wolverine-blend",
      description:
        "BPC-157 and TB-500 research blend with organized product documentation and available laboratory records.",
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
      description:
        "Research peptide with associated product information and laboratory documentation.",
    },
    {
      name: "GLOW",
      amount: "70 mg",
      category: "Peptide Blend Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "70 mg", price: 54.99 }],
      image: "/avios-glow-product.PNG",
      href: "/products/glow",
      description:
        "Research peptide blend with organized product documentation and available laboratory records.",
    },
    {
      name: "Epithalon",
      amount: "10 mg",
      category: "Cellular Aging Research",
      group: "Cellular Aging Research",
      sizes: [{ label: "10 mg", price: 36.99 }],
      image: "/avios-epithalon-product.PNG",
      href: "/products/epithalon",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
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

  function selectedSize(product: Product) {
    const selectedLabel = selectedSizes[product.name] ?? product.sizes[0]?.label;
    return (
      product.sizes.find((size) => size.label === selectedLabel) ??
      product.sizes[0]
    );
  }

  function addProductToCart(product: Product) {
    const size = selectedSize(product);
    if (!size) return;

    addItem({
      id: `${product.name}-${size.label}`,
      name: product.name,
      strength: size.label,
      price: size.price,
      image: product.image,
    });
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Navigation — original sizing preserved */}
      <header className="relative z-50 border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="/" className="flex min-w-0 items-center">
            <img
              src="/AVIOS Research logo.png"
              alt="Avios Research"
              className="h-16 w-auto object-contain sm:h-20 lg:h-24"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            <a href="#products" className="transition hover:text-white">Research Compounds</a>
            <a href="#verification" className="transition hover:text-white">COA Verification</a>
            <a href="#research" className="transition hover:text-white">Research Library</a>
            <a href="#about" className="transition hover:text-white">About</a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#products"
              className="rounded-lg border border-sky-500/50 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:text-white"
            >
              View Compounds
            </a>
            <a
              href="/cart"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-500/50 hover:text-white"
            >
              Cart ({cartCount})
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/cart"
              className="whitespace-nowrap rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200"
            >
              Cart ({cartCount})
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-white"
            >
              {mobileMenuOpen ? (
                <span className="text-2xl leading-none">×</span>
              ) : (
                <span className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 bg-white" />
                  <span className="block h-0.5 w-5 bg-white" />
                  <span className="block h-0.5 w-5 bg-white" />
                </span>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-slate-800 bg-slate-950 px-4 pb-5 pt-3 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col">
              {[
                ["#products", "Research Compounds"],
                ["#verification", "COA Verification"],
                ["#research", "Research Library"],
                ["#about", "About"],
                ["/contact", "Contact"],
                ["/shipping", "Shipping"],
                ["/returns", "Returns & Refunds"],
                ["/privacy", "Privacy"],
                ["/terms", "Terms"],
                ["/research-use", "Research Use Policy"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="border-b border-slate-800 py-3 text-slate-200 last:border-b-0"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      {bogoSaleActive ? (
        <section className="relative overflow-hidden border-b border-cyan-300/40 bg-gradient-to-br from-blue-950 via-cyan-950 to-slate-950">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.28),transparent_55%)]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-14">
            <p className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">
              3-Day Sale · Ends Sunday
            </p>
            <h2 className="mt-5 text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              Buy One, Get One
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-sky-300 bg-clip-text text-5xl text-transparent sm:text-7xl lg:text-8xl">
                75% Off
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-cyan-50/85 sm:text-base">
              Add any two products to your cart and the lower-priced item is automatically discounted. No code needed.
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-cyan-300/80 sm:text-sm">
              Offer ends Sunday, September 13 at 11:59 p.m. MT · Other discounts cannot be combined
            </p>
            <a
              href="#products"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-3.5 text-base font-black uppercase tracking-wide text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.45)] transition hover:scale-105 hover:bg-white"
            >
              Shop the 3-Day Sale <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      ) : null}

      {/* Hero — original structure preserved */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-10 pt-7 sm:px-6 sm:pb-16 sm:pt-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 79% 45%, rgba(14,165,233,0.20) 0%, rgba(37,99,235,0.10) 27%, rgba(2,6,23,0) 58%)",
          }}
        />

        <div className="relative z-10 grid items-center gap-7 sm:gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
              RESEARCH PEPTIDE CATALOG
            </p>

            <h1 className="max-w-5xl text-[2.65rem] font-bold leading-[1.02] tracking-tight sm:text-6xl sm:leading-[1.08] lg:text-7xl">
              Premium Research Peptides.
              <br />
              Built for Research.
              <br />
              Backed by Documentation.
            </h1>

            <p className="mt-5 max-w-2xl text-[15px] leading-6 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Research compounds supported by organized product information,
              supplier-provided laboratory documentation, lot records, and
              scientific literature.
            </p>

            <div
              id="about"
              className="mt-7 max-w-2xl border-t border-slate-800 pt-6 sm:mt-10 sm:pt-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
                About Avios
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Documentation-first research products.
              </h2>
              <p className="mt-4 leading-7 text-slate-400 sm:leading-8">
                Avios Research is designed around clear product identification,
                accessible documentation, laboratory report verification, and
                responsible presentation of scientific information.
              </p>
            </div>
          </div>

          <div className="relative min-h-[250px] overflow-hidden rounded-2xl sm:min-h-[440px] sm:rounded-3xl lg:min-h-[560px]">
            <div
              className="absolute inset-0 bg-[length:135%] bg-[position:center_55%] bg-no-repeat sm:bg-[length:160%] lg:bg-[length:190%]"
              style={{ backgroundImage: 'url("/avios-motsc-hero-v2.png")' }}
            />
          </div>
        </div>
      </section>

      {/* Products — compact cards + direct add to cart */}
      <section id="products" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
              Avios Catalog
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Research Compounds
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">
              Select an amount and add products directly to your cart. Product pages remain available for documentation and additional information.
            </p>
          </div>

          <div className="mt-9 space-y-10">
            {researchGroups.map((group) => {
              const groupProducts = products.filter(
                (product) => product.group === group,
              );

              return (
                <section key={group}>
                  <div className="mb-4 border-b border-slate-800 pb-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-400">
                      Research Category
                    </p>
                    <h3 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
                      {group}
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {groupProducts.map((product) => {
                      const size = selectedSize(product);

                      return (
                        <article
                          key={product.name}
                          className="flex overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-sm sm:block"
                        >
                          <a
                            href={product.href}
                            className="flex w-[38%] shrink-0 items-center justify-center border-r border-slate-800 bg-white p-2 sm:h-44 sm:w-full sm:border-b sm:border-r-0"
                          >
                            <img
                              src={product.image}
                              alt={`${product.name} ${product.amount}`}
                              className="max-h-32 w-full object-contain sm:h-full sm:max-h-full"
                            />
                          </a>

                          <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-sky-400">
                              {product.category}
                            </p>

                            <h4 className="mt-1 text-lg font-semibold leading-tight">
                              {product.name}
                            </h4>

                            <p className="mt-1 text-xs text-slate-500">
                              {product.amount}
                            </p>

                            <div className="mt-3">
                              <label
                                htmlFor={`size-${product.name.replace(/\s+/g, "-")}`}
                                className="mb-1 block text-xs font-semibold text-slate-300"
                              >
                                Amount
                              </label>

                              <select
                                id={`size-${product.name.replace(/\s+/g, "-")}`}
                                value={size?.label ?? ""}
                                onChange={(event) =>
                                  setSelectedSizes((current) => ({
                                    ...current,
                                    [product.name]: event.target.value,
                                  }))
                                }
                                className="w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 py-2 text-sm text-white outline-none focus:border-sky-500"
                              >
                                {product.sizes.map((option) => (
                                  <option key={option.label} value={option.label}>
                                    {option.label} — ${option.price.toFixed(2)}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {size ? (
                              <p className="mt-2 text-lg font-bold text-white">
                                ${size.price.toFixed(2)}
                              </p>
                            ) : null}

                            <button
                              type="button"
                              onClick={() => addProductToCart(product)}
                              className="mt-3 w-full rounded-lg bg-sky-500 px-3 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-sky-400"
                            >
                              Add to Cart
                            </button>

                            <a
                              href={product.href}
                              className="mt-2 text-center text-xs font-semibold text-sky-400 transition hover:text-sky-300"
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
      <section id="verification" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
              Documentation
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              COA & Lot Verification
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300 sm:leading-8">
              Product documentation can include supplier-provided certificates
              of analysis and third-party laboratory reports. Where laboratory
              verification is available, Avios will provide a direct verification link.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Documentation System
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["Product", "Research Compound"],
                ["Lot Record", "Product Specific"],
                ["Documentation", "Lot Specific"],
                ["Laboratory", "Identified When Available"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-slate-800 pb-4 sm:flex-row sm:justify-between"
                >
                  <span className="text-slate-400">{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section id="research" className="border-y border-slate-800 bg-slate-900/40">
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
              className="block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-sky-500/50 hover:bg-slate-900 sm:p-7"
            >
              <h3 className="text-xl font-semibold">Compound Profiles</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Organized background information for research compounds.
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-400">
                Browse compounds →
              </p>
            </a>

            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-sky-500/50 hover:bg-slate-900 sm:p-7"
            >
              <h3 className="text-xl font-semibold">Published Literature</h3>
              <p className="mt-3 leading-7 text-slate-400">
                References to published scientific studies and research literature.
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-400">
                Search PubMed ↗
              </p>
            </a>

            <a
              href="#verification"
              className="block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-sky-500/50 hover:bg-slate-900 sm:p-7"
            >
              <h3 className="text-xl font-semibold">Research Documentation</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Organized product, lot, and laboratory documentation where available.
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-400">
                View documentation →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold tracking-[0.15em]">AVIOS RESEARCH</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              All products are sold strictly for laboratory research purposes only.
              Not for human or veterinary use or consumption.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-400 sm:flex sm:flex-wrap">
            <a href="/contact" className="transition hover:text-white">Contact</a>
            <a href="/research-use" className="transition hover:text-white">Research Use Policy</a>
            <a href="/terms" className="transition hover:text-white">Terms</a>
            <a href="/privacy" className="transition hover:text-white">Privacy</a>
            <a href="/shipping" className="transition hover:text-white">Shipping</a>
            <a href="/returns" className="transition hover:text-white">Returns & Refunds</a>
          </nav>

          <p className="text-sm text-slate-600">© 2026 Avios Research</p>
        </div>
      </footer>
    </main>
  );
}
