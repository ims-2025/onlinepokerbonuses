for (const s of ["facing-a-check-raise-call-fold-reraise-online-poker-2026","stuck-bitcoin-poker-deposit-rbf-cpfp-explained-2026","thanksgiving-weekend-online-poker-bonus-game-plan-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const links=(JSON.stringify(a.body).match(/\]\(\//g)||[]).length;
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,a.body.filter(b=>b.h2).length,links);
}
