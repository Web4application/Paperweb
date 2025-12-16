import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { TableOfContents } from "@/components/table-of-contents"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "syntax", title: "Basic Syntax", level: 2 },
  { id: "definitions", title: "Definitions", level: 2 },
  { id: "theorems", title: "Theorems & Proofs", level: 2 },
  { id: "examples", title: "Examples", level: 2 },
]

export default function XLSLPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1 pt-16">
        <DocsSidebar />

        <main className="flex-1 px-8 py-12 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <Link
                href="/extensions"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Extensions
              </Link>
              <p className="text-sm text-accent font-medium">Extension</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight">XLSL</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Extensible Logical Structure Language - Define formal logic, grammars, and semantic structures.
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <section id="overview" className="scroll-mt-24">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  XLSL (Extensible Logical Structure Language) is the foundational extension for defining logical
                  structures in Aura. It provides a type-safe way to express formal logic, define grammars, and
                  establish semantic relationships between concepts.
                </p>
                <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Key capability:</strong> XLSL enables you to define axioms,
                    theorems, and proofs that can be verified by the Aura runtime.
                  </p>
                </div>
              </section>

              <section id="syntax" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold">Basic Syntax</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  XLSL uses a declarative syntax inspired by mathematical notation. Here are the core constructs:
                </p>
                <div className="mt-6">
                  <CodeBlock
                    code={`// Import core logic primitives
import { Proposition, implies, and, or, not } from "xlsl/logic"

// Define a simple proposition
define prop p : Proposition
define prop q : Proposition

// Logical operations
let conjunction = and(p, q)
let disjunction = or(p, q)
let implication = implies(p, q)`}
                    filename="syntax.xlsl"
                    language="xlsl"
                  />
                </div>
              </section>

              <section id="definitions" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold">Definitions</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Use the <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">define</code> keyword to
                  create new logical constructs:
                </p>
                <div className="mt-6">
                  <CodeBlock
                    code={`// Define an axiom (assumed true)
define axiom excluded_middle {
  forall p : Proposition
  assert: or(p, not(p))
}

// Define a predicate
define predicate is_even(n: Number) {
  exists k : Number
  where: n = 2 * k
}

// Define a relation
define relation less_than(a: Number, b: Number) {
  exists d : Number
  where: d > 0 and a + d = b
}`}
                    filename="definitions.xlsl"
                    language="xlsl"
                  />
                </div>
              </section>

              <section id="theorems" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold">Theorems & Proofs</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  XLSL supports formal theorem statements and proof structures:
                </p>
                <div className="mt-6">
                  <CodeBlock
                    code={`// State a theorem
define theorem modus_ponens {
  forall p, q : Proposition
  given: p and implies(p, q)
  prove: q
}

// Provide a proof
proof modus_ponens {
  step 1: assume p                    // Given
  step 2: assume implies(p, q)        // Given
  step 3: apply implication_elim(1, 2) // Modus ponens rule
  qed: q                              // Conclusion
}`}
                    filename="theorems.xlsl"
                    language="xlsl"
                  />
                </div>
              </section>

              <section id="examples" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold">Examples</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Here is a complete example defining and proving a simple logical theorem:
                </p>
                <div className="mt-6">
                  <CodeBlock
                    code={`// De Morgan's Laws
import { Proposition, and, or, not, equiv } from "xlsl/logic"

define theorem demorgans_law_1 {
  forall p, q : Proposition
  prove: equiv(not(and(p, q)), or(not(p), not(q)))
}

proof demorgans_law_1 {
  step 1: assume not(and(p, q))
  step 2: case_split {
    case not(p): conclude or(not(p), not(q)) by or_intro_left
    case not(q): conclude or(not(p), not(q)) by or_intro_right
  }
  qed: equiv(not(and(p, q)), or(not(p), not(q)))
}`}
                    filename="demorgans.xlsl"
                    language="xlsl"
                  />
                </div>
              </section>

              <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                <Link
                  href="/extensions"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Extensions
                </Link>
                <Link
                  href="/extensions/xlsmath"
                  className="inline-flex items-center text-sm text-accent hover:text-accent/80"
                >
                  XLSMath
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </main>

        <TableOfContents items={tocItems} />
      </div>

      <Footer />
    </div>
  )
}
