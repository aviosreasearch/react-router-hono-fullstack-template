      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Molecular atmosphere behind the entire hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Blue glow concentrated toward product image */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 78% 48%, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.08) 24%, rgba(2,6,23,0) 58%)",
            }}
          />

          {/* Molecular network */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1600 760"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="moleculeFade"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.02" />
                <stop offset="24%" stopColor="#38bdf8" stopOpacity="0.07" />
                <stop offset="48%" stopColor="#38bdf8" stopOpacity="0.16" />
                <stop offset="72%" stopColor="#38bdf8" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.68" />
              </linearGradient>

              <filter id="moleculeGlow">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="nodeGlow">
                <stop offset="0%" stopColor="#e0f2fe" stopOpacity="1" />
                <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g
              stroke="url(#moleculeFade)"
              strokeWidth="2"
              fill="none"
              filter="url(#moleculeGlow)"
            >
              {/* Upper molecular chain */}
              <path d="M260 145 L365 90 L470 150 L575 95 L680 160 L790 105 L900 165 L1010 110 L1120 175 L1230 115 L1340 180 L1450 120" />

              <path d="M365 90 L365 210" />
              <path d="M575 95 L575 225" />
              <path d="M790 105 L790 240" />
              <path d="M1010 110 L1010 245" />
              <path d="M1230 115 L1230 250" />

              {/* Mid molecular chain */}
              <path d="M170 355 L285 290 L395 350 L510 285 L620 350 L735 285 L850 350 L965 285 L1080 350 L1195 285 L1310 350 L1430 290" />

              <path d="M285 290 L285 425" />
              <path d="M510 285 L510 430" />
              <path d="M735 285 L735 430" />
              <path d="M965 285 L965 430" />
              <path d="M1195 285 L1195 430" />

              {/* Lower molecular chain */}
              <path d="M350 575 L460 510 L570 575 L680 510 L790 580 L900 510 L1010 580 L1120 510 L1235 580 L1350 515 L1465 575" />

              <path d="M570 575 L570 690" />
              <path d="M790 580 L790 700" />
              <path d="M1010 580 L1010 700" />
              <path d="M1235 580 L1235 700" />

              {/* Hexagonal chemistry shapes */}
              <path d="M1065 185 L1110 160 L1155 185 L1155 235 L1110 260 L1065 235 Z" />
              <path d="M1260 400 L1310 370 L1360 400 L1360 458 L1310 488 L1260 458 Z" />
              <path d="M920 475 L965 448 L1010 475 L1010 527 L965 554 L920 527 Z" />
              <path d="M1380 210 L1425 185 L1470 210 L1470 260 L1425 285 L1380 260 Z" />
            </g>

            {/* Glowing molecule nodes */}
            <g fill="url(#nodeGlow)">
              {[
                [365, 90],
                [470, 150],
                [575, 95],
                [680, 160],
                [790, 105],
                [900, 165],
                [1010, 110],
                [1120, 175],
                [1230, 115],
                [1340, 180],
                [1450, 120],

                [285, 290],
                [395, 350],
                [510, 285],
                [620, 350],
                [735, 285],
                [850, 350],
                [965, 285],
                [1080, 350],
                [1195, 285],
                [1310, 350],
                [1430, 290],

                [460, 510],
                [570, 575],
                [680, 510],
                [790, 580],
                [900, 510],
                [1010, 580],
                [1120, 510],
                [1235, 580],
                [1350, 515],
                [1465, 575],
              ].map(([cx, cy], index) => (
                <circle key={index} cx={cx} cy={cy} r="10" />
              ))}
            </g>

            {/* Tiny atmospheric particles */}
            <g fill="#7dd3fc">
              <circle cx="720" cy="180" r="2" opacity="0.25" />
              <circle cx="820" cy="520" r="2" opacity="0.35" />
              <circle cx="940" cy="215" r="2.5" opacity="0.4" />
              <circle cx="1070" cy="590" r="2" opacity="0.4" />
              <circle cx="1180" cy="200" r="3" opacity="0.45" />
              <circle cx="1280" cy="550" r="2.5" opacity="0.5" />
              <circle cx="1370" cy="335" r="2" opacity="0.55" />
              <circle cx="1480" cy="455" r="3" opacity="0.5" />
            </g>
          </svg>

          {/* Fade molecules away from the text area */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,6,23,0.96) 0%, rgba(2,6,23,0.83) 28%, rgba(2,6,23,0.35) 55%, rgba(2,6,23,0.02) 82%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-7 sm:px-6 sm:pb-16 sm:pt-14">
          <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
                RESEARCH PEPTIDE CATALOG
              </p>

              <h1 className="max-w-5xl text-[2.65rem] font-bold leading-[1.02] tracking-tight sm:text-6xl sm:leading-[1.08] lg:text-7xl">
                Premium Research Peptides.
                <br />
                Built for Research.
                <br />
                Backed by Documentation.
              </h1>

              <p className="mt-5 max-w-2xl text-[15px] leading-6 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
                Research compounds supported by organized product information,
                supplier-provided laboratory documentation, lot records, and
                scientific literature.
              </p>

              <div
                id="about"
                className="mt-7 max-w-2xl border-t border-slate-800 pt-6 sm:mt-10 sm:pt-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-400 sm:text-sm sm:tracking-[0.3em]">
                  About Avios
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Documentation-first research products.
                </h2>

                <p className="mt-4 leading-7 text-slate-400 sm:leading-8">
                  Avios Research is designed around clear product identification,
                  accessible documentation, laboratory report verification, and
                  responsible presentation of scientific information.
                </p>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden rounded-2xl sm:min-h-[440px] sm:rounded-3xl lg:min-h-[560px]">
              <div
                className="absolute inset-0 bg-[length:135%] bg-[position:center_55%] bg-no-repeat sm:bg-[length:160%] lg:bg-[length:190%]"
                style={{
                  backgroundImage: 'url("/avios-motsc-hero-v2.png")',
                }}
              />
            </div>
          </div>
        </div>
      </section>
