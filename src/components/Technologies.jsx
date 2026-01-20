const technologies = [
  {
    name: "Blockchain",
    category: "Distributed Ledger",
    description: "Immutable chain of cryptographically linked blocks, maintained by decentralized consensus."
  },
  {
    name: "Smart Contracts",
    category: "Programmable Trust",
    description: "Self-executing code on blockchains that enforces agreements without intermediaries."
  },
  {
    name: "IPFS",
    category: "Decentralized Storage",
    description: "Content-addressed, peer-to-peer file system for distributed data storage and retrieval."
  },
  {
    name: "Zero-Knowledge Proofs",
    category: "Privacy Technology",
    description: "Prove knowledge of information without revealing the information itself."
  },
  {
    name: "DAOs",
    category: "Governance",
    description: "Decentralized Autonomous Organizations governed by transparent, on-chain rules."
  },
  {
    name: "Consensus Algorithms",
    category: "Agreement Protocol",
    description: "Mechanisms like PoW, PoS, and BFT that enable distributed systems to agree on state."
  }
]

export default function Technologies() {
  return (
    <section id="technologies" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Key <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            The building blocks of decentralized, trustless systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 bg-dark-lighter/30 backdrop-blur hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <div className="text-xs text-primary/60 font-mono mb-3 uppercase tracking-wider">
                {tech.category}
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {tech.description}
              </p>

              <div className="mt-4 w-12 h-0.5 bg-primary/20 group-hover:w-full group-hover:bg-primary/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block border border-primary/30 rounded-2xl p-12 bg-dark-lighter/50 backdrop-blur">
            <p className="font-display text-2xl md:text-3xl text-neutral-300 mb-4 leading-relaxed">
              "Don't trust, <span className="text-gradient font-bold">verify.</span>"
            </p>
            <p className="text-sm text-neutral-500 uppercase tracking-wider">
              The Trustless Paradigm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
