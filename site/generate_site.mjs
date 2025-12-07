import fs from "fs";
import path from "path";

const khml = fs.readFileSync("hydrated.khml", "utf8");

const sections = [...khml.matchAll(/@page ([\w\-]+)([\s\S]*?)@end/g)];

let toc = "";
let content = "";

for (const [, slug, body] of sections) {
  toc += `<a href="#${slug}">${slug}</a><br/>`;
  content += `<section id="${slug}">${body}</section>`;
}

let html = fs.readFileSync("paperweb_renderer.html", "utf8");
html = html.replace("{{TOC}}", toc).replace("{{CONTENT}}", content);

fs.mkdirSync("./paperweb_site", { recursive: true });
fs.writeFileSync("./paperweb_site/index.html", html);

console.log("Site generated → paperweb_site/index.html");
