for (const s of ["playing-out-of-position-as-preflop-raiser-strategy-2026","poker-reward-points-redeem-cash-tickets-store-2026","ontario-poker-bonus-advertising-rules-explained-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const links=(JSON.stringify(a.body).match(/\]\(\//g)||[]).length;
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,a.body.filter(b=>b.h2).length,links);
}
