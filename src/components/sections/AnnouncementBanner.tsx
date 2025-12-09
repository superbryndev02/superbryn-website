'use client'

import { useState, useEffect } from 'react'
import { announcementBanner } from '@/lib/constants'

export function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Show banner on every page load
    document.body.classList.add('has-announcement-banner')
    
    return () => {
      document.body.classList.remove('has-announcement-banner')
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    document.body.classList.remove('has-announcement-banner')
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const link = announcementBanner.link
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  if (!isVisible) return null

  return (
    <div className="announcement-banner">
      <div className="announcement-banner-container">
        <p className="announcement-banner-text">
          {announcementBanner.text}
          <a
            href={announcementBanner.link}
            onClick={handleLinkClick}
            className="announcement-banner-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 3.5H1.75C1.33579 3.5 1 3.83579 1 4.25V12.25C1 12.6642 1.33579 13 1.75 13H9.75C10.1642 13 10.5 12.6642 10.5 12.25V8.75M8.75 1H13M13 1V5.25M13 1L5.25 8.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </p>
        <button
          onClick={handleClose}
          className="announcement-banner-close"
          aria-label="Close announcement"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L4 12M4 4L12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

