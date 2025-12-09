import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">Voice AI Reliability Platform</div>
      <h1>
        Your voice agents work in the demo.
        <br />
        They <em>break</em> in production.
      </h1>
      <p className="hero-sub">
        SuperBryn is the evaluation and observability platform that helps you
        understand why your voice agents fail—and how to fix them.
      </p>
      <div className="hero-ctas">
        <Button href="https://calendly.com/nikkitha-superbryn/30min" variant="primary">
          Book a Demo →
        </Button>
        <Button href="https://www.youtube.com/watch?v=bp5tn0KAymw" variant="secondary">
          Watch Demo
        </Button>
      </div>
    </section>
  )
}

