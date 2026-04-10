import { useCallback, useState } from "react";
import { analyst } from "../data";

const RISHI_FIRST =
  analyst.contactPerson.split(/\s+/)[0] ?? "Rishi";

type EmailDraft = {
  fullText: string;
  mailtoHref: string;
};

function buildEmailDraft(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): EmailDraft {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const fullText = [
    `Hi ${RISHI_FIRST},`,
    "",
    "I used the contact form on your website—here’s everything in one place so you can reply when it suits you.",
    "",
    "──────────",
    `Subject: ${input.subject.trim()}`,
    "──────────",
    "",
    input.message.trim(),
    "",
    "—",
    `${input.name.trim()}`,
    input.email.trim(),
    "",
    origin
      ? `(Sent via the contact form on ${origin})`
      : "(Sent via your website contact form)",
  ].join("\n");

  const subject = encodeURIComponent(input.subject.trim());
  const body = encodeURIComponent(fullText);
  const base = `mailto:${analyst.email}?subject=${subject}`;
  const withBody = `${base}&body=${body}`;
  const mailtoHref =
    withBody.length > 1900 ? base : withBody;

  return { fullText, mailtoHref };
}

export function ContactSection() {
  const [draft, setDraft] = useState<EmailDraft | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "");
    const email = String(fd.get("email") ?? "");
    const subject = String(fd.get("subject") ?? "");
    const message = String(fd.get("message") ?? "");
    setDraft(buildEmailDraft({ name, email, subject, message }));
    setCopied(false);
    form.reset();
  }, []);

  const copyDraft = useCallback(async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.fullText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }, [draft]);

  const resetForm = useCallback(() => {
    setDraft(null);
    setCopied(false);
  }, []);

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
            {draft ? (
              <div className="contact-success" aria-live="polite">
                <p className="contact-success__eyebrow">You’re one paste away</p>
                <p className="contact-success__title">
                  Your note to {RISHI_FIRST} is ready
                </p>
                <p className="contact-success__lead">
                  This form doesn’t send automatically—so nothing gets lost in the
                  void. Copy the draft below, drop it into an email to{" "}
                  <a href={`mailto:${analyst.email}`}>{analyst.email}</a>, and
                  you’re done. Prefer shortcuts?{" "}
                  <a href={draft.mailtoHref}>Open your mail app</a>{" "}
                  {draft.mailtoHref.includes("&body=")
                    ? "with this text prefilled"
                    : "with the subject line set (paste the body from below if needed)"}
                  .
                </p>
                <div className="contact-draft">
                  <div className="contact-draft__label">
                    <span>Copy this entire block</span>
                    <button
                      type="button"
                      className="btn btn--primary contact-draft__copy"
                      onClick={copyDraft}
                    >
                      {copied ? "Copied — go send it!" : "Copy to clipboard"}
                    </button>
                  </div>
                  <textarea
                    className="contact-draft__textarea"
                    readOnly
                    value={draft.fullText}
                    rows={14}
                    spellCheck={false}
                  />
                </div>
                <p className="contact-success__hint">
                  Tip: Address it to <strong>{RISHI_FIRST}</strong>, hit send,
                  and your message is on its way—no forms, no middlemen.
                </p>
                <button
                  type="button"
                  className="btn btn--ghost contact-success__again"
                  onClick={resetForm}
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <p className="contact-form__note">
                  Fill in the fields below. On submit, we’ll give you a ready-made
                  email to copy to {RISHI_FIRST}—nothing is transmitted from this
                  page until you send mail yourself.
                </p>
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
                  Prepare email for {RISHI_FIRST}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
