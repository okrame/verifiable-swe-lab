import SectionHeader from '../shared/SectionHeader'

const SELECTED_PUBLICATIONS = [
  {
    title: 'A Private Smart Wallet with Probabilistic Compliance',
    authors: 'A. Rizzini, M. Esposito, F. Bruschi, D. Sciuto',
    venue: 'IEEE DAPPS 2025',
    date: 'July 2025',
    url: 'https://ieeexplore.ieee.org/document/11143084',
  },
  {
    title: 'Deflating Mass-Surveillance Attempts in the Post-Snowden Era: Publicly-Traceable Conditional Decryptions',
    authors: 'F. Bruschi, M. Esposito, A. Rizzini, I. Visconti',
    venue: 'DLT 2025 (CEUR-WS)',
    date: 'June 2025',
    url: 'https://ceur-ws.org/Vol-4105/short04.pdf',
  },
  {
    title: 'Privacy-Preserving eIDAS Compliance in Blockchain Wallets',
    authors: 'P. Moser, M. Esposito, F. Bruschi, D. Sciuto',
    venue: 'IEEE PerCom Workshops 2025',
    date: 'March 2025',
    url: 'https://www.computer.org/csdl/proceedings-article/percom-workshops/2025/355300a031/27FQPayPiMg',
  },
]


export default function PublicationsPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Publications" />

        {/* Selected Publications */}
        <section className="mb-12">

          <div className="space-y-4">
            {SELECTED_PUBLICATIONS.map((pub, index) => (
              <a
                key={index}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border rounded-xl p-6 hover:border-primary/30 hover:bg-background-alt/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-foreground mb-2 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-foreground-muted mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {pub.venue} · {pub.date}
                    </p>
                  </div>
                  <span className="text-foreground-subtle shrink-0">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Google Scholar Link */}
        <div className="bg-background-alt border border-border rounded-xl p-8 text-center">
          <h2 className="font-display text-xl font-bold mb-4 text-foreground">
            Full Publication List
          </h2>

          <p className="text-foreground-muted mb-6 max-w-md mx-auto">
            For a complete and up-to-date list of our publications, please visit
            our Google Scholar profile.
          </p>

          <a
            href="#" // TODO: Replace with actual Google Scholar link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Google Scholar Profile
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
