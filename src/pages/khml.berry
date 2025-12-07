<div id="paperweb-editor">
  <textarea id="khml-input"></textarea>
  <button onclick="runBlock()">Execute Block</button>
  <pre id="output"></pre>
</div>

<script type="text/javascript">
async function runBlock() {
  let khml = document.getElementById("khml-input").value;
  let output = await pyodide.runPythonAsync(`from paperweb_runtime import Paperweb; Paperweb("${khml}").to_html()`);
  document.getElementById("output").innerText = output;
}
</script>
