export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://prep-book.donminzzi.kr"
);

export const appName = "Prep Book";

export const androidPackage = "kr.donminzzi.prep_book";

// The share card lives in `public/` rather than as a `opengraph-image` route
// segment: a static image file inside `app/[locale]/` collapses to a single
// `/-/opengraph-image.jpg` URL that nothing else can reference, and the page's
// JSON-LD needs to name the same image the meta tags do. It is the app icon on
// its own background colour, padded to 1200 x 630.
export const ogImage = { path: "/og.jpg", width: 1200, height: 630 } as const;

// Neither store has an app record yet (prep_book
// docs/notes/2026-10-18-store-release-prep.md, item 2), so both are null and the
// page says the release is being prepared. Set each one only once its listing
// answers 200; do not guess an App Store id.
export const playStoreUrl: string | null = null;
export const appStoreUrl: string | null = null;
