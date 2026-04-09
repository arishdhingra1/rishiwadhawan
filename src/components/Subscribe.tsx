import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  }

  return (
    <section className="section section--alt" aria-labelledby="subscribe-heading">
      <div className="section__inner">
        <div className="subscribe-block">
          <p className="section__eyebrow">Stay informed</p>
          <h2 id="subscribe-heading" className="section__title">
            Subscribe for updates
          </h2>
          <p className="section__intro" style={{ marginBottom: "1.25rem" }}>
            For individuals only—occasional notes on process, markets, and
            compliance. No spam. This form is a demo; in production you’d confirm
            via the official email.
          </p>
          {done ? (
            <p style={{ color: "var(--accent)", fontWeight: 600, margin: 0 }}>
              Thanks—you’re subscribed as an individual. We’ll reach out from the
              official email address.
            </p>
          ) : (
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <label htmlFor="subscribe-email" className="sr-only">
                Your email
              </label>
              <input
                id="subscribe-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn--primary">
                Join
              </button>
            </form>
          )}
          <p className="form-hint">
            Individual subscribers may receive emails about research services and
            compliance notices where applicable. This list is not for
            institutions or corporate entities.
          </p>
        </div>
      </div>
    </section>
  );
}
