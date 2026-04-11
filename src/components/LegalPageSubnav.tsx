import { Link } from "react-router-dom";

const SEBI_CONTACT_URL = "https://www.sebi.gov.in/contact-us.html";

const links: { label: string; to: string; external?: boolean }[] = [
  { label: "Investor Charter", to: "/legal#investor-charter" },
  { label: "Redressal grievances", to: "/legal#grievance" },
  { label: "Standard disclosure", to: "/legal#complaint-data" },
  { label: "Payment", to: "/payment" },
  { label: "Refund policy", to: "/refund-policy" },
  { label: "SEBI address", to: SEBI_CONTACT_URL, external: true },
  { label: "Terms & conditions", to: "/legal#disclaimer" },
];

export function LegalPageSubnav() {
  return (
    <nav className="legal-subnav" aria-label="Legal sections">
      <ul className="legal-subnav__list">
        {links.map(({ label, to, external }) => (
          <li key={label}>
            {external ? (
              <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className="legal-subnav__link"
              >
                {label}
              </a>
            ) : (
              <Link className="legal-subnav__link" to={to}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
