
import {
  publicProductLots,
  type ProductSlug,
} from "../data/public-product-lots";

type LotDocumentationProps = {
  productSlug: ProductSlug;
};

export default function LotDocumentation({
  productSlug,
}: LotDocumentationProps) {
  const lots = publicProductLots[productSlug];

  return (
    <section className="border-t border-slate-800 pt-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Lot & Laboratory Records
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          Product Documentation
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Available supplier documentation and independent laboratory reports
          are organized by product lot for traceability and verification.
        </p>
      </div>

      {lots.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <p className="font-medium text-white">
            Lot documentation pending
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Documentation will be published here when the applicable lot and
            laboratory records are available.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {lots.map((lot) => (
            <div
              key={`${lot.lotNumber}-${lot.strength}`}
              className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                   Documented Batch / Lot
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {lot.lotNumber}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Strength
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    {lot.strength}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {lot.documents.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    Documentation for this lot is pending.
                  </p>
                ) : (
                  lot.documents.map((document, index) => (
                    <div
                      key={`${document.label}-${index}`}
                      className="rounded-lg border border-slate-800 bg-slate-950/40 p-4"
                    >
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <p className="font-semibold text-white">
                            {document.label}
                          </p>

                          <p className="mt-1 text-sm text-slate-400">
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
                            className="rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                          >
                            View Report
                          </a>

                          {document.verificationUrl ? (
                            <a
                              href={document.verificationUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-500 hover:text-sky-400"
                            >
                              Verify Report
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-5 text-xs leading-5 text-slate-500">
        Laboratory documentation applies only to the specific lot or sample
        identified in the associated report.
      </p>
    </section>
  );
}
