# paperweb_runtime.py
import re
import os
import json

class KHMLDocument:
    def __init__(self, text):
        self.text = text
        self.pages = {}
        self.meta = {}
        self.blocks = []

    def parse(self):
        # META
        meta_match = re.search(r"@meta(.*?)@end", self.text, re.S)
        if meta_match:
            raw = meta_match.group(1)
            for line in raw.splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    self.meta[k.strip()] = v.strip()

        # PAGES
        page_pattern = r"@page ([\w\-]+)(.*?)@end"
        for name, content in re.findall(page_pattern, self.text, re.S):
            self.pages[name] = content.strip()

        # BLOCKS
        block_pattern = r"@block (\w+)(.*?)@end"
        for btype, bcontent in re.findall(block_pattern, self.text, re.S):
            self.blocks.append((btype.strip(), bcontent.strip()))

    def resolve_repo_tokens(self, repo_root):
        def fetch(path):
            try:
                with open(os.path.join(repo_root, path), "r", encoding="utf-8") as f:
                    return f.read()
            except:
                return f"/* Missing: {path} */"

        def repl(match):
            token = match.group(1)  
            parts = token.split(".")
            path = "/".join([p.lower() for p in parts[1:]])
            return fetch(path)

        self.text = re.sub(r"\{\{(REPO\.[A-Z0-9\._]+)\}\}", repl, self.text)

    def to_html(self):
        html = "<html><body>"
        for name, page in self.pages.items():
            html += f"<section id='{name}'>\n<h1>{name}</h1>\n"
            html += f"<pre>{page}</pre>\n</section>"
        html += "</body></html>"
        return html
