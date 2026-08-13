import Link from "next/link";
import { operators, usd } from "@/lib/operators";
import { site } from "@/lib/site";
import ComparisonTable from "../components/ComparisonTable";
import OfferCard from "../components/OfferCard";
import JsonLd from "../components/JsonLd";
import { Breadcrumbs, LogoMark, Rating } from "../components/ui";

export const metadata = {
  title: { absolute: "Best Online Poker Bonuses 2026 — Ranked & Compared" },
  description:
    "The 5 best online poker bonuses for 2026, ranked by real value — compare welcome matches up to $2,000, bonus codes and rakeback for US & Canada.",
  alternates: { canonical: "/best-poker-bonuses/" },
};

export default function BestBonusesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Best Poker Bonuses", item: `${site.url}/best-poker-bonuses/` },
    ],
  };
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Online Poker Bonuses 2026",
    itemListElement: operators.map((op, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/reviews/${op.slug}/`,
      name: `${op.name} — ${op.matchPercent}% up to ${usd(op.maxBonus)}`,
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbLd, itemListLd]} />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Best Poker Bonuses" }]} />
          <span className="eyebrow">Updated {site.updated}</span>
          <h1>Best Online Poker Bonuses of 2026</h1>
          <p className="lead">
            We compared every major US- and Canada-facing poker room on the value that actually
            matters — match size, how easily the bonus clears, rake required and ongoing rakeback.
            Here are the five that came out on top.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <ComparisonTable />
          <p className="muted center" style={{ fontSize: "0.85rem", marginTop: 14 }}>
            Offers and codes verified {site.updated}. Always confirm current terms on the operator&apos;s
            site. 18+. Play responsibly.
          </p>
        </div>
      </section>

      {/* Detailed ranked breakdown */}
      <section className="section">
        <div className="container">
          <h2 className="center" style={{ marginBottom: 34 }}>The Rankings, Reviewed</h2>
          <div className="grid" style={{ gap: 26 }}>
            {operators.map((op, i) => (
              <article key={op.slug} className="card">
                <div className="grid grid-2" style={{ gap: 30, alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                      <span className="rank-num" style={{ fontSize: "1.6rem" }}>#{i + 1}</span>
                      <LogoMark op={op} />
                      <div>
                        <h3 style={{ margin: 0 }}>{op.name}</h3>
                        <div style={{ fontSize: "0.82rem", color: "var(--text-3)" }}>
                          {op.network} · Est. {op.established}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                      <Rating value={op.rating} />
                      {op.editorTag && <span className="badge">{op.editorTag}</span>}
                    </div>
                    <p>{op.review}</p>
                    <p style={{ marginBottom: 0 }}>
                      <strong style={{ color: "var(--text)" }}>Best for:</strong> {op.bestFor}
                    </p>
                  </div>

                  <div className="card" style={{ background: "var(--bg-2)" }}>
                    <div className="offer-headline" style={{ fontSize: "1.7rem" }}>
                      <span>{op.matchPercent}%</span> up to {usd(op.maxBonus)}
                    </div>
                    <div className="offer-meta">
                      <span className="chip">Min {usd(op.minDeposit)}</span>
                      <span className="chip">{op.clearingDays}-day clear</span>
                      {op.rakebackUpTo && <span className="chip">{op.rakebackUpTo}% rakeback</span>}
                    </div>
                    <p style={{ fontSize: "0.94rem" }}>{op.clearingText}</p>
                    <div className="offer-actions" style={{ marginTop: 8 }}>
                      <a className="btn btn-gold btn-cta btn-block" href={op.affiliateUrl} target="_blank" rel="nofollow sponsored noopener">
                        Claim Bonus →
                      </a>
                      <div className="offer-code">
                        {op.bonusCode ? <>Code: <span className="code-pill">{op.bonusCode}</span></> : "No code required"}
                      </div>
                      <Link href={`/reviews/${op.slug}/`} className="btn btn-ghost btn-sm btn-block">
                        Full {op.shortName} review
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-tight">
        <div className="container" style={{ maxWidth: 820 }} >
          <div className="card prose">
            <h2 style={{ marginTop: 0 }}>How We Rank Poker Bonuses</h2>
            <p>
              Every offer on this page is scored on the same criteria so you can compare like for
              like:
            </p>
            <ul>
              <li><strong style={{ color: "var(--text)" }}>Cashable value</strong> — the realistic amount an average player will actually unlock, not the headline maximum.</li>
              <li><strong style={{ color: "var(--text)" }}>Clearing difficulty</strong> — how much rake is required and how long you have to generate it.</li>
              <li><strong style={{ color: "var(--text)" }}>Ongoing rakeback</strong> — long-term value often beats a one-time bonus.</li>
              <li><strong style={{ color: "var(--text)" }}>Game traffic &amp; softness</strong> — a bonus is only useful where there are beatable games to play.</li>
              <li><strong style={{ color: "var(--text)" }}>Banking &amp; payouts</strong> — deposit options, crypto support and how fast withdrawals land.</li>
              <li><strong style={{ color: "var(--text)" }}>Reputation &amp; safety</strong> — track record of paying players and accepting US/Canada traffic.</li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              We re-check codes and terms regularly, but operators can change offers at any time —
              always confirm the current deal in the site&apos;s cashier before depositing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
