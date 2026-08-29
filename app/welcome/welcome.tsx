
      {/* Navigation */}
      <header className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <a href="/" className="flex min-w-0 items-center">
              <img
                src="/AVIOS Research logo.png"
                alt="Avios Research"
                className="h-16 w-auto object-contain sm:h-20 md:h-24"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
              <a href="#products" className="transition hover:text-white">
                Research Compounds
              </a>

              <a href="/membership" className="transition hover:text-white">
                Membership
              </a>

              <a href="#verification" className="transition hover:text-white">
                COA Verification
              </a>

              <a href="#research" className="transition hover:text-white">
                Research Library
              </a>

              <a href="#about" className="transition hover:text-white">
                About
              </a>
            </nav>

            <div className="hidden items-center gap-3 sm:flex">
              <a
                href="#products"
                className="rounded-lg border border-sky-500/50 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:border-sky-400 hover:text-white"
              >
                View Compounds
              </a>

              <a
                href="/cart"
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-500/50 hover:text-white"
              >
                Cart ({cartCount})
              </a>
            </div>

            {/* Mobile Menu */}
            <details className="relative sm:hidden">
              <summary className="cursor-pointer list-none rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-white">
                Menu
              </summary>

              <div className="absolute right-0 z-50 mt-3 w-64 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
                <nav className="flex flex-col p-2 text-sm font-medium">
                  <a
                    href="#products"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Research Compounds
                  </a>

                  <a
                    href="/membership"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Membership
                  </a>

                  <a
                    href="#verification"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    COA Verification
                  </a>

                  <a
                    href="#research"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Research Library
                  </a>

                  <a
                    href="#about"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    About
                  </a>

                  <a
                    href="/contact"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Contact
                  </a>

                  <a
                    href="/shipping"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Shipping
                  </a>

                  <a
                    href="/returns"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Returns & Refunds
                  </a>

                  <a
                    href="/privacy"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Privacy
                  </a>

                  <a
                    href="/terms"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Terms
                  </a>

                  <a
                    href="/research-use"
                    className="rounded-lg px-4 py-3 text-slate-200 hover:bg-slate-800 hover:text-white"
                  >
                    Research Use Policy
                  </a>

                  <a
                    href="/cart"
                    className="mt-2 rounded-lg border border-sky-500/50 px-4 py-3 font-semibold text-sky-300"
                  >
                    Cart ({cartCount})
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>
