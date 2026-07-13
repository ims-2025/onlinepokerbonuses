import Link from "next/link";
import { operators, usd } from "@/lib/operators";
import { site } from "@/lib/site";
import OfferCard from "./components/OfferCard";
import ComparisonTable from "./components/ComparisonTable";
import JsonLd from "./components/JsonLd";
import { Faq } from "./components/ui";

export const metadata = {
  title: "Best Online Poker Bonuses 2026 — US & Canada",
  description:
    "Compare the best online poker bonuses for 2026. Exclusive welcome offers up to $2,000, bonus codes and rakeback deals for US and Canadian players, ranked by real value.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    q: "What is the best online poker bonus right now?",
    a: "Americas Cardroom leads our 2026 rankings with a 100% first-deposit match up to $2,000 (code WELCOME100), the largest welcome bonus among US- and Canada-facing sites. For soft cash games plus guaranteed weekly rakeback, BetOnline Poker's 100% up to $1,000 is our best all-round pick.",
  },
  {
    q: "How do online poker welcome bonuses work?",
    a: "A welcome bonus matches a percentage of your first deposit — usually 100% — up to a maximum amount. The bonus money is not instantly cashable: it releases into your balance gradually as you play real-money poker and generate rake. The more you play, the more of the bonus you unlock, up to the offer's time limit.",
  },
  {
    q: "Do I need a bonus code to claim these offers?",
    a: "Most sites require you to enter a bonus code in the cashier when you make your first deposit. We list the current code beside each offer — for example WELCOME100 at Americas Cardroom or POKER1000 at BetOnline. Enter it exactly as shown before you deposit to lock in the match.",
  },
  {
    q: "Are these poker sites legal in the US and Canada?",
    a: "The rooms we feature operate offshore and accept players from most US states and across Canada. Online gambling laws vary by state, province and territory, so it is your responsibility to confirm that real-money online poker is legal where you live before you play. When in doubt, check your local regulations.",
  },
  {
    q: "What is rakeback and why does it matter?",
    a: "Rakeback returns a percentage of the rake (the small fee the site takes from each pot or tournament) back to you. Over time it can be worth far more than a one-time welcome bonus. ACR and Black Chip offer up to 65% through Elite Benefits, while the Chico rooms (BetOnline, TigerGaming, SportsBetting.ag) pay guaranteed weekly rakeback in cash.",
  },
  {
    q: "How do you rank and review poker bonuses?",
    a: "We weigh the real, cashable value of each offer — match size, how easily it clears, the rake required, time limits, and ongoing rakeback — alongside game traffic, banking speed and site reputation. We only rank rooms that reliably pay out and accept US and Canada players.",
  },
];

