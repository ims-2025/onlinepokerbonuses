import Link from "next/link";
import { usd } from "@/lib/operators";
import { LogoMark, Rating } from "./ui";

export default function OfferCard({ op, rank }) {
  return (
    <article className="card card-hover offer">
      {op.editorTag && <span className="ribbon">{op.editorTag}</span>}
      <div className="offer-top">
        <LogoMark op={op} />
        <div>
          <div className="offer-name">{op.name}</div>
          <div className="offer-net">{op.network}</div>
        </div>
      </div>

      <Rating value={op.rating} />

      <div className="offer-headline">
        <span>{op.matchPercent}%</span> up to {usd(op.maxBonus)}
      </div>
      <p className="offer-sub">{op.bonusSummary}</p>

      <div className="offer-meta">
        <span className="chip">Min {usd(op.minDeposit)}</span>
        <span className="chip">{op.clearingDays}-day clear</span>
        {op.rakebackUpTo && <span className="chip">Up to {op.rakebackUpTo}% rakeback</span>}
      </div>

      <div className="offer-actions">
        <a
          className="btn btn-gold btn-cta btn-block"
          href={op.affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener"
        >
          Claim Bonus →
        </a>
        <div className="offer-code">
          {op.bonusCode ? (
            <>Bonus code: <span className="code-pill">{op.bonusCode}</span></>
          ) : (
            <>No code required</>
          )}
        </div>
        <Link href={`/reviews/${op.slug}/`} className="btn btn-ghost btn-sm btn-block">
          Read Review
        </Link>
      </div>
    </article>
  );
}
