'use client'

import React, { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    // inject animation CSS once
    const id = 'scroll-to-top-animations'
    if (!document.getElementById(id)) {
      const style = document.createElement('style')
      style.id = id
      style.innerHTML = `
        @keyframes popShake {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          10% { transform: translateY(-6px) scale(1.12) rotate(-6deg); }
          30% { transform: translateY(3px)  scale(0.98) rotate(6deg); }
          50% { transform: translateY(-2px) scale(1.04) rotate(-4deg); }
          70% { transform: translateY(1px)  scale(0.99) rotate(2deg); }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }

        .stt-button {
          transition: box-shadow 0.18s ease, transform 0.18s ease, background 0.18s ease, color 0.18s ease;
          will-change: transform, box-shadow;
        }

        .stt-button.popshake {
          animation: popShake 600ms cubic-bezier(.2,.9,.3,1);
        }

        /* focus-visible style for accessibility */
        .stt-button:focus-visible {
          outline: 3px solid rgba(0,0,0,0.12);
          outline-offset: 3px;
        }
      `
      document.head.appendChild(style)
    }

    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (!footer) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const footerTop = (footer as HTMLElement).offsetTop

      const footerInView = scrollTop + windowHeight >= footerTop
      setIsVisible(footerInView)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()

    // trigger pop+shake + color change
    setAnimating(true)

    // perform scroll
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAnimationEnd = () => {
    setAnimating(false)
  }

  if (!isVisible) return null

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`stt-button ${animating ? 'popshake' : ''}`}
      onClick={scrollToTop}
      onAnimationEnd={handleAnimationEnd}
      onMouseOver={(e) => {
        const target = e.currentTarget as HTMLButtonElement
        // subtle hover lift
        target.style.transform = 'translateY(-3px) scale(1.05)'
        target.style.boxShadow = '0 8px 22px rgba(0,0,0,0.18)'
      }}
      onMouseOut={(e) => {
        const target = e.currentTarget as HTMLButtonElement
        target.style.transform = animating ? '' : 'translateY(0) scale(1)'
        target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.12)'
      }}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: animating ? 'linear-gradient(135deg, #d1731aff, #ff007b)' : '#ffffff', // white normally, gradient during click
        color: animating ? '#ffffff' : '#000000', // arrow turns white while animating
        padding: '1rem',
        borderRadius: '50%',
        boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
        border: 'none',
        textDecoration: 'none',
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        transition: 'opacity 0.3s ease-in-out, transform 0.18s ease, background 0.18s ease, color 0.18s ease',
        opacity: 1,
        transform: 'translateY(0)',
        zIndex: 1000,
        cursor: 'pointer'
      }}
    >
      {/* arrow */}
      <span style={{ display: 'inline-block', lineHeight: 1 }}>{'↑'}</span>
    </button>
  )
}
