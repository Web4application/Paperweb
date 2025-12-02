@meta
  encoding: ISO-8859-1
  type: paperweb
  version: 1.0
  author: Seriki Yakub (Kubu Lee)
  project: Paperweb
  date: 1 Jan 2025
@end

#entity date "<date>1 Jan, 2025</date>"
#entity package "appstreamcli"
#entity gnu "<acronym>GNU</acronym>"
#entity gpl "&gnu; <acronym>GPL</acronym>"


@page intro
  # Paperweb Unified Knowledge File

  Paperweb is a single-file knowledge format.
  It's structured like DocBook, readable like Markdown,
  and executable like a notebook.

  This KHML file is self-contained.

@end


@page structure
  ## Document Structure

  A Paperweb KHML file contains:
  
  - @meta: metadata about the document
  - @page: each page/section of content
  - @block: code, data, examples
  - #entity: XML-style symbolic entities
  - #link: external references
  - #import: linking .xlsl engines

@end


@page metadata
  ## Metadata Block

  encoding="ISO-8859-1"
  doctype="khml-paperweb"
  license="Apache-2.0"
  repo="https://github.com/Web4application/Paperweb"
  created="2025-01-01"

@end


@page entities
  ## Imported DocBook Entities

  These mirror manpage XML structure:
  <!ENTITY date "<date>1 Jan 2025</date>">
  <!ENTITY package "paperweb">
  <!ENTITY gnu "<acronym>GNU</acronym>">
  <!ENTITY gpl "&gnu; <acronym>GPL</acronym>">
@end


@page repo
## Repository Summary

#link repo https://github.com/Web4application/Paperweb.git

Repository: Paperweb  
Owner: Web4application  
Purpose: Root implementation of the Paperweb knowledge engine.  

@end


@page usage
## How Paperweb KHML Works

- No HTML required  
- No CSS  
- No browser dependencies  
- Human-first syntax  
- Rendered by Paperweb engines or CLI  

@end


@page extension
## Extending with .xlsl Engines

#import xlmath
#import xlcode
#import xldata

Examples:

@block xlmath
  integrate(sin(x), x)
  solve(a*x + b = c)
@end

@block xlcode
  explain("Refactor this snippet", source)
@end

@end


@page appendix
## Appendix

This file is a base template.
Add more pages freely using:

  @page name
    content
  @end

@end
