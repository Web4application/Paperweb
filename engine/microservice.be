from flask import Flask, request
from paperweb_runtime_v1_1 import Paperweb

app = Flask(__name__) 

@app.route("/render", methods=["POST"])
def render():
    khml = request.data.decode()
    doc = Paperweb(khml)
    doc.parse_khml()
    doc.resolve_repo_tokens()
    return doc.to_html()

@app.route("/execute", methods=["POST"])
def execute():
    data = request.json
    doc = Paperweb(data["khml"])
    doc.parse_khml()
    return doc.execute_block(data["btype"], data["content"])
