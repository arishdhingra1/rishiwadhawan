/**
 * Titles & descriptions for route-aware <title> and meta; used by RouteSeo + JsonLd.
 * Keep descriptions unique per URL, ~150–160 chars where possible.
 */
export const SITE_NAME = "Rishi Wadhawan";

export const SEO_DEFAULT = {
  title: `${SITE_NAME} | SEBI Registered Research Analyst`,
  description:
    "SEBI-registered research analyst (INH000025726). Independent equity research, risk-aware market context, and disclosures you can rely on—serving investors in India.",
} as const;

export const SEO_PAGES: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: SEO_DEFAULT.title,
    description: SEO_DEFAULT.description,
  },
  "/legal": {
    title: `Legal, complaints & disclosures | ${SITE_NAME}`,
    description:
      "Complaint data, investor charter, grievance escalation, and full risk disclaimers for Rishi Wadhawan, SEBI registered research analyst INH000025726.",
  },
};

export function seoForPath(pathname: string) {
  return SEO_PAGES[pathname] ?? SEO_DEFAULT;
}
