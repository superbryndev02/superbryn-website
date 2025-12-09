import { SectionHeader } from '@/components/ui/SectionHeader'
import { whyPoints } from '@/lib/constants'

export function WhySuperBryn() {
  return (
    <section className="why-section" id="why">
      <div className="section-container">
        <SectionHeader
          eyebrow="Why SuperBryn"
          title={
            <>
              Others build dashboards.
              <br />
              <span className="text-gradient">We build</span> understanding.
            </>
          }
          description="The first voice AI platform built by speech recognition researchers—for the problems they've spent their careers solving."
        />

        <div className="why-grid">
          {whyPoints.map((point, index) => (
            <div key={index} className="why-item">
              <div className="why-number">{point.number}</div>
              <div className="why-content">
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

