#!/usr/bin/env python3
import cgi, json

print("Content-Type: text/html\n")

form = cgi.FieldStorage()
q = (form.getvalue("q") or "").lower()

with open("../data/papers.json") as f:
    papers = json.load(f)

print("<h1>Search results</h1><ul>")
for k, v in papers.items():
    if q in v["title"].lower():
        print(f"<li><a href='paper.cgi?id={k}'>{v['title']}</a></li>")
print("</ul>")
