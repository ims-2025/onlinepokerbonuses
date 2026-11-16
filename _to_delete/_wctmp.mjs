const dir=process.argv[2];
for (const s of ["poker-combinatorics-counting-hand-combos-2026","puerto-rico-us-territories-online-poker-2026","crypto-exchange-account-flags-poker-transfers-2026"]) {
  const a=(await import(dir+"/"+s+".js")).default;
  let t=a.body.map(b=>b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"").join(" ").replace(/\]\([^)]*\)/g,"]").replace(/\*\*/g,"");
  const links=(JSON.stringify(a.body).match(/\]\(\//g)||[]).length;
  console.log(s,"words",t.split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length,"h2",a.body.filter(b=>b.h2).length,"links",links);
}
