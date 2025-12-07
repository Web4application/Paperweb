#!/usr/bin/env python3
import sys
from paperweb_runtime import KHMLDocument

cmd = sys.argv[1]

if cmd == "build":
    with open("paperweb.khml") as f:
        text = f.read()

    doc = KHMLDocument(text)
    doc.parse()
    doc.resolve_repo_tokens("./repo_export")

    html = doc.to_html()
    with open("paperweb_site/index.html", "w") as out:
        out.write(html)

    print("[Paperweb] Build completed.")

else:
    print("Commands: build")
