# OnlinePokerBonuses.com — 360° SEO & Content Roadmap

Target markets: **USA & Canada** · Model: **offshore poker affiliate** (WPN + Chico brands) · Prepared July 2026

---

## 0. Where the site stands today (baseline)

**Already strong:**
- Fast static Next.js build, mobile-responsive, clean semantic HTML
- Per-page titles, meta descriptions, canonicals
- JSON-LD: Organization, WebSite, Breadcrumb, FAQPage, HowTo, Review, ItemList
- Auto `sitemap.xml` + `robots.txt`, cloaked/`noindex` affiliate redirects
- 13 pages incl. 5 operator reviews, responsible-gambling page

**The gaps that will hold back rankings (fix these):**
1. No analytics or Search Console yet → flying blind
2. Thin **E-E-A-T signals** — critical for gambling (a YMYL-adjacent niche)
3. Missing legal/trust pages (privacy, cookie consent, affiliate disclosure, contact)
4. Limited content depth vs. entrenched competitors (SoMuchPoker, VIP-Grinders, PokerListings)
5. No high-intent "money" pages beyond the 5 reviews (no-deposit, rakeback, crypto, comparisons, state pages)
6. Placeholder brand logos (CSS initials) instead of real assets/screenshots
7. No visible "last updated" dates or author attribution

---

## 1. Technical SEO (Week 1 foundation)

- [ ] **Google Search Console** — verify domain, submit `sitemap.xml`, watch Coverage + Core Web Vitals
- [ ] **Bing Webmaster Tools** — verify + submit sitemap (Bing/DuckDuckGo traffic is non-trivial for gambling)
- [ ] **Analytics** — GA4 or privacy-first **Plausible/Umami** (lighter, better for EU visitors). Track affiliate-link clicks as events.
- [ ] **Event tracking on `/go/*` clicks** — measure which offers convert (add an `onclick` beacon before redirect)
- [ ] **Per-page OG images** — currently one static image; generate a branded OG per review/page for better social CTR
- [ ] **Real favicons + web manifest** (192/512 PNG) for PWA/Google mobile
- [ ] **`lastmod` accuracy** in sitemap — drive it from a per-page `updated` field, not build time
- [ ] Confirm on Vercel: HTTPS, HTTP→HTTPS redirect, `www`→apex (or vice-versa) canonical redirect
- [ ] Add security/perf headers via `vercel.json` (HSTS, X-Content-Type-Options, cache-control on assets)
- [ ] Keep First-Load JS lean; audit with PageSpeed Insights (target 95+ mobile)

---

## 2. E-E-A-T & Trust (highest ROI for a gambling site)

Google holds gambling/money content to a high bar. This is where most affiliate sites win or lose.

