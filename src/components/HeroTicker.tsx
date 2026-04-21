import { useEffect, useRef } from "react";

const TV_SCRIPT =
  "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

/**
 * Many NSE *index* symbols fail in TradingView free widgets (red !)—ETFs often work.
 * `description` drives the tape label while `proName` is the tradable instrument.
 */
const TICKER_CONFIG = {
  symbols: [
    { description: "Sensex", proName: "BSE:SENSEX" },
    { description: "Nifty 50", proName: "NSE:NIFTYBEES" },
    { description: "Bank Nifty", proName: "NSE:BANKBEES" },
    { description: "USD / INR", proName: "FX_IDC:USDINR" },
    { description: "Gold ETF", proName: "NSE:GOLDBEES" },
    { description: "Silver ETF", proName: "NSE:SILVERBEES" },
  ],
  showSymbolLogo: true,
  colorTheme: "light",
  isTransparent: true,
  displayMode: "regular",
  locale: "en",
} as const;

/** TradingView ticker tape embedded above the hero. */
export function HeroTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.replaceChildren();

    const mount = document.createElement("div");
    mount.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.src = TV_SCRIPT;
    script.type = "text/javascript";
    script.async = true;
    script.textContent = JSON.stringify(TICKER_CONFIG);

    container.append(mount, script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="hero-ticker hero-ticker--banner">
      <div className="hero-ticker__tv-wrap hero-ticker__tv-wrap--fullbleed">
        <div
          ref={containerRef}
          className="tradingview-widget-container hero-ticker__tv"
          aria-label="TradingView market ticker"
        />
      </div>
    </div>
  );
}
