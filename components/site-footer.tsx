import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).footer;
  return (
    <footer className="site-footer shell">
      <a href={`/${locale}`} className="wordmark">
        <BrandMark size={22} />
        <span>
          prep book<span className="brand-period">.</span>
        </span>
      </a>
      <span>{copy.tagline}</span>
      <div className="footer-end">
        <nav className="footer-links">
          <Link href={`/${locale}/privacy`}>{copy.privacy}</Link>
          <Link href={`/${locale}/terms`}>{copy.terms}</Link>
          <a href="mailto:ydm2790@gmail.com">{copy.contact}: ydm2790@gmail.com</a>
          <Link href={copy.languageHref} hrefLang={locale === "ko" ? "en" : "ko"}>
            {copy.language}
          </Link>
        </nav>
        <small>
          © {new Date().getFullYear()} Prep Book. {copy.rights}
        </small>
      </div>
    </footer>
  );
}
