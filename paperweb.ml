@meta
  project: Paperweb
  repo: https://github.com/Web4application/Paperweb
  version: 1.0
  author: Seriki Yakub (Kubu Lee)
  encoding: UTF-8
  type: khml-paperweb
  converted: true
  date: 2025-12-02
@end


@page repo-summary
# Paperweb Repository (KHML Conversion)

This document is the full KHML condensation of **Web4application/Paperweb**.

It includes:
- directory tree
- extracted file contents
- configuration files
- documentation
- engine integrations (.xlsl)
- architecture overview
- namespace metadata
@end

 
@page directory-tree
## Repository Structure

@block tree
<repo-root>/
  ├── docs/
  ├── scripts/
  ├── src/
  ├── examples/
  ├── config/
  ├── README.md
  ├── LICENSE
  ├── paperweb.kconfig
  └── ...
@end
@end


@page readme
## README.md

@block text
{{REPO.README}}
@end
@end


@page license
## LICENSE

@block text
{{REPO.LICENSE}}
@end
@end


@page code-files
## Source Code Extracts

### /src/main.py
@block code python
{{REPO.SRC.MAIN}}
@end

### /src/utils.py
@block code python
{{REPO.SRC.UTILS}}
@end

### /scripts/build.sh
@block code sh
{{REPO.SCRIPTS.BUILD}}
@end
@end


@page configs
## Configuration Files

### paperweb.kconfig
@block code khml
{{REPO.CONFIG.PAPERWEB}}
@end

### .gitignore
@block code text
{{REPO.GITIGNORE}}
@end
@end


@page docs
## Documentation Files

All extra documentation files are placed under this section.

Example:

@page docs-installation
### Installation Guide

@block text
{{REPO.DOCS.INSTALL}}
@end
@end
@end


@page engine
## .xlsl Engine Integrations

@block engine
#import xlmath
#import xlcode
#import xldata
@end

### Example Engine Blocks

@block xlmath
integrate(sin(x), x)
@end

@block xlcode
analyze("src/main.py")
@end

@block xldata
read("dataset/users.csv")
@end
@end


@page architecture
## Project Architecture

### Core Modules
- KHML parser
- Renderer
- File abstraction layer
- Block processor
- Engine interface

### Data Flow
@block flow
Raw files → KHML Blocks → Paperweb Engine → Output
@end

### Purpose
Paperweb = documentation + computation + DSL fusion.
@end
