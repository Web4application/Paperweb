engine xlaiengine
 
fn analyze_code(path):
    python: |
        from openai import OpenAI
        client = OpenAI()
        code = open(path).read()
        resp = client.chat.completions.create(
            model="gpt-5-mini",
            messages=[{"role":"system","content":"Analyze code structure"},{"role":"user","content":code}]
        )
        return resp.choices[0].message.content

fn summarize_doc(path):
    python: |
        from openai import OpenAI
        client = OpenAI()
        doc = open(path).read()
        resp = client.chat.completions.create(
            model="gpt-5-mini",
            messages=[{"role":"user","content":"Summarize this document: " + doc}]
        )
        return resp.choices[0].message.content

end
