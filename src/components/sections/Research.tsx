import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { researcher } from '@/lib/constants'

export function Research() {
  return (
    <section className="research-section" id="research">
      <div className="section-container">
        <SectionHeader
          eyebrow="Research-Backed"
          title={
            <>
              Built by <span className="text-gradient">researchers.</span> Not just engineers.
            </>
          }
          description="SuperBryn's approach is grounded in over a decade of academic research in speech recognition, acoustic modeling, and voice AI."
        />

        <div className="research-content">
          <div className="researcher-image-container">
            <div className="researcher-image-placeholder">
              <Image
                src={researcher.image}
                alt={researcher.name}
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="credentials-badges">
              {researcher.credentials.map((credential, index) => (
                <span key={index} className="credential-badge">
                  {credential}
                </span>
              ))}
            </div>
          </div>

          <div className="researcher-details">
            <h3 className="researcher-name">{researcher.name}</h3>
            <div className="researcher-role">{researcher.role}</div>

            <blockquote className="researcher-quote">
              &ldquo;{researcher.quote}&rdquo;
            </blockquote>

            <p className="researcher-bio">{researcher.bio}</p>

            <div className="publications-header">Selected Publications</div>
            <ul className="publications-list">
              {researcher.publications.map((pub, index) => (
                <li key={index}>
                  <div className="pub-title">{pub.title}</div>
                  <div className="pub-venue">{pub.venue}</div>
                </li>
              ))}
            </ul>
            <a
              href={researcher.scholarLink}
              className="pub-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all publications →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

