for (const s of ["americas-cardroom-poker-bonus-welcome100-code-worth-it-2026","playing-against-short-stackers-cash-games-online-poker-2026","seating-scripts-bumhunting-rules-online-poker-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const pillar=(JSON.stringify(a.body).match(/\]\(\/(best-poker-bonuses|usa|canada|bonus-types|how-to-claim|reviews)\//g)||[]).length;
  const links=(JSON.stringify(a.body).match(/\]\((\/[^)]*)\)/g)||[]);
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"h2",a.body.filter(b=>b.h2).length,"pillarLinks",pillar);
  for (const l of links){const m=l.match(/\/news\/([^/]+)\//); if(m){try{await import("./"+m[1]+".js")}catch{console.log("  BROKEN",m[1])}}}
}
