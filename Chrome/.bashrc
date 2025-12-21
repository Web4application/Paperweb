fetch infra
cd infra/go
eval `./env.py`
cd src/go.chromium.org/luci
 # The next line enables bash completion for git cl.
 if [ -f "$HOME/bin/depot_tools/git_cl_completion.sh" ]; then
   . "$HOME/bin/depot_tools/git_cl_completion.sh"
 fi
