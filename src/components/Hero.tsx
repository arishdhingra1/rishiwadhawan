import { Link } from "react-router-dom";
import { analyst } from "../data";
import { HeroAtmosphere } from "./HeroAtmosphere";
import { SocialLinksList } from "./SocialLinksList";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden />
      <HeroAtmosphere />
      <div className="hero__grid" aria-hidden />
      <div className="hero__inner">
        <div className="hero__copy">
          <div className="hero__badge-row">
            <span className="hero__badge">
              <span className="hero__badge-dot" aria-hidden />
              SEBI registered analyst
            </span>
          </div>
          <h1 className="hero__headline">
            <span className="hero__line">Independent equity</span>{" "}
            <span className="hero__line hero__line--accent">research</span>
          </h1>
          <p className="hero__subline">Grounded in rigor—you can read with confidence.</p>
          <p className="hero__lead">
            Same discipline as a trading desk—research notes, risk context, and
            disclosures that hold up when markets move fast.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/#about">
              About
            </Link>
            <Link className="btn btn--ghost" to="/legal#disclaimer">
              Risk &amp; legal
            </Link>
          </div>
          <div className="hero__social-row">
            <span className="hero__social-label">Follow</span>
            <SocialLinksList variant="hero" />
          </div>
        </div>
        <aside id="sebi" className="hero__panel" aria-label="Registration summary">
          <div className="hero__panel-head">
            <span className="hero__panel-kicker">Terminal · compliance</span>
            <p className="hero__panel-title">SEBI research analyst</p>
          </div>
          <div className="hero__stat-grid">
            <div className="hero__stat">
              <div className="hero__stat-label">Operator</div>
              <div className="hero__stat-value">{analyst.name}</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-label">Reg ID</div>
              <div className="hero__stat-value hero__stat-value--mono">
                {analyst.registrationNo}
              </div>
            </div>
            <div className="hero__stat hero__stat--full">
              <div className="hero__stat-label">Valid through</div>
              <div className="hero__stat-value hero__stat-value--sm">
                {analyst.validity.start} — {analyst.validity.end}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
