'use client'

import { useState, FormEvent } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.')
    }
  }

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="section-container">
        <SectionHeader
          eyebrow="Stay Updated"
          title={
            <span className="text-gradient">The Voice AI Reliability Newsletter</span>
          }
          description="Weekly insights on voice AI production challenges, reliability patterns, and what we're learning building SuperBryn. No spam. Unsubscribe anytime."
        />

        {status === 'success' ? (
          <p style={{ marginTop: '2rem', color: '#41E5E4', textAlign: 'center' }}>
            ✓ Thanks for subscribing!
          </p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="you@company.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === 'error') {
                  setStatus('idle')
                  setErrorMessage('')
                }
              }}
              disabled={status === 'loading'}
            />
            <Button type="submit" variant="primary" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTopColor: '#fff',
                      borderRadius: '50%',
                      animation: 'spin 0.6s linear infinite',
                    }}
                  />
                </span>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
        )}
        {status === 'error' && errorMessage && (
          <p style={{ marginTop: '1rem', color: '#ff6b6b', textAlign: 'center', fontSize: '0.9rem' }}>
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  )
}

