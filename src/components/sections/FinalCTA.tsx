import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section className="final-cta" id="book">
      <div className="section-container">
        <div className="overlay">
          <h2 className="section-title">
            Ready to understand why your voice agents fail?
          </h2>
          <p className="section-desc">
            See SuperBryn in action. We&apos;ll show you what&apos;s actually happening in
            your production calls.
          </p>
          <div className="final-cta-buttons">
            <Button href="https://calendly.com/nikkitha-superbryn/30min" variant="primary">
              Book a Demo →
            </Button>
            <Button href="https://www.youtube.com/watch?v=bp5tn0KAymw" variant="secondary">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

