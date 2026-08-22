export function Welcome({ message }: { message: string }) {
void message;

const products = [
{
name: "GLP3 R",
amount: "Research Compound",
sizes: [
{ label: "10 mg", price: 89 },
{ label: "15 mg", price: 119 },
{ label: "30 mg", price: 199 },
{ label: "50 mg", price: 289 },
],
image: "/avios-glp3r-product.png",
description:
"Research compound with batch documentation and third-party laboratory records.",
},
{
name: "Tirzepatide",
amount: "Research Compound",
description:
"Research information, batch documentation, and third-party laboratory records.",
},
{
name: "Featured Compound",
amount: "More Coming Soon",
description:
"Additional Avios Research compounds will be added as inventory is photographed and documented.",
},
];

return (
<main className="min-h-screen bg-slate-950 text-white">
{/* Navigation */}
<header className="border-b border-slate-800 bg-slate-950/95">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<a href="#" className="flex items-center">
<img
src="/AVIOS Research logo.png"
alt="Avios Research"
className="h-24 w-auto object-contain"
/>
</a>
<nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
<a href="#products" className="transition hover:text-white">
Research Compounds
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

    <div className="relative hidden min-h-[520px] overflow-hidden rounded-3xl lg:block">
      <div
        className="absolute inset-0 bg-cover bg-[72%_center] bg-no-repeat"
        style={{ backgroundImage: 'url("/avios-motsc-hero.png")' }}
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

<span className="text-sm text-slate-500">
Product photography coming soon
</span>
</div>

<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{products.map((product) => (
<article
key={product.name}
className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950"
>
{/* Product image */}
{product.image ? (
<div className="aspect-square overflow-hidden border-b border-slate-800 bg-white">
<img
src={product.image}
alt={`${product.name} ${product.amount}`}
className="h-full w-full object-contain p-6"
/>
</div>
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

<div className="p-6">
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
{product.amount}
</p>

<h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
  {"sizes" in product && product.sizes?.length ? (
<div className="mt-5">
<label className="mb-2 block text-sm font-semibold text-slate-300">
Select amount
</label>
<select
defaultValue="30 mg"
className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
>
{product.sizes.map((size) => (
  <option key={size.label} value={size.label}>
    {size.label} — ${size.price}
  </option>
))}
</select>
</div>
) : null}

<p className="mt-3 leading-7 text-slate-400">
{product.description}
</p>

<a
href="#verification"
className="mt-6 inline-flex items-center font-semibold text-white"
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
<section id="verification" className="mx-auto max-w-7xl px-6 py-24">
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
Example Documentation
</p>

<div className="mt-6 space-y-5">
<div className="flex justify-between border-b border-slate-800 pb-4">
<span className="text-slate-400">Compound</span>
<span className="font-semibold">Retatrutide</span>
</div>

<div className="flex justify-between border-b border-slate-800 pb-4">
<span className="text-slate-400">Documentation</span>
<span className="font-semibold">Supplier-provided report</span>
</div>

<div className="flex justify-between border-b border-slate-800 pb-4">
<span className="text-slate-400">Laboratory</span>
<span className="font-semibold">Third-party lab</span>
</div>

<div className="flex flex-wrap gap-3 pt-2">
<button className="rounded-lg bg-white px-5 py-3 font-semibold text-slate-950">
View COA
</button>

<button className="rounded-lg border border-slate-700 px-5 py-3 font-semibold">
Verify Report
</button>
</div>
</div>
</div>
</div>
</section>

{/* Research */}
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
<h3 className="text-xl font-semibold">Compound Profiles</h3>
<p className="mt-3 leading-7 text-slate-400">
Organized background information and mechanisms for research
compounds.
</p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
<h3 className="text-xl font-semibold">Published Literature</h3>
<p className="mt-3 leading-7 text-slate-400">
References to published scientific studies and research
literature.
</p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
<h3 className="text-xl font-semibold">Study Evidence</h3>
<p className="mt-3 leading-7 text-slate-400">
Human and preclinical evidence clearly distinguished where
applicable.
</p>
</div>
</div>
</div>
</section>

{/* About */}
<section id="about" className="mx-auto max-w-7xl px-6 py-20">
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
<div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between">
<div>
<p className="font-bold tracking-[0.15em]">AVIOS RESEARCH</p>
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
