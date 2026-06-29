import { useState } from "react";
import { Link } from "react-router-dom";
import { analyst, PAYMENT_CHECKOUT_URL, PAYMENT_UPI_VPA } from "../data";

const UPI_DEEP_LINK = `upi://pay?pa=${encodeURIComponent(
  PAYMENT_UPI_VPA,
)}&pn=${encodeURIComponent(analyst.name)}&cu=INR`;

export function PaymentPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PAYMENT_UPI_VPA);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main id="main-content" className="payment-page">
      <div className="payment-page__shell">
        <div className="payment-page__glow" aria-hidden />
        <section className="payment-page__panel" aria-labelledby="payment-heading">
          <p className="payment-page__kicker">Secure checkout</p>
          <h1 id="payment-heading" className="payment-page__title">
            Complete your payment
          </h1>
          <p className="payment-page__subtitle">
            You’ll be taken to our payment partner in a new tab. Use the same
            email and phone you share with us so we can match your payment to
            your account without delay.
          </p>

          <div className="payment-page__card">
            <div className="payment-page__card-row">
              <span className="payment-page__card-label">Research services</span>
              <span className="payment-page__card-pill">Rishi Wadhawan · RA</span>
            </div>
            <p className="payment-page__card-note">
              SEBI registration <strong>{analyst.registrationNo}</strong>. Fees are
              for research and information services only—not investment advice
              tailored to your personal situation. Read our{" "}
              <Link to="/legal#disclaimer">disclaimer</Link> before you pay.
            </p>
            <a
              className="btn btn--primary payment-page__cta"
              href={PAYMENT_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue to payment
              <span className="payment-page__cta-arrow" aria-hidden>
                ↗
              </span>
            </a>
            <p className="payment-page__fine">
              Opens Cosmofeed (external). If nothing opens, copy the link from
              your browser bar or contact us at{" "}
              <a href={`mailto:${analyst.email}`}>{analyst.email}</a>.
            </p>
          </div>

          <div className="payment-page__divider" role="separator">
            <span>or pay directly via UPI</span>
          </div>

          <div className="payment-page__card payment-page__card--upi">
            <div className="payment-page__card-row">
              <span className="payment-page__card-label">UPI / VPA</span>
              <span className="payment-page__card-pill payment-page__card-pill--upi">
                Instant · No fees
              </span>
            </div>

            <div className="payment-page__upi-id">
              <span className="payment-page__upi-mark" aria-hidden>
                ⚡
              </span>
              <code className="payment-page__upi-vpa">{PAYMENT_UPI_VPA}</code>
              <button
                type="button"
                className="payment-page__upi-copy"
                onClick={handleCopy}
                aria-label={`Copy UPI ID ${PAYMENT_UPI_VPA}`}
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>

            <p className="payment-page__upi-apps">
              Works with any UPI app — GPay, PhonePe, Paytm, BHIM &amp; more.
            </p>

            <a
              className="btn btn--primary payment-page__cta payment-page__cta--upi"
              href={UPI_DEEP_LINK}
            >
              Open UPI app to pay
              <span className="payment-page__cta-arrow" aria-hidden>
                ↗
              </span>
            </a>

            <p className="payment-page__fine">
              On a phone, the button opens your default UPI app with our details
              pre-filled. On desktop, copy the UPI ID above and pay from your
              phone. Always confirm the name shows{" "}
              <strong>{analyst.name}</strong> before you approve, and keep the
              transaction ID for your records.
            </p>
          </div>

          <ul className="payment-page__trust">
            <li>
              <span className="payment-page__trust-icon" aria-hidden>
                ✓
              </span>
              Encrypted checkout on the provider’s page
            </li>
            <li>
              <span className="payment-page__trust-icon" aria-hidden>
                ✓
              </span>
              Keep the receipt or transaction ID for your records
            </li>
            <li>
              <span className="payment-page__trust-icon" aria-hidden>
                ✓
              </span>
              Refund rules are explained in our{" "}
              <Link to="/refund-policy">refund policy</Link>
            </li>
          </ul>

          <div className="payment-page__footer-links">
            <Link to="/refund-policy">Refund policy</Link>
            <span aria-hidden className="payment-page__sep">
              ·
            </span>
            <Link to="/legal">Legal &amp; grievance</Link>
            <span aria-hidden className="payment-page__sep">
              ·
            </span>
            <Link to="/#contact">Contact</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
