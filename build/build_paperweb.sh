#!/bin/bash

set -e

echo "[Paperweb] Exporting GitHub repo..."
rm -rf repo_export
git clone https://github.com/Web4application/Paperweb repo_export

echo "[Paperweb] Running KHML hydration..."
python3 hydrate.py repo_export paperweb.khml > hydrated.khml

echo "[Paperweb] Rendering to HTML..."
python3 render.py hydrated.khml paperweb_site/

echo "[Paperweb] Done."
