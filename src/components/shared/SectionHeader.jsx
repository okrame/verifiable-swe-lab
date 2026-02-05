export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12">
      <h1 className="font-display text-4xl font-bold mb-4 text-foreground">
        {title}
      </h1>
      <div className="w-16 h-0.5 bg-accent mb-6"></div>
      {subtitle && (
        <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
