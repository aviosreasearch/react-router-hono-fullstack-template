import { useState } from "react";
import LotDocumentation from "../components/LotDocumentation";
import AddToCartButton from "../components/AddToCartButton";
import { ProductSeo, buildProductMeta } from "../components/ProductSeo";

export const meta = buildProductMeta("ss-31");

const sizes = [
  {
    label: "10 mg",
    price: 39.99,
  },
];

export default function SS31Product() {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <ProductSeo slug="ss-31" />

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
                  src="/avios-ss-31-product.PNG"
                  alt={`SS-31 ${selectedSize.label}`}
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
                  Mitochondrial
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
              Mitochondrial Research
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              SS-31
            </h1>

            <div className="mt-4 max-w-2xl space-y-3 text-[15px] leading-6 text-slate-400 sm:text-base sm:leading-7">
              <p>
                SS-31 is a small research peptide made from four amino acids.
                It is designed to collect inside mitochondria, the structures
                that help cells produce usable energy.
              </p>

              <p>
                Inside mitochondria, SS-31 interacts with cardiolipin, a type
                of fat that helps form and support the inner mitochondrial
                membrane. This membrane contains much of the machinery used
                during cellular energy production.
              </p>

              <p>
                Researchers study SS-31 to examine mitochondrial membrane
                stability, energy production, and oxidative stress—the
                chemical strain created when highly reactive molecules build
                up inside cells.
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
              {/* Strength Selector */}
              <div>
                <label
                  htmlFor="ss31-strength"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Select amount
                </label>

                <select
                  id="ss31-strength"
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
                name="SS-31"
                strength={selectedSize.label}
                price={selectedSize.price}
              />
            </div>

            {/* Compact Product Information */}
            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="grid divide-y divide-slate-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="p-4">
                  <p className="text-xs text-slate-500">
                    Compound
                  </p>

                  <p className="mt-1 font-semibold">
                    SS-31
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-slate-500">
                    Amount
                  </p>

                  <p className="mt-1 font-semibold">
                    {selectedSize.label}
                  </p>
                </div>

                <div className="p-4">
                  <p className="text-xs text-slate-500">
                    Category
                  </p>

                  <p className="mt-1 font-semibold">
                    Mitochondrial Research
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded COA / Lot Documentation */}
        <div className="mt-10">
          <LotDocumentation
            productSlug="ss-31"
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
            SS-31 products offered by Avios Research are presented solely as
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
