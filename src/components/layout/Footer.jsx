const NAV_ITEMS = ['home', 'theses', 'people', 'publications', 'events']

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-background-alt border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-3 text-foreground">
              VeriSWE Lab
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Verifiable Software Engineering Lab
              <br />
              Politecnico di Milano
              <br />
              DEIB
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-foreground-muted hover:text-primary transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-3">
              Contact
            </h4>
            <p className="text-sm text-foreground-muted">
              {/* TODO: Add contact info */}
              Politecnico di Milano
              <br />
              Piazza Leonardo da Vinci, 32
              <br />
              20133 Milano, Italy
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-foreground-subtle">
          <p>© 2026 VeriSWE Lab, Politecnico di Milano</p>
        </div>
      </div>
    </footer>
  )
}
