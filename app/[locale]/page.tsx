import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  ChefHat,
  FileText,
  Layers3,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  WifiOff,
} from "lucide-react";
import { RecipePreview } from "@/components/recipe-preview";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { appName, appStoreUrl, ogImage, playStoreUrl, siteUrl } from "@/lib/site";

// The layout is the v0 design (2026-11-01). Icons pair with the
// dictionary entries by position.
const benefitIcons = [WifiOff, ShieldCheck, Smartphone, Check] as const;
const featureIcons = [BookOpen, SlidersHorizontal, Layers3, FileText, WifiOff, Scale] as const;
const stepIcons = [BookOpen, Scale, FileText] as const;

/** Joins the lines of a heading or paragraph with the breaks the design sets. */
function Lines({ lines }: { lines: readonly string[] }) {
  // Fragments, not spans: `.hero h1 > span` colours a span child coral.
  return lines.map((line, i) => (
    <Fragment key={line}>
      {i > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: { ko: "/ko", en: "/en", "x-default": "/ko" },
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);

  const installUrls = [appStoreUrl, playStoreUrl].filter((url): url is string => url !== null);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: appName,
    description: dict.meta.description,
    url: new URL(`/${locale}`, siteUrl).toString(),
    image: new URL(ogImage.path, siteUrl).toString(),
    inLanguage: ["ko", "en"],
    operatingSystem: ["Android", "iOS"],
    author: { "@type": "Person", name: "Dongmin Yu", email: "ydm2790@gmail.com" },
    ...(installUrls.length > 0 ? { installUrl: installUrls } : {}),
  };

  const stores = [
    { name: "App Store", url: appStoreUrl, Icon: Smartphone },
    { name: "Google Play", url: playStoreUrl, Icon: ArrowUpRight },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        // Static object, no user input. The standard Next.js JSON-LD pattern.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> {dict.hero.eyebrow}
          </div>
          <h1>
            <Lines lines={dict.hero.title} />
            <br />
            <span>{dict.hero.titleAccent}</span>
          </h1>
          <p className="hero-description">
            <Lines lines={dict.hero.description} />
          </p>
          <a href="#features" className="primary-link">
            {dict.hero.cta} <ArrowDown size={17} aria-hidden />
          </a>
          <div className="hero-note">
            <span /> {dict.hero.note}
          </div>
          <div className="hero-audience">
            <ChefHat size={19} strokeWidth={1.5} aria-hidden />
            <span>{dict.hero.audience}</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            className="bakery-photo"
            src="/hero-bakery.jpg"
            alt={dict.hero.photoAlt}
            width={928}
            height={1152}
            sizes="(max-width: 900px) 100vw, 560px"
            preload
          />
          <div className="photo-label">{dict.hero.photoLabel}</div>
          <RecipePreview copy={dict.preview} locale={locale} />
          <div className="visual-caption">
            <span className="caption-line" /> {dict.hero.caption}
          </div>
        </div>
      </section>

      <div className="benefit-strip shell">
        {dict.benefits.map((benefit, i) => {
          const Icon = benefitIcons[i];
          return (
            <span key={benefit}>
              <Icon aria-hidden /> {benefit}
            </span>
          );
        })}
      </div>

      <section className="features-section shell" id="features">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{dict.features.kicker}</p>
            <h2>
              <Lines lines={dict.features.title} />
            </h2>
          </div>
          <p>
            <Lines lines={dict.features.description} />
          </p>
        </div>
        <div className="feature-grid">
          {dict.features.items.map((item, i) => {
            const Icon = featureIcons[i];
            const number = String(i + 1).padStart(2, "0");
            return (
              <article className="feature" key={number}>
                <div className="feature-top">
                  <Icon size={25} strokeWidth={1.5} aria-hidden />
                  <span>{number}</span>
                </div>
                <span className="feature-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="feature-detail">
                  <Check size={14} aria-hidden />
                  {item.detail}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="shell">
          <p className="section-kicker">{dict.how.kicker}</p>
          <h2>
            <Lines lines={dict.how.title} />
          </h2>
          <div className="steps">
            {dict.how.steps.map((step, i) => {
              const Icon = stepIcons[i];
              const number = String(i + 1).padStart(2, "0");
              return (
                <div className="step" key={number}>
                  <div className="step-number">
                    {number}
                    <Icon size={25} strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pricing-section shell" id="pricing">
        <div>
          <p className="section-kicker">{dict.pricing.kicker}</p>
          <h2>
            <Lines lines={dict.pricing.title} />
          </h2>
          <p className="section-description">
            <Lines lines={dict.pricing.description} />
          </p>
        </div>
        <div className="pricing-card">
          <div className="price-row">
            <div>
              <span className="small-label">{dict.pricing.freeLabel}</span>
              <h3>{dict.pricing.freeTitle}</h3>
              <p>{dict.pricing.freeText}</p>
            </div>
            <span className="free-label">{dict.pricing.freeBadge}</span>
          </div>
          <div className="price-divider" />
          <div className="price-row">
            <div>
              <span className="small-label accent-text">{dict.pricing.paidLabel}</span>
              <h3>{dict.pricing.paidTitle}</h3>
              <p>{dict.pricing.paidText}</p>
            </div>
            <BookOpen className="pricing-icon" size={27} strokeWidth={1.5} aria-hidden />
          </div>
          <div className="price-footnote">
            <Check size={14} aria-hidden /> {dict.pricing.footnote[0]} <span>·</span>{" "}
            {dict.pricing.footnote[1]}
          </div>
        </div>
      </section>

      <section className="download-section shell" id="download">
        <div className="download-icon">
          <BookOpen size={32} strokeWidth={1.6} aria-hidden />
        </div>
        <p className="section-kicker">{dict.download.kicker}</p>
        <h2>
          <Lines lines={dict.download.title} />
        </h2>
        <p>
          <Lines lines={dict.download.text} />
        </p>
        <div className="store-badges">
          {stores.map(({ name, url, Icon }) => {
            const body = (
              <>
                <Icon size={25} aria-hidden />
                <span>
                  <small>{url ? dict.download.available : dict.download.soon}</small>
                  {name}
                </span>
              </>
            );
            return url ? (
              <a key={name} href={url}>
                {body}
              </a>
            ) : (
              <div key={name}>{body}</div>
            );
          })}
        </div>
        <span className="download-note">{dict.download.note}</span>
      </section>
    </main>
  );
}
