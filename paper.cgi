#!/usr/bin/env python3
import cgi, json, markdown

print("Content-Type: text/html\n")

form = cgi.FieldStorage()
pid = form.getvalue("id")

with open("../data/papers.json") as f:
    papers = json.load(f)

paper = papers.get(pid)
if not paper:
    print("<h1>Paper not found</h1>")
    exit()

content = markdown.markdown(open(f"../{paper['file']}").read())

print(f"""
<h1>{paper['title']}</h1>
<p><i>{paper['author']} – {paper['year']}</i></p>
<hr>
{content}
""")
