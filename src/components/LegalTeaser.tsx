import { Link } from "react-router-dom";

export function LegalTeaser() {
  return (
    <section id="legal" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Legal</p>
        <h2 className="section__title">Disclaimer & grievance</h2>
        <p className="section__intro">
          The complete disclaimer, user agreement terms, and the grievance redressal /
          escalation matrix (with designation-wise contacts in a table) are on the
          Legal page—structured like typical SEBI research analyst public disclosures.
        </p>
        <div className="legal-teaser__actions">
          <Link className="btn btn--primary" to="/legal#complaint-data">
            Complaint data &amp; disclosure
          </Link>
          <Link className="btn btn--ghost" to="/legal#grievance">
            Grievance matrix
          </Link>
          <Link className="btn btn--ghost" to="/legal#disclaimer">
            Full disclaimer
          </Link>
        </div>
      </div>
    </section>
  );
}
