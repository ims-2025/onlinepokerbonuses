for (const f of process.argv.slice(2)) {
 const a=(await import("./"+f+".js")).default;
 let t="";for(const b of a.body){t+=" "+(b.p||b.h2||b.h3||(b.ul||b.ol||[]).join(" ")||"")}
 console.log(f,"words",t.trim().split(/\s+/).length,"title",a.title.length,"excerpt",a.excerpt.length);
}
