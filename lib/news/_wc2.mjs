for (const f of ["4-bet-strategy-ranges-sizing-online-poker-2026","colorado-online-poker-2026","cad-vs-usd-poker-bankroll-conversion-costs-2026"]) {
 const a=(await import("./"+f+".js")).default;
 let t="";for(const b of a.body){t+=" "+(b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"")}
 console.log(f,t.split(/\s+/).length,a.title.length,a.excerpt.length);
}
