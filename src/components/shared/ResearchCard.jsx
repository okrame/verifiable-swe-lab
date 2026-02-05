export default function ResearchCard({ title, subtitle, description, icon }) {
  return (
    <div className="bg-background border border-border rounded-xl p-8 card-hover">
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
        <span className="text-2xl text-primary font-display">{icon}</span>
      </div>

      <h3 className="font-display text-xl font-bold mb-2 text-foreground">
        {title}
      </h3>

      <p className="text-sm text-primary font-medium mb-4">
        {subtitle}
      </p>

      <p className="text-foreground-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