export default function HomePage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Online Poker Bonuses 2026",
    itemListElement: operators.map((op, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${op.name} — ${op.matchPercent}% up to ${usd(op.maxBonus)}`,
      url: `${site.url}/reviews/${op.slug}/`,
    })),
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[itemListLd, faqLd]} />

      {/* HERO */}
      <section className="hero">
        <div className="container center">
          <span className="eyebrow">Updated {site.updated} · US &amp; Canada</span>
          <h1>
            The Best Online Poker
            <br /> Bonuses of 2026
          </h1>
          <p className="lead">
            Hand-picked welcome offers up to <strong style={{ color: "var(--text)" }}>$2,000</strong>,
            exclusive bonus codes and the best rakeback deals — reviewed and ranked by real cashable
            value for players in the USA and Canada.
          </p>
          <div className="hero-cta">
            <Link href="/best-poker-bonuses/" className="btn btn-primary">
              See Top 5 Bonuses ↓
            </Link>
            <Link href="/how-to-claim/" className="btn btn-ghost">
              How to Claim
            </Link>
          </div>
          <div className="trust-row">
            <span><strong>5</strong> vetted poker rooms</span>
            <span><strong>$2,000</strong> top welcome match</span>
            <span><strong>65%</strong> max rakeback</span>
            <span><strong>Crypto</strong> fast payouts</span>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section-tight" id="top">
        <div className="container">
          <div className="center" style={{ marginBottom: 28 }}>
            <span className="eyebrow">At a glance</span>
            <h2>Top Poker Bonuses Compared</h2>
            <p className="lead">
              Our five top-rated poker rooms for US and Canadian players, ranked by overall bonus
              value.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* OFFER CARDS */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <span className="eyebrow">Full breakdown</span>
            <h2>2026&apos;s Best Poker Bonus Offers</h2>
          </div>
          <div className="grid grid-3">
            {operators.map((op, i) => (
              <OfferCard key={op.slug} op={op} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="section-tight">
        <div className="container">
          <div className="stat-strip card" style={{ padding: "10px 0" }}>
            <div className="stat"><div className="n">100%</div><div className="l">Independent reviews</div></div>
            <div className="stat"><div className="n">Exclusive</div><div className="l">Bonus codes</div></div>
            <div className="stat"><div className="n">US + CA</div><div className="l">Players accepted</div></div>
            <div className="stat"><div className="n">2026</div><div className="l">Verified &amp; current</div></div>
          </div>
        </div>
      </section>

      {/* HOW WE RANK */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "center", gap: 40 }}>
          <div>
            <span className="eyebrow">Why trust us</span>
            <h2>Ranked by real value, not the biggest headline number</h2>
            <p>
              A flashy &ldquo;up to $2,000&rdquo; banner means nothing if the bonus is impossible to
              clear. We break down exactly how each offer releases — the rake required, the time
              limit, and the ongoing rakeback — so you know what the bonus is actually worth before
              you deposit.
            </p>
            <ul className="checklist">
              <li>Real cashable value, not marketing headlines</li>
              <li>Clearing terms and rake requirements explained in plain English</li>
              <li>Only rooms that reliably pay out and accept US &amp; Canada players</li>
              <li>Codes and terms re-checked and updated regularly</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <Link href="/best-poker-bonuses/" className="btn btn-primary">
                Compare all bonuses
              </Link>
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>How a $1,000 bonus really clears</h3>
            <p style={{ fontSize: "0.96rem" }}>
              Take a typical 100% up to $1,000 Chico offer. It releases at $5 for every $50 of rake
              you generate, within 30 days:
            </p>
            <ul className="checklist" style={{ fontSize: "0.96rem" }}>
              <li><strong style={{ color: "var(--text)" }}>Deposit $1,000</strong> → $1,000 bonus pending</li>
              <li>Generate $50 rake → <strong style={{ color: "var(--brand)" }}>$5 released</strong></li>
              <li>Generate $5,000 rake → <strong style={{ color: "var(--brand)" }}>$500 released</strong></li>
              <li>Full bonus needs $10,000 rake in 30 days</li>
            </ul>
            <div className="callout warn" style={{ margin: "18px 0 0" }}>
              <strong>Takeaway:</strong> match your deposit and bonus to how much you actually plan to
              play. Volume players should chase the biggest match; casual players get more from soft
              games and weekly rakeback.
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRY SPLIT */}
      <section className="section-tight">
        <div className="container grid grid-2">
          <div className="card card-hover">
            <span className="badge">🇺🇸 United States</span>
            <h3 style={{ marginTop: 14 }}>Poker Bonuses for US Players</h3>
            <p>
              Where online poker stands state by state, which offshore rooms accept US players, and
              how to bank fast with crypto.
            </p>
            <Link href="/usa/" className="btn btn-ghost btn-sm">US poker guide →</Link>
          </div>
          <div className="card card-hover">
            <span className="badge">🇨🇦 Canada</span>
            <h3 style={{ marginTop: 14 }}>Poker Bonuses for Canadian Players</h3>
            <p>
              The best CAD-friendly rooms, how deposits and payouts work in Canada, and the offers
              that give Canadian players the most value.
            </p>
            <Link href="/canada/" className="btn btn-ghost btn-sm">Canada poker guide →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="center" style={{ marginBottom: 30 }}>
            <span className="eyebrow">FAQ</span>
            <h2>Poker Bonus Questions, Answered</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-tight">
        <div className="container">
          <div className="card center" style={{ background: "linear-gradient(135deg, rgba(22,199,132,0.12), rgba(245,196,81,0.08))", borderColor: "var(--border-2)" }}>
            <h2 style={{ marginBottom: 10 }}>Ready to claim your poker bonus?</h2>
            <p className="lead" style={{ margin: "0 auto 22px" }}>
              Start with our #1 rated room, Americas Cardroom — 100% up to $2,000 with code WELCOME100.
            </p>
            <a
              className="btn btn-gold"
              href={operators[0].affiliateUrl}
              target="_blank"
              rel="nofollow sponsored noopener"
            >
              Claim $2,000 Bonus at ACR
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
