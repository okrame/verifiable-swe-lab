export default function ManifestoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Beyond Central Trust
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto"></div>
        </div>

        <div className="bg-background-alt border border-border rounded-xl p-8 md:p-12">
          <blockquote className="text-lg text-foreground-muted leading-relaxed mb-6 border-l-4 border-primary pl-6 italic">
            <p className="mb-4">
              Every system begins with good intentions. A hosted node here, a
              whitelisted relayer there. Each is harmless on its own — and together
              they become habit.
            </p>
            <p className="mb-4">
              Gateways become platforms. Platforms become landlords. Landlords
              decide who may enter and what they may do.
            </p>
            <p>
              The only defense is trustless design: systems whose correctness and
              fairness depend only on math and consensus, never on the goodwill of
              intermediaries.
            </p>
          </blockquote>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-foreground-subtle">
              — Weiss, Buterin, Posner
            </p>
            <a
              href="https://trustlessness.eth.limo/general/2025/11/11/the-trustless-manifesto.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors"
            >
              Read the Manifesto
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
