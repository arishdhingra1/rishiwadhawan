import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteUrl } from "../data";
import { seoForPath } from "../seoConfig";

function setMeta(attr: "name" | "property", key: string, content: string) {
  const sel = `meta[${attr}="${key.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`;
  let el = document.querySelector(sel);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Updates document title, canonical URL, and social/meta tags on each route (SPA).
 */
export function RouteSeo() {
  const { pathname, search } = useLocation();
  const base = siteUrl();

  useEffect(() => {
    const { title, description } = seoForPath(pathname);
    const path = pathname === "/" ? "" : pathname;
    const canonical = `${base}${path}${search}`;

    document.title = title;

    setMeta("name", "description", description);
    setLink("canonical", canonical);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Rishi Wadhawan");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:locale", "en_IN");

    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  }, [base, pathname, search]);

  return null;
}
