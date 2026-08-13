import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, relatedArticles, categoryColors, formatDate } from "@/lib/news";
import { site } from "@/lib/site";
import ArticleBody from "../../components/ArticleBody";
import NewsCard from "../../components/NewsCard";
import JsonLd from "../../components/JsonLd";
import { Breadcrumbs, Faq } from "../../components/ui";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: { absolute: a.title },
    description: a.excerpt,
    alternates: { canonical: `/news/${a.slug}/` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      url: `${site.url}/news/${a.slug}/`,
      publishedTime: a.date,
      authors: [a.author],
    },
  };
}

export default function ArticlePage({ params }) {
  const a = getArticle(params.slug);
  if (!a) return notFound();
  const color = categoryColors[a.category] || "var(--brand)";
  const related = relatedArticles(a.slug, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Organization", name: a.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/favicon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/news/${a.slug}/` },
    articleSection: a.category,
    keywords: (a.tags || []).join(", "),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "News", item: `${site.url}/news/` },
      { "@type": "ListItem", position: 3, name: a.title, item: `${site.url}/news/${a.slug}/` },
    ],
  };
  const faqLd = a.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: a.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: Array.isArray(f.a) ? f.a.join(" ") : f.a },
    })),
  };

  return (
    <>
      <JsonLd data={[articleLd, breadcrumbLd, ...(faqLd ? [faqLd] : [])]} />

      <section className="article-header">
        <div className="container" style={{ maxWidth: 800 }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News", href: "/news/" }, { label: a.category }]} />
          <span className="article-cat" style={{ background: color }}>{a.category}</span>
          <h1>{a.title}</h1>
          <p className="lead">{a.excerpt}</p>
          <div className="article-byline">
            <span className="author">{a.author}</span>
            <span>·</span>
            <time dateTime={a.date}>Published {formatDate(a.date)}</time>
            <span>·</span>
            <span>{a.readingTime} min read</span>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container" style={{ maxWidth: 800 }}>
          <ArticleBody body={a.body} />

          {a.faq && a.faq.length > 0 && (
            <div style={{ marginTop: 36 }}>
              <h2>Frequently asked questions</h2>
              <Faq items={a.faq} />
            </div>
          )}

          <div className="callout" style={{ marginTop: 34, borderLeftColor: "var(--gold)" }}>
            <strong style={{ color: "var(--text)" }}>Bottom line:</strong> Bonus offers and codes
            change often. Always confirm the current terms in the operator&apos;s cashier before you
            deposit, and see our{" "}
            <Link href="/best-poker-bonuses/">best poker bonuses</Link> page for the latest verified
            offers. 18+. Play responsibly.
          </div>

          <p className="muted" style={{ fontSize: "0.85rem", marginTop: 20 }}>
            Written by the {a.author}. This article is informational and does not constitute financial
            or legal advice.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <h2 style={{ marginBottom: 22 }}>More poker news</h2>
          <div className="grid grid-3">
            {related.map((r) => (
              <NewsCard key={r.slug} article={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
