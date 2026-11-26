for (const s of ["sweepstakes-poker-bans-state-crackdown-what-players-do-2026","river-blocking-bets-small-leads-out-of-position-poker-2026","bitcoin-address-reuse-wallet-hygiene-poker-players-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const pillar=(JSON.stringify(a.body).match(/\]\(\/(best-poker-bonuses|usa|canada|bonus-types|how-to-claim|reviews)\//g)||[]).length;
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"h2",a.body.filter(b=>b.h2).length,"pillarLinks",pillar);
}
const idx=await import("./index.js"); console.log("total",idx.articles.length);
