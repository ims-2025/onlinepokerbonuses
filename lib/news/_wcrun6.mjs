for (const s of ["ace-queen-ace-jack-strategy-online-poker-2026","black-chip-poker-vs-americas-cardroom-bonus-comparison-2026","crypto-sent-wrong-network-poker-deposit-recovery-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const pillar=(JSON.stringify(a.body).match(/\]\(\/(best-poker-bonuses|usa|canada|bonus-types|how-to-claim|reviews)\//g)||[]).length;
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"h2",a.body.filter(b=>b.h2).length,"pillarLinks",pillar);
}
