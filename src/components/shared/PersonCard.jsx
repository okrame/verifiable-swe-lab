export default function PersonCard({ name, role, institution, link }) {
  return (
    <div className="flex items-center justify-between border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
      <div>
        <h3 className="font-display font-bold text-foreground">{name}</h3>
        <p className="text-sm text-foreground-muted">{institution}</p>
      </div>

      {link && link !== '#' && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-dark text-sm font-medium"
        >
          Profile →
        </a>
      )}
    </div>
  )
}
