import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ marginBottom: 14 }}>
              <span className="spade" aria-hidden="true">♠</span>
              OnlinePokerBonuses
            </Link>
            <p className="muted" style={{ fontSize: "0.92rem", maxWidth: 320 }}>
              Independent reviews and exclusive bonus comparisons for online poker players in the
              US and Canada. Play smart, play responsibly.
            </p>
          </div>
          {footerNav.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="disclaimer muted">
            <span className="age-badge">
              <span className="ring">18+</span>
            </span>{" "}
            Gambling can be addictive. Please play responsibly and only wager what you can afford to
            lose. Bonus offers are subject to each operator&apos;s terms and conditions — always
            confirm current terms, eligibility and legality in your jurisdiction before playing.
            OnlinePokerBonuses.com may earn a commission from operators listed on this site, which
            never affects our rankings or reviews. If you or someone you know has a gambling problem,
            call 1-800-GAMBLER (US) or ConnexOntario 1-866-531-2600 (Canada).
          </p>
          <p className="muted" style={{ marginBottom: 0 }}>
            © {year} {site.name}. All rights reserved. ·{" "}
            <Link href="/responsible-gambling/">Responsible Gambling</Link> ·{" "}
            <Link href="/about/">About</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
