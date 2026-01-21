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
            <p className="text-lg text-neutral-300 leading-relaxed mb-6">
              Traditional systems rely on trusted intermediaries—banks, governments,
              corporations—to validate transactions and maintain records. This centralization
              creates single points of failure, opportunities for censorship, and requires
              blind faith in institutions.
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
