for (const f of ["position-in-poker-why-the-button-wins-2026","oregon-online-poker-2026","tournament-fees-buy-in-rake-explained-2026"]) {
 const a=(await import("./"+f+".js")).default;
 let t="";for(const b of a.body){t+=" "+(b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"")}
 console.log(f,t.trim().split(/\s+/).length,a.title.length,a.excerpt.length);
}
