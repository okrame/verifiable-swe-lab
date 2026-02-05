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
