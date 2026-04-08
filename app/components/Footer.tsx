'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 2rem 1rem !important;
            text-align: center !important;
          }
          .footer-links,
          .footer-actions {
            align-items: center !important;
          }
        }
      `}</style>

      <footer
        style={{
          backgroundColor: '#efe9e1',
          borderTop: '1px solid rgba(0,0,0,0.1)',
          marginTop: '3rem',
          fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: '#333',
        }}
      >
        <div
          className="footer-grid"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '2.5rem 1.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr auto auto',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Brand */}
 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
  <h2
    style={{
      fontSize: '2.35rem',
      fontWeight: '700',
      color: '#111',
      margin: 0,
      fontFamily: "'Playfair Display', serif",
    }}
  >
    FarmStay Booking
  </h2>

  <p
    style={{
      fontSize: '1.3rem',        // smaller text
      fontWeight: '300',         // thinner font
      letterSpacing: '0.09em',
      color: '#6b6b6b',
      lineHeight: 1.5,
      margin: 0,
    }}
  >
     1BHK · 2BHK · 3BHK · 4BHK <br />
    ( Pool in Every Farmhouse)
  </p>
</div>


          {/* Quick Links */}
          <div
            className="footer-links"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Quick Links
            </span>
            <Link href="/" style={{ fontSize: '0.9rem', color: '#333', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/Gallery" style={{ fontSize: '0.9rem', color: '#333', textDecoration: 'none' }}>
              Farmhouse
            </Link>
            <Link href="/contact" style={{ fontSize: '0.9rem', color: '#333', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>

          {/* Contact */}
          <div
            className="footer-actions"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: '0.09em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              Get in touch
            </span>
            <a
              href="https://wa.me/919211255393"
              style={{
                fontSize: '0.9rem',
                color: '#333',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              WhatsApp
            </a>
            <a
              href="tel:+919211255393"
              style={{
                fontSize: '0.9rem',
                color: '#333',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              Call
            </a>
            <a
              href="https://www.instagram.com/aravalifarms_ncr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.9rem',
                color: '#333',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(0,0,0,0.06)',
            padding: '1rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '0.8rem',
              color: '#666',
              letterSpacing: '0.02em',
            }}
          >
            © 2026 www.farmstaybooking.fun — All rights reserved · Choudhary&apos;s Family
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
