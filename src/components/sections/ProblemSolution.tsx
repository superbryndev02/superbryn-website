import { SectionHeader } from '@/components/ui/SectionHeader'
import { problemPoints, solutionPoints } from '@/lib/constants'

export function ProblemSolution() {
  return (
    <section className="problem-section" id="problem">
      <div className="section-container">
        <SectionHeader
          eyebrow="The Production Gap"
          title={
            <>
              Your <span className="text-gradient">voice agents pass</span> every test. Then they fail real customers.
            </>
          }
          description="Demos work perfectly. Production breaks silently. The gap between testing and reality is where trust dies."
        />

        <div className="problem-grid">
          <div className="problem-card">
            <div className="card-label">The Problem</div>
            <h3 className="card-title">You&apos;re flying blind in production.</h3>
            <ul className="card-list">
              {problemPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="solution-card">
            <div className="card-label">Our Solution</div>
            <h3 className="card-title">Evals, observability, and self-learning for voice AI.</h3>
            <ul className="card-list">
              {solutionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

