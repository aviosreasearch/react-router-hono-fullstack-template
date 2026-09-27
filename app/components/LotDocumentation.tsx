import {
  publicProductLots,
  type ProductSlug,
} from "../data/public-product-lots";

type LotDocumentationProps = {
  productSlug: ProductSlug;
  selectedStrength?: string;
};

export default function LotDocumentation({
  productSlug,
  selectedStrength,
}: LotDocumentationProps) {
  const allLots = publicProductLots[productSlug] ?? [];

  const matchingLots = selectedStrength
    ? allLots.filter((lot) => lot.strength === selectedStrength)
    : allLots;

  const lots = matchingLots.length > 0 ? matchingLots : allLots;

  return (
    <section className="mt-8 min-w-0 border-t border-slate-800 pt-6">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          Lot & Laboratory Records
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          COA & Product Documentation
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Available supplier documentation and independent laboratory reports
          are displayed below and organized by product lot for traceability and
          verification.
        </p>
      </div>

      {lots.length === 0 ? (
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="font-medium text-white">
            Lot documentation pending
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Documentation will be published here when the applicable lot and
            laboratory records are available.
          </p>
        </div>
      ) : (
        <div className="min-w-0 space-y-5">
          {lots.map((lot) => (
            <div
              key={`${lot.lotNumber}-${lot.strength}`}
              className="min-w-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 p-3 sm:p-5"
            >
              <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Documented Batch / Lot
                  </p>

                  <p className="mt-1 break-words font-semibold text-white">
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

              <div className="mt-4 min-w-0 space-y-5">
                {lot.documents.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    Documentation for this lot is pending.
                  </p>
                ) : (
                  lot.documents.map((document, index) => {
                    const lowerUrl = document.url.toLowerCase();

                    const isPdf =
                      lowerUrl.includes(".pdf") ||
                      lowerUrl.includes("application/pdf");

                    return (
                      <div
                        key={`${document.label}-${index}`}
                        className="min-w-0 overflow-hidden rounded-lg border border-slate-800 bg-slate-950/50"
                      >
                        <div className="flex min-w-0 flex-col gap-3 border-b border-slate-800 p-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <p className="break-words font-semibold text-white">
                              {document.label}
                            </p>

                            <p className="mt-1 text-sm text-slate-400">
                              {document.kind}
                            </p>

                            {document.laboratory ? (
                              <p className="mt-1 break-words text-sm text-slate-500">
                                Laboratory: {document.laboratory}
                              </p>
                            ) : null}
                          </div>

                          {document.verificationUrl ? (
                            <a
                              href={document.verificationUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-white transition hover:border-sky-500 hover:text-sky-400"
                            >
                              Verify Report ↗
                            </a>
                          ) : null}
                        </div>

                        {isPdf ? (
                          <>
                            {/* Mobile: don't embed the browser PDF viewer.
                                It does not scale PDFs correctly on iPhone. */}
                            <div className="bg-white p-4 sm:hidden">
                              <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  className="h-12 w-12 text-slate-400"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H8.25m5.25 0H6.375A1.875 1.875 0 0 0 4.5 4.125v15.75a1.875 1.875 0 0 0 1.875 1.875h11.25a1.875 1.875 0 0 0 1.875-1.875V8.25L13.5 2.25Z"
                                  />
                                </svg>

                                <p className="mt-3 font-semibold text-slate-900">
                                  Laboratory Report
                                </p>

                                <p className="mt-1 max-w-xs text-sm leading-5 text-slate-500">
                                  Open the report to view the complete document
                                  on your device.
                                </p>

                                <a
                                  href={document.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white"
                                >
                                  View Report ↗
                                </a>
                              </div>
                            </div>

                            {/* Tablet/Desktop PDF preview */}
                            <div className="hidden bg-white sm:block">
                              <iframe
                                src={`${document.url}#toolbar=0&navpanes=0&view=FitH`}
                                title={`${document.label} COA`}
                                className="h-[680px] w-full border-0"
                              />
                            </div>
                          </>
                        ) : (
                          <div className="w-full overflow-hidden bg-white">
                            <a
                              href={document.url}
                              target="_blank"
                              rel="noreferrer"
                              className="block w-full"
                            >
                              <img
                                src={document.url}
                                alt={`${document.label} COA`}
                                className="mx-auto block h-auto max-h-[720px] w-full max-w-full object-contain"
                              />
                            </a>
                          </div>
                        )}

                        <div className="border-t border-slate-800 p-3 text-center">
                          <a
                            href={document.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-semibold text-sky-400 transition hover:text-sky-300"
                          >
                            Open full report ↗
                          </a>
                        </div>
                      </div>
                    );
                  })
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
