# prep-book-landing

Landing page and privacy policy for Prep Book, a recipe scaling app for small restaurants and bakeries.

Next.js App Router, `ko` and `en` under `app/[locale]`, legal text as Markdown under `content/legal`. Same shape as `ttush-push-landing`, from which this repository was started; the visual design is Dongmin Yu's v0 design, ported into these routes.

```sh
pnpm install
pnpm dev      # http://localhost:3000 → redirects to /ko
pnpm build
pnpm lint
```

## What is real and what is a placeholder

The privacy policy is load-bearing: both stores require its URL. `CLAUDE.md` names the checks its claims rest on and when to re-run them.

Deliberately absent, each for a reason rather than as an oversight:

| Missing                       | Why                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Store links                   | No store listing exists yet. `lib/site.ts` holds both URLs as `null`, and the store badges become links when set. |
| Screenshots                   | The app repository holds no store screenshots yet. The hero shows a photo and an illustrative production card.    |
| Recipe import on the page     | The store text does not describe it yet, and its device acceptance checks are still open.                         |
| Visitor analytics             | The v0 export carried `@vercel/analytics`; the privacy policy covers only the app, so it needs a section first.   |
| `/download` and `.well-known` | The app declares no App Links or associated domains, so either would assert an unclaimed association.             |
| Terms of service              | Not written. The app sells a one-time unlock and no subscription.                                                 |
