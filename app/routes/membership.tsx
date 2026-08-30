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
Member pricing for ongoing research.
</h1>

<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
Avios Research Membership is $5 per month and provides discounted
pricing on eligible research products while the membership remains
active.
</p>
</div>

{/* Founding Membership */}
<div className="mx-auto mt-12 max-w-xl rounded-3xl border border-sky-500/40 bg-slate-900 p-8 shadow-2xl">
<div className="text-center">
<p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
Founding Member
</p>

<div className="mt-5 flex items-end justify-center gap-2">
<span className="text-5xl font-bold">$5</span>

<span className="pb-1 text-slate-400">/ month</span>
</div>

<p className="mt-5 text-2xl font-bold text-white">
Save 15%
</p>

<p className="mt-2 text-sm leading-6 text-slate-400">
Available to qualifying early members during the founding
membership period.
</p>
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
Founding members keep their 15% rate while their membership
remains continuously active.
</p>
</div>

<div className="flex items-start gap-3">
<span className="mt-0.5 text-sky-400">✓</span>

<p className="text-slate-300">
Membership may be canceled at any time.
</p>
</div>

<div className="flex items-start gap-3">
<span className="mt-0.5 text-sky-400">✓</span>

<p className="text-slate-300">
After cancellation, benefits remain available through the end
of the already-paid billing period.
</p>
</div>

<div className="flex items-start gap-3">
<span className="mt-0.5 text-sky-400">✓</span>

<p className="text-slate-300">
Membership discounts apply to eligible product subtotal only.
</p>
</div>
</div>

<button
type="button"
disabled
className="mt-8 w-full cursor-not-allowed rounded-lg bg-slate-700 px-6 py-3.5 font-semibold text-slate-300"
>
Membership Enrollment Coming Soon
</button>

<p className="mt-4 text-center text-xs leading-5 text-slate-500">
Membership enrollment will be activated when recurring payment
processing is connected. Membership benefits will only become
active after successful payment.
</p>
</div>

{/* Standard Membership */}
<div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
<p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
Standard Membership
</p>

<div className="mt-4 flex items-end gap-2">
<span className="text-3xl font-bold">$5</span>

<span className="pb-1 text-slate-400">/ month</span>
</div>

<p className="mt-4 text-xl font-semibold text-white">
Save 10%
</p>

<p className="mt-3 leading-7 text-slate-400">
After the founding membership period closes, new Avios Research
members will receive 10% off eligible research product purchases
while their membership remains active.
</p>
</div>

{/* Membership Terms */}
<div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
<h2 className="text-2xl font-semibold">Membership Terms</h2>

<div className="mt-5 space-y-4 leading-7 text-slate-400">
<p>
Avios Research Membership is billed monthly until canceled.
Membership benefits become active only after successful
membership payment.
</p>

<p>
Founding members receive a 15% discount on eligible research
products and retain that rate while the founding membership
remains continuously active.
</p>

<p>
Customers joining after the founding membership period receive a
10% discount on eligible research products while their membership
remains active.
</p>

<p>
Cancellation may be requested at any time. Membership benefits
remain available through the end of the current paid billing
period and expire when that billing period ends.
</p>

<p>
If a recurring membership payment fails and the membership is no
longer considered active, membership pricing will no longer be
available.
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
<p className="font-bold tracking-[0.15em]">AVIOS RESEARCH</p>

<p className="mt-2 text-sm text-slate-500">
Research use only. Not intended for human consumption.
</p>
</div>

<p className="text-sm text-slate-600">© 2026 Avios Research</p>
</div>
</footer>
</main>
);
}
