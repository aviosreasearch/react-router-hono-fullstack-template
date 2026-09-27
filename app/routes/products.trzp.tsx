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
    <main className="min-h-screen bg-slate-950 text-white">
      <ProductSeo slug="trzp" />

      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="/" className="flex items-center">
            <img
              src="/AVIOS Research logo.png"
              alt="Avios Research"
              className="h-16 w-auto object-contain sm:h-20"
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

      {/* Compact Product Section */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          {/* Product Image */}
          <div className="mx-auto w-full max-w-[470px]">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-white shadow-xl">
              <div className="aspect-[4/3]">
                <img
                  src="/avios-trzp-product.PNG"
                  alt={`TRZP ${selectedSize.label}`}
                  className="h-full w-full object-contain p-8 sm:p-10"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Category
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  Metabolic
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Amount
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  {selectedSize.label}
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-2 py-3">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Records
                </p>
                <p className="mt-1 text-xs font-semibold text-sky-400">
                  Available
                </p>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-400">
              Metabolic Research
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              TRZP
            </h1>

            <div className="mt-4 max-w-2xl space-y-3 text-[15px] leading-6 text-slate-400 sm:text-base sm:leading-7">
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

            <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
              {/* Strength Selector */}
              <div>
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
                      (item) => item.label === event.target.value,
                    );

                    if (size) {
                      setSelectedSize(size);
                    }
                  }}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-sky-500 sm:max-w-xs"
                >
                  {sizes.map((size) => (
                    <option key={size.label} value={size.label}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div className="sm:text-right">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Price
                </p>

                <p className="mt-1 text-3xl font-bold tracking-tight">
                  ${selectedSize.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="mt-5 max-w-md">
              <AddToCartButton
                id={`trzp-${selectedSize.label
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                name="TRZP"
                strength={selectedSize.label}
                price={selectedSize.price}
              />
            </div>

            {/* Compact Product Information */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="grid divide-y divide-slate-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="p-4">
                  <p className="text-xs text-slate-500">Compound</p>
                  <p className="mt-1 font-semibold">TRZP</p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-slate-500">Amount</p>
                  <p className="mt-1 font-semibold">{selectedSize.label}</p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-slate-500">Category</p>
                  <p className="mt-1 font-semibold">Metabolic Research</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded COA / Lot Documentation */}
        <div className="mt-10">
          <LotDocumentation
            productSlug="trzp"
            selectedStrength={selectedSize.label}
          />
        </div>
      </section>

      {/* Research Documentation */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="mb-7 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sky-400">
              Documentation
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Research Material Records
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              Avios Research organizes product documentation around product
              identity, amount, lot records, and the laboratory records
              applicable to available inventory.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Lot Records
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                Batch Traceability
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Available inventory can be associated with an Avios lot record
                and the documentation applicable to that specific lot.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Laboratory Records
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                Documented Testing
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Supplier-provided and independently obtained laboratory records
                are identified according to the source and type of
                documentation available.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                Storage
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                Laboratory Storage
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Product-specific laboratory storage information can be provided
                with the applicable product and documentation records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Material Notice */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Research Material
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            Research Use Notice
          </h2>

          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-400">
            TRZP products offered by Avios Research are presented solely as
            research materials. They are not intended for human consumption,
            therapeutic use, diagnosis, treatment, or prevention of disease.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
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
