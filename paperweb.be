@meta
  project: Paperweb Demo
  version: 1.1
  author: Seriki Yakub
  encoding: UTF-8
@end

@page repo-summary
# Paperweb Demo KHML

This KHML demo includes:
- repo hydration
- engines: xlmath, xlcode, xldata
- live rendering
@end

@page code-examples
### /src/main.py

@block code python
{{REPO.SRC.MAIN_PY}}
@end

### /src/utils.py

@block code python
{{REPO.SRC.UTILS_PY}}
@end

@page math-demo
### XLMath Integration

@block xlmath
integrate("x**2", "x")
@end

@page code-analysis
### XLCode Demo

@block xlcode
analyze("src/main.py")
@end
