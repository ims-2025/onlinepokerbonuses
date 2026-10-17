for (const s of ["nebraska-online-poker-2026","river-bluffing-strategy-online-poker-2026","poker-responsible-play-deposit-limits-self-exclusion-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||(b.cta?b.cta.text:"")).join(" ");
  const links=[...JSON.stringify(a.body).matchAll(/\]\((\/[^)]*)\)/g)].map(m=>m[1]);
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,links.join(" "));
}
