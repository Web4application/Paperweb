#!/usr/bin/env python3
import cgi, markdown, json

print("Content-Type: text/html\n")

form = cgi.FieldStorage()
paper_id = form.getvalue("id")

with open("data/papers.json") as f:
    papers = json.load(f)

paper = papers.get(paper_id)

html = markdown.markdown(open(paper["file"]).read())

print(f"""
<html>
<head><title>{paper['title']}</title></head>
<body>
<h1>{paper['title']}</h1>
{html}
</body>
</html>
""")
