import { analyst } from "../data";

/** Decorative “terminal” line — not live market data. */
export function HeroTicker() {
  return (
    <div className="hero-ticker">
      <div className="hero-ticker__bar">
        <span className="hero-ticker__label">Watchlist</span>
        <span className="hero-ticker__sep" aria-hidden>
          ·
        </span>
        <span className="hero-ticker__item">Nifty ecosystem</span>
        <span className="hero-ticker__sep" aria-hidden>
          ·
        </span>
        <span className="hero-ticker__item">Mid &amp; small cap</span>
        <span className="hero-ticker__sep" aria-hidden>
          ·
        </span>
        <span className="hero-ticker__item hero-ticker__item--accent">
          RA {analyst.registrationNo}
        </span>
      </div>
      <p className="hero-ticker__disclaimer">
        Illustrative labels only — not live prices or trading signals.
      </p>
    </div>
  );
}
