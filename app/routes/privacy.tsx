
import { Link } from "react-router";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <Link
            to="/"
            className="text-sm font-medium text-sky-400 transition hover:text-sky-300"
          >
            ← Back to Avios Research
          </Link>
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Avios Research
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Last updated: August 24, 2026
          </p>

          <div className="mt-10 space-y-9 text-sm leading-7 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Introduction
              </h2>
              <p className="mt-3">
                Avios Research respects your privacy. This Privacy Policy
                explains the types of information we may collect when you visit
                our website, place an order, contact us, or otherwise interact
                with our services, and how that information may be used.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We may collect information you provide directly to us,
                including your name, email address, billing and shipping
                information, order details, and communications with customer
                support.
              </p>

              <p className="mt-3">
                We may also collect limited technical information associated
                with your use of the website, such as browser type, device
                information, IP address, referring pages, and website activity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Payment Information
              </h2>
              <p className="mt-3">
                Payments may be processed by third-party payment service
                providers. Avios Research does not intend to directly store
                complete payment card numbers or card security codes on its
                own servers. Payment providers may collect and process payment
                information according to their own privacy and security
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. How We Use Information
              </h2>
              <p className="mt-3">
                Information may be used to process and fulfill orders, provide
                customer support, communicate about transactions, maintain
                website security, prevent fraud or misuse, improve our
                services, maintain required business records, and comply with
                applicable legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Sharing of Information
              </h2>
              <p className="mt-3">
                We may share information with service providers when reasonably
                necessary to operate our business, including payment
                processors, shipping carriers, website infrastructure
                providers, analytics providers, and other vendors performing
                services on our behalf.
              </p>

              <p className="mt-3">
                We may also disclose information when required by law or when
                reasonably necessary to protect the rights, safety, security,
                or property of Avios Research, our customers, or others.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Cookies and Similar Technologies
              </h2>
              <p className="mt-3">
                Our website and service providers may use cookies or similar
                technologies to maintain website functionality, remember
                preferences, understand website performance, provide security,
                and support other legitimate operational purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                7. Data Security
              </h2>
              <p className="mt-3">
                We use reasonable administrative and technical measures
                intended to protect information under our control. However, no
                internet transmission or electronic storage system can be
                guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                8. Data Retention
              </h2>
              <p className="mt-3">
                We may retain information for as long as reasonably necessary
                to fulfill the purposes described in this policy, maintain
                business and transaction records, resolve disputes, prevent
                fraud, and satisfy applicable legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                9. Your Privacy Rights
              </h2>
              <p className="mt-3">
                Depending on where you reside, applicable law may provide
                certain rights regarding your personal information. You may
                contact us to request information about personal information
                associated with you or to submit an applicable privacy request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                10. Third-Party Services
              </h2>
              <p className="mt-3">
                Our website may interact with or link to third-party services.
                Their privacy practices are governed by their own policies, and
                Avios Research is not responsible for the privacy practices of
                unaffiliated third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                11. Children's Privacy
              </h2>
              <p className="mt-3">
                Our services are not directed to children, and we do not
                knowingly collect personal information from children through
                this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                12. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy periodically. Any revised
                policy will be posted on this page with an updated revision
                date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                13. Contact Us
              </h2>
              <p className="mt-3">
                Questions or privacy-related requests may be sent to{" "}
                <span className="font-medium text-sky-400">
                  support@aviospeptides.com
                </span>
                .
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6">
            <Link
              to="/contact"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Contact Avios Research →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
