export function Welcome({ message }: { message: string }) {
return (
<main className="min-h-screen bg-slate-950 text-white">
<section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
<p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
Avios Research
</p>

<h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
Research compounds. Clear documentation. Better transparency.
</h1>

<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
Avios Research is being built as a research-focused platform for
compound information, lot documentation, certificates of analysis,
and scientific literature.
</p>

<div className="mt-10 flex flex-wrap gap-4">
<a
href="#research"
className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-950"
>
Explore Research
</a>

<a
href="#verification"
className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white"
>
Lot Verification
</a>
</div>

<div className="mt-20 grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
<h2 className="text-xl font-semibold">Research Library</h2>
<p className="mt-3 text-slate-400">
Evidence summaries, mechanisms, study references, and clearly
separated preclinical and human research.
</p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
<h2 className="text-xl font-semibold">Batch Documentation</h2>
<p className="mt-3 text-slate-400">
Lot-specific records, laboratory testing, and certificates of
analysis organized for easy verification.
</p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
<h2 className="text-xl font-semibold">Research-Use Focus</h2>
<p className="mt-3 text-slate-400">
Educational and analytical information presented without
self-administration or human-use instructions.
</p>
</div>
</div>

<p className="mt-16 text-sm text-slate-500">
Research use only. Not intended for human consumption.
</p>
</section>
</main>
);
}
