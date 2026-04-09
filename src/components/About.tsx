import { analyst } from "../data";

export function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Profile</p>
        <h2 className="section__title">About</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              <strong style={{ color: "var(--text)" }}>{analyst.name}</strong> is
              a SEBI-registered Research Analyst committed to disciplined,
              document-backed work on Indian equities. The focus is on helping
              clients interpret information—not on promising outcomes markets
              cannot guarantee.
            </p>
            <p>
              Engagements emphasize sound reasoning, clear assumptions, and
              alignment with the regulatory framework governing research analysts
              in India. There is no brokerage affiliation; recommendations are
              not incentives from third-party intermediaries.
            </p>
            <p>
              Whether you are building a long-term portfolio or sharpening your
              understanding of how value is debated in public markets, the
              objective is the same: clarity, integrity, and professional
              distance from hype.
            </p>
          </div>
          <div className="about-details" aria-labelledby="about-details-heading">
            <p id="about-details-heading" className="about-details__heading">
              Registration & contact
            </p>
            <dl className="about-details__list">
              <div>
                <dt>Name</dt>
                <dd>{analyst.name}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{analyst.title}</dd>
              </div>
              <div>
                <dt>SEBI registration no.</dt>
                <dd>{analyst.registrationNo}</dd>
              </div>
              <div>
                <dt>Validity</dt>
                <dd>
                  {analyst.validity.start} — {analyst.validity.end}
                </dd>
              </div>
              <div>
                <dt>Contact person</dt>
                <dd>{analyst.contactPerson}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${analyst.email}`}>{analyst.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${analyst.phoneTel}`}>{analyst.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Registered office</dt>
                <dd>{analyst.address}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
