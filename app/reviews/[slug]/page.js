import Link from "next/link";
import { notFound } from "next/navigation";
import { operators, getOperator, usd } from "@/lib/operators";
import { site } from "@/lib/site";
import JsonLd from "../../components/JsonLd";
import { Breadcrumbs, LogoMark, Rating } from "../../components/ui";

export function generateStaticParams() {
  return operators.map((op) => ({ slug: op.slug }));
}

export function generateMetadata({ params }) {
  const op = getOperator(params.slug);
  if (!op) return {};
  return {
    title: `${op.name} Review 2026 — ${op.bonusHeadline} Bonus${op.bonusCode ? ` (Code ${op.bonusCode})` : ""}`,
    description: `${op.name} review for 2026: ${op.matchPercent}% up to ${usd(op.maxBonus)} welcome bonus, clearing terms, banking, pros and cons. Our verdict for US & Canada players.`,
    alternates: { canonical: `/reviews/${op.slug}/` },
  };
}

export default function ReviewPage({ params }) {
  const op = getOperator(params.slug);
  if (!op) return notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Reviews", item: `${site.url}/best-poker-bonuses/` },
      { "@type": "ListItem", position: 3, name: op.name, item: `${site.url}/reviews/${op.slug}/` },
    ],
  };
  const reviewLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: op.name,
      url: `${site.url}/reviews/${op.slug}/`,
    },
    reviewRating: { "@type": "Rating", ratingValue: op.rating, bestRating: 5 },
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    reviewBody: op.review,
  };

  const others = operators.filter((o) => o.slug !== op.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={[breadcrumbLd, reviewLd]} />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Reviews", href: "/best-poker-bonuses/" },
              { label: op.name },
            ]}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <LogoMark op={op} size={60} />
            <div>
              <h1 style={{ margin: 0 }}>{op.name} Review</h1>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
                <Rating value={op.rating} />
                {op.editorTag && <span className="badge">{op.editorTag}</span>}
                <span className="muted" style={{ fontSize: "0.9rem" }}>{op.network} · Est. {op.established}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container grid grid-2" style={{ gap: 34, alignItems: "start" }}>
          {/* Main column */}
          <div className="prose" style={{ order: 1 }}>
            <p className="lead">{op.tagline}</p>
            <p>{op.review}</p>

            <h2>The {op.shortName} welcome bonus</h2>
            <p>{op.clearingText}</p>

            <h2>Games &amp; traffic</h2>
            <p>{op.gamesTraffic}</p>

            <h2>Tournaments</h2>
            <p>{op.tournaments}</p>

            <h2>Software &amp; mobile</h2>
            <p>{op.software}</p>

            <h2>Safety, banking &amp; payouts</h2>
            <p>{op.safety}</p>
            <p>
              {op.name} supports {op.depositMethods.join(", ")}. {op.payoutSpeed}. Cryptocurrency is
              the fastest and lowest-fee way to deposit and cash out at every offshore room.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 20px" }}>
              {op.depositMethods.map((m) => <span className="chip" key={m}>{m}</span>)}
            </div>

            <h2>Pros &amp; cons</h2>
            <div className="grid grid-2" style={{ gap: 18 }}>
              <div className="card" style={{ background: "var(--bg-2)" }}>
                <strong style={{ color: "var(--brand)" }}>Pros</strong>
                <ul className="checklist" style={{ marginTop: 10 }}>
                  {op.pros.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
              <div className="card" style={{ background: "var(--bg-2)" }}>
                <strong style={{ color: "var(--danger)" }}>Cons</strong>
                <ul className="crosslist" style={{ marginTop: 10 }}>
                  {op.cons.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            </div>

            <h2>Who is {op.shortName} best for?</h2>
            <p>{op.bestFor}</p>

            <div className="callout">
              <strong style={{ color: "var(--text)" }}>Our verdict:</strong> {op.name} scores{" "}
              <strong style={{ color: "var(--gold)" }}>{op.rating.toFixed(1)}/5</strong>. {op.tagline}
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ order: 2, position: "sticky", top: 88 }}>
            <div className="card offer">
              {op.editorTag && <span className="ribbon">{op.editorTag}</span>}
              <div className="offer-top">
                <LogoMark op={op} />
                <div>
                  <div className="offer-name">{op.name}</div>
                  <div className="offer-net">{op.network}</div>
                </div>
              </div>
              <div className="offer-headline">
                <span>{op.matchPercent}%</span> up to {usd(op.maxBonus)}
              </div>
              <p className="offer-sub">{op.bonusSummary}</p>
              <div className="offer-meta">
                <span className="chip">Min {usd(op.minDeposit)}</span>
                <span className="chip">{op.clearingDays}-day clear</span>
                {op.rakebackUpTo && <span className="chip">{op.rakebackUpTo}% rakeback</span>}
                {op.noDeposit && <span className="chip">{op.noDeposit}</span>}
              </div>
              <div className="offer-actions">
                <a className="btn btn-gold btn-cta btn-block" href={op.affiliateUrl} target="_blank" rel="nofollow sponsored noopener">
                  Claim Bonus →
                </a>
                <div className="offer-code">
                  {op.bonusCode ? <>Bonus code: <span className="code-pill">{op.bonusCode}</span></> : "No code required"}
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: 18 }}>
              <h3 style={{ marginTop: 0, fontSize: "1.05rem" }}>Quick facts</h3>
              <ul className="checklist" style={{ fontSize: "0.92rem" }}>
                <li>Network: {op.network}</li>
                <li>Established: {op.established}</li>
                <li>Welcome bonus: {op.bonusHeadline}</li>
                <li>Min deposit: {usd(op.minDeposit)}</li>
                <li>Clearing window: {op.clearingDays} days</li>
                <li>Accepts US &amp; Canada players</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Other rooms */}
      <section className="section-tight">
        <div className="container">
          <h2 className="center" style={{ marginBottom: 24 }}>Compare Other Poker Bonuses</h2>
          <div className="grid grid-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/reviews/${o.slug}/`} className="card card-hover" style={{ display: "block" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <LogoMark op={o} size={40} />
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--text)" }}>{o.name}</div>
                    <Rating value={o.rating} />
                  </div>
                </div>
                <div style={{ fontWeight: 700, color: "var(--text)" }}>{o.matchPercent}% up to {usd(o.maxBonus)}</div>
                <div className="muted" style={{ fontSize: "0.88rem", marginTop: 4 }}>Read review →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
