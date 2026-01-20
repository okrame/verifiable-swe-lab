export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-primary/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-gradient">
              Trustless Tech
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              An educational exploration of decentralized systems and cryptographic trust.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-300">Learn More</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About Trustless Systems</a></li>
              <li><a href="#principles" className="hover:text-primary transition-colors">Core Principles</a></li>
              <li><a href="#technologies" className="hover:text-primary transition-colors">Technologies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-neutral-300">Institution</h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Politecnico di Milano
              <br />
              Research & Development
              <br />
              2026
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-sm text-neutral-500">
          <p>Built with Vite, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
