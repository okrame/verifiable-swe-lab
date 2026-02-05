import SectionHeader from '../shared/SectionHeader'
import PersonCard from '../shared/PersonCard'

// TODO: Fill in with actual data
const FACULTY = [
  { name: 'Francesco Bruschi', institution: 'Politecnico di Milano', link: '#' },
]

const PHD_STUDENTS = [
  { name: 'Marco Esposito', institution: 'Politecnico di Milano', link: '#' },
]

const ALUMNI = [
  // Add alumni here
]

export default function PeoplePage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="People" />

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
            Faculty
          </h2>
          <div className="grid gap-4">
            {FACULTY.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
            Ph.D. Students
          </h2>
          <div className="grid gap-4">
            {PHD_STUDENTS.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </section>

        {ALUMNI.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold mb-6 text-foreground">
              Alumni
            </h2>
            <div className="grid gap-4">
              {ALUMNI.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
