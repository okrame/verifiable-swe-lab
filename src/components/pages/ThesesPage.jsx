import SectionHeader from '../shared/SectionHeader'

const THESIS_AREAS = [
  {
    title: 'Blockchain & Smart Contracts',
    description: '[Description placeholder - add thesis topics and related publications]',
  },
  {
    title: 'Verifiable Computing & Zero-Knowledge Proofs',
    description: '[Description placeholder - add thesis topics and related publications]',
  },
  {
    title: 'Digital Identity & Credentials',
    description: '[Description placeholder - add thesis topics and related publications]',
  },
]

const PAST_THESES = [
  {
    title:
      'Development of a pipeline for product logic management in 3D model configurators',
    dateLabel: '23 Jul 2025',
    url: 'https://www.politesi.polimi.it/handle/10589/239519',
  },
  {
    title:
      'Design and development of a circular economy blockchain-based digital marketplace for components reuse in mass electronics',
    dateLabel: '3 Apr 2025',
    url: 'https://www.politesi.polimi.it/handle/10589/236382',
  },
  {
    title:
      'ZK-KYC-DSIG: an eIDAS2 compliant privacy preserving identity verification framework via zero knowledge proof and digital signature',
    dateLabel: '3 Apr 2025',
    url: 'https://www.politesi.polimi.it/handle/10589/236413',
  },
  {
    title:
      'Virtuosity: how to incentivize the corporate sustainability through the activities of people and the use of blockchain',
    dateLabel: '3 Apr 2025',
    url: 'https://www.politesi.polimi.it/handle/10589/234036',
  },
  {
    title:
      'Private smart wallet: an erc-4337 blockchain wallet that enables privacy by default with proof of innocence',
    dateLabel: '11 Dec 2024',
    url: 'https://www.politesi.polimi.it/handle/10589/231692',
  },
  {
    title:
      'zkCF wallet: enhancing privacy and compliance in blockchain transaction with zero-knowledge proofs and eIDAS digital signature',
    dateLabel: '11 Dec 2024',
    url: 'https://www.politesi.polimi.it/handle/10589/231434',
  },
  {
    title:
      'From email data to verifiable credential: a zk-SNARK-based framework for university enrollment verification',
    dateLabel: '11 Dec 2024',
    url: 'https://www.politesi.polimi.it/handle/10589/231242',
  },
  {
    title: 'Real-time forensics analysis tool for bitcoin transactions: a heuristic approach',
    dateLabel: '16 Jul 2024',
    url: 'https://www.politesi.polimi.it/handle/10589/222012',
  },
  {
    title: 'Decentralized updates of IoT and edge devices',
    dateLabel: '9 Apr 2024',
    url: 'https://www.politesi.polimi.it/handle/10589/218694',
  },
  {
    title:
      'Cognitive oracles: validity machine learning via SNARKs for provable on-chain assessment',
    dateLabel: '9 Apr 2024',
    url: 'https://www.politesi.polimi.it/handle/10589/218560',
  },
]

export default function ThesesPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Thesis Opportunities"
          subtitle="If you have a passion for building practical systems and are enthusiastic about emerging Web3 technologies, we would love to hear from you. We are constantly looking for bright students and have several opportunities for M.Sc. theses and smaller projects."
        />

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12">
          <h3 className="font-display font-bold text-foreground mb-2">
            B.Sc. Students
          </h3>
          <p className="text-foreground-muted">
            Interested in a project for the "Progetto di Ingegneria Informatica" course?
            <a href="#" className="text-primary hover:underline ml-1">
              {/* TODO: Add link */}
              Check available projects →
            </a>
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Research Areas
          </h2>

          {THESIS_AREAS.map((area, index) => (
            <div key={index} className="border border-border rounded-xl p-6">
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                {index + 1}. {area.title}
              </h3>
              <p className="text-foreground-muted mb-4">
                {area.description}
              </p>
              <div className="text-sm text-foreground-subtle">
                Related publications: [links to be added]
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Past Theses
          </h2>
          <div className="border border-border rounded-xl p-6">
            <ul className="space-y-3">
              {PAST_THESES.map((thesis) => (
                <li key={thesis.url} className="text-foreground">
                  <div className="text-sm text-foreground-subtle mb-1">
                    {thesis.dateLabel}
                  </div>
                  <a
                    href={thesis.url}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {thesis.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center bg-background-alt border border-border rounded-xl p-8">
          <p className="text-foreground-muted mb-4">
            Interested in working with us?
          </p>
          <a
            href="mailto:example@polimi.it"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            {/* TODO: Add real email */}
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
