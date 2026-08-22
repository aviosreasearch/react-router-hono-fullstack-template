import {
  publicProductLots,
  type ProductSlug,
} from "../data/public-product-lots";

type LotDocumentationProps = {
  productSlug: ProductSlug;
  selectedStrength: string;
};

export function LotDocumentation({
  productSlug,
  selectedStrength,
}: LotDocumentationProps) {
  const matchingLots = publicProductLots[productSlug].filter(
    (lot) => lot.strength === selectedStrength
  );

  return (
    <div className="mt-10 border-t border-slate-800 pt-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
            Traceability
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Lot & Laboratory Documentation
          </h2>
        </div>

        <p className="text-sm text-slate-500">
          Selected amount: {selectedStrength}
        </p>
      </div>

      {matchingLots.length === 0 ? (
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <p className="font-semibold text-slate-300">
            Documentation not yet published
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Lot-specific documentation for this product amount will appear here
            when the applicable records are available for publication.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-5">
          {matchingLots.map((lot) => (
            <div
              key={lot.lotNumber}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Avios Lot
                  </p>

                  <p className="mt-1 text-xl font-semibold">
                    {lot.lotNumber}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Amount
                  </p>

                  <p className="mt-1 font-semibold">
                    {lot.strength}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {lot.documents.map((document) => (
                  <div
                    key={`${lot.lotNumber}-${document.label}`}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {document.label}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {document.kind}
                        </p>

                        {document.laboratory ? (
                          <p className="mt-1 text-sm text-slate-500">
                            Laboratory: {document.laboratory}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={document.url}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                          View Report
                        </a>

                        {document.verificationUrl ? (
                          <a
                            href={document.verificationUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-slate-500"
                          >
                            Verify Report
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
