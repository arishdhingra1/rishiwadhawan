import { Link } from "react-router-dom";
import { analyst } from "../data";

export function RefundPolicyPage() {
  return (
    <main id="main-content" className="legal-page policy-page">
      <section
        className="section policy-page__hero"
        aria-labelledby="refund-heading"
      >
        <div className="section__inner policy-page__inner">
          <p className="section__eyebrow">Policies</p>
          <h1 id="refund-heading" className="legal-page__title">
            Refund policy
          </h1>
          <p className="section__intro policy-page__lead">
            How refunds and subscription cancellations are handled for research
            services, in line with common SEBI-registered research analyst practice.
          </p>

          <div className="legal-box legal-box--full policy-page__box">
            <ul className="policy-page__list">
              <li>
                All sales are final for fees relating to a period of service{" "}
                <strong>already availed</strong>. We do not refund amounts for
                periods during which you have already received or had access to
                the service. Dissatisfaction with the quality of research or
                recommendations during a paid period does not, by itself,
                entitle you to a refund or compensation for that period.
              </li>
              <li>
                <strong>As per SEBI guidelines</strong>, if you request to cancel
                an ongoing subscription, any refund is limited to the{" "}
                <strong>unused portion</strong> of the subscription term. The
                refund is calculated on a <strong>pro-rata</strong> basis after
                deducting charges attributable to services already availed,
                applicable taxes, and reasonable administrative fees, as
                applicable.
              </li>
              <li>
                No refund is provided for any period during which services were
                already delivered or accessible, regardless of investment
                outcomes or whether individual recommendations met your
                expectations.
              </li>
              <li>
                Investments in securities are subject to market risks. Profits or
                losses arising from decisions you make using research or
                information shared here are solely your responsibility.
              </li>
            </ul>

            <p className="policy-page__contact-intro">
              Questions about this policy or your subscription?
            </p>
            <p className="policy-page__contact">
              <strong>Phone:</strong>{" "}
              <a href={`tel:${analyst.phoneTel}`}>{analyst.phone}</a>
              <br />
              <strong>Email:</strong>{" "}
              <a href={`mailto:${analyst.email}`}>{analyst.email}</a>
              <br />
              <span className="policy-page__hours">
                {analyst.workingHours} · {analyst.jurisdiction}
              </span>
            </p>
          </div>

          <nav className="policy-page__nav" aria-label="Related pages">
            <Link className="btn btn--primary" to="/payment">
              Make a payment
            </Link>
            <Link className="btn btn--ghost" to="/legal">
              Legal &amp; disclosures
            </Link>
          </nav>
        </div>
      </section>
    </main>
  );
}
