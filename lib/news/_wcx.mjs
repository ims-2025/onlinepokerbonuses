for (const s of ["minimum-defense-frequency-mdf-poker-explained-2026","chip-leader-strategy-tournament-poker-2026","switching-poker-rooms-without-losing-bonus-value-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,a.body.filter(b=>b.h2).length);
}
