for (const f of ["cold-call-vs-3-bet-in-position-poker-strategy-2026","effective-rake-rate-poker-bonus-rakeback-calculator-2026","iowa-online-poker-2026"]) {
 const a=(await import("./"+f+".js")).default;
 let t="";for(const b of a.body){t+=" "+(b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"")}
 console.log(f,t.trim().split(/\s+/).length,a.title.length,a.excerpt.length);
}
