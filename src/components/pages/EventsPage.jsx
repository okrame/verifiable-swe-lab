import SectionHeader from '../shared/SectionHeader'

// TODO: Add events
const EVENTS = [
  {
    title: 'Osservatori Blockchain',
    description: 'Annual blockchain observatory event by the Department of Management Engineering',
    link: '#',
    date: 'Upcoming',
  },
]

export default function EventsPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="Events" />

        {EVENTS.length > 0 ? (
          <div className="space-y-6">
            {EVENTS.map((event, index) => (
              <div
                key={index}
                className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-sm text-primary font-medium">{event.date}</span>
                    <h3 className="font-display text-xl font-bold mt-1 mb-2 text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-foreground-muted">{event.description}</p>
                  </div>

                  {event.link && event.link !== '#' && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-medium shrink-0"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-background-alt border border-border rounded-xl p-8 text-center">
            <p className="text-foreground-muted">
              No upcoming events at this time. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
