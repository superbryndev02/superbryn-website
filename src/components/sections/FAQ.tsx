import { SectionHeader } from '@/components/ui/SectionHeader'
import { faqItems } from '@/lib/constants'

export function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="section-container">
        <SectionHeader eyebrow="Quick Questions" title="Frequently asked" />

        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <h4 className="faq-question">{item.question}</h4>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

