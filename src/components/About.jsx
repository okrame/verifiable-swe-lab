export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Beyond
              <br />
              <span className="text-gradient">Central Trust</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-8"></div>
            <blockquote className="text-lg text-neutral-300 leading-relaxed mb-4 italic border-l-2 border-primary/50 pl-4">
              Every system begins with good intentions.
              A hosted node here, a whitelisted relayer there.
              Each is harmless on its own — and together they become habit.
              <br /><br />
              Gateways become platforms.
              Platforms become landlords.
              Landlords decide who may enter and what they may do.
              <br /><br />
              The only defense is trustless design: systems whose correctness and fairness
              depend only on math and consensus, never on the goodwill of intermediaries.
            </blockquote>
            <p className="text-sm text-neutral-400 mb-6">
              — Weiss, Buterin, Posner{' '}
              <a
                href="https://trustlessness.eth.limo/general/2025/11/11/the-trustless-manifesto.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
              >
                <span>↗</span>
              </a>
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Trustless technology inverts this model. Through cryptographic proofs,
              distributed consensus, and transparent protocols, systems can operate without
              requiring trust in any single entity.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square grid-pattern rounded-2xl border border-primary/20 p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="space-y-2">
                    <div className="text-7xl font-display font-bold text-primary">∞</div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider">
                      Nodes
                    </p>
                  </div>
                  <div className="w-full h-px bg-primary/30"></div>
                  <div className="space-y-2">
                    <div className="text-5xl font-display font-bold text-primary">0</div>
                    <p className="text-sm text-neutral-400 uppercase tracking-wider">
                      Central Authority
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
