import type { ReactNode } from "react";
import { Link } from "react-router";

export default function ResearchUsePolicy() {
return (
<main className="min-h-screen bg-slate-950 text-white">
<div className="mx-auto max-w-4xl px-6 py-16">
<div className="mb-10">
<Link
to="/"
className="text-sm font-medium text-sky-400 transition hover:text-sky-300"
>
← Back to Avios Research
</Link>
</div>

<section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl">
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
Avios Research
</p>

<h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
Research Use Policy
</h1>

<p className="mt-4 text-sm text-slate-500">
Last updated: August 29, 2026
</p>

<div className="mt-8 rounded-xl border border-sky-900/60 bg-sky-950/30 p-6 text-center">
<p className="text-lg font-bold tracking-wide text-white">
FOR RESEARCH USE ONLY
</p>

<p className="mt-2 text-sm font-semibold tracking-wide text-sky-300">
NOT FOR HUMAN CONSUMPTION
</p>
</div>

<div className="mt-10 space-y-9 text-sm leading-7 text-slate-300">
<PolicySection title="1. Research Use Only">
<p>
All products offered by Avios Research are intended exclusively
for legitimate laboratory, analytical, and scientific research
purposes.
</p>

<p className="mt-3">
Products are not intended for human or veterinary consumption,
administration, diagnosis, treatment, prevention, or management
of any disease or medical condition.
</p>

<p className="mt-3">
Products are not intended for use as drugs, foods, dietary
supplements, cosmetics, medical treatments, or household
products.
</p>
</PolicySection>

<PolicySection title="2. Purchaser Responsibility">
<p>By purchasing from Avios Research, the purchaser agrees that:</p>

<ul className="mt-3 list-disc space-y-2 pl-6">
<li>
Products will be used solely for legitimate laboratory,
analytical, or scientific research.
</li>
<li>
Products will not be used for human consumption,
self-administration, or veterinary administration.
</li>
<li>
Products will not be used for diagnosis, treatment,
prevention, or management of any medical condition.
</li>
<li>
The purchaser possesses the knowledge, facilities, equipment,
and training appropriate for handling research materials.
</li>
<li>
The purchaser is responsible for complying with all applicable
federal, state, and local laws and regulations.
</li>
</ul>
</PolicySection>

<PolicySection title="3. No Medical or Clinical Advice">
<p>
Information provided by Avios Research, including product
descriptions, analytical reports, certificates of analysis,
research summaries, and website materials, is provided solely
for scientific and research-reference purposes.
</p>

<p className="mt-3">
Nothing provided by Avios Research constitutes medical advice,
prescribing information, dosage guidance, treatment
recommendations, or instructions for human use.
</p>

<p className="mt-3">
Avios Research does not provide guidance concerning
self-administration, human dosing, injection, therapeutic use,
or treatment protocols.
</p>
</PolicySection>

<PolicySection title="4. Product Information and Analytical Testing">
<p>
Product descriptions, purity information, certificates of
analysis, analytical results, and related documentation are
provided to identify and characterize research materials.
</p>

<p className="mt-3">
Such information does not constitute a representation that any
product is approved, safe, or appropriate for human or
veterinary use.
</p>

<p className="mt-3">
Where third-party analytical testing is provided, results apply
only to the material or sample associated with the applicable
report.
</p>
</PolicySection>

<PolicySection title="5. Prohibited Uses">
<ul className="list-disc space-y-2 pl-6">
<li>Human consumption or administration</li>
<li>Veterinary treatment or administration</li>
<li>Self-experimentation</li>
<li>Medical, therapeutic, or diagnostic purposes</li>
<li>Compounding for human or veterinary use</li>
<li>
Resale or representation as a drug, dietary supplement, food,
cosmetic, or therapeutic product
</li>
<li>Any unlawful purpose</li>
</ul>
</PolicySection>

<PolicySection title="6. Order Refusal and Cancellation">
<p>
Avios Research reserves the right to refuse, cancel, or limit
any order when we reasonably believe that the intended use may
be inconsistent with this Research Use Policy, applicable law,
or the research-only nature of our products.
</p>

<p className="mt-3">
Avios Research may also decline to provide assistance or
information relating to human administration, dosage,
treatment, or other non-research applications.
</p>
</PolicySection>

<PolicySection title="7. Acceptance of This Policy">
<p>
By accessing this website or purchasing products from Avios
Research, the purchaser acknowledges that they have read,
understood, and agreed to this Research Use Policy.
</p>

<p className="mt-3">
Purchasers are solely responsible for ensuring that their
acquisition and use of research materials are lawful and
appropriate within their jurisdiction.
</p>
</PolicySection>
</div>

<div className="mt-10 border-t border-slate-800 pt-6 text-center">
<p className="font-semibold text-white">
FOR RESEARCH USE ONLY — NOT FOR HUMAN CONSUMPTION
</p>
</div>
</section>
</div>
</main>
);
}

function PolicySection({
title,
children,
}: {
title: string;
children: ReactNode;
}) {
return (
<section>
<h2 className="text-xl font-semibold text-white">{title}</h2>

<div className="mt-3 text-slate-300">{children}</div>
</section>
);
}