- [ ] **Named author + reviewer** with a real bio, photo, poker credentials, and social links; add `author` to Review/Article JSON-LD
- [ ] **Editorial policy / "How We Review" page** — expand your methodology into a standalone page (testing process, scoring, independence)
- [ ] **Visible "Last updated: [date]"** on every review and money page (freshness = trust + rankings)
- [ ] **"Fact-checked / verified" badges** with dates on bonus tables
- [ ] **About page upgrade** — team, contact, company details, why trust us
- [ ] **Contact page** with a real method (email/form)
- [ ] Prominent, honest **affiliate disclosure** near the top of ranking pages (also an FTC requirement)
- [ ] Link out to **authoritative sources** (state regulators, NCPG, operators' T&C) — outbound authority helps

---

## 3. Keyword strategy → page map

Focus on **high commercial intent** first (fastest revenue), then supporting/informational content for topical authority.

| Priority | Target keywords | Page | Status |
|----------|-----------------|------|--------|
| 🔴 High | "online poker bonuses", "best poker bonus" | Home / Best Bonuses | ✅ have — optimize |
| 🔴 High | "[brand] bonus code", "[brand] review" | 5 review pages | ✅ have — deepen |
| 🔴 High | "no deposit poker bonus" | **NEW page** | ➕ create |
| 🔴 High | "poker rakeback", "best rakeback deals" | **NEW page** | ➕ create |
| 🔴 High | "crypto / bitcoin poker sites" | **NEW page** | ➕ create |
| 🟠 Med | "poker sites that accept US players" | **NEW page** | ➕ create |
| 🟠 Med | "online poker [state]" (NJ, PA, MI, TX, CA, FL…) | **NEW state hub** | ➕ create |
| 🟠 Med | "ACR vs BetOnline", "WPN vs Chico" | **NEW comparison pages** | ➕ create |
| 🟢 Low | "how to play poker", hand rankings, PLO, Sit & Go | **Strategy hub** | ➕ create |
| 🟢 Low | "Venom schedule", promo calendar, bonus news | **Blog / news** | ➕ create |

Use free/low-cost tools to expand: Google autocomplete, "People Also Ask", AnswerThePublic, Ahrefs/SEMrush free tiers, and competitor gap analysis on the 3 sites above.

---

## 4. Content roadmap (build order)

**Phase A — high-intent money pages (Weeks 2–4)**
1. **No-Deposit Poker Bonuses** — ACR's $10 free angle; strongest converting keyword
2. **Poker Rakeback Guide** — WPN Elite Benefits (up to 65%) vs Chico weekly rakeback; this is your differentiator
3. **Crypto / Bitcoin Poker Sites** — huge for offshore US/CA; deposit/withdraw walkthroughs
4. **Poker Sites That Accept US Players** — broad, high-intent evergreen hub linking to reviews

**Phase B — depth & comparison (Month 2)**
5. **Comparison pages:** ACR vs BetOnline, Black Chip vs ACR, Chico vs WPN networks
6. **State hub (US):** "Online Poker in [State]" for top 10–15 states (legality + which offshore rooms accept)
7. **Canada provinces:** Ontario, BC, Alberta, Quebec angle
8. **Payment guides:** Bitcoin, Ethereum, Litecoin, USDT, Visa deposits/withdrawals

**Phase C — topical authority + top-funnel (Month 3+)**
9. **Strategy hub:** hand rankings, Texas Hold'em rules, tournament vs cash, bankroll management, GTO basics
10. **Blog/news cadence:** Venom/OSS schedules, monthly promo roundups, bonus-change updates (freshness engine)
11. **Mobile poker apps** page

**Deepen the 5 existing reviews to 1,200–1,800 words:** add real lobby/software **screenshots**, step-by-step deposit-with-code walkthrough, per-review FAQ (more FAQ schema), payout-time table, and a mini "who should skip this room" section.

---

## 5. On-page optimization (existing pages)

- Tighten title tags to lead with the primary keyword + year + modifier ("Best", "2026", "$2,000")
- Add an **in-page table of contents** to long pages (jump links → sitelinks potential)
- Strengthen **internal linking**: every review links to no-deposit/rakeback/crypto hubs and vice-versa (hub-and-spoke)
- Add **descriptive alt text** to all logos/screenshots once real assets are in
- Expand FAQ blocks (target "People Also Ask" questions verbatim)
- Add **comparison anchors** and "jump to [brand]" links from the toplist

---

## 6. Conversion rate optimization (CRO)

Engagement metrics feed rankings, and better conversion = more revenue per visitor.

- **Geo-aware offers** — detect US vs CA and reorder/relabel offers (Vercel edge or client-side)
- **Sticky mobile CTA bar** ("Claim #1 Bonus") on scroll
- **"Verified [date]" + "Exclusive" badges** on offers
- **Sortable/filterable** comparison table (by bonus size, min deposit, network)
- **Trust row**: payout speed, crypto, years established (partly there — make it richer)
- Keep the new **gold Claim CTA**; A/B test copy ("Claim Bonus" vs "Get $2,000 Bonus")
- Add a lightweight **bonus calculator** ("how much rake to clear $X") — great engagement + shareable

---

## 7. Off-page SEO & link building

- **Digital PR / linkbait:** publish a **data study** (e.g., "Real cashable value of every poker bonus, ranked" or "US online poker legality tracker") — earns editorial links
- **Niche placements:** poker forums (2+2, Reddit r/poker within rules), gambling directories, guest posts on poker blogs
- **Brand citations:** consistent NAP, business listings, social profiles (X, YouTube, maybe Discord)
- **Video:** short YouTube reviews/deposit walkthroughs embedded on pages (video SEO + dwell time)
- **Affiliate manager relationships:** negotiate **exclusive bonus codes/offers** — unique offers = unique content + better conversion + a linkable hook
- Prioritize **relevance and authority** over volume; avoid spammy link networks (gambling gets scrutinized)

---

## 8. Compliance & legal (do early — protects the domain)

- [ ] **Privacy Policy** (required once you run analytics/cookies)
- [ ] **Cookie consent banner** (GDPR for any EU visitors, plus best practice)
- [ ] **Terms of Use**
- [ ] **Affiliate/advertising disclosure** (FTC) — clear and near ranking content
- [ ] **Age gating** — 18+ (US) / 19+ in some Canadian provinces; make age + RG messaging prominent
- [ ] Responsible gambling ✅ (keep helpline info current)
- [ ] Never fake reviews/ratings in schema — Google can penalize; use only genuine editorial ratings

---

## 9. Measurement & tooling

| Need | Tool (free/low-cost) |
|------|----------------------|
| Indexing & queries | Google Search Console, Bing Webmaster |
| Traffic & events | GA4 or Plausible/Umami |
| Rank tracking | Ahrefs/SEMrush, or free (SERPRobot, GSC) |
| Site audit | PageSpeed Insights, Screaming Frog (free ≤500 URLs) |
| Conversion | Affiliate dashboards + `/go/` click events |

**KPIs:** organic clicks/impressions (GSC), keyword rankings, `/go/` click-through rate, affiliate signups/FTDs, Core Web Vitals, indexed-page count.

---

## 10. 90-day action plan

**Weeks 1–2 (foundation & trust)**
GSC + Bing + analytics · privacy/cookie/disclosure/contact pages · author + editorial policy · visible "last updated" dates · real logos/favicons.

**Weeks 3–6 (money pages)**
No-deposit · rakeback · crypto · "US players accepted" hub · deepen the 5 reviews with screenshots + walkthroughs + FAQ · internal-link the hub-and-spoke.

**Weeks 7–12 (authority & scale)**
Comparison pages · US state hub + CA provinces · payment guides · launch blog cadence + strategy hub · begin digital-PR/link-building · negotiate exclusive offers.

**Ongoing monthly**
Refresh bonus codes/terms + "updated" dates · publish 4–8 posts/month · monitor GSC and fix decaying pages · build 3–5 quality links/month · A/B test CTAs.

---

### Quick wins I can implement in the codebase now
1. "Last updated" dates on all money pages (freshness signal)
2. Privacy Policy, Terms, Cookie consent, Affiliate Disclosure, Contact pages
3. Author/E-E-A-T byline + editorial-policy page + author JSON-LD
4. Analytics + `/go/` click-tracking hook
5. The three high-intent pages: **No-Deposit**, **Rakeback**, **Crypto Poker**

Say the word and I'll start with #1–#5.
