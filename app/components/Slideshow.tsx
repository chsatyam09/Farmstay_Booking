'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './Slideshow.css'

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Use your images from the public folder with SEO-optimized alt tags
  const slides = [
    { image: '/Images/Aravali Farm Images/Property-1.png', alt: 'Luxury Farmhouse in Gurgaon with Private Pool and Lush Green Lawn' },
    { image: '/Images/Aravali Farm Images/property-2.jpg', alt: 'Farmhouse for Party in Gurgaon - Premium Venue for Celebrations' },
    { image: '/Images/Aravali Farm Images/Born_FIre-1.png', alt: 'Farmhouse with Bonfire Setup in Delhi NCR - Perfect for Evening Gatherings' },
    { image: '/Images/Aravali Farm Images/Graden-1.png', alt: 'Farmhouse with Garden in Gurgaon - Beautiful Outdoor Space for Events' },
    { image: '/Images/Aravali Farm Images/Pool-1.png', alt: 'Farmhouse with Pool in Gurgaon - Private Swimming Pool for Pool Parties' },
    { image: '/Images/Aravali Farm Images/Living Room 2.jpg', alt: 'Luxury Farmhouse Living Room in Gurgaon - Modern and Comfortable' },
    { image: '/Images/Aravali Farm Images/Serprate_Sitting_Area-1.png ', alt: 'Farmhouse Sitting Area in Gurgaon - Spacious Indoor Space' },
    
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // every 5 seconds
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="slideshow-container" style={{ position: 'relative', top: '0', height: '100vh', margin: '0', padding: '0', overflow: 'hidden', borderRadius: '0', width: '100vw', left: '0', right: '0', zIndex: '1' }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.2)'
          }}></div>
        </div>
      ))}

      {/* Overlay content - z-index ensures "Explore Farmhouse" link is clickable above slides */}
      <div className="slideshow-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }}>

        <div className="slideshow-overlay-content" style={{
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h1 className="slideshow-hero-title" style={{
                fontSize: 'clamp(2rem, 7.5vw, 10rem)',
                letterSpacing: '0.05em',
                fontWeight: '700',
                fontVariationSettings: "'opsz' 144, 'wght' 700",
                margin: 0,
                lineHeight: 1.1
              }}>
                FarmStay Booking
              </h1>
            </div>
          </div>

          <Link
            href="/Gallery"
            className="slideshow-explore-link"
            style={{
              background: 'transparent',
              color: 'white',
              marginTop: '1rem',
              padding: '0.75rem 2.3rem',
              fontSize: 'clamp(0.875rem, 2.5vw, 1.525rem)',
              fontWeight: '100',
              letterSpacing: '1.5px',
              fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
              border: '1px solid #ffffffff',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              borderRadius: '8px',
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLAnchorElement
              target.style.background = '#efe8e8ff'
              target.style.color = 'black'
              target.style.transform = 'translateY(-4px) scale(1.05)'
              target.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.2)'
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLAnchorElement
              target.style.background = 'transparent'
              target.style.color = '#fffdfdff'
              target.style.border = '1px solid white'
              target.style.transform = 'translateY(0) scale(1)'
              target.style.boxShadow = 'none'
            }}
          >
            Explore Farmhouse
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          fontSize: '0.9rem',
          marginBottom: '0.5rem',
          textAlign: 'center',
          letterSpacing: '0.8px',
          fontFamily:  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeight: '200',
    //   fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
    // fontWeight: '10',
        }}>
          Scroll Down to explore
        </div>
        <div style={{
          width: '1.4px',
          height: '30px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '1px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '10px',
            background: 'white',
            borderRadius: '1px',
            animation: 'scrollIndicator 2s infinite'
          }}></div>
        </div>
      </div>
      
      {/* Responsive Design */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes scrollIndicator {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(30px);
            opacity: 0;
          }
        }
        
        /* Slideshow responsive styles */
        @media (max-width: 1024px) {
          div[style*="height: 100vh"] {
            height: 100vh !important;
          }
          
          div[style*="marginTop: 0"] {
            margin-top: 0 !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="height: 100vh"] {
            height: 100vh !important;
          }
          
          div[style*="marginTop: 0"] {
            margin-top: 0 !important;
          }
          
          div[style*="marginLeft: 0"] {
            margin-left: 0 !important;
          }
          
          div[style*="marginRight: 0"] {
            margin-right: 0 !important;
          }
          
          h1[style*="fontSize: clamp(3rem, 8vw, 6rem)"] {
            font-size: clamp(2rem, 6vw, 4rem) !important;
          }
          
          p[style*="fontSize: clamp(1.2rem, 3vw, 1.8rem)"] {
            font-size: clamp(1rem, 2.5vw, 1.4rem) !important;
          }
          
          button[style*="fontSize: clamp(1rem, 2.5vw, 1.3rem)"] {
            font-size: clamp(0.9rem, 2vw, 1.1rem) !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="height: 100vh"] {
            height: 100vh !important;
          }
          
          div[style*="marginTop: 0"] {
            margin-top: 0 !important;
          }
          
          div[style*="marginLeft: 0"] {
            margin-left: 0 !important;
          }
          
          div[style*="marginRight: 0"] {
            margin-right: 0 !important;
          }
          
          h1[style*="fontSize: clamp(3rem, 8vw, 6rem)"] {
            font-size: clamp(1.5rem, 5vw, 3rem) !important;
          }
          
          p[style*="fontSize: clamp(1.2rem, 3vw, 1.8rem)"] {
            font-size: clamp(0.9rem, 2vw, 1.2rem) !important;
          }
          
          button[style*="fontSize: clamp(1rem, 2.5vw, 1.3rem)"] {
            font-size: clamp(0.8rem, 1.8vw, 1rem) !important;
            padding: 0.8rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Slideshow
