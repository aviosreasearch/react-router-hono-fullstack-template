import { useState } from "react";
import LotDocumentation from "../components/LotDocumentation";
import AddToCartButton from "../components/AddToCartButton";

const sizes = [
  {
    label: "10 mg",
    price: 49.99,
  },
  {
    label: "15 mg",
    price: 69.99,
  },
  {
    label: "20 mg",
    price: 89.99,
  },
  {
    label: "30 mg",
    price: 119.99,
  },
  {
    label: "40 mg",
    price: 159.99,
  },
  {
    label: "50 mg",
    price: 189.99,
  },
];

export default function Glp3RProduct() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

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

      {/* Product */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-white">
            <div className="aspect-square">
              <img
                src="/avios-glp3r-product.png"
                alt={`GLP3 R ${selectedSize.label}`}
                className="h-full w-full object-contain p-10"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Metabolic Research
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight">
              GLP3 R
            </h1>

            {/* Product Description */}
            <div className="mt-4 max-w-xl space-y-4 text-lg leading-8 text-slate-400">
              <p>
                GLP3 R is a laboratory-made peptide designed to interact with
                three receptor systems: GLP-1, GIP, and glucagon.
              </p>

              <p>
                These receptors act like receiving stations on cells. When
                activated, they pass along signals involved in glucose
                processing, energy use, and other metabolic activity.
              </p>

              <p>
                Researchers study GLP3 R to examine how activating all three
                receptor systems at once changes cellular communication and
                metabolic signaling under controlled conditions.
              </p>
            </div>

            {/* Strength Selector */}
            <div className="mt-8">
              <label
                htmlFor="strength"
                className="mb-2 block text-sm font-semibold text-slate-300"
              >
                Select amount
              </label>

              <select
                id="strength"
                value={selectedSize.label}
                onChange={(event) => {
                  const size = sizes.find(
                    (item) => item.label === event.target.value
                  );

                  if (size) {
                    setSelectedSize(size);
                  }
                }}
                className="w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-500"
              >
                {sizes.map((size) => (
                  <option key={size.label} value={size.label}>
                    {size.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-500">
                Price
              </p>

              <p className="mt-1 text-4xl font-bold tracking-tight">
                ${selectedSize.price.toFixed(2)}
              </p>
            </div>

            <AddToCartButton
              id={`glp3-r-${selectedSize.label
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              name="GLP3 R"
              strength={selectedSize.label}
              price={selectedSize.price}
            />

            {/* Product Information */}
            <div className="mt-10 border-t border-slate-800 pt-8">
              <h2 className="text-xl font-semibold">
                Product Information
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-slate-500">
                    Compound
                  </span>

                  <span className="font-medium">
                    GLP3 R
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-slate-500">
                    Amount
                  </span>

                  <span className="font-medium">
                    {selectedSize.label}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-4">
                  <span className="text-slate-500">
                    Category
                  </span>

                  <span className="text-right font-medium">
                    Metabolic Research
                  </span>
                </div>
              </div>
            </div>

            {/* Lot & COA Documentation */}
            <LotDocumentation
              productSlug="glp3-r"
              selectedStrength={selectedSize.label}
            />
          </div>
        </div>
      </section>

      {/* Research Documentation */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Documentation
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Research Material Records
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Avios Research organizes product documentation around product
              identity, amount, lot records, and the laboratory records
              applicable to available inventory.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Lot Records */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Lot Records
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Batch Traceability
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Available inventory can be associated with an Avios lot record
                and the documentation applicable to that specific lot.
              </p>
            </div>

            {/* Laboratory Records */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Laboratory Records
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Documented Testing
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Supplier-provided and independently obtained laboratory records
                are identified according to the source and type of
                documentation available.
              </p>
            </div>

            {/* Storage */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Storage
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Laboratory Storage
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Product-specific laboratory storage information can be provided
                with the applicable product and documentation records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Material Notice */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Research Material
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Research Use Notice
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-slate-400">
            GLP3 R products offered by Avios Research are presented solely as
            research materials. They are not intended for human consumption,
            therapeutic use, diagnosis, treatment, or prevention of disease.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold tracking-[0.15em]">
              AVIOS RESEARCH
            </p>

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
