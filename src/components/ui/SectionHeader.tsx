interface SectionHeaderProps {
  eyebrow?: string
  title: string | React.ReactNode
  description?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  )
}

