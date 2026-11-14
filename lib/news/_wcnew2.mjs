for (const s of ["kq-offsuit-broadway-hands-postflop-strategy-2026","medium-pairs-77-99-postflop-strategy-online-poker-2026","end-of-year-poker-bankroll-review-december-checklist-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ");
  const links=[...JSON.stringify(a.body).matchAll(/\]\((\/[^)]*)\)/g)].map(m=>m[1]);
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,a.body.filter(b=>b.h2).length,links.length);
}
