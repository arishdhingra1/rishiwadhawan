/**
 * Investor charter — links to approved document on Google Docs.
 */
const INVESTOR_CHARTER_URL =
  "https://docs.google.com/document/d/1_oJt6IInKQnOA2eLtPoSLP2r-m3my_h7GSebIbHvhFU";

export function InvestorCharterSection() {
  return (
    <section
      id="investor-charter"
      className="section section--alt legal-page__charter"
      aria-labelledby="investor-charter-heading"
    >
      <div className="section__inner">
        <p className="section__eyebrow">Investor charter</p>
        <h2 id="investor-charter-heading" className="section__title">
          Investor charter
        </h2>
        <p className="section__intro legal-page__placeholder">
          The investor charter is maintained in line with SEBI requirements. Open the
          full document below. For grievance escalation and complaint statistics, use
          the other sections on this page.
        </p>
        <p className="legal-page__charter-link-wrap">
          <a
            className="btn btn--primary"
            href={INVESTOR_CHARTER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open investor charter
          </a>
        </p>
      </div>
    </section>
  );
}
