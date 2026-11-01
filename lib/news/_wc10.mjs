for (const s of ["monotone-flop-strategy-flush-boards-online-poker-2026","collusion-chip-dumping-online-poker-protection-2026","minimum-age-online-poker-us-canada-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ");
  const links=[...JSON.stringify(a.body).matchAll(/\]\((\/[^)]*)\)/g)].map(m=>m[1]);
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,a.body.filter(b=>b.h2).length,links.join(" "));
}
