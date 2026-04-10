import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data";
import { SocialLinksList } from "./SocialLinksList";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand__name">Rishi Wadhawan</span>
            <span className="brand__tag">SEBI RESEARCH ANALYST</span>
          </Link>
          <nav className="nav-desktop" aria-label="Primary">
            {navItems.map(({ label, to }) => (
              <Link
                key={label}
                className={
                  label.length > 22
                    ? "nav-desktop__link nav-desktop__link--long"
                    : "nav-desktop__link"
                }
                to={to}
                title={label}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="site-header__tail">
            <div className="site-header__social site-header__social--desktop">
              <SocialLinksList variant="header" ariaLabel="Social links" />
            </div>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div
          id="mobile-nav"
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          {navItems.map(({ label, to }) => (
            <Link key={label} to={to} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="mobile-drawer__social-block">
            <p className="mobile-drawer__social-label">Follow</p>
            <SocialLinksList
              variant="footer"
              className="mobile-drawer__social-icons"
              ariaLabel="Social media"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
