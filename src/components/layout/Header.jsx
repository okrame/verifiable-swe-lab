import deibLogo from '../../assets/deiblogo.png'

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'theses', label: 'Theses' },
  { key: 'people', label: 'People' },
  { key: 'publications', label: 'Publications' },
  { key: 'events', label: 'Events' },
]

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={deibLogo} alt="DEIB" className="w-10 h-10 rounded" />
            <div>
              <span className="font-display font-bold text-lg text-foreground">
                VeriSWE
              </span>
              <span className="hidden sm:inline text-foreground-muted text-sm ml-2">
                Research Lab
              </span>
            </div>
          </button>

          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onNavigate(key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
                  ${currentPage === key
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground-muted hover:text-foreground hover:bg-background-alt'
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
