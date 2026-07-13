# OnlinePokerBonuses.com

A modern, fast, SEO-optimized poker-bonus comparison site built with **Next.js (App Router)** and exported as **static HTML** — so it deploys anywhere and loads near-instantly.

Focused on the US & Canada markets, featuring: Americas Cardroom, BetOnline Poker, Black Chip Poker, TigerGaming, SportsBetting.ag.

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # generates the static site into ./out
```

`npm run build` outputs a fully static site to the **`out/`** folder. Upload that folder to any host.

## Deploy (pick one)

- **Cloudflare Pages / Netlify:** connect the repo, build command `npm run build`, output dir `out`.
- **Vercel:** import the repo — it auto-detects Next.js.
- **Any static host / S3 / your current host:** run `npm run build` and upload the contents of `out/`.

## Where to edit things

| What | File |
|------|------|
| Poker sites, bonuses, codes, ratings, reviews | `lib/operators.js` |
| Site name, URL, nav, footer, email | `lib/site.js` |
| Colors & theme | `app/globals.css` (`:root` variables) |
| Pages | `app/**/page.js` |
| Reviews (auto-generated per operator) | `app/reviews/[slug]/page.js` |

### Cloaked affiliate links
Outbound "Claim" buttons do **not** point at the raw affiliate tracker. Instead they link to a cloaked URL on your own domain — `/go/<brand>/` — which instantly redirects to the real tracker. This keeps tracker URLs out of the indexed HTML and out of referrer headers.

- **Where the real tracker lives:** each operator in `lib/operators.js` has a `tracker` field (the real affiliate URL) and `affiliateUrl: "/go/<slug>/"` (the cloaked link the buttons use).
- **The redirect pages:** static files in `public/go/<slug>/index.html`. Each is `noindex,nofollow`, sends `no-referrer`, and redirects via both `<meta refresh>` and JavaScript.
- **Crawler blocking:** `/go/` is disallowed in `robots.txt`.

**To change a tracker:** update the URL in BOTH the operator's `tracker` field in `lib/operators.js` *and* the matching `public/go/<slug>/index.html` file (the redirect target appears three times: meta refresh, the `window.location.replace(...)` script, and the fallback link).

Current cloaked mappings:

| Brand | Cloaked URL | Redirects to |
|-------|-------------|--------------|
| Americas Cardroom | `/go/americas-cardroom/` | go.wpnaffiliates.com …brand=americascardroom |
| BetOnline Poker | `/go/betonline-poker/` | record.betonlineaffiliates.ag …/1/ |
| Black Chip Poker | `/go/black-chip-poker/` | go.wpnaffiliates.com …nci=5355 |
| TigerGaming | `/go/tigergaming/` | record.betonlineaffiliates.ag …/1/ |
| SportsBetting.ag | `/go/sportsbetting-ag/` | record.betonlineaffiliates.ag …/1/ |

All outbound buttons also use `rel="nofollow sponsored noopener"` and open in a new tab.

### Update the domain
Set `site.url` in `lib/site.js`. This drives canonical URLs, the sitemap, robots.txt, and Open Graph tags.

## SEO built in
- Per-page titles, meta descriptions, and canonical URLs
- Open Graph + Twitter cards (`public/og-image.svg`)
- JSON-LD structured data: Organization, WebSite, BreadcrumbList, FAQPage, HowTo, Review, ItemList
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML, fast static pages, system-font stack (zero web-font requests), responsive & accessible

## Notes
Bonus details reflect publicly advertised offers as of July 2026. Operators change offers frequently — verify current terms before publishing edits. 18+. Play responsibly.
