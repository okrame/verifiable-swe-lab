import deibLogo from '../assets/deiblogo.png'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="mx-auto border border-primary/30 rounded-full mb-6 overflow-hidden w-36 h-36 flex items-center justify-center">
            <img src={deibLogo} alt="DEIB Polimi" className="w-full h-full object-cover" />
          </div>
        </div>

        <h1
          className="font-display text-6xl md:text-8xl font-bold mb-8 leading-tight animate-slide-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Trustless
          <br />
          <span className="text-gradient">Technology</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Exploring the foundations of decentralized systems where trust emerges from
          cryptographic proofs, not central authorities.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          <a
            href="#about"
            className="px-8 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 hover:scale-105 glow-accent"
          >
            Explore Concepts
          </a>
          <a
            href="#technologies"
            className="px-8 py-4 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            View Technologies
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse-subtle"></div>
        </div>
      </div>
    </section>
  )
}
