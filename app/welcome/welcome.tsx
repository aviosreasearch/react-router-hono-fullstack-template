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
    <linearGradient
      id="moleculeFade"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.02" />
      <stop offset="22%" stopColor="#38bdf8" stopOpacity="0.06" />
      <stop offset="42%" stopColor="#38bdf8" stopOpacity="0.18" />
      <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.38" />
      <stop offset="78%" stopColor="#60a5fa" stopOpacity="0.62" />
      <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.82" />
    </linearGradient>

    <linearGradient
      id="moleculeMaskFade"
      x1="0%"
      y1="0%"
      x2="100%"
      y2="0%"
    >
      <stop offset="0%" stopColor="white" stopOpacity="0" />
      <stop offset="20%" stopColor="white" stopOpacity="0.05" />
      <stop offset="38%" stopColor="white" stopOpacity="0.18" />
      <stop offset="55%" stopColor="white" stopOpacity="0.45" />
      <stop offset="72%" stopColor="white" stopOpacity="0.78" />
      <stop offset="100%" stopColor="white" stopOpacity="1" />
    </linearGradient>

    <mask id="moleculeMask">
      <rect
        x="0"
        y="0"
        width="1200"
        height="620"
        fill="url(#moleculeMaskFade)"
      />
    </mask>

    <filter
      id="softMoleculeGlow"
      x="-30%"
      y="-30%"
      width="160%"
      height="160%"
    >
      <feGaussianBlur stdDeviation="2.4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <radialGradient id="darkCenterNode">
      <stop offset="0%" stopColor="#020617" stopOpacity="1" />
      <stop offset="28%" stopColor="#0f172a" stopOpacity="0.95" />
      <stop offset="48%" stopColor="#7dd3fc" stopOpacity="0.95" />
      <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.5" />
      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
    </radialGradient>

    <radialGradient id="particleGlow">
      <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
      <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.45" />
      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
    </radialGradient>
  </defs>

  {/* soft molecular chains */}
  <g
    mask="url(#moleculeMask)"
    fill="none"
    stroke="url(#moleculeFade)"
    strokeWidth="4.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    filter="url(#softMoleculeGlow)"
  >
    <path d="M410 155 L470 120 L535 155 L535 225 L475 260 L410 225 Z" />
    <path d="M535 155 L600 120 L665 155 L665 225 L605 260 L535 225" />
    <path d="M665 155 L730 120 L795 155 L795 225 L735 260 L665 225" />

    <path d="M475 260 L475 330" />
    <path d="M605 260 L605 330" />
    <path d="M735 260 L735 330" />

    <path d="M410 395 L470 360 L535 395 L535 465 L475 500 L410 465 Z" />
    <path d="M535 395 L600 360 L665 395 L665 465 L605 500 L535 465" />
    <path d="M665 395 L730 360 L795 395 L795 465 L735 500 L665 465" />

    <path d="M795 155 L860 120 L925 155 L925 225 L865 260 L795 225" />
    <path d="M925 155 L990 120 L1055 155 L1055 225 L995 260 L925 225" />

    <path d="M795 395 L860 360 L925 395 L925 465 L865 500 L795 465" />
    <path d="M925 395 L990 360 L1055 395 L1055 465 L995 500 L925 465" />

    <path d="M470 120 L448 78" />
    <path d="M600 120 L615 72" />
    <path d="M730 120 L756 80" />
    <path d="M860 120 L882 78" />
    <path d="M990 120 L1015 80" />

    <path d="M475 500 L452 545" />
    <path d="M605 500 L620 550" />
    <path d="M735 500 L758 545" />
    <path d="M865 500 L885 545" />
    <path d="M995 500 L1018 545" />

    <path d="M1055 155 L1112 125 L1162 155" />
    <path d="M1055 395 L1115 365 L1170 395" />
  </g>

  {/* dark-centered glowing nodes like your reference */}
  <g mask="url(#moleculeMask)">
    {[
      [410, 155, 15],
      [470, 120, 15],
      [535, 155, 16],
      [535, 225, 16],
      [475, 260, 15],
      [410, 225, 15],

      [600, 120, 15],
      [665, 155, 16],
      [665, 225, 16],
      [605, 260, 15],

      [730, 120, 15],
      [795, 155, 17],
      [795, 225, 16],
      [735, 260, 15],

      [860, 120, 16],
      [925, 155, 17],
      [925, 225, 16],
      [865, 260, 15],

      [990, 120, 16],
      [1055, 155, 18],
      [1055, 225, 16],
      [995, 260, 16],

      [410, 395, 15],
      [470, 360, 15],
      [535, 395, 16],
      [535, 465, 16],
      [475, 500, 15],

      [600, 360, 15],
      [665, 395, 17],
      [665, 465, 16],
      [605, 500, 15],

      [730, 360, 16],
      [795, 395, 17],
      [795, 465, 16],
      [735, 500, 16],

      [860, 360, 16],
      [925, 395, 18],
      [925, 465, 16],
      [865, 500, 16],

      [990, 360, 16],
      [1055, 395, 18],
      [1055, 465, 16],
      [995, 500, 16],
    ].map(([cx, cy, r], index) => (
      <circle
        key={index}
        cx={cx}
        cy={cy}
        r={r}
        fill="url(#darkCenterNode)"
      />
    ))}
  </g>

  {/* blue haze particles */}
  <g mask="url(#moleculeMask)">
    {[
      [430, 90, 10],
      [500, 70, 6],
      [555, 305, 8],
      [610, 95, 7],
      [680, 72, 9],
      [742, 305, 6],
      [815, 92, 8],
      [880, 75, 6],
      [948, 290, 9],
      [1012, 80, 7],
      [1085, 105, 8],
      [1140, 235, 10],

      [440, 430, 7],
      [510, 550, 9],
      [575, 420, 7],
      [645, 545, 8],
      [710, 430, 7],
      [780, 548, 9],
      [840, 420, 6],
      [905, 545, 8],
      [970, 420, 7],
      [1035, 545, 9],
      [1100, 430, 8],
    ].map(([cx, cy, r], index) => (
      <circle
        key={index}
        cx={cx}
        cy={cy}
        r={r}
        fill="url(#particleGlow)"
        opacity="0.7"
      />
    ))}
  </g>

  {/* tiny soft speckles */}
  <g fill="#60a5fa" opacity="0.28" mask="url(#moleculeMask)">
    <circle cx="455" cy="180" r="2" />
    <circle cx="505" cy="295" r="2.5" />
    <circle cx="555" cy="110" r="2" />
    <circle cx="620" cy="300" r="2.5" />
    <circle cx="685" cy="185" r="2" />
    <circle cx="745" cy="285" r="3" />
    <circle cx="810" cy="110" r="2.5" />
    <circle cx="870" cy="300" r="2" />
    <circle cx="930" cy="185" r="3" />
    <circle cx="990" cy="290" r="2" />
    <circle cx="1050" cy="105" r="2.5" />
    <circle cx="1110" cy="280" r="3" />

    <circle cx="470" cy="415" r="2" />
    <circle cx="530" cy="530" r="2.5" />
    <circle cx="590" cy="435" r="3" />
    <circle cx="650" cy="530" r="2" />
    <circle cx="715" cy="415" r="2.5" />
    <circle cx="780" cy="535" r="3" />
    <circle cx="845" cy="435" r="2" />
    <circle cx="910" cy="525" r="2.5" />
    <circle cx="975" cy="420" r="3" />
    <circle cx="1040" cy="530" r="2" />
    <circle cx="1105" cy="420" r="2.5" />
  </g>
</svg>

            {/* Fade molecules toward the left/text side */}
            <linearGradient
              id="aviosMeshFade"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0.03" />
              <stop offset="16%" stopColor="white" stopOpacity="0.07" />
              <stop offset="31%" stopColor="white" stopOpacity="0.15" />
              <stop offset="46%" stopColor="white" stopOpacity="0.34" />
              <stop offset="62%" stopColor="white" stopOpacity="0.62" />
              <stop offset="78%" stopColor="white" stopOpacity="0.84" />
              <stop offset="100%" stopColor="white" stopOpacity="0.98" />
            </linearGradient>

            <mask id="aviosMeshMask">
              <rect
                x="0"
                y="0"
                width="1200"
                height="620"
                fill="url(#aviosMeshFade)"
              />
            </mask>

            <filter
              id="aviosMeshGlow"
              x="-25%"
              y="-25%"
              width="150%"
              height="150%"
            >
              <feGaussianBlur stdDeviation="1.4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient id="aviosNodeGlow">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Main fine molecular web */}
          <rect
            x="0"
            y="0"
            width="1200"
            height="620"
            fill="url(#aviosMolecularMesh)"
            mask="url(#aviosMeshMask)"
            opacity="0.68"
            filter="url(#aviosMeshGlow)"
          />

          {/* Irregular connecting branches to prevent wallpaper look */}
          <g
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1"
            opacity="0.28"
            mask="url(#aviosMeshMask)"
          >
            <path d="M420 92 L465 68 L502 91 L540 58 L578 83" />
            <path d="M535 190 L574 166 L615 188 L650 154 L692 176" />
            <path d="M625 285 L668 258 L707 282 L748 247 L792 271" />
            <path d="M713 396 L754 372 L796 394 L837 360 L880 382" />
            <path d="M820 500 L857 476 L901 500 L940 466 L982 489" />

            <path d="M466 68 L466 38" />
            <path d="M615 188 L621 220" />
            <path d="M707 282 L699 316" />
            <path d="M837 360 L846 329" />
            <path d="M940 466 L948 430" />
          </g>

          {/* Scattered bright nodes */}
          <g mask="url(#aviosMeshMask)">
            <circle
              cx="555"
              cy="110"
              r="9"
              fill="url(#aviosNodeGlow)"
              opacity="0.45"
            />
            <circle
              cx="650"
              cy="205"
              r="8"
              fill="url(#aviosNodeGlow)"
              opacity="0.5"
            />
            <circle
              cx="735"
              cy="95"
              r="10"
              fill="url(#aviosNodeGlow)"
              opacity="0.55"
            />
            <circle
              cx="815"
              cy="245"
              r="8"
              fill="url(#aviosNodeGlow)"
              opacity="0.55"
            />
            <circle
              cx="900"
              cy="125"
              r="11"
              fill="url(#aviosNodeGlow)"
              opacity="0.65"
            />
            <circle
              cx="990"
              cy="225"
              r="10"
              fill="url(#aviosNodeGlow)"
              opacity="0.7"
            />
            <circle
              cx="1080"
              cy="115"
              r="9"
              fill="url(#aviosNodeGlow)"
              opacity="0.75"
            />

            <circle
              cx="590"
              cy="430"
              r="8"
              fill="url(#aviosNodeGlow)"
              opacity="0.45"
            />
            <circle
              cx="690"
              cy="520"
              r="9"
              fill="url(#aviosNodeGlow)"
              opacity="0.5"
            />
            <circle
              cx="790"
              cy="410"
              r="10"
              fill="url(#aviosNodeGlow)"
              opacity="0.55"
            />
            <circle
              cx="890"
              cy="525"
              r="9"
              fill="url(#aviosNodeGlow)"
              opacity="0.6"
            />
            <circle
              cx="995"
              cy="420"
              r="11"
              fill="url(#aviosNodeGlow)"
              opacity="0.68"
            />
            <circle
              cx="1090"
              cy="510"
              r="10"
              fill="url(#aviosNodeGlow)"
              opacity="0.72"
            />
          </g>
        </svg>

        {/* Dark protection behind headline */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(2,6,23,0.58) 0%, rgba(2,6,23,0.30) 30%, rgba(2,6,23,0.06) 54%, rgba(2,6,23,0) 72%)",
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
                              className="mt-6 inline-flex items-center font-semibold text-white transition hover:text-sky-300"
                            >
                              View research details
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
