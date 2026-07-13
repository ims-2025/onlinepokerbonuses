// Small shared presentational helpers (server components).
import Link from "next/link";

export function LogoMark({ op, size = 46 }) {
  const initials = op.shortName
    .replace(/\.[a-z]+$/i, "")
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className="logo-mark"
      aria-hidden="true"
      style={{ width: size, height: size, background: op.brandColor }}
    >
      {initials}
    </span>
  );
}

export function Rating({ value, showNum = true }) {
  const pct = `${(value / 5) * 100}%`;
  return (
    <span className="rating">
      <span className="stars" role="img" aria-label={`${value} out of 5 stars`}>
        <span style={{ width: pct }} />
      </span>
      {showNum && <span className="rating-num">{value.toFixed(1)}</span>}
    </span>
  );
}

export function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={i} style={{ margin: 0 }}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : <span style={{ margin: 0, color: "var(--text-2)" }}>{item.label}</span>}
          {i < items.length - 1 && <span>›</span>}
        </span>
      ))}
    </nav>
  );
}

export function Faq({ items }) {
  return (
    <div>
      {items.map((f, i) => (
        <details className="faq-item" key={i}>
          <summary>{f.q}</summary>
          <div className="faq-body">
            {Array.isArray(f.a) ? f.a.map((p, j) => <p key={j}>{p}</p>) : <p>{f.a}</p>}
          </div>
        </details>
      ))}
    </div>
  );
}
