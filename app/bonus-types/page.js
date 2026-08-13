import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { Breadcrumbs, Faq } from "../components/ui";

export const metadata = {
  title: { absolute: "Poker Bonus Types Explained — 2026 Guide" },
  description:
    "A plain-English guide to every online poker bonus type: welcome matches, no-deposit bonuses, rakeback, reloads, freerolls and VIP rewards.",
  alternates: { canonical: "/bonus-types/" },
};

const types = [
  {
    name: "Welcome (First-Deposit) Bonus",
    tag: "Most common",
    body: "The headline offer at almost every room. The site matches a percentage of your first deposit — usually 100% — up to a maximum (from $1,000 to $2,000 at the rooms we cover). The bonus is not instantly cashable: it releases into your balance in small increments as you play real-money poker and generate rake, within a set time window (30–60 days).",
    tip: "Match your deposit to how much you'll actually play. A $2,000 bonus you can only clear $300 of is worth less than a $500 bonus you clear in full.",
  },
  {
    name: "No-Deposit Bonus",
    tag: "Free to start",
    body: "A small amount of bonus cash or tournament tickets credited just for creating an account — no deposit needed. Amounts are modest (Americas Cardroom offers $10 free with select codes) and come with playthrough conditions, but it's a genuine risk-free way to sample a room.",
    tip: "No-deposit offers are the best way to test a site's software and games before committing real money.",
  },
  {
    name: "Rakeback",
    tag: "Best long-term value",
    body: "Rake is the small fee a room takes from each real-money pot or tournament. Rakeback returns a percentage of it to you. Over months of play this is usually worth far more than any one-time welcome bonus. ACR and Black Chip pay up to 65% through Elite Benefits; the Chico rooms (BetOnline, TigerGaming, SportsBetting.ag) pay guaranteed weekly rakeback in cash.",
    tip: "If you play regularly, prioritise rakeback over the size of the welcome bonus — it compounds every week.",
  },
  {
    name: "Reload Bonus",
    tag: "For returning players",
    body: "A deposit match offered to existing players on later deposits, not just the first. Reloads are smaller than the welcome bonus (often 25–50%) and appear during promotions or around big tournament series. They're a way to top up bonus value after you've cleared your welcome offer.",
    tip: "Watch the promotions page and email offers — reloads are often time-limited.",
  },
  {
    name: "Freerolls & Tournament Tickets",
    tag: "Real prizes, no cost",
    body: "Free-to-enter tournaments with real cash or ticket prize pools. Rooms use them to reward loyalty and introduce players to their tournament schedule. WPN and Chico both run frequent freerolls, and some welcome packages include step-satellite tickets into big Sunday events.",
    tip: "Freerolls are pure upside — no buy-in, real prizes, and useful practice for MTT play.",
  },
  {
    name: "VIP & Loyalty Rewards",
    tag: "Ongoing",
    body: "Points-based programs that reward volume with cashback, milestone bonuses, exclusive freerolls and rakeback tiers. The more you play, the higher your tier and the better your ongoing return. ACR's Elite Benefits is the most developed among the rooms we review.",
    tip: "Loyalty value scales with volume — factor it in if you play more than a few times a week.",
  },
];

const faqs = [
  {
    q: "Which type of poker bonus is best?",
    a: "For casual players, a welcome bonus paired with soft games gives the most immediate value. For anyone playing regularly, rakeback is usually worth more over time because it pays on every hand you play, indefinitely — not just once.",
  },
  {
    q: "Why doesn't my bonus appear as cash right away?",
    a: "Almost all poker bonuses are 'pending' and release gradually as you generate rake. This protects the room from bonus abuse and rewards genuine play. Check each offer's rake requirement and time limit so you know how much you can realistically unlock.",
  },
  {
    q: "Can I withdraw a no-deposit bonus immediately?",
    a: "No. No-deposit bonuses come with playthrough requirements — you'll need to play a certain amount before the funds (or any winnings from them) become withdrawable. They're still valuable as a free way to try a room.",
  },
];

export default function BonusTypesPage() {
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Bonus Types" }]} />
          <h1>Types of Poker Bonuses Explained</h1>
          <p className="lead">
            Not all poker bonuses are created equal. Here&apos;s every type you&apos;ll encounter,
            what it&apos;s really worth, and how to get the most from each one.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="grid grid-2">
            {types.map((t) => (
              <article className="card card-hover" key={t.name}>
                <span className="badge">{t.tag}</span>
                <h3 style={{ marginTop: 14 }}>{t.name}</h3>
                <p style={{ fontSize: "0.98rem" }}>{t.body}</p>
                <div className="callout" style={{ margin: 0 }}>
                  <strong style={{ color: "var(--text)" }}>Tip:</strong> {t.tip}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="center" style={{ marginBottom: 24 }}>Poker Bonus Types FAQ</h2>
          <Faq items={faqs} />
          <div className="center" style={{ marginTop: 30 }}>
            <Link href="/best-poker-bonuses/" className="btn btn-primary">See the best bonuses →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
