import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs } from "../components/ui";

export const metadata = {
  title: { absolute: "About Us — Independent Poker Bonus Reviews" },
  description:
    "How OnlinePokerBonuses.com reviews and ranks online poker bonuses for US and Canada players, our editorial standards, and how we make money.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <section className="page-hero" style={{ paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
        <h1>About OnlinePokerBonuses.com</h1>
        <div className="prose">
          <p className="lead">
            We help online poker players in the US and Canada find bonuses that are actually worth
            claiming — and skip the ones that aren&apos;t.
          </p>

          <h2>What we do</h2>
          <p>
            The online poker world is full of &ldquo;up to $X&rdquo; banners that look generous but
            are nearly impossible to clear. We cut through the marketing by breaking down every offer
            on its real, cashable value: how the bonus releases, how much rake it takes, the time
            limit, and the ongoing rakeback. Our goal is simple — tell you what a bonus is genuinely
            worth before you deposit.
          </p>

          <h2>How we review</h2>
          <p>
            Every room is scored on the same criteria: cashable bonus value, clearing difficulty,
            ongoing rakeback, game traffic and softness, banking and payout speed, and overall
            reputation. We only rank rooms that reliably pay their players and accept US and Canada
            traffic. Codes and terms are re-checked regularly, because operators change offers often.
          </p>

          <h2>How we make money</h2>
          <p>
            OnlinePokerBonuses.com is free to use. When you sign up to a poker room through one of our
            links, we may earn a commission from the operator. This never changes our rankings, our
            scores or what we write — a site cannot pay to rank higher, and we&apos;ll always tell you
            when an offer isn&apos;t the best value. Our reviews are our own.
          </p>

          <h2>Play responsibly</h2>
          <p>
            Poker should be fun and affordable entertainment, never a way to make money or chase
            losses. We ask every reader to set limits, play within their means, and treat bonuses as a
            small boost — not a reason to deposit more than they can afford. If gambling stops being
            fun, please step away and reach out for support.{" "}
            <Link href="/responsible-gambling/">See our responsible gambling resources</Link>.
          </p>

          <div className="callout warn">
            <strong>Get in touch.</strong> Questions, corrections or feedback? Email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </div>
        </div>
      </div>
    </section>
  );
}
