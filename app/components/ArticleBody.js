// Renders an article `body` array (block objects) into React.
// Supported blocks: { h2 }, { h3 }, { p }, { ul: [...] }, { ol: [...] }, { quote }, { cta: {text, href, label} }
// Inline markdown inside text: [label](/internal/) and **bold**.
import Link from "next/link";

function renderInline(text, keyPrefix = "i") {
  const nodes = [];
  // Split on links first, then bold within.
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m;
  let idx = 0;
  const pushText = (str) => {
    // handle **bold**
    const parts = str.split(/(\*\*[^*]+\*\*)/g);
    parts.forEach((p) => {
      if (!p) return;
      if (p.startsWith("**") && p.endsWith("**")) {
        nodes.push(<strong key={`${keyPrefix}-b-${idx++}`}>{p.slice(2, -2)}</strong>);
      } else {
        nodes.push(<span key={`${keyPrefix}-t-${idx++}`}>{p}</span>);
      }
    });
  };
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) pushText(text.slice(last, m.index));
    const [, label, href] = m;
    const internal = href.startsWith("/");
    if (internal) {
      nodes.push(
        <Link key={`${keyPrefix}-l-${idx++}`} href={href}>
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a key={`${keyPrefix}-l-${idx++}`} href={href} target="_blank" rel="nofollow noopener">
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) pushText(text.slice(last));
  return nodes;
}

export default function ArticleBody({ body }) {
  return (
    <div className="prose article-prose">
      {body.map((block, i) => {
        if (block.h2) return <h2 key={i}>{renderInline(block.h2, `h2-${i}`)}</h2>;
        if (block.h3) return <h3 key={i}>{renderInline(block.h3, `h3-${i}`)}</h3>;
        if (block.p) return <p key={i}>{renderInline(block.p, `p-${i}`)}</p>;
        if (block.quote)
          return (
            <blockquote key={i} className="article-quote">
              {renderInline(block.quote, `q-${i}`)}
            </blockquote>
          );
        if (block.ul)
          return (
            <ul key={i}>
              {block.ul.map((li, j) => (
                <li key={j}>{renderInline(li, `ul-${i}-${j}`)}</li>
              ))}
            </ul>
          );
        if (block.ol)
          return (
            <ol key={i}>
              {block.ol.map((li, j) => (
                <li key={j}>{renderInline(li, `ol-${i}-${j}`)}</li>
              ))}
            </ol>
          );
        if (block.cta)
          return (
            <div key={i} className="callout" style={{ borderLeftColor: "var(--gold)" }}>
              {block.cta.text && <p style={{ marginBottom: 12 }}>{renderInline(block.cta.text, `cta-${i}`)}</p>}
              <a
                className="btn btn-gold btn-cta"
                href={block.cta.href}
                {...(block.cta.href.startsWith("/") ? {} : { target: "_blank", rel: "nofollow sponsored noopener" })}
              >
                {block.cta.label}
              </a>
            </div>
          );
        return null;
      })}
    </div>
  );
}
