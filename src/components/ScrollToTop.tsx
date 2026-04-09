import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** React Router does not scroll to top on navigation; reset manually. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ""));
    let cancelled = false;

    const go = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    go();
    const t = window.setTimeout(go, 100);

    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [pathname, hash]);

  return null;
}
