export const analyst = {
  name: "Rishi Wadhawan",
  title: "SEBI Registered Research Analyst",
  registrationNo: "INH000025726",
  email: "wadhawan_sonu@rediffmail.com",
  /** Display format */
  phone: "+91 95013 29973",
  /** E.164-style, no spaces — for tel: links */
  phoneTel: "+919501329973",
  contactPerson: "Rishi Wadhawan",
  address:
    "Flat No 5A 1402, Suncity Parikrama Group Housing, Sector-20, Panchkula, Haryana 134116",
  validity: { start: "Apr 7, 2026", end: "Apr 6, 2031" },
  /** Shown in disclaimer (“registered on …”) */
  sebiRegistrationDate: "Apr 7, 2026",
  jurisdiction: "Panchkula, Haryana, India",
  /** Grievance / escalation matrix */
  workingHours: "9:00 AM to 6:00 PM (IST)",
} as const;

export type SocialNetworkId =
  | "linkedin"
  | "x"
  | "youtube"
  | "instagram"
  | "telegram";

/** Add entries here when you have real profile URLs — no placeholders */
export const socialLinks: readonly {
  id: SocialNetworkId;
  label: string;
  href: string;
}[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/rishicapitaladvisory/",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/+l0NaQkAXvZMzM2U1",
  },
];

/** Hosted checkout (Cosmofeed) — update if the payment link changes */
export const PAYMENT_CHECKOUT_URL =
  "https://cosmofeed.com/vig/69d9deaf2f8f3b0014cd10a9" as const;

/** Matches common RA site nav (e.g. tradersstreet.in): home anchors + Legal route */
export type NavItem = {
  label: string;
  to: string;
};

export const navItems: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
  { label: "FAQ", to: "/#faq" },
  { label: "Payment", to: "/payment" },
  { label: "Refund", to: "/refund-policy" },
  { label: "Legal", to: "/legal" },
] as const;

export function publicSiteUrl(): string {
  const u = import.meta.env.VITE_PUBLIC_SITE_URL?.trim();
  return u && u.length > 0 ? u.replace(/\/$/, "") : "";
}

/** Canonical origin for SEO, JSON-LD, and OG URLs (falls back to production domain). */
export function siteUrl(): string {
  const u = publicSiteUrl();
  return u.length > 0 ? u : "https://rishicapitaladvisory.com";
}
