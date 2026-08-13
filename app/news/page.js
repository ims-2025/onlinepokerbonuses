import { articles, formatDate } from "@/lib/news";
import { site } from "@/lib/site";
import NewsCard from "../components/NewsCard";
import JsonLd from "../components/JsonLd";
import { Breadcrumbs } from "../components/ui";

export const metadata = {
  title: { absolute: "Poker News & Bonus Updates 2026 — US & Canada" },
  description:
    "The latest online poker news, bonus updates, tournament coverage and strategy for US & Canada players — fresh analysis every day.",
  alternates: { canonical: "/news/" },
};

export default function NewsHub() {
  const [featured, ...rest] = articles;

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Poker News & Bonus Updates",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${site.url}/news/${a.slug}/`,
      name: a.title,
    })),
  };

  return (
    <>
      <JsonLd data={itemListLd} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News" }]} />
          <span className="eyebrow">Updated {formatDate(featured.date)}</span>
          <h1>Poker News &amp; Bonus Updates</h1>
          <p className="lead">
            Fresh coverage of online poker bonuses, tournament series, crypto banking and the US &amp;
            Canada market — written to help you get more value from every deposit.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="grid grid-3">
            <NewsCard article={featured} featured />
            {rest.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="card center" style={{ background: "linear-gradient(135deg, rgba(22,199,132,0.12), rgba(245,196,81,0.08))" }}>
            <h2 style={{ marginBottom: 10 }}>Ready to claim a welcome bonus?</h2>
            <p className="lead" style={{ margin: "0 auto 20px" }}>
              Compare every offer for US and Canada players, ranked by real cashable value.
            </p>
            <a href="/best-poker-bonuses/" className="btn btn-primary">See the best poker bonuses →</a>
          </div>
        </div>
      </section>
    </>
  );
}
