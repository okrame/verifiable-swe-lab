import ResearchCard from '../shared/ResearchCard'

const RESEARCH_THEMES = [
  {
    id: 'blockchain',
    title: 'Blockchain Systems',
    subtitle: 'EVM-focused, Application-oriented',
    description: `Our blockchain research focuses on Ethereum Virtual Machine (EVM) compatible
      systems and their real-world applications. We explore smart contract security,
      decentralized application architectures, and the intersection of blockchain
      technology with traditional software systems. Note: this does not include research
      on distributed consensus mechanisms or network metrics.`,
    icon: '⟁',
  },
  {
    id: 'verifiable',
    title: 'Verifiable Computing',
    subtitle: 'Cryptographic Applications & Constructions',
    description: `We develop and analyze cryptographic protocols for verifiable computation,
      including cutting-edge schemes like SNARKs, STARKs, and other zero-knowledge
      proof systems. Our work spans from theoretical foundations to practical
      implementations in real-world systems.`,
    icon: '∑',
  },
  {
    id: 'identity',
    title: 'Digital Identity & Credentials',
    subtitle: 'Self-Sovereign Identity & Verifiable Credentials',
    description: `Research on decentralized identity systems following the latest developments
      in Self-Sovereign Identity (SSI) and W3C Verifiable Credentials standards.
      Our work addresses both technical protocols and techno-legal considerations
      for identity systems.`,
    icon: '✍︎',
  },
]

export default function ResearchThemes() {
  return (
    <section className="py-20 px-6 bg-background-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Research Themes
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto whitespace-nowrap">
            Our lab focuses on three interconnected areas at the frontier of trustless and verifiable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RESEARCH_THEMES.map((theme) => (
            <ResearchCard key={theme.id} {...theme} />
          ))}
        </div>
      </div>
    </section>
  )
}
