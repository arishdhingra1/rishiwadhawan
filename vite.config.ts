import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages project sites need a subpath (e.g. /repo-name/).
 * User/org site (repo named *.github.io) uses "/".
 * Custom domain later: set VITE_BASE_PATH=/ when building, or rely on default.
 */
const base = process.env.VITE_BASE_PATH ?? "/";

function siteUrlFromEnv(): string {
  const u = process.env.VITE_PUBLIC_SITE_URL?.trim();
  if (u) return u.replace(/\/$/, "");
  return "https://rishicapitaladvisory.com";
}

export default defineConfig({
  base,
  plugins: [
    react(),
    {
      name: "html-inject-site-url",
      transformIndexHtml(html) {
        const site = siteUrlFromEnv();
        return html.replace(/__SITE_URL__/g, site);
      },
    },
  ],
  server: {
    port: 3000,
    strictPort: true,
  },
});
