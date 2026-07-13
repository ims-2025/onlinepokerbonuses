import Link from "next/link";
import { operators, usd } from "@/lib/operators";
import { LogoMark, Rating } from "./ui";

export default function ComparisonTable() {
  return (
    <div className="table-wrap">
      <table className="cmp">
        <thead>
          <tr>
            <th>#</th>
            <th>Poker Site</th>
            <th>Welcome Bonus</th>
            <th>Bonus Code</th>
            <th>Min Deposit</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {operators.map((op, i) => (
            <tr key={op.slug}>
              <td className="rank-num">{i + 1}</td>
              <td>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <LogoMark op={op} size={38} />
                  <div>
                    <div style={{ fontWeight: 700 }}>{op.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>{op.network}</div>
                  </div>
                </div>
              </td>
              <td style={{ fontWeight: 700 }}>
                {op.matchPercent}% up to {usd(op.maxBonus)}
              </td>
              <td>
                {op.bonusCode ? <span className="code-pill">{op.bonusCode}</span> : <span className="muted">None</span>}
              </td>
              <td>{usd(op.minDeposit)}</td>
              <td><Rating value={op.rating} /></td>
              <td>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <a
                    className="btn btn-gold btn-sm"
                    href={op.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                  >
                    Claim
                  </a>
                  <Link className="btn btn-ghost btn-sm" href={`/reviews/${op.slug}/`}>
                    Review
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
