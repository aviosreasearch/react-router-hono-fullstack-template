import { useState } from "react";
import LotDocumentation from "../components/LotDocumentation";
import AddToCartButton from "../components/AddToCartButton";
import { ProductSeo, buildProductMeta } from "../components/ProductSeo";

export const meta = buildProductMeta("trzp");

const sizes = [
  { label: "10 mg", price: 29.99 },
  { label: "20 mg", price: 44.99 },
  { label: "30 mg", price: 59.99 },
];

export default function TrzpProduct() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <ProductSeo slug="trzp" />

      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
          <a href="/" className="min-w-0">
            <img
              src="/AVIOS Research logo.png"
              alt="Avios Research"
              className="h-16 w-auto object-contain sm:h-24"
            />
          </a>

          <a
            href="/#products"
            className="shrink-0 rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white sm:px-4 sm:text-sm"
          >
            ← Back to Compounds
          </a>
        </div>
      </header>

      {/* Product */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16">
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-800 bg-white sm:rounded-3xl">
            <div className="aspect-square">
              <img
                src="/avios-trzp-product.PNG"
                alt={`TRZP ${selectedSize.label}`}
                className="h-full w-full object-contain p-6 sm:p-10"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex min-w-0 flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
              Metabolic Research
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:mt-4 sm:text-5xl">
              TRZP
            </h1>

            {/* Product Description */}
            <div className="mt-4 max-w-xl space-y-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              <p>
                TRZP is a laboratory-made peptide designed to interact with
                two receptor systems known as GIP and GLP-1.
              </p>

              <p>
                These receptors act like receiving stations on cells. When
                activated, they pass along signals involved in glucose
                processing, energy use, and other metabolic activity.
              </p>

              <p>
                Researchers study TRZP to examine how activating both receptor
                systems at the same time changes cellular communication and
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

              <p className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                ${selectedSize.price.toFixed(2)}
              </p>
            </div>

            <AddToCartButton
              id={`trzp-${selectedSize.label
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              name="TRZP"
              strength={selectedSize.label}
              price={selectedSize.price}
            />

            {/* Product Information */}
            <div className="mt-10 border-t border-slate-800 pt-8">
              <h2 className="text-xl font-semibold">
                Product Information
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <span className="text-slate-500">
                    Compound
                  </span>

                  <span className="text-right font-medium">
                    TRZP
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                  <span className="text-slate-500">
                    Amount
                  </span>

                  <span className="text-right font-medium">
                    {selectedSize.label}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
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
              productSlug="trzp"
              selectedStrength={selectedSize.label}
            />
          </div>
        </div>
      </section>

      {/* Research Documentation */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
              Documentation
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Research Material Records
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Avios Research organizes product documentation around product
              identity, amount, lot records, and the laboratory records
              applicable to available inventory.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-7">
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

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-7">
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

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 sm:p-7">
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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Research Material
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Research Use Notice
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-slate-400">
            TRZP products offered by Avios Research are presented solely as
            research materials. They are not intended for human consumption,
            therapeutic use, diagnosis, treatment, or prevention of disease.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
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
