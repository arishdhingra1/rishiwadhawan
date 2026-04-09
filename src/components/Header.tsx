import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../data";

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
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand__name">Rishi Wadhawan</span>
            <span className="brand__tag">Equity desk · SEBI RA</span>
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
        </div>
      ) : null}
    </>
  );
}
