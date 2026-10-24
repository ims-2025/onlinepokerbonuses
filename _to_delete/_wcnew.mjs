import fs from "fs";
for (const f of process.argv.slice(2)) {
  const m = (await import(process.env.PWD+"/"+f)).default;
  const txt = m.body.map(b=>b.p||b.h2||(b.ul||[]).join(" ")).join(" ");
  console.log(m.slug, "words",txt.split(/\s+/).length,"title",m.title.length,"excerpt",m.excerpt.length);
}
