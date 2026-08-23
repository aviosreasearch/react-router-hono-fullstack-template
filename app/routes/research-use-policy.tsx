
import { Link } from "react-router";

export default function ResearchUsePolicy() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        color: "#0f172a",
        padding: "48px 20px 72px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginBottom: "28px",
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          ← Back to Avios Research
        </Link>

        <div style={{ marginBottom: "32px" }}>
          <p
            style={{
              margin: "0 0 8px",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#2563eb",
            }}
          >
            Avios Research
          </p>

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.05,
            }}
          >
            Research Use Policy
          </h1>

          <p style={{ margin: 0, color: "#64748b" }}>
            Last updated: August 23, 2026
          </p>
        </div>

        <section
          style={{
            background: "#0f172a",
            color: "#ffffff",
            padding: "22px",
            borderRadius: "14px",
            marginBottom: "34px",
            textAlign: "center",
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "18px",
              letterSpacing: "0.04em",
            }}
          >
            FOR RESEARCH USE ONLY
          </strong>

          <span
            style={{
              display: "block",
              marginTop: "5px",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            NOT FOR HUMAN CONSUMPTION
          </span>
        </section>

        <PolicySection title="Research Use Only">
          <p>
            All products offered by Avios Research are supplied exclusively for
            legitimate laboratory, analytical, and scientific research purposes.
          </p>

          <p>
            Products are not intended for human or veterinary consumption,
            administration, diagnosis, treatment, prevention, or management of
            any disease or medical condition.
          </p>

          <p>
            Products are not intended for use as drugs, foods, dietary
            supplements, cosmetics, medical treatments, or household products.
          </p>
        </PolicySection>

        <PolicySection title="Purchaser Responsibility">
          <p>By purchasing from Avios Research, the purchaser agrees that:</p>

          <ul>
            <li>
              Products will be used solely for legitimate laboratory,
              analytical, or scientific research.
            </li>
            <li>
              Products will not be used for human consumption,
              self-administration, or veterinary administration.
            </li>
            <li>
              Products will not be used for diagnosis, treatment, prevention,
              or management of any medical condition.
            </li>
            <li>
              The purchaser possesses the knowledge, facilities, equipment, and
              training appropriate for handling research materials.
            </li>
            <li>
              The purchaser is responsible for complying with all applicable
              federal, state, and local laws and regulations.
            </li>
          </ul>
        </PolicySection>

        <PolicySection title="No Medical or Clinical Advice">
          <p>
            Information provided by Avios Research, including product
            descriptions, analytical reports, certificates of analysis,
            research summaries, and website materials, is provided solely for
            scientific and research-reference purposes.
          </p>

          <p>
            Nothing provided by Avios Research constitutes medical advice,
            prescribing information, dosage guidance, treatment recommendations,
            or instructions for human use.
          </p>

          <p>
            Avios Research does not provide guidance concerning
            self-administration, human dosing, injection, therapeutic use, or
            treatment protocols.
          </p>
        </PolicySection>

        <PolicySection title="Product Information and Analytical Testing">
          <p>
            Product descriptions, purity information, certificates of analysis,
            analytical results, and related documentation are provided to
            identify and characterize research materials.
          </p>

          <p>
            Such information does not constitute a representation that any
            product is approved, safe, or appropriate for human or veterinary
            use.
          </p>

          <p>
            Where third-party analytical testing is provided, results apply only
            to the material or sample associated with the applicable report.
          </p>
        </PolicySection>

        <PolicySection title="Prohibited Uses">
          <ul>
            <li>Human consumption or administration</li>
            <li>Veterinary treatment or administration</li>
            <li>Self-experimentation</li>
            <li>Medical, therapeutic, or diagnostic purposes</li>
            <li>Compounding for human or veterinary use</li>
            <li>
              Resale or representation as a drug, dietary supplement, food,
              cosmetic, or therapeutic product
            </li>
            <li>Any unlawful purpose</li>
          </ul>
        </PolicySection>

        <PolicySection title="Order Refusal and Cancellation">
          <p>
            Avios Research reserves the right to refuse, cancel, or limit any
            order when we reasonably believe that the intended use may be
            inconsistent with this Research Use Policy, applicable law, or the
            research-only nature of our products.
          </p>

          <p>
            Avios Research may also decline to provide assistance or information
            relating to human administration, dosage, treatment, or other
            non-research applications.
          </p>
        </PolicySection>

        <PolicySection title="Acceptance of This Policy">
          <p>
            By accessing this website or purchasing products from Avios
            Research, the purchaser acknowledges that they have read,
            understood, and agreed to this Research Use Policy.
          </p>

          <p>
            Purchasers are solely responsible for ensuring that their
            acquisition and use of research materials are lawful and appropriate
            within their jurisdiction.
          </p>
        </PolicySection>

        <div
          style={{
            marginTop: "40px",
            paddingTop: "26px",
            borderTop: "1px solid #e2e8f0",
            textAlign: "center",
          }}
        >
          <strong style={{ fontSize: "16px" }}>
            FOR RESEARCH USE ONLY — NOT FOR HUMAN CONSUMPTION
          </strong>
        </div>
      </div>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "32px" }}>
      <h2
        style={{
          margin: "0 0 14px",
          fontSize: "22px",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>

      <div
        style={{
          color: "#475569",
          lineHeight: 1.75,
          fontSize: "16px",
        }}
      >
        {children}
      </div>
    </section>
  );
}
