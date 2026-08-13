import Link from "next/link";
import { operators } from "@/lib/operators";
import JsonLd from "../components/JsonLd";
import { Breadcrumbs, Faq } from "../components/ui";

export const metadata = {
  title: { absolute: "How to Claim a Poker Bonus — Step-by-Step 2026" },
  description:
    "A step-by-step guide to claiming an online poker welcome bonus: pick a room, enter your bonus code, deposit and clear the bonus with rake.",
  alternates: { canonical: "/how-to-claim/" },
};

const steps = [
  {
    title: "Choose the right room for how you play",
    body: "Tournament and volume players should target the biggest match and rakeback (Americas Cardroom). Cash-game players usually get more from soft tables and weekly rakeback (BetOnline, TigerGaming, SportsBetting.ag). Compare all five on our best bonuses page first.",
  },
  {
    title: "Create your account",
    body: "Register with accurate details — you'll need them to verify your identity and withdraw later. Using a mismatched name or address is the most common reason payouts get delayed.",
  },
  {
    title: "Enter the bonus code",
    body: "This is the step people miss. Most rooms require you to type the bonus code in the cashier when you make your first deposit — for example WELCOME100 at ACR or POKER1000 at BetOnline. Enter it exactly as shown before you confirm the deposit.",
  },
  {
    title: "Make your first deposit",
    body: "Meet the minimum (as low as $25 at Black Chip). Crypto — Bitcoin, Ethereum, Litecoin or USDT — is the fastest and cheapest method and makes withdrawals much quicker down the line. Only deposit what you can comfortably afford to play with.",
  },
  {
    title: "Play real-money poker to release the bonus",
    body: "The bonus is credited as 'pending' and unlocks in increments as you generate rake — for example $5 per $50 of rake at the Chico rooms, or $1 per 27.5 Award Points on WPN. Play within the time limit (30–60 days) to unlock as much as you can.",
  },
  {
    title: "Withdraw your cleared funds",
    body: "Once bonus cash is released it behaves like the rest of your balance. Cash out with the same method where possible — crypto withdrawals are typically processed within 24 hours. Complete any identity verification promptly to avoid delays.",
  },
];

const faqs = [
  {
    q: "What happens if I forget to enter the bonus code?",
    a: "You'll usually miss the offer. Most rooms apply the welcome bonus only when the code is entered during your first deposit. If you forget, contact support immediately — some sites can apply it manually before you've played, but there's no guarantee. Always enter the code before confirming the deposit.",
  },
  {
    q: "How long do I have to clear a poker bonus?",
    a: "Typically 30 days at the Chico rooms (BetOnline, TigerGaming, SportsBetting.ag) and up to 60 days on the Winning Poker Network (ACR, Black Chip). Any bonus you haven't unlocked when the clock runs out is forfeited, so pick a deposit and bonus size you can realistically clear.",
  },
  {
    q: "Do I keep winnings made with bonus money?",
    a: "Yes. As the bonus releases into your cashable balance, it and any winnings are yours to withdraw, subject to the room's standard terms. The bonus itself just unlocks gradually rather than all at once.",
  },
  {
    q: "Is my deposit safe?",
    a: "The rooms we feature have long operating histories and established payment processing. Still, only deposit what you can afford to play with, use crypto for the fastest banking, and complete identity verification early so withdrawals are smooth.",
  },
];

export default function HowToClaimPage() {
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Claim an Online Poker Bonus",
    description:
      "Step-by-step guide to claiming an online poker welcome bonus, from choosing a room to withdrawing cleared funds.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
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
      <JsonLd data={[howToLd, faqLd]} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How to Claim" }]} />
          <h1>How to Claim an Online Poker Bonus</h1>
          <p className="lead">
            Claiming a poker bonus takes about five minutes. Follow these six steps to make sure your
            bonus applies correctly and clears as fast as possible.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step" key={i}>
                <div className="num">{i + 1}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p style={{ marginBottom: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="callout warn" style={{ marginTop: 32 }}>
            <strong>Don&apos;t skip the code.</strong> The single most common mistake is depositing
            without entering the bonus code. Type it into the cashier <em>before</em> you confirm your
            first deposit.
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <h2 className="center" style={{ marginBottom: 22 }}>Bonus Codes at a Glance</h2>
          <div className="table-wrap">
            <table className="cmp">
              <thead>
                <tr><th>Poker Site</th><th>Bonus</th><th>Code</th><th>Min Deposit</th></tr>
              </thead>
              <tbody>
                {operators.map((op) => (
                  <tr key={op.slug}>
                    <td style={{ fontWeight: 700 }}>{op.name}</td>
                    <td>{op.matchPercent}% up to ${op.maxBonus.toLocaleString()}</td>
                    <td>{op.bonusCode ? <span className="code-pill">{op.bonusCode}</span> : <span className="muted">None</span>}</td>
                    <td>${op.minDeposit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="center" style={{ marginBottom: 24 }}>Claiming a Bonus — FAQ</h2>
          <Faq items={faqs} />
          <div className="center" style={{ marginTop: 30 }}>
            <Link href="/best-poker-bonuses/" className="btn btn-primary">Pick your bonus →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
