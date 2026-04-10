import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ComplaintDataTables } from "../components/ComplaintDataTables";
import { GrievanceMatrix } from "../components/GrievanceMatrix";
import { FullDisclaimer } from "../components/FullDisclaimer";
import { InvestorCharterSection } from "../components/InvestorCharterSection";
import { LegalPageSubnav } from "../components/LegalPageSubnav";

export function LegalPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash]);

  return (
    <main id="main-content" className="legal-page">
      <section
        id="complaint-data"
        className="section legal-page__complaints"
        aria-labelledby="complaint-data-heading"
      >
        <div className="section__inner">
          <p className="section__eyebrow">Standard disclosure</p>
          <h1 id="complaint-data-heading" className="legal-page__title">
            Complaint data &amp; disclosures
          </h1>
          <p className="section__intro">
            Monthly and trend data as typically published by SEBI-registered Research
            Analysts. Figures below use the same structure as the reference template;
            replace with your live filing numbers when you update each month.
          </p>
          <ComplaintDataTables />
        </div>
      </section>

      <InvestorCharterSection />

      <section
        id="grievance"
        className="section legal-page__grievance"
        aria-labelledby="grievance-heading"
      >
        <div className="section__inner">
          <p className="section__eyebrow">Redressal grievances</p>
          <h2 id="grievance-heading" className="legal-page__title">
            Grievance redressal / escalation matrix
          </h2>
          <p className="section__intro">
            Details of designated persons for escalation and grievance handling, as
            commonly published on research analyst websites.
          </p>
          <GrievanceMatrix />
        </div>
      </section>

      <section id="disclaimer" className="section section--alt legal-page__disclaimer">
        <div className="section__inner">
          <p className="section__eyebrow">Terms</p>
          <h2 className="section__title">Disclaimer &amp; terms of use</h2>
          <p className="section__intro">
            Please read the following carefully. By using this website you agree to
            these terms.
          </p>
          <div className="legal-box legal-box--full">
            <FullDisclaimer />
          </div>
        </div>
      </section>

      <LegalPageSubnav />
    </main>
  );
}
