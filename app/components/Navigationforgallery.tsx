'use client'

import { useState } from 'react'
import Link from 'next/link'

interface NavigationProps {
  // No location props needed anymore
}

const Navigationforgallery = ({}: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    // { name: 'Blogs', href: '#blogs' },
    { name: 'Farmhouse', href: '/farmhouse' },
    { name: 'Call us - +91 7903962473', href: '/contact' },
    ]

  const navLinkStyle = (): React.CSSProperties => ({
    fontSize: '0.875rem',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '500',
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    transition: 'all 0.3s ease',
  })

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'transparent',
        backdropFilter: 'none',
        boxShadow: 'none',
        borderBottom: 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
          }}
        >
          {/* Logo */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/Images/Aravali Farm Images/Aravali logo.png"
                alt="Aravali Farm Logo"
                style={{
                  width: '200px',
                  height: 'auto',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </Link>
          </div>

          {/* Right side - nav links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="hidden-mobile"
          >
            {/* Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  fontSize: '0.875rem',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '500',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '9999px',
                  border: '1px solid white',
                  background: 'transparent',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  textAlign: 'center',
                  minWidth: '100px'
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLAnchorElement
                  target.style.background = 'white'
                  target.style.border = '1px solid white'
                  target.style.color = '#111111'
                  target.style.transform = 'translateY(-1px)'
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLAnchorElement
                  target.style.background = 'transparent'
                  target.style.border = '1px solid white'
                  target.style.color = 'white'
                  target.style.transform = 'translateY(0)'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-button" style={{ display: 'none' }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                color: 'white',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                transition: 'all 0.3s ease',
                outline: 'none',
                borderRadius: '6px',
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.background = 'none'
              }}
            >
              <svg
                style={{ height: '24px', width: '24px' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '80px',
              right: '16px',
              width: 'auto',
              minWidth: '120px',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              borderRadius: '8px',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              zIndex: 1000,
            }}
            className="mobile-menu"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '0.7rem',
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: '500',
                  color: '#111111',
                  textDecoration: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  transition: 'all 0.2s ease',
                  display: 'block',
                  textAlign: 'left',
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLAnchorElement
                  target.style.background = 'rgba(17, 17, 17, 0.05)'
                  target.style.color = '#111111'
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLAnchorElement
                  target.style.background = 'transparent'
                  target.style.color = '#111111'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigationforgallery
