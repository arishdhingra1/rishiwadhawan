import { Link } from "react-router-dom";
import { analyst, navItems, socialLinks } from "../data";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} {analyst.name}. All rights reserved.
          </p>
          <p className="site-footer__contact-line">
            <a href={`tel:${analyst.phoneTel}`}>{analyst.phone}</a>
            {" · "}
            <a href={`mailto:${analyst.email}`}>{analyst.email}</a>
            {" · "}
            SEBI RA {analyst.registrationNo}
          </p>
          <ul className="footer-social" aria-label="Social media">
            {socialLinks.map(({ id, label, href }) => {
              const isPlaceholder = href === "#";
              return (
                <li key={id}>
                  <a
                    href={href}
                    className="footer-social__link"
                    aria-label={
                      isPlaceholder ? `${label} — link coming soon` : label
                    }
                    title={
                      isPlaceholder ? `${label} — add your profile URL in data` : label
                    }
                    onClick={
                      isPlaceholder
                        ? (e) => {
                            e.preventDefault();
                          }
                        : undefined
                    }
                    {...(!isPlaceholder && href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <SocialIcon id={id} className="footer-social__icon" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <nav className="footer-nav" aria-label="Quick links">
          {navItems.map(({ label, to }) => (
            <Link key={label} to={to}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
