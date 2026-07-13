import Link from "next/link";
import { operators } from "@/lib/operators";
import { site } from "@/lib/site";
import OfferCard from "../components/OfferCard";
import JsonLd from "../components/JsonLd";
import { Breadcrumbs, Faq } from "../components/ui";

export const metadata = {
  title: "Best Canada Online Poker Bonuses 2026 — For Canadian Players",
  description:
    "The best online poker bonuses for Canadian players in 2026. CAD-friendly rooms, welcome offers up to $2,000, fast crypto payouts and how online poker works across Canada.",
  alternates: { canonical: "/canada/" },
};

const faqs = [
  {
    q: "Is online poker legal in Canada?",
    a: "Playing online poker is widely accessible across Canada. Ontario has a regulated iGaming market, and several provinces run their own platforms, but Canadians also legally play at licensed offshore rooms — which is where the sites we review operate. Rules vary by province and territory, so check your local regulations.",
  },
  {
    q: "Which poker sites are best for Canadian players?",
    a: "All five rooms we rank accept Canadian players: Americas Cardroom, BetOnline Poker, Black Chip Poker, TigerGaming and SportsBetting.ag. ACR and Black Chip offer the biggest bonus ($2,000), while the Chico rooms deliver soft cash games plus weekly rakeback.",
  },
  {
    q: "Can I deposit in Canadian dollars?",
    a: "Most offshore rooms hold balances in US dollars, so a Canadian card deposit is converted at the point of payment. To avoid conversion fees and speed up payouts, many Canadian players use cryptocurrency (Bitcoin, Ethereum, Litecoin, USDT), which is fast and borderless.",
  },
  {
    q: "How fast are payouts for Canadian players?",
    a: "Crypto is the quickest route — withdrawals are commonly processed within 24 hours at the rooms we cover, and as fast as an hour at Americas Cardroom. Card and bank-based payouts take longer, which is why crypto is the popular choice north of the border too.",
  },
];

export default function CanadaPage() {
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Canada" }]} />
          <span className="badge">🇨🇦 Canada</span>
          <h1 style={{ marginTop: 14 }}>Best Canada Online Poker Bonuses</h1>
          <p className="lead">
            Canadian players have access to the same top offshore rooms as the US — and the same big
            welcome bonuses. Here are the best offers for players in Canada in 2026, with CAD-friendly
            banking and fast crypto payouts.
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
            <h2>Online poker in Canada</h2>
            <p>
              Canadians enjoy some of the easiest access to online poker anywhere. Ontario launched a
              regulated iGaming market that brought major international operators onshore, and several
              provinces run their own gaming platforms. Alongside these, Canadian players have long
              played at licensed offshore rooms — the international sites we review — which accept
              players from every province and territory.
            </p>
            <div className="callout warn">
              <strong>Provincial rules differ.</strong> Regulation varies across Canada and continues
              to evolve. Confirm the rules that apply where you live before depositing.
            </div>

            <h2>Deposits, CAD and crypto</h2>
            <p>
              Most offshore rooms settle in US dollars, so a Canadian-card deposit is converted at
              payment time and may carry a small FX fee. That is why many Canadian players prefer
              cryptocurrency: Bitcoin, Ethereum, Litecoin and USDT move instantly, avoid bank
              friction, and cash out far faster than card or wire withdrawals. A crypto withdrawal is
              typically in your wallet within a day.
            </p>

            <h2>Best picks for Canadian players</h2>
            <p>
              For the biggest bonus and the largest tournament guarantees, <Link href="/reviews/americas-cardroom/">Americas
              Cardroom</Link> leads at 100% up to $2,000. For soft cash games and guaranteed weekly
              rakeback, <Link href="/reviews/betonline-poker/">BetOnline Poker</Link> is our
              best all-round pick, with sister sites <Link href="/reviews/tigergaming/">TigerGaming</Link>{" "}
              and <Link href="/reviews/sportsbetting-ag/">SportsBetting.ag</Link> sharing the same
              soft Chico pool.
            </p>
          </div>

          <div style={{ marginTop: 36 }}>
            <h2 className="center" style={{ marginBottom: 24 }}>Canada Poker Bonus FAQ</h2>
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card center" style={{ background: "linear-gradient(135deg, rgba(22,199,132,0.12), rgba(245,196,81,0.08))" }}>
            <h2 style={{ marginBottom: 10 }}>Compare every offer side by side</h2>
            <p className="lead" style={{ margin: "0 auto 20px" }}>
              See all five poker bonuses ranked by real value.
            </p>
            <Link href="/best-poker-bonuses/" className="btn btn-primary">Best poker bonuses →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
