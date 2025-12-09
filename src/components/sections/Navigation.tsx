'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { navLinks } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const mobileMenu = (
    <div 
      className="mobile-menu-overlay"
      onClick={() => setMobileMenuOpen(false)}
    >
      <div 
        className="mobile-menu-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="mobile-menu-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        {/* Navigation Links */}
        <nav className="mobile-menu-nav">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="mobile-menu-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button */}
        <Button 
          href="https://calendly.com/nikkitha-superbryn/30min" 
          variant="primary"
          onClick={() => setMobileMenuOpen(false)}
        >
          Book a Demo
        </Button>
      </div>
    </div>
  )

  return (
    <>
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - rendered via portal to escape nav stacking context */}
      {mounted && mobileMenuOpen && createPortal(mobileMenu, document.body)}
    </>
  )
}

