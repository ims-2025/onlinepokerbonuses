for (const s of ["polarized-vs-merged-ranges-bet-sizing-poker-strategy-2026","multi-deposit-welcome-packages-vs-single-poker-bonus-2026","restricted-states-offshore-poker-rooms-explained-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||b.quote||(b.cta&&b.cta.text)||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const links=JSON.stringify(a.body).match(/\]\(\/(best-poker-bonuses|usa|canada|bonus-types|how-to-claim|reviews)[^)]*\)/g).length;
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"h2",a.body.filter(b=>b.h2).length,"pillarLinks",links);
}
