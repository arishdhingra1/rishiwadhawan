/**
 * Trading-desk mood: orbs + soft grain + faint sparkline (decorative).
 */
export function HeroAtmosphere() {
  return (
    <div className="hero__atmosphere" aria-hidden>
      <div className="hero__orb hero__orb--primary" />
      <div className="hero__orb hero__orb--secondary" />
      <div className="hero__orb hero__orb--accent" />
      <svg
        className="hero__spark"
        viewBox="0 0 900 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 85 L 80 72 L 140 88 L 220 55 L 300 70 L 380 42 L 460 58 L 540 35 L 620 48 L 700 28 L 780 40 L 860 22 L 900 18"
          fill="none"
          stroke="url(#heroSparkGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />
        <defs>
          <linearGradient id="heroSparkGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0f766e" />
            <stop offset="50%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="hero__grain" />
    </div>
  );
}
