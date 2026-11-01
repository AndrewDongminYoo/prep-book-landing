# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm install
pnpm dev      # next dev --webpack
pnpm build
pnpm lint     # eslint
```

## What this repository is for

The landing page for Prep Book, and the host for what the stores need served from a domain: the support and marketing page at `/{ko,en}` and the privacy policy at `/{ko,en}/privacy`. The app lives in the private repository `AndrewDongminYoo/prep_book`, and its store metadata under `fastlane/metadata/` already points at these four URLs.

The split follows the operator's other landing sites (ttush-push-landing, prism-defense-landing, quest-keeper-landing): a page that changes on its own schedule should not spend the app repository's CI and review rounds.

## Layout

`app/[locale]` holds the two locales, `ko` and `en`, and `lib/i18n.ts` is the only place that list appears. Copy lives in `lib/dictionaries.ts` as a `Record<Locale, Dictionary>`, so a missing translation fails to compile instead of falling back to English silently.

Legal text is Markdown under `content/legal`, read at build time and rendered through `react-markdown` by `components/policy-layout.tsx`. Its heading and list styles live in the `.policy` block in `app/globals.css`, because Tailwind's preflight strips them and this project carries no typography plugin.

The visual design is the operator's v0 design, adopted on 2026-11-01 and ported into these routes: its layout and class-based styles are `app/globals.css`, the shared header and footer are `components/site-header.tsx` and `components/site-footer.tsx`, and the interactive card in the hero is `components/recipe-preview.tsx`, an illustration whose numbers scale linearly rather than output of the app's calculator. The design is light-only on purpose. Its text greys and small coral text measured 2.3 to 4.2:1, so every text colour was darkened, hue kept, to at least 4.5:1, and the reference coral `--primary` is kept only for large headings, icons and decoration; keep new text colours at 4.5:1 too. Icons come from `lucide-react`, the design's own family. The face is Pretendard Variable, self-hosted from `app/fonts/` with its OFL licence beside it. `public/hero-bakery.jpg` is the design's hero photo from the operator's v0 project, converted from PNG.

`app/icon.png` and `public/og.jpg` are resized from the app's 1024 px App Store icon; the share card is that icon padded with its own background colour. Refresh them from the app repository when its icon changes.

## Claims about the app must be verified against the app

This page describes software in another repository, which is exactly the shape that goes stale.

- The page copy is the operator's own wording from the v0 design, with an English translation. It paraphrases the store description in `fastlane/metadata/ios/{ko,en-US}/description.txt` of `prep_book`, so a claim about the app must hold against that text and against the app before it goes on the page. The comment at the top of `lib/dictionaries.ts` records the one phrase changed for that reason. Recipe import is left out on purpose until the store text describes it and #100's device checks in that repository pass.
- The privacy policy's central claim is that the app opens no connection of its own, and that only the store purchase and, on Android, ML Kit's diagnostics send anything. It rests on three checks of `prep_book` at `main`, run on 2026-11-01 at `a21ee6e`: no networking dependency other than `http`, which only the competition variant under `lib/championship/` imports and which `test/championship/championship_boundary_test.dart` keeps out of the mobile flavors; no `URLSession` or `HttpURLConnection` in the iOS and Android native sources; and the ML Kit list copied from Google's disclosure page as it read that day. Re-run them when a dependency or native file changes.
- The Android permission list was read from the production release merged manifest, produced on 2026-11-01 at `a21ee6e` by `./gradlew :app:processProductionReleaseMainManifest` in the app's `android/` directory, which merges the manifest without compiling or signing: `INTERNET` and `ACCESS_NETWORK_STATE` from ML Kit's `com.google.android.datatransport:transport-backend-cct`, `com.android.vending.BILLING` from `com.android.billingclient:billing`, `DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION` from `androidx.core:core`, and no `CAMERA`. `build/app/outputs/logs/manifest-merger-production-release-report.txt` names each origin. Re-run that task when a dependency changes. Read the release variant, not a debug one, because a debug build adds `INTERNET` on its own.
- The device-backup paragraph rests on `android/app/src/main/AndroidManifest.xml` setting no `allowBackup`, `fullBackupContent` or `dataExtractionRules`, so Android Auto Backup applies by default, and on no iOS source excluding the database directory (`getDatabasesPath()`, which also holds `unlock-confirmation`) from backup. If the app ever opts out, rewrite that paragraph.
- The image-copy sentence follows `RecipeImportReviewCubit` and `discardImage` in `lib/presentation/recipe_import/`: the copy is shown during review and deleted when the draft ends.

## Do not invent

`lib/site.ts` holds both store URLs as `null` until each listing answers 200; do not guess an App Store id. The store badges in the download section turn into links when a URL is set, but the header button, `hero.note` and `download.text` in `lib/dictionaries.ts` still say the release is being prepared; change them in the same commit. No terms of service unless someone writes them: the app sells a one-time unlock and no subscription. No `/download` redirect or `.well-known` files until the app declares App Links or associated domains; `next.config.ts` says why.

## Maintenance Verification

Use Node.js 22.23.4 and pinned pnpm 10.34.9; `corepack pnpm` works without a standalone shim.
Run frozen installation, `corepack pnpm lint` and `corepack pnpm build` for the declared application gates.
Run `python3 -B .trunk/configs/tests/test_trufflehog_to_sarif.py` for the offline scanner regressions; the SARIF adapter and its tests were copied unchanged from ttush-push-landing, whose `CLAUDE.md` documents their boundary.
Run `trunk check --all --no-fix` for the full maintenance scan.
