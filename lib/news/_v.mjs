import fs from "fs";
for (const s of ["deep-stacked-poker-strategy-200-big-blinds-2026","poker-promo-emails-offers-what-to-opt-into-2026","taking-notes-on-opponents-without-a-hud-poker-2026"]) {
  const a=(await import("./"+s+".js")).default;
  let t="";for(const b of a.body){for(const k of ["p","h2","h3","quote"])if(b[k])t+=" "+b[k];for(const k of ["ul","ol"])if(b[k])t+=" "+b[k].join(" ");}
  const links=(t.match(/\]\(\//g)||[]).length;
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"links",links);
}
