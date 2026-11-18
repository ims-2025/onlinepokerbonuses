for (const s of ["calling-all-in-shoves-tournament-poker-strategy-2026","poker-bonus-expiring-soon-last-week-clearing-plan-2026","online-poker-trends-2027-us-canada-players"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||b.quote||(b.cta&&b.cta.text)||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const links=JSON.stringify(a.body).match(/\]\(\/(best-poker-bonuses|usa|canada|bonus-types|how-to-claim|reviews)[^)]*\)/g).length;
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"h2",a.body.filter(b=>b.h2).length,"pillarLinks",links);
}
