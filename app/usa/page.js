import Link from "next/link";
import { operators } from "@/lib/operators";
import { site } from "@/lib/site";
import OfferCard from "../components/OfferCard";
import JsonLd from "../components/JsonLd";
import { Breadcrumbs, Faq } from "../components/ui";

export const metadata = {
  title: "Best US Online Poker Bonuses 2026 — For American Players",
  description:
    "The best online poker bonuses for US players in 2026. Offshore rooms that accept Americans, welcome offers up to $2,000, crypto banking and state-by-state legality explained.",
  alternates: { canonical: "/usa/" },
};

const faqs = [
  {
    q: "Is online poker legal in the United States?",
    a: "It depends on your state. A handful of states (including New Jersey, Pennsylvania, Michigan, Nevada, Delaware and West Virginia) license regulated online poker. Everywhere else, players use offshore rooms like the ones we review. Online gambling law is complex and changes often — confirm the rules in your state before playing.",
  },
  {
    q: "Which poker sites accept US players?",
    a: "All five rooms we rank — Americas Cardroom, BetOnline Poker, Black Chip Poker, TigerGaming and SportsBetting.ag — accept players from most US states. Americas Cardroom and Black Chip run on the Winning Poker Network, while BetOnline, TigerGaming and SportsBetting.ag share the Chico Poker Network.",
  },
  {
    q: "What's the fastest way to deposit and cash out from the US?",
    a: "Cryptocurrency. Bitcoin, Ethereum, Litecoin and USDT are the fastest and lowest-fee options at every US-facing room, with crypto withdrawals often processed within 24 hours (and sometimes within an hour at ACR). Cards work for deposits but are slower and less reliable for cashouts.",
  },
  {
    q: "What is the biggest poker bonus available to US players?",
    a: "Americas Cardroom's 100% up to $2,000 welcome match (code WELCOME100) is the largest, tied with sister-site Black Chip Poker on the same network. The Chico rooms offer 100% up to $1,000 with softer cash games and weekly rakeback.",
  },
];

export default function USAPage() {
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
      <JsonLd data={faqLd} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "USA" }]} />
          <span className="badge">🇺🇸 United States</span>
          <h1 style={{ marginTop: 14 }}>Best US Online Poker Bonuses</h1>
          <p className="lead">
            Every room below accepts American players, pays out reliably and offers a real welcome
            bonus. Here&apos;s where US players get the most value in 2026 — plus how legality and
            banking work state to state.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="grid grid-3">
            {operators.map((op) => (
              <OfferCard key={op.slug} op={op} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="prose">
            <h2>Is online poker legal in the US?</h2>
            <p>
              There is no single national answer. A growing group of states — New Jersey,
              Pennsylvania, Michigan, Nevada, Delaware, West Virginia and Connecticut — license and
              regulate online poker directly, with more considering it each year. In every other
              state, players who want real-money games use offshore rooms that operate outside US
              jurisdiction, which is how the sites we review serve the whole country.
            </p>
            <div className="callout warn">
              <strong>Know your local law.</strong> Gambling legislation varies by state and can
              change. It is your responsibility to confirm that online poker is legal where you live
              before you deposit or play.
            </div>

            <h2>Banking: why US players use crypto</h2>
            <p>
              Because offshore rooms sit outside the US banking system, cryptocurrency has become the
              standard for American players. Bitcoin, Ethereum, Litecoin and USDT deposit instantly
              and — more importantly — cash out fast, often within 24 hours. Debit and credit cards
              can be used to deposit, but they are less reliable and much slower for withdrawals. If
              you plan to play seriously, setting up a crypto wallet is the single biggest upgrade to
              your experience.
            </p>

            <h2>Which room should US players choose?</h2>
            <p>
              If you play tournaments or grind volume, <Link href="/reviews/americas-cardroom/">Americas
              Cardroom</Link> offers the biggest guarantees and the largest bonus ($2,000). If you
              prefer soft cash games and dependable weekly rakeback, <Link href="/reviews/betonline-poker/">BetOnline
              Poker</Link> is the best all-rounder. Want the same big bonus as ACR but a lower entry
              point? <Link href="/reviews/black-chip-poker/">Black Chip Poker</Link> starts at a $25
              minimum deposit.
            </p>
          </div>

          <div style={{ marginTop: 36 }}>
            <h2 className="center" style={{ marginBottom: 24 }}>US Poker Bonus FAQ</h2>
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card center" style={{ background: "linear-gradient(135deg, rgba(22,199,132,0.12), rgba(245,196,81,0.08))" }}>
            <h2 style={{ marginBottom: 10 }}>Also playing from Canada?</h2>
            <p className="lead" style={{ margin: "0 auto 20px" }}>
              See the offers and banking options tailored to Canadian players.
            </p>
            <Link href="/canada/" className="btn btn-primary">Canada poker bonuses →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
