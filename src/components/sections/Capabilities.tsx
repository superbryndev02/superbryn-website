import { SectionHeader } from '@/components/ui/SectionHeader'
import { capabilities } from '@/lib/constants'

export function Capabilities() {
  return (
    <section className="capabilities-section" id="capabilities">
      <div className="section-container">
        <SectionHeader
          eyebrow="Evals & Observability"
          title={
            <>
              Everything you <span className="text-gradient">need to trust</span> voice AI at scale.
            </>
          }
          description="Pre-deployment evals, production observability, and a roadmap to self-learning—built by researchers with 14+ years in speech recognition."
        />

        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`capability-card${capability.comingSoon ? ' coming-soon' : ''}`}
            >
              {capability.comingSoon && (
                <span className="coming-soon-badge">Coming Soon</span>
              )}
              <div className="capability-icon">{capability.icon}</div>
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-desc">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

