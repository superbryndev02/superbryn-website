import { trustedCompanies } from '@/lib/constants'

export function LogoBar() {
  return (
    <div className="logo-bar">
      <div className="logo-bar-container">
        <div className="logo-bar-label">Trusted by leading teams</div>
        <div className="logo-grid">
          {trustedCompanies.map((company) => (
            <span key={company} className="customer-logo">
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

