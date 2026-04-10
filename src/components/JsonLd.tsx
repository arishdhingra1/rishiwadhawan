import { useLayoutEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { analyst, siteUrl, socialLinks } from "../data";
import { SEO_DEFAULT, seoForPath } from "../seoConfig";

/**
 * schema.org JSON-LD in <head> (Person + WebSite + WebPage) for rich results.
 */
export function JsonLd() {
  const { pathname } = useLocation();

  const payload = useMemo(() => {
    const url = siteUrl();
    const pagePath = pathname === "/" ? "" : pathname;
    const pageUrl = `${url}${pagePath}`;
    const pageSeo = seoForPath(pathname);
    const sameAs = socialLinks.map((s) => s.href);

    const graph: Record<string, unknown>[] = [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: SEO_DEFAULT.title,
        description: SEO_DEFAULT.description,
        inLanguage: "en-IN",
        publisher: { "@id": `${url}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageSeo.title,
        description: pageSeo.description,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${url}/#person`,
        name: analyst.name,
        jobTitle: analyst.title,
        url,
        address: {
          "@type": "PostalAddress",
          streetAddress: analyst.address,
          addressLocality: "Panchkula",
          addressRegion: "Haryana",
          postalCode: "134116",
          addressCountry: "IN",
        },
        sameAs: sameAs.length > 0 ? sameAs : undefined,
      },
    ];

    return JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }, [pathname]);

  useLayoutEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-rishi-jsonld", "");
    el.textContent = payload;
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
  }, [payload]);

  return null;
}
