import { useState } from "react";
import { useCart } from "../components/CartProvider";

export default function Welcome({ message }: { message: string }) {
  void message;

  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "GLP3 R",
      amount: "Research Compound",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [
        { label: "10 mg", price: 49.99 },
        { label: "15 mg", price: 69.99 },
        { label: "20 mg", price: 89.99 },
        { label: "30 mg", price: 119.99 },
        { label: "40 mg", price: 159.99 },
        { label: "50 mg", price: 189.99 },
      ],
      image: "/avios-glp3r-product.png",
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
        { label: "10 mg", price: 54.99 },
        { label: "20 mg", price: 79.99 },
      ],
      image: "/avios-trzp-product.PNG",
      href: "/products/trzp",
      description:
        "Research compound with organized product documentation and available laboratory records.",
    },
    {
      name: "Semaglutide",
      amount: "20 mg",
      category: "Metabolic Research",
      group: "Metabolic Research",
      sizes: [{ label: "20 mg", price: 69.99 }],
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
      sizes: [{ label: "20 mg", price: 54.99 }],
      image: "/avios-motsc-product.png",
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
        { label: "500 mg", price: 54.99 },
        { label: "1000 mg", price: 89.99 },
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
      sizes: [{ label: "10 mg", price: 44.99 }],
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
      sizes: [{ label: "5 mg", price: 44.99 }],
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
      sizes: [{ label: "10 mg", price: 39.99 }],
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
      sizes: [{ label: "10 mg", price: 44.99 }],
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
      sizes: [{ label: "10 mg", price: 39.99 }],
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
      sizes: [{ label: "10 mg", price: 39.99 }],
      image: "/avios-dsip-product.PNG",
      href: "/products/dsip",
      description:
        "Research peptide with organized product documentation and available laboratory records.",
    },
    {
      name: "GHK-CU",
      amount: "100 mg",
      category: "Copper Peptide Research",
      group: "Peptide & Tissue Research",
      sizes: [{ label: "100 mg", price: 59.99 }],
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
      sizes: [{ label: "70 mg", price: 79.99 }],
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
      sizes: [{ label: "10 mg", price: 44.99 }],
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

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Navigation */}
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
            <a href="#products" className="transition hover:text-white">
              Research Compounds
            </a>

            <a href="/membership" className="transition hover:text-white">
              Membership
            </a>

            <a href="#verification" className="transition hover:text-white">
              COA Verification
            </a>

            <a href="#research" className="transition hover:text-white">
              Research Library
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>
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
              <a
                href="#products"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Research Compounds
              </a>

              <a
                href="/membership"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Membership
              </a>

              <a
                href="#verification"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                COA Verification
              </a>

              <a
                href="#research"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Research Library
              </a>

              <a
                href="#about"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                About
              </a>

              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Contact
              </a>

              <a
                href="/shipping"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Shipping
              </a>

              <a
                href="/returns"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Returns & Refunds
              </a>

              <a
                href="/privacy"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Privacy
              </a>

              <a
                href="/terms"
                onClick={closeMobileMenu}
                className="border-b border-slate-800 py-3 text-slate-200"
              >
                Terms
              </a>

              <a
                href="/research-use"
                onClick={closeMobileMenu}
                className="py-3 text-slate-200"
              >
                Research Use Policy
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-4 pb-10 pt-7 sm:px-6 sm:pb-16 sm:pt-14">
        {/* Soft blue atmosphere around the vial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 79% 45%, rgba(14,165,233,0.20) 0%, rgba(37,99,235,0.10) 27%, rgba(2,6,23,0) 58%)",
          }}
        />

       {/* Dense molecular background - desktop/tablet */}
