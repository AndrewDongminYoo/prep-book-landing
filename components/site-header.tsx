import { ArrowUpRight, BookOpen } from "lucide-react";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

/** Shared by the home page and the privacy pages, so the section links carry
 * the locale path and work from either. */
export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).header;
  const home = `/${locale}`;
  return (
    <header className="site-header shell">
      <a href={home} className="wordmark" aria-label={copy.home}>
        <BookOpen strokeWidth={1.8} aria-hidden />
        <span>
          prep book<span className="brand-period">.</span>
        </span>
      </a>
      <nav aria-label={copy.navLabel}>
        <a href={`${home}#features`}>{copy.features}</a>
        <a href={`${home}#how-it-works`}>{copy.how}</a>
        <a href={`${home}#pricing`}>{copy.pricing}</a>
      </nav>
      <a className="header-cta" href={`${home}#download`}>
        {copy.cta} <ArrowUpRight size={15} aria-hidden />
      </a>
    </header>
  );
}
