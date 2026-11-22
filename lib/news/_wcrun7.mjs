for (const s of ["betonline-vs-sportsbetting-ag-poker-bonus-comparison-2026","early-stage-tournament-strategy-first-levels-mtt-2026","why-poker-rooms-run-tournament-series-economics-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const pillar=(JSON.stringify(a.body).match(/\]\(\/(best-poker-bonuses|usa|canada|bonus-types|how-to-claim|reviews)\//g)||[]).length;
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"h2",a.body.filter(b=>b.h2).length,"pillarLinks",pillar);
}