<svg
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
  viewBox="0 0 1200 620"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="aviosMoleculeStroke" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.08" />
      <stop offset="18%" stopColor="#38bdf8" stopOpacity="0.16" />
      <stop offset="48%" stopColor="#60a5fa" stopOpacity="0.34" />
      <stop offset="78%" stopColor="#93c5fd" stopOpacity="0.58" />
      <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.82" />
    </linearGradient>

    <radialGradient id="aviosBlueBloom" cx="78%" cy="40%" r="52%">
      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.34" />
      <stop offset="28%" stopColor="#1d4ed8" stopOpacity="0.20" />
      <stop offset="60%" stopColor="#0f172a" stopOpacity="0.04" />
      <stop offset="100%" stopColor="#020617" stopOpacity="0" />
    </radialGradient>

    <radialGradient id="aviosNodeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
      <stop offset="35%" stopColor="#bfdbfe" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
    </radialGradient>

    <filter id="aviosBlurSoft" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" />
    </filter>

    <filter id="aviosBlurStrong" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="18" />
    </filter>
  </defs>

  <rect width="1200" height="620" fill="url(#aviosBlueBloom)" />

  {/* small floating particles */}
  <g fill="#93c5fd" opacity="0.22">
    <circle cx="90" cy="110" r="2.2" />
    <circle cx="130" cy="180" r="1.8" />
    <circle cx="170" cy="90" r="1.6" />
    <circle cx="210" cy="150" r="2.3" />
    <circle cx="260" cy="120" r="1.7" />
    <circle cx="300" cy="210" r="2.0" />
    <circle cx="340" cy="100" r="1.8" />
    <circle cx="390" cy="165" r="2.5" />
    <circle cx="430" cy="120" r="1.7" />
    <circle cx="470" cy="200" r="2.2" />
    <circle cx="520" cy="135" r="1.9" />
    <circle cx="560" cy="230" r="2.4" />
    <circle cx="610" cy="160" r="1.8" />
    <circle cx="650" cy="260" r="2.1" />
    <circle cx="700" cy="145" r="1.7" />
    <circle cx="740" cy="230" r="2.2" />
    <circle cx="790" cy="185" r="1.9" />
    <circle cx="830" cy="110" r="2.4" />
    <circle cx="880" cy="160" r="1.6" />
    <circle cx="930" cy="230" r="2.2" />
    <circle cx="980" cy="130" r="1.8" />
    <circle cx="1040" cy="190" r="2.0" />
    <circle cx="1100" cy="150" r="1.7" />
    <circle cx="170" cy="300" r="2.0" />
    <circle cx="250" cy="280" r="1.7" />
    <circle cx="330" cy="350" r="2.4" />
    <circle cx="410" cy="300" r="2.0" />
    <circle cx="490" cy="360" r="1.9" />
    <circle cx="580" cy="315" r="2.1" />
    <circle cx="680" cy="370" r="2.4" />
    <circle cx="790" cy="320" r="2.0" />
    <circle cx="890" cy="370" r="1.9" />
    <circle cx="980" cy="310" r="2.1" />
    <circle cx="1080" cy="355" r="2.4" />
    <circle cx="140" cy="450" r="2.0" />
    <circle cx="240" cy="500" r="1.8" />
    <circle cx="345" cy="445" r="2.2" />
    <circle cx="455" cy="500" r="1.7" />
    <circle cx="565" cy="455" r="2.4" />
    <circle cx="690" cy="520" r="2.0" />
    <circle cx="820" cy="470" r="1.8" />
    <circle cx="930" cy="525" r="2.2" />
    <circle cx="1060" cy="470" r="1.9" />
  </g>

  {/* blurred glow behind the molecular mesh */}
  <g
    fill="none"
    stroke="url(#aviosMoleculeStroke)"
    strokeWidth="8"
    strokeLinecap="round"
    strokeLinejoin="round"
    opacity="0.28"
    filter="url(#aviosBlurSoft)"
  >
    <path d="M70 185 L140 145 L210 185 L210 265 L140 305 L70 265 Z" />
    <path d="M210 185 L280 145 L350 185 L350 265 L280 305 L210 265 Z" />
    <path d="M350 185 L420 145 L490 185 L490 265 L420 305 L350 265 Z" />
    <path d="M490 185 L560 145 L630 185 L630 265 L560 305 L490 265 Z" />
    <path d="M140 305 L210 265 L280 305 L280 385 L210 425 L140 385 Z" />
    <path d="M280 305 L350 265 L420 305 L420 385 L350 425 L280 385 Z" />
    <path d="M420 305 L490 265 L560 305 L560 385 L490 425 L420 385 Z" />
    <path d="M560 305 L630 265 L700 305 L700 385 L630 425 L560 385 Z" />
    <path d="M210 425 L280 385 L350 425 L350 505 L280 545 L210 505 Z" />
    <path d="M350 425 L420 385 L490 425 L490 505 L420 545 L350 505 Z" />
    <path d="M490 425 L560 385 L630 425 L630 505 L560 545 L490 505 Z" />
  </g>

  {/* crisp molecular mesh */}
  <g
    fill="none"
    stroke="url(#aviosMoleculeStroke)"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    opacity="0.88"
  >
    <path d="M70 185 L140 145 L210 185 L210 265 L140 305 L70 265 Z" />
    <path d="M210 185 L280 145 L350 185 L350 265 L280 305 L210 265 Z" />
    <path d="M350 185 L420 145 L490 185 L490 265 L420 305 L350 265 Z" />
    <path d="M490 185 L560 145 L630 185 L630 265 L560 305 L490 265 Z" />
    <path d="M140 305 L210 265 L280 305 L280 385 L210 425 L140 385 Z" />
    <path d="M280 305 L350 265 L420 305 L420 385 L350 425 L280 385 Z" />
    <path d="M420 305 L490 265 L560 305 L560 385 L490 425 L420 385 Z" />
    <path d="M560 305 L630 265 L700 305 L700 385 L630 425 L560 385 Z" />
    <path d="M210 425 L280 385 L350 425 L350 505 L280 545 L210 505 Z" />
    <path d="M350 425 L420 385 L490 425 L490 505 L420 545 L350 505 Z" />
    <path d="M490 425 L560 385 L630 425 L630 505 L560 545 L490 505 Z" />
  </g>

  {/* strong glow spots */}
  <g fill="#60a5fa" opacity="0.26" filter="url(#aviosBlurStrong)">
    <circle cx="140" cy="305" r="28" />
    <circle cx="280" cy="305" r="22" />
    <circle cx="420" cy="305" r="24" />
    <circle cx="560" cy="305" r="28" />
    <circle cx="350" cy="425" r="24" />
    <circle cx="490" cy="425" r="28" />
    <circle cx="700" cy="385" r="22" />
  </g>

  {/* molecular nodes */}
  <g>
    <circle cx="70" cy="185" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="140" cy="145" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="210" cy="185" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="210" cy="265" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="140" cy="305" r="14" fill="url(#aviosNodeGlow)" />
    <circle cx="70" cy="265" r="10" fill="url(#aviosNodeGlow)" />

    <circle cx="280" cy="145" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="350" cy="185" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="350" cy="265" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="280" cy="305" r="12" fill="url(#aviosNodeGlow)" />

    <circle cx="420" cy="145" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="490" cy="185" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="490" cy="265" r="13" fill="url(#aviosNodeGlow)" />
    <circle cx="420" cy="305" r="11" fill="url(#aviosNodeGlow)" />

    <circle cx="560" cy="145" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="630" cy="185" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="630" cy="265" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="560" cy="305" r="14" fill="url(#aviosNodeGlow)" />

    <circle cx="210" cy="425" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="280" cy="385" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="350" cy="425" r="13" fill="url(#aviosNodeGlow)" />
    <circle cx="350" cy="505" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="280" cy="545" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="210" cy="505" r="10" fill="url(#aviosNodeGlow)" />

    <circle cx="420" cy="385" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="490" cy="425" r="14" fill="url(#aviosNodeGlow)" />
    <circle cx="490" cy="505" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="420" cy="545" r="12" fill="url(#aviosNodeGlow)" />

    <circle cx="560" cy="385" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="630" cy="425" r="12" fill="url(#aviosNodeGlow)" />
    <circle cx="630" cy="505" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="560" cy="545" r="12" fill="url(#aviosNodeGlow)" />

    <circle cx="700" cy="305" r="10" fill="url(#aviosNodeGlow)" />
    <circle cx="700" cy="385" r="12" fill="url(#aviosNodeGlow)" />
  </g>

  {/* darker centers for the nodes */}
  <g fill="#0f172a" opacity="0.72">
    <circle cx="70" cy="185" r="2.8" />
    <circle cx="140" cy="145" r="3.2" />
    <circle cx="210" cy="185" r="2.8" />
    <circle cx="210" cy="265" r="3.2" />
    <circle cx="140" cy="305" r="3.8" />
    <circle cx="70" cy="265" r="2.8" />
    <circle cx="280" cy="145" r="2.8" />
    <circle cx="350" cy="185" r="3.2" />
    <circle cx="350" cy="265" r="2.8" />
    <circle cx="280" cy="305" r="3.2" />
    <circle cx="420" cy="145" r="3.2" />
    <circle cx="490" cy="185" r="2.8" />
    <circle cx="490" cy="265" r="3.4" />
    <circle cx="420" cy="305" r="3.0" />
    <circle cx="560" cy="145" r="2.8" />
    <circle cx="630" cy="185" r="3.2" />
    <circle cx="630" cy="265" r="2.8" />
    <circle cx="560" cy="305" r="3.8" />
    <circle cx="210" cy="425" r="3.2" />
    <circle cx="280" cy="385" r="2.8" />
    <circle cx="350" cy="425" r="3.4" />
    <circle cx="350" cy="505" r="2.8" />
    <circle cx="280" cy="545" r="3.2" />
    <circle cx="210" cy="505" r="2.8" />
    <circle cx="420" cy="385" r="2.8" />
    <circle cx="490" cy="425" r="3.8" />
    <circle cx="490" cy="505" r="2.8" />
    <circle cx="420" cy="545" r="3.2" />
    <circle cx="560" cy="385" r="2.8" />
    <circle cx="630" cy="425" r="3.2" />
    <circle cx="630" cy="505" r="2.8" />
    <circle cx="560" cy="545" r="3.2" />
    <circle cx="700" cy="305" r="2.8" />
    <circle cx="700" cy="385" r="3.2" />
  </g>
