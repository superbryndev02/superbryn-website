import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  href?: string
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
}

export function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseClass = `btn btn-${variant} ${className}`

  if (href) {
    // Check if it's an external URL
    const isExternal = href.startsWith('http://') || href.startsWith('https://')
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={baseClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    
    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

