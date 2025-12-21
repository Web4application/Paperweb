#!/usr/bin/env python3
import json

print("Content-Type: text/html\n")

with open("../data/papers.json") as f:
    papers = json.load(f)

print("<h1>PaperWeb</h1><ul>")
for k, v in papers.items():
    print(f"<li><a href='paper.cgi?id={k}'>{v['title']}</a> ({v['year']})</li>")
print("</ul>")
