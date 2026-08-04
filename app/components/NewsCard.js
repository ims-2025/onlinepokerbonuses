import Link from "next/link";
import { categoryColors, formatDate } from "@/lib/news";

export default function NewsCard({ article, featured = false }) {
  const color = categoryColors[article.category] || "var(--brand)";
  return (
    <article className={`card card-hover news-card${featured ? " news-card-featured" : ""}`}>
      <Link href={`/news/${article.slug}/`} className="news-thumb" aria-hidden="true" tabIndex={-1}
        style={{ background: `linear-gradient(135deg, ${color}22, ${color}05)`, borderColor: `${color}33` }}>
        <span className="news-cat-tag" style={{ background: color }}>{article.category}</span>
        <span className="news-thumb-mark" style={{ color }}>♠</span>
      </Link>
      <div className="news-card-body">
        <div className="news-meta">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>·</span>
          <span>{article.readingTime} min read</span>
        </div>
        <h3 className="news-title">
          <Link href={`/news/${article.slug}/`}>{article.title}</Link>
        </h3>
        <p className="news-excerpt">{article.excerpt}</p>
        <Link href={`/news/${article.slug}/`} className="news-readmore">Read article →</Link>
      </div>
    </article>
  );
}
