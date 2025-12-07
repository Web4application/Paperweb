@config
project "Paperweb Demo"
version "1.1"
author "Seriki Yakub"
module.parser true
module.renderer true
module.engine true
hydrate.repo true
engine.import "xlmath"
engine.import "xlcode"
engine.import "xldata"
render.target "html"
render.stylesheet "paperweb.css"
build.out "./paperweb_site"
@end
