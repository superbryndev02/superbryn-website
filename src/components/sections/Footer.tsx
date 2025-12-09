'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/constants'

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <Image
            src="/images/superbryn_logo.png"
            alt="SuperBryn"
            width={120}
            height={30}
            style={{ height: 'auto', maxWidth: '120px' }}
          />
        </div>
        <div className="footer-links">
          {/* <Link href="/privacy">Privacy</Link> */}
          {/* <Link href="/terms">Terms</Link> */}
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

