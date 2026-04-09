const faqs = [
  {
    q: "Are you affiliated with a stock broker?",
    a: "No. Services are provided as a SEBI-registered Research Analyst without receiving brokerage or commission from intermediaries for recommendations.",
  },
  {
    q: "Do you guarantee returns?",
    a: "No. Markets involve risk. Materials are for information and education; they are not promises of performance.",
  },
  {
    q: "How is research shared with clients?",
    a: "Distribution follows the terms agreed with each client and applicable regulations. Forwarding research outside those terms is not permitted.",
  },
  {
    q: "Is educational content the same as research?",
    a: "Educational sessions are distinct from research reports. Educational material should not be read as a recommendation unless explicitly labeled and distributed as such.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section section--alt">
      <div className="section__inner">
        <p className="section__eyebrow">Answers</p>
        <h2 className="section__title">FAQ</h2>
        <p className="section__intro">
          Quick answers to common questions. For specifics on engagement and
          compliance, phone or email both work.
        </p>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-item__body">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
