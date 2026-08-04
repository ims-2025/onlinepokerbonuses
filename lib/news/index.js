// News aggregator. Each article lives in its own file and is imported here.
// To add a new article: create a file that `export default`s an article object,
// import it below, and add it to the `all` array. Newest date sorts first.

import venom from "./venom-2026-bonus-hunters";
import crypto from "./crypto-cashouts-us-canada-2026";
import wpnChico from "./wpn-vs-chico-value-2026";
import noDeposit from "./no-deposit-poker-bonuses-2026";
import rakebackWars from "./rakeback-wars-wpn-chico-2026";
import usLaw from "./us-online-poker-legislation-2026";
import canada from "./canada-online-poker-2026";
import clear2000 from "./clear-2000-poker-bonus-guide";
import betonlineRb from "./betonline-weekly-rakeback-deep-dive";
import codesGuide from "./poker-bonus-codes-2026-guide";

const all = [
  venom,
  crypto,
  wpnChico,
  noDeposit,
  rakebackWars,
  usLaw,
  canada,
  clear2000,
  betonlineRb,
  codesGuide,
];

// Newest first
export const articles = [...all].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(slug, n = 3) {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, n);
  const sameCat = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const rest = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...sameCat, ...rest].slice(0, n);
}

export const categoryColors = {
  Bonuses: "#16c784",
  Crypto: "#f5c451",
  Analysis: "#8d5cf6",
  Industry: "#e63946",
  Legal: "#2a72d6",
  Strategy: "#22b573",
};

export function formatDate(iso) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
