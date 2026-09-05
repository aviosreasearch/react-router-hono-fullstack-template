import { useState } from "react";
import LotDocumentation from "../components/LotDocumentation";
import AddToCartButton from "../components/AddToCartButton";

const sizes = [
  { label: "500 mg", price: 54.99 },
  { label: "1000 mg", price: 89.99 },
];

export default function NadPlusProduct() {
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
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
          >
            ← Back to Compounds
          </a>
        </div>
      </header>

      {/* Product Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-white">
            <div className="aspect-square">
              <img
                src="/avios-nad-product.PNG"
                alt={`NAD+ ${selectedSize.label}`}
                className="h-full w-full object-contain p-10"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Metabolic / Cellular Research
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              NAD+
            </h1>

            {/* Product Description */}
            <div className="mt-4 max-w-xl space-y-4 text-lg leading-8 text-slate-400">
              <p>
                NAD+ is a molecule found in nearly every living cell. Its full
                name is nicotinamide adenine dinucleotide, but NAD+ is the name
                most commonly used.
              </p>

              <p>
                Cells use NAD+ to help transfer energy from nutrients into
                chemical reactions. It works like a carrier, moving electrons
                from one reaction to another so important cellular processes
                can continue.
              </p>

              <p>
                Researchers study NAD+ in connection with energy production,
                mitochondrial activity, DNA maintenance, and the way cells
                respond to stress and changing energy demands.
              </p>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              For laboratory research only.
            </p>

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
                className="w-full max-w-sm rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
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
              <p className="text-sm text-slate-400">
                Price
              </p>

              <p className="mt-1 text-4xl font-bold">
                ${selectedSize.price.toFixed(2)}
              </p>
            </div>

            <AddToCartButton
              id={`nad-plus-${selectedSize.label
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              name="NAD+"
              strength={selectedSize.label}
              price={selectedSize.price}
            />

            {/* Product Information */}
            <div className="mt-10 border-t border-slate-800 pt-8">
              <h2 className="text-2xl font-bold">
                Product Information
              </h2>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-4">
                  <dt className="text-slate-400">
                    Compound
                  </dt>

                  <dd className="font-semibold text-slate-200">
                    NAD+
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-4">
                  <dt className="text-slate-400">
                    Available amount
                  </dt>

                  <dd className="font-semibold text-slate-200">
                    {selectedSize.label}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-4">
                  <dt className="text-slate-400">
                    Category
                  </dt>

                  <dd className="text-right font-semibold text-slate-200">
                    Metabolic / Cellular Research
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-4">
                  <dt className="text-slate-400">
                    Expiration
                  </dt>

                  <dd className="font-semibold text-slate-200">
                    06/05/2028
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <dt className="text-slate-400">
                    Laboratory storage
                  </dt>

                  <dd className="text-right font-semibold text-slate-200">
                    Refrigerated 2°C–8°C (36°F–46°F)
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <LotDocumentation
        productSlug="nad-plus"
        selectedStrength={selectedSize.label}
      />
    </main>
  );
}
