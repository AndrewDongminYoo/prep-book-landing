import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";
import { appName, appStoreUrl, ogImage, playStoreUrl, siteUrl } from "@/lib/site";

// The hero's button scrolls to the store buttons rather than opening one store:
// without a /download redirect (see next.config.ts) one link cannot send each
// platform to its own store.
const storesId = "stores";

/**
 * The page's one button shape. Paper on the green bands, because the only
 * buttons on the page sit on green, and paper on green is 10.69:1 where the
 * icon's orange on green is 4.24:1.
 */
function Cta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-block rounded-lg bg-paper px-7 py-3.5 font-semibold text-green transition-transform active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
    >
      {label}
    </a>
  );
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

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        // Static object, no user input. The standard Next.js JSON-LD pattern.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero, on the icon's own green, so the icon sits on the colour it was
          drawn on rather than in a frame. */}
      <section className="bg-green text-paper">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-20 lg:pb-24 lg:pt-24">
          <div className="max-w-2xl">
            {/* 20px bold is large text, where the icon's orange on green
                (4.24:1) passes; at body size it would not. */}
            <p className="text-xl font-bold text-spoon">{appName}</p>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.2] tracking-[-0.03em] sm:text-5xl">
              {dict.hero.tagline}
            </h1>
            <p className="mt-6 max-w-[46ch] text-pretty text-lg leading-relaxed text-mint">
              {dict.hero.sub}
            </p>
            {installUrls.length > 0 ? (
              <div className="mt-9">
                <Cta href={`#${storesId}`} label={dict.hero.cta} />
              </div>
            ) : null}
          </div>
          <Image
            src="/app-icon.png"
            alt={dict.hero.iconAlt}
            width={640}
            height={640}
            preload
            sizes="(max-width: 1024px) 60vw, 360px"
            // The iOS icon mask's corner is about 22 percent of its side.
            className="mx-auto w-56 rounded-[22%] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)] sm:w-64 lg:w-full"
          />
        </div>
      </section>

      {/* Features, set as one sheet of the icon's notepad: ruled lines between
          items instead of a card each, because the product's output is a sheet
          and the page should read like one. */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
        <h2 className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{dict.features.title}</h2>
        <ol className="mt-12 grid rounded-2xl border border-rule bg-sheet px-6 sm:px-10 md:grid-cols-2 md:gap-x-12">
          {dict.features.items.map((item, i) => (
            <li
              key={item.title}
              className="border-b border-rule py-8 last:border-b-0 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
            >
              <p className="text-sm font-semibold tabular-nums text-spoon-ink">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-[52ch] text-pretty leading-relaxed text-ink-dim">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 lg:pb-28">
        <div className="max-w-3xl border-l-4 border-spoon pl-6">
          <h2 className="text-balance text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
            {dict.pricing.title}
          </h2>
          <p className="mt-4 max-w-[58ch] text-pretty leading-relaxed text-ink-dim">
            {dict.pricing.body}
          </p>
        </div>
      </section>

      {/* The page closes on the hero's green: one statement, and the store
          buttons once the listings exist. */}
      <section id={storesId} className="bg-green text-paper">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
          <h2 className="max-w-[24ch] text-balance text-3xl font-bold leading-[1.2] tracking-[-0.02em] sm:text-4xl">
            {dict.closing.title}
          </h2>
          <p className="mt-5 max-w-[48ch] text-pretty text-lg leading-relaxed text-mint">
            {dict.closing.status}
          </p>
          {installUrls.length > 0 ? (
            <div className="mt-10 flex flex-wrap gap-4">
              {appStoreUrl ? <Cta href={appStoreUrl} label={dict.closing.appStore} /> : null}
              {playStoreUrl ? <Cta href={playStoreUrl} label={dict.closing.playStore} /> : null}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
