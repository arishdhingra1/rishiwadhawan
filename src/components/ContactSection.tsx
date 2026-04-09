import { useState } from "react";
import { analyst } from "../data";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">Reach out</p>
        <h2 className="section__title">Contact</h2>
        <p className="section__intro">
          Reach out by phone or email—whichever is convenient.
        </p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Direct details</h3>
            <ul className="contact-list">
              <li>
                <strong>Phone</strong>
                <span>
                  <a href={`tel:${analyst.phoneTel}`}>{analyst.phone}</a>
                </span>
              </li>
              <li>
                <strong>Email</strong>
                <span>
                  <a href={`mailto:${analyst.email}`}>{analyst.email}</a>
                </span>
              </li>
              <li>
                <strong>Address</strong>
                <span>{analyst.address}</span>
              </li>
              <li>
                <strong>SEBI RA</strong>
                <span>{analyst.registrationNo}</span>
              </li>
            </ul>
          </div>
          <div className="contact-card">
            <h3>Send a message</h3>
            {sent ? (
              <p style={{ color: "var(--accent)", fontWeight: 600, margin: 0 }}>
                Thanks for your message. This demo form does not transmit data;
                please email {analyst.email} directly.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input name="name" type="text" required autoComplete="name" />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </label>
                <label>
                  Subject
                  <input name="subject" type="text" required />
                </label>
                <label>
                  Message
                  <textarea name="message" required />
                </label>
                <button type="submit" className="btn btn--primary">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
