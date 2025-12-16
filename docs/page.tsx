import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { TableOfContents } from "@/components/table-of-contents"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const tocItems = [
  { id: "introduction", title: "Introduction", level: 2 },
  { id: "what-is-aura", title: "What is Aura?", level: 2 },
  { id: "core-components", title: "Core Components", level: 2 },
  { id: "next-steps", title: "Next Steps", level: 2 },
]

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1 pt-16">
        <DocsSidebar />

        <main className="flex-1 px-8 py-12 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <p className="text-sm text-accent font-medium">Documentation</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight">Introduction</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Welcome to Aura, the unified knowledge framework for mathematics, logic, and computation.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <section id="introduction" className="scroll-mt-24">
                <p className="text-muted-foreground leading-relaxed">
                  Aura is a domain-specific language ecosystem designed to bridge the gap between mathematical notation,
                  logical reasoning, and computational execution. It provides a unified syntax for expressing complex
                  ideas across multiple domains.
                </p>
              </section>

              <section id="what-is-aura" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold">What is Aura?</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  At its core, Aura is a knowledge representation language that allows you to:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>Define and prove mathematical theorems using formal logic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>Perform symbolic computation and algebraic manipulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>Run quantitative simulations and statistical modeling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>Serialize and share knowledge structures across systems</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <CodeBlock
                    code={`// A simple example demonstrating Aura syntax
define axiom identity {
  forall x : Expression
  prove: x = x
}

let result = derive(sin(x), x)
// Result: cos(x)`}
                    filename="intro.aura"
                    language="aura"
                  />
                </div>
              </section>

              <section id="core-components" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold">Core Components</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  The Aura ecosystem consists of several integrated components:
                </p>

                <div className="mt-6 grid gap-4">
                  {[
                    {
                      name: "XLSL",
                      desc: "Structured Logic Language for formal definitions",
                      href: "/extensions/xlsl",
                    },
                    {
                      name: "XLSMath",
                      desc: "Mathematical engine for symbolic computation",
                      href: "/extensions/xlsmath",
                    },
                    { name: "XLSQuant", desc: "Quantitative simulation and modeling", href: "/extensions/xlsquant" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted"
                    >
                      <div>
                        <h3 className="font-semibold group-hover:text-accent transition-colors">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>

              <section id="next-steps" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold">Next Steps</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Ready to dive in? Here are some recommended next steps:
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/getting-started"
                    className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    Quick Start Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/docs/syntax"
                    className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    Learn the Syntax
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        <TableOfContents items={tocItems} />
      </div>

      <Footer />
    </div>
  )
}
