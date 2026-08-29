
import { useState } from "react";
import AddToCartButton from "../components/AddToCartButton";
import LotDocumentation from "../components/LotDocumentation";

export default function SS31Product() {
  const [selectedAmount, setSelectedAmount] = useState("10 mg");

  const prices: Record<string, number> = {
    "10 mg": 44.99,
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6">
            <img
              src="/avios-ss31-product.PNG"
              alt="SS-31 10 mg"
              className="mx-auto w-full max-w-md object-contain"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-sky-400">
              Mitochondrial Research
            </p>

            <h1 className="text-4xl font-bold">SS-31</h1>

            <p className="mt-2 text-lg text-slate-300">10 mg</p>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
              <p className="font-semibold text-amber-300">
                For Research Use Only — Not for Human Consumption
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 font-semibold">Available amounts</p>

              {Object.keys(prices).map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`mr-3 rounded-xl border px-4 py-2 ${
                    selectedAmount === amount
                      ? "border-sky-400 bg-sky-500/20"
                      : "border-slate-700 bg-slate-900"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-slate-400">Price</p>
              <p className="text-3xl font-bold">
                ${prices[selectedAmount].toFixed(2)}
              </p>
            </div>

            <div className="mt-6">
              <AddToCartButton
                product={{
                  id: `ss-31-${selectedAmount}`,
                  name: "SS-31",
                  amount: selectedAmount,
                  price: prices[selectedAmount],
                  image: "/avios-ss31-product.PNG",
                }}
              />
            </div>

            <section className="mt-10">
              <h2 className="text-2xl font-bold">Product Information</h2>
              <p className="mt-4 leading-7 text-slate-300">
                SS-31 is offered as a research peptide for laboratory and
                analytical research applications. Product documentation and
                available laboratory records are organized by lot when
                available.
              </p>
            </section>
          </div>
        </div>

        <div className="mt-14">
          <LotDocumentation productSlug="ss-31" />
        </div>
      </div>
    </main>
  );
}
