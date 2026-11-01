import fs from "fs";
for (const f of process.argv.slice(2)) {
  const a = (await import("./"+f)).default;
  let t=""; for (const b of a.body){ if(b.p)t+=b.p+" "; if(b.h2)t+=b.h2+" "; if(b.ul)t+=b.ul.join(" ")+" "; if(b.ol)t+=b.ol.join(" ")+" ";}
  const links=[...t.matchAll(/\]\((\/[^)]*)\)/g)].map(m=>m[1]);
  console.log(a.slug, "words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"links",links.length);
  for (const l of links) if(l.startsWith("/news/")){ const s=l.split("/")[2]; if(!fs.existsSync(s+".js")) console.log("MISSING",s);}
}
