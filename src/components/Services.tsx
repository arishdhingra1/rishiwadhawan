const services = [
  {
    title: "Research & flow",
    body: "Thesis-led notes on names and sectors—written like a desk memo: assumptions, risks, and what would change our view.",
    icon: "▣",
  },
  {
    title: "Risk controls",
    body: "Position sizing and scenario language that matches how traders think—without turning research into a tip line.",
    icon: "◈",
  },
  {
    title: "Market literacy",
    body: "Walkthroughs on filings, multiples, and how order books and liquidity shape price—education, not hype.",
    icon: "◇",
  },
];

export function Services() {
  return (
    <section id="services" className="section section--alt section--trading">
      <div className="section__inner">
        <p className="section__eyebrow">The desk</p>
        <h2 className="section__title">What the stack covers</h2>
        <p className="section__intro">
          Built for people who watch bids and offers all day but still want
          research that respects SEBI lines and their own risk limits.
        </p>
        <div className="service-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card">
              <div className="service-card__icon" aria-hidden>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
