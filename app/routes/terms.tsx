import { Link } from "react-router";

export default function Terms() {
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
Terms & Conditions
</h1>

<p className="mt-4 text-sm text-slate-500">
Last updated: August 29, 2026
</p>

<div className="mt-10 space-y-9 text-sm leading-7 text-slate-300">
<section>
<h2 className="text-xl font-semibold text-white">
1. Acceptance of Terms
</h2>

<p className="mt-3">
By accessing this website, submitting an order, or purchasing
products from Avios Research, you agree to these Terms &
Conditions and our Research Use Policy. If you do not agree,
please do not use this website or purchase our products.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
2. Research Use Only
</h2>

<p className="mt-3">
Products offered by Avios Research are intended exclusively for
laboratory, analytical, and research purposes. They are not
intended for human consumption, administration, therapeutic
use, diagnostic use, or use as food, drugs, cosmetics, or
household products.
</p>

<p className="mt-3">
Purchasers are responsible for ensuring that products are
handled only by appropriately qualified individuals and used in
accordance with applicable laws, regulations, institutional
requirements, and appropriate laboratory practices.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
3. Purchaser Representations
</h2>

<p className="mt-3">
By placing an order, you represent that you understand the
research-only nature of the products purchased and that you
will not use, distribute, market, or represent them for any
prohibited or unauthorized purpose.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
4. Product Information
</h2>

<p className="mt-3">
We make reasonable efforts to provide accurate product,
quantity, documentation, storage, and lot information.
Information displayed on this website is provided for
research-material identification and documentation purposes
and is not medical or therapeutic advice.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
5. Orders and Acceptance
</h2>

<p className="mt-3">
Submission of an order does not guarantee acceptance. Avios
Research reserves the right to decline, cancel, limit, or
request additional information regarding an order when
reasonably necessary for compliance, fraud prevention,
inventory availability, or other legitimate business purposes.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
6. Pricing and Payment
</h2>

<p className="mt-3">
Prices are displayed in U.S. dollars unless otherwise stated
and may change without notice. Customers are responsible for
applicable charges presented during checkout. Orders are not
considered complete until required payment authorization has
been received.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
7. Shipping
</h2>

<p className="mt-3">
Shipping estimates are not guarantees. Carrier delays, weather,
incorrect addresses, and other circumstances outside our
reasonable control may affect delivery. Additional terms
concerning fulfillment and delivery are provided in our{" "}
<Link
to="/shipping"
className="font-medium text-sky-400 transition hover:text-sky-300"
>
Shipping Policy
</Link>
.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
8. Returns and Refunds
</h2>

<p className="mt-3">
Returns, replacements, and refunds are governed by our{" "}
<Link
to="/returns"
className="font-medium text-sky-400 transition hover:text-sky-300"
>
Returns & Refunds Policy
</Link>
. Due to the nature of research materials, some products may
not be eligible for return after delivery.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
9. Prohibited Conduct
</h2>

<p className="mt-3">
You may not use this website or our products for unlawful
purposes, provide false or misleading information, interfere
with website security or operation, engage in fraudulent
transactions, or purchase products for prohibited uses.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
10. Disclaimer
</h2>

<p className="mt-3">
To the extent permitted by applicable law, products and website
content are provided without warranties beyond those expressly
stated by Avios Research. Nothing on this website constitutes
medical advice or a representation that any product is approved
for human use.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
11. Limitation of Liability
</h2>

<p className="mt-3">
To the extent permitted by applicable law, Avios Research will
not be liable for indirect, incidental, special, consequential,
or punitive damages arising from misuse of products, improper
handling, unauthorized use, or use inconsistent with these
Terms or our Research Use Policy.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
12. Changes to These Terms
</h2>

<p className="mt-3">
We may update these Terms & Conditions from time to time.
Changes become effective when the revised terms are posted on
this website with an updated revision date.
</p>
</section>

<section>
<h2 className="text-xl font-semibold text-white">
13. Contact
</h2>

<p className="mt-3">
Questions regarding these Terms & Conditions may be sent to{" "}
<a
href="mailto:support@aviospeptides.com"
className="font-medium text-sky-400 transition hover:text-sky-300"
>
support@aviospeptides.com
</a>
.
</p>
</section>
</div>

<div className="mt-10 border-t border-slate-800 pt-6">
<Link
to="/research-use"
className="text-sm font-medium text-sky-400 hover:text-sky-300"
>
Read our Research Use Policy →
</Link>
</div>
</section>
</div>
</main>
);
}
