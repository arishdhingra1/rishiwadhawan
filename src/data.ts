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

export type SocialNetworkId = "linkedin" | "x" | "youtube" | "instagram";

/** Placeholder social links — replace `href` with real profile URLs when ready */
export const socialLinks: readonly {
  id: SocialNetworkId;
  label: string;
  href: string;
}[] = [
  { id: "linkedin", label: "LinkedIn", href: "#" },
  { id: "x", label: "X", href: "#" },
  { id: "youtube", label: "YouTube", href: "#" },
  { id: "instagram", label: "Instagram", href: "#" },
];

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
  { label: "Legal", to: "/legal" },
] as const;

export function publicSiteUrl(): string {
  const u = import.meta.env.VITE_PUBLIC_SITE_URL?.trim();
  return u && u.length > 0 ? u.replace(/\/$/, "") : "";
}