</svg>
        {/* Dark protection behind headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden sm:block"
          style={{
  background: [
    "linear-gradient(90deg,",
    "rgba(2,6,23,0.64) 0%,",
    "rgba(2,6,23,0.42) 24%,",
    "rgba(2,6,23,0.22) 46%,",
    "rgba(14,165,233,0.10) 64%,",
    "rgba(2,6,23,0.02) 78%,",
    "rgba(2,6,23,0) 90%)",
  ].join(" "),
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
              Avios Catalog
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Research Compounds
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Browse research compounds organized by research category and
              review associated documentation, lot information, and laboratory
              reports.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {researchGroups.map((group) => {
              const groupProducts = products.filter(
                (product) => product.group === group,
              );

              return (
                <section key={group}>
                  <div className="mb-6 border-b border-slate-800 pb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
                      Research Category
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                      {group}
                    </h3>
                  </div>

                  <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {groupProducts.map((product) => {
                      const availablePrices = product.sizes
                        .filter((size) => size.price > 0)
                        .map((size) => size.price);

                      return (
                        <article
                          key={product.name}
                          className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
                        >
                          {product.image ? (
                            <a href={product.href} className="block">
                              <div className="aspect-square overflow-hidden border-b border-slate-800 bg-white">
                                <img
                                  src={product.image}
                                  alt={`${product.name} ${product.amount}`}
                                  className="h-full w-full object-contain p-4 sm:p-6"
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

                          <div className="p-5 sm:p-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400 sm:tracking-[0.22em]">
                              {product.category}
                            </p>

                            <h4 className="mt-2 text-2xl font-semibold">
                              {product.name}
                            </h4>

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

                                {availablePrices.length > 0 ? (
                                  <p className="mt-4 text-xl font-semibold text-white">
                                    From $
                                    {Math.min(...availablePrices).toFixed(2)}
                                  </p>
                                ) : null}
                              </div>
                            ) : null}

                            <p className="mt-4 leading-7 text-slate-400">
                              {product.description}
                            </p>

                           <a
  href={product.href}
  className={[
    "mt-6 inline-flex w-full items-center justify-center",
    "rounded-lg border border-sky-500/50 bg-sky-500/10",
    "px-4 py-3 text-sm font-semibold text-sky-300",
    "transition hover:border-sky-400 hover:bg-sky-500/20",
    "hover:text-white",
  ].join(" ")}
>
  See Options
  <span className="ml-2">→</span>
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
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
      >
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
              verification is available, Avios will provide a direct
              verification link.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Documentation System
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex flex-col gap-1 border-b border-slate-800 pb-4 sm:flex-row sm:justify-between">
                <span className="text-slate-400">Product</span>
                <span className="font-semibold">Research Compound</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-slate-800 pb-4 sm:flex-row sm:justify-between">
                <span className="text-slate-400">Lot Record</span>
                <span className="font-semibold">Product Specific</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-slate-800 pb-4 sm:flex-row sm:justify-between">
                <span className="text-slate-400">Documentation</span>
                <span className="font-semibold">Lot Specific</span>
              </div>

              <div className="flex flex-col gap-1 border-b border-slate-800 pb-4 sm:flex-row sm:justify-between">
                <span className="text-slate-400">Laboratory</span>
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
                References to published scientific studies and research
                literature.
              </p>

              <p className="mt-5 text-sm font-semibold text-sky-400">
                Search PubMed ↗
              </p>
            </a>

            <a
              href="#verification"
              className="block rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-sky-500/50 hover:bg-slate-900 sm:p-7"
            >
              <h3 className="text-xl font-semibold">
                Research Documentation
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Organized product, lot, and laboratory documentation where
                available.
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
              Research use only. Not intended for human consumption.
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

          <p className="text-sm text-slate-600">© 2026 Avios Research</p>
        </div>
      </footer>
    </main>
  );
}
