# prep-book-landing

Landing page and privacy policy for Prep Book, a recipe scaling app for small restaurants and bakeries.

Next.js App Router, `ko` and `en` under `app/[locale]`, legal text as Markdown under `content/legal`. Same shape as `ttush-push-landing`, from which this repository was started.

```sh
pnpm install
pnpm dev      # http://localhost:3000 → redirects to /ko
pnpm build
pnpm lint
```

## What is real and what is a placeholder

The privacy policy is load-bearing: both stores require its URL. `CLAUDE.md` names the checks its claims rest on and the one still owed before it is published.

Deliberately absent, each for a reason rather than as an oversight:

| Missing                       | Why                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| Store buttons                 | No store listing exists yet. `lib/site.ts` holds both URLs as `null`, and the page shows them when set. |
| Screenshots                   | The app repository holds no store screenshots yet. The hero shows the app icon instead.                 |
| Recipe import on the page     | The store text does not describe it yet, and its device acceptance checks are still open.               |
| `/download` and `.well-known` | The app declares no App Links or associated domains, so either would assert an unclaimed association.   |
| Terms of service              | Not written. The app sells a one-time unlock and no subscription.                                       |
