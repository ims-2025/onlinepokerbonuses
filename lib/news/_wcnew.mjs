for (const s of ["straight-draws-gutshots-open-enders-poker-strategy-2026","black-friday-cyber-week-poker-promotions-prepare-2026","poker-tournament-schedules-time-zones-us-canada-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ");
  const links=[...JSON.stringify(a.body).matchAll(/\]\((\/[^)]*)\)/g)].map(m=>m[1]);
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,a.body.filter(b=>b.h2).length,links.join(" "));
}
