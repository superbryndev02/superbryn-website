'use client'

import { useState, useEffect, useRef } from 'react'
import { voiceWidgetQuestions } from '@/lib/constants'

const MicIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
  </svg>
)

export function VoiceWidget() {
  const [isActive, setIsActive] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleQuestionClick = (question: string) => {
    // TODO: Integrate with your voice AI service
    console.log('Question clicked:', question)
  }

  const handleMicClick = () => {
    // TODO: Integrate with speech recognition API
    console.log('Mic clicked - start listening')
  }

  return (
    <div
      ref={widgetRef}
      className={`voice-widget${isActive ? ' active' : ''}`}
      id="voiceWidget"
    >
      <div className="voice-widget-expanded">
        <div className="voice-widget-header">
          <h4>Talk to SuperBryn</h4>
          <p>Ask anything about voice AI reliability</p>
        </div>
        <div className="voice-widget-body">
          <div className="voice-widget-prompt">
            <button
              className="voice-widget-mic"
              aria-label="Start speaking"
              onClick={handleMicClick}
            >
              <MicIcon />
            </button>
            <p>Tap to speak or try a question below</p>
          </div>
        </div>
        <div className="voice-widget-questions">
          <div className="voice-widget-questions-label">Popular questions</div>
          {voiceWidgetQuestions.map((question, index) => (
            <button
              key={index}
              className="voice-widget-question"
              onClick={() => handleQuestionClick(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <span className="voice-widget-tooltip">Ask me anything about SuperBryn</span>
      <button
        className="voice-widget-btn"
        aria-label="Talk to SuperBryn"
        onClick={(e) => {
          e.stopPropagation()
          setIsActive(!isActive)
        }}
      >
        <MicIcon />
      </button>
    </div>
  )
}

