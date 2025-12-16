from markdown_it import MarkdownIt

# Your markdown text
markdown = "# Hello, **world**"

# Initialize the parser
md = MarkdownIt()

# Render the markdown to HTML
html_output = md.render(markdown)

# Print the result
print(html_output)
# Output: <h1>Hello, <strong>world</strong></h1>
