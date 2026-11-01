import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { appName, ogImage, siteUrl } from "@/lib/site";
import "../globals.css";

// Noto Sans KR is the face the app itself ships under the OFL
// (`assets/fonts/NotoSansKR.ttf` in prep_book, bundled for the production
// sheet's Hangul), so the page and the sheet set type the same way. It covers
// Latin too, so one face serves both locales.
// `preload: false` is load-bearing, not a tuning knob. Google splits a Korean
// face into roughly a hundred unicode-range slices per weight, and next/font
// self-hosts and preloads every slice of the declared subsets: in the sibling
// ttush-push-landing, four weights of a Korean face emitted 291 preload links
// and pulled 2.3 MB of font files on every page. Left to load on demand the
// browser fetches only the slices whose glyphs are actually on the page.
const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: siteUrl,
    title: { default: dict.meta.title, template: `%s · ${appName}` },
    description: dict.meta.description,
    openGraph: {
      type: "website",
      siteName: appName,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      images: [
        {
          url: ogImage.path,
          width: ogImage.width,
          height: ogImage.height,
          alt: dict.meta.ogAlt,
        },
      ],
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={`${notoSansKr.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-paper font-sans text-ink">
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
