import { socialLinks } from "../data";
import { SocialIcon } from "./SocialIcon";

const VARIANT_CLASS: Record<
  "footer" | "header" | "hero" | "contact",
  { ul: string; link: string; icon: string }
> = {
  footer: {
    ul: "footer-social",
    link: "footer-social__link",
    icon: "footer-social__icon",
  },
  header: {
    ul: "header-social",
    link: "header-social__link",
    icon: "header-social__icon",
  },
  hero: {
    ul: "hero-social",
    link: "hero-social__link",
    icon: "hero-social__icon",
  },
  contact: {
    ul: "contact-social",
    link: "contact-social__link",
    icon: "contact-social__icon",
  },
};

type Props = {
  variant: keyof typeof VARIANT_CLASS;
  /** Extra class on the `<ul>` */
  className?: string;
  /** Visually hidden label for the list */
  ariaLabel?: string;
};

export function SocialLinksList({
  variant,
  className = "",
  ariaLabel = "Social media",
}: Props) {
  const c = VARIANT_CLASS[variant];
  return (
    <ul
      className={[c.ul, className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
    >
      {socialLinks.map(({ id, label, href }) => {
        const isPlaceholder = href === "#";
        return (
          <li key={id}>
            <a
              href={href}
              className={c.link}
              aria-label={
                isPlaceholder ? `${label} — link coming soon` : label
              }
              title={
                isPlaceholder ? `${label} — add profile URL in data.ts` : label
              }
              onClick={
                isPlaceholder
                  ? (e) => {
                      e.preventDefault();
                    }
                  : undefined
              }
              {...(!isPlaceholder && href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <SocialIcon id={id} className={c.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
