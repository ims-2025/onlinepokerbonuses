import fs from "fs";
for (const f of ["range-advantage-vs-nut-advantage-poker-strategy-2026","poker-support-bonus-disputes-how-to-escalate-2026","poker-skill-vs-chance-legal-definitions-us-canada-2026"]) {
  const a=(await import(process.cwd()+"/"+f+".js")).default;
  let t=a.body.map(b=>Object.values(b).flat().map(x=>typeof x==="string"?x:JSON.stringify(x)).join(" ")).join(" ");
  console.log(f,a.title.length,a.excerpt.length,t.split(/\s+/).length,(t.match(/\]\(\//g)||[]).length);
}
