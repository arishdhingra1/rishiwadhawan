import { Link } from "react-router-dom";
import { analyst, navItems } from "../data";
import { SocialLinksList } from "./SocialLinksList";

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
          <SocialLinksList variant="footer" />
        </div>
        <nav className="footer-nav" aria-label="Quick links">
          {navItems.map(({ label, to }) => (
            <Link key={label} to={to}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="site-footer__credit">
        Powered by{" "}
        <a
          href="https://mineledgerai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mineledgerai.com
        </a>
      </p>
    </footer>
  );
}
