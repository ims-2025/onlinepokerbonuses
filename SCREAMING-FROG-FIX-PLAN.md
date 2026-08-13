# Screaming Frog Audit & Fix Plan — onlinepokerbonuses.com
Crawl: 2026-08-13 16:01 · 115 URLs crawled (48 real content pages + redirects + assets)

## TL;DR
The site's on-page SEO is genuinely solid — **no broken links (no 4xx/5xx), no missing or duplicate titles/H1s/meta descriptions, valid JSON-LD on all 48 pages, and all 34 news articles live**. But there is **one critical misconfiguration that is currently making every page non-indexable at the address Google actually serves.** Fixing it is the priority; everything else is minor.

---

## 🔴 CRITICAL — www vs non-www conflict (fix first)

**What the crawl shows**
- The live/served domain is **www**: all 48 non-www URLs return **308 redirects → www** (`onlinepokerbonuses.com/x/` → `www.onlinepokerbonuses.com/x/`).
- But every page's **canonical tag points to non-www** (`https://onlinepokerbonuses.com/...`), because the code's `site.url` is the non-www version. So does the sitemap, robots `Host`, and OG URLs.
- Result: Screaming Frog marks **all 48 pages "Non-Indexable / Canonicalised"** — including the homepage. Google is told "the real version is non-www," follows that, gets 308-redirected back to www, and reads a canonical to non-www again. The signals contradict each other, and the **sitemap you submit is 48 URLs that all redirect.**

**Root cause:** the Vercel project has **www set as the primary domain** (so apex redirects to www), while the codebase canonicalises to **apex/non-www**. Served host ≠ canonical host.

**Fix (choose ONE — they must agree):**

- **Option A — make non-www primary (recommended, no redeploy needed).**
  In Vercel → Project → Settings → Domains: set **`onlinepokerbonuses.com` as the primary/redirect target** and change `www` to **Redirect to `onlinepokerbonuses.com`**. This instantly aligns the served host with every canonical, the sitemap, robots and OG tags already in the code. 2-minute change, no code edit.

- **Option B — keep www primary (requires a code change + redeploy).**
  Change `site.url` in `lib/site.js` to `https://www.onlinepokerbonuses.com`, then rebuild/redeploy. This makes all canonicals/sitemap/robots/OG use www to match the redirect. (I can do this edit if you prefer www.)

**Recommendation:** Option A — the entire codebase already uses non-www, so flipping the Vercel primary is the cleanest, lowest-risk fix and needs no deploy.

---

## 🟠 HIGH — Missing security response headers (all 67 crawled pages)
Screaming Frog flags every page missing: **Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, and a secure Referrer-Policy.** These are a ranking/trust and safety signal and are trivial to add on Vercel.

**Fix (code — I can do this now):** add a `vercel.json` with a global headers block:
`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Strict-Transport-Security`, plus a conservative `Content-Security-Policy`, and long-lived cache-control for `/_next/static`.

---

## 🟡 MEDIUM — Title tags too long (47 of 48 pages > 60 chars)
Nearly every title exceeds ~60 characters and will be truncated in Google results. The main culprit is the `| OnlinePokerBonuses.com` suffix plus long review/article titles.

**Fix (code — I can do this now):**
- Shorten the metadata `template` from `%s | OnlinePokerBonuses.com` to `%s | OnlinePokerBonuses` (saves 4 chars everywhere), or drop the suffix on the longest pages.
- Trim the longest review/money-page titles to lead with the keyword inside ~55 chars before the suffix.

## 🟡 MEDIUM — Meta descriptions too long (33 of 48 pages > 160 chars)
A third of pages have meta descriptions Google will truncate (~155–160 chars).

**Fix (code + process):**
- Tighten the descriptions on the core money pages (home, best-poker-bonuses, usa, canada, reviews) to ≤ 155 chars.
- For news articles the `excerpt` field is the meta description — the daily task prompt already targets ~150–160; I'll tighten it to a hard ≤ 155 so new articles stay in range. (Existing long ones can be trimmed in a batch pass.)

---

## 🟢 LOW — Two thin pages
- `/about/` — 294 words · `/responsible-gambling/` — 259 words.
These are naturally short page types, but **/about is an E-E-A-T page** and would benefit from expansion (team, editorial standards, how-we-review, author) as flagged in the earlier roadmap. Responsible-gambling is fine as-is.

---

## ✅ Healthy — no action needed
- **No broken links or server errors** — every URL returns 200 or a clean 308.
- **No missing/duplicate** titles, H1s, or meta descriptions across the 48 pages.
- **Valid structured data on all 48 pages** (Organization, WebSite, Breadcrumb, FAQ, Review, NewsArticle, ItemList).
- **Cloaked affiliate links working as intended** — the 9 internal nofollow outlinks are the `/go/` links (`rel="nofollow sponsored"`); `/go/` correctly excluded from the crawl via robots.txt.
- **News engine scaling correctly** — all 34 published articles were crawled and indexable-intent; `lib/news/index.js` imports and the `all` array are in sync (34/34).

---

## Recommended order of execution
1. **Vercel: set non-www as primary domain** (Option A). ← unblocks indexing of the whole site. *(User action, ~2 min.)*
2. **Add `vercel.json` security headers.** *(Code — I can do now.)*
3. **Shorten the title template + trim the longest titles.** *(Code — I can do now.)*
4. **Trim over-long meta descriptions on money pages + tighten the daily task to ≤155 chars.** *(Code — I can do now.)*
5. **Expand `/about/` for E-E-A-T** (author, editorial policy). *(Content — from the roadmap.)*
6. Re-crawl after deploy to confirm pages flip to **Indexable**.

Items 2–4 I can implement and rebuild immediately; item 1 is the one thing only you can do in the Vercel dashboard.
