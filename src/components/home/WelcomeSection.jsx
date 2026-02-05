export default function WelcomeSection() {
  return (
    <section className="py-20 px-6 pattern-dots">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Verifiable Software Engineering
        </h1>

        <p className="text-xl text-foreground-muted mb-4">
          Politecnico di Milano
        </p>

        <div className="w-16 h-0.5 bg-accent mx-auto mb-8"></div>

        <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl mx-auto">
          VeriSWE's theoretical and applied research covers a wide spectrum of topics.
          Many VeriSWE projects are funded by European and national agencies as well as
          industry partners. Given the pervasiveness of these topics, our research involves
          multi-disciplinary collaborations with teams at Politecnico di Milano and
          internationally.
        </p>
      </div>
    </section>
  )
}
