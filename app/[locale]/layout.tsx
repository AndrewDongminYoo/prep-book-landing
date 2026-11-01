import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { appName, ogImage, siteUrl } from "@/lib/site";
import "../globals.css";

// Pretendard Variable 1.309, the face the v0 design set, self-hosted under the
// SIL Open Font License; `app/fonts/OFL.txt` is its licence, fetched from
// orioncactus/pretendard. It is one 2 MB file holding every glyph, so every
// page pays for it once; a dynamic-subset build would cut that, and is not
// done here.
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-korean",
  weight: "100 900",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#faf9f6",
};

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
    <html lang={locale} className={pretendard.variable}>
      <body>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
