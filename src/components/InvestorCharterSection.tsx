/**
 * Investor charter — links to the approved PDF served from /public.
 */
const INVESTOR_CHARTER_URL = "/investor-charter.pdf";

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
            Investor Charter
          </a>
        </p>
      </div>
    </section>
  );
}
