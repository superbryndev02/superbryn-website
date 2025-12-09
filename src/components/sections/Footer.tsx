'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/constants'

export function Footer() {
  const hideLink = process.env.NEXT_PUBLIC_HIDE_LINK === 'true'

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <Image
            src="https://superbryn.com/name.png"
            alt="SuperBryn"
            width={120}
            height={30}
            style={{ height: 'auto', maxWidth: '120px' }}
          />
        </div>
        <div className="footer-links">
          {!hideLink && <Link href="/privacy">Privacy</Link>}
          {!hideLink && <Link href="/terms">Terms</Link>}
          <a href="mailto:support@superbryn.com">Contact</a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

