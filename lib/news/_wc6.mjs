import fs from "fs";
for (const s of ["alabama-online-poker-2026","poker-bonus-glossary-terms-explained-2026","bet-sizing-tells-online-poker-reads-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||(b.cta?b.cta.text:"")).join(" ");
  const links=[...JSON.stringify(a.body).matchAll(/\]\((\/[^)]*)\)/g)].map(m=>m[1]);
  console.log(s,t.split(/\s+/).length,a.title.length,a.excerpt.length,links.join(" "));
}
