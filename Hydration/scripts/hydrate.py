import sys, os, json

repo = sys.argv[1]
khml_file = sys.argv[2]

with open(khml_file) as f:
    text = f.read()

for root, _, files in os.walk(repo):
    for file in files:
        path = os.path.join(root, file)
        rel = path.replace(repo + "/", "")

        token = "REPO." + rel.replace("/", ".").replace(".", "_").upper()
        # You can improve mapping for actual repos!

        with open(path, "r", errors="ignore") as f2:
            content = f2.read()

        text = text.replace("{{" + token + "}}", content)

print(text)
