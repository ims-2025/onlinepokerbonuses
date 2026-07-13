import { operators } from "@/lib/operators";
import { site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/best-poker-bonuses/", priority: 0.95, changeFrequency: "daily" },
    { path: "/usa/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/canada/", priority: 0.9, changeFrequency: "weekly" },
    { path: "/bonus-types/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/how-to-claim/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.4, changeFrequency: "yearly" },
    { path: "/responsible-gambling/", priority: 0.4, changeFrequency: "yearly" },
  ];

  const reviewRoutes = operators.map((op) => ({
    path: `/reviews/${op.slug}/`,
    priority: 0.85,
    changeFrequency: "weekly",
  }));

  return [...staticRoutes, ...reviewRoutes].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
