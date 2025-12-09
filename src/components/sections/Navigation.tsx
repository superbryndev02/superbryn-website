'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav>
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image
            src="/images/superbryn_logo.png"
            alt="SuperBryn"
            width={160}
            height={40}
            priority
            style={{ height: 'auto', maxWidth: '160px' }}
          />
        </Link>
        
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Button href="https://calendly.com/nikkitha-superbryn/30min" variant="primary">
            Book a Demo
          </Button>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  )
}

