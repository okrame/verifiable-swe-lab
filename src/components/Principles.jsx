const principles = [
  {
    number: "01",
    title: "Cryptographic Verification",
    description: "Mathematical proofs replace institutional guarantees. Hash functions, digital signatures, and zero-knowledge proofs enable verification without trust.",
    icon: "∑"
  },
  {
    number: "02",
    title: "Distributed Consensus",
    description: "No single authority decides truth. Consensus mechanisms like Proof-of-Work and Byzantine Fault Tolerance create agreement across adversarial networks.",
    icon: "⊕"
  },
  {
    number: "03",
    title: "Transparency & Immutability",
    description: "Public ledgers and cryptographic audit trails ensure all participants can verify history. Once written, records cannot be altered without detection.",
    icon: "∴"
  },
  {
    number: "04",
    title: "Permissionless Access",
    description: "No gatekeepers. Anyone can participate, validate, or build on open protocols. Inclusion is automatic, not granted.",
    icon: "∀"
  }
]

export default function Principles() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Core <span className="text-gradient">Principles</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            The foundational concepts that enable systems to operate without centralized trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div
              key={principle.number}
              className="group relative border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:glow bg-dark-lighter/50 backdrop-blur"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <span className="text-3xl font-display text-primary">{principle.icon}</span>
                </div>

                <div className="flex-1">
                  <div className="text-sm text-primary/60 font-mono mb-2">{principle.number}</div>
                  <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
