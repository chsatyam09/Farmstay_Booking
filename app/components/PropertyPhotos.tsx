'use client'

import { useState, useEffect } from 'react'

export default function PropertyPhotos() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const propertyImages = [
    
    '/Images/Aravali Farm Images/property-2.jpg',
    '/Images/Aravali Farm Images/Living Room 2.jpg',
      '/Images/Aravali Farm Images/Pool-1.png',
       '/Images/Aravali Farm Images/Property-1.png',
      '/Images/Aravali Farm Images/Graden-1.png',
      '/Images/Aravali Farm Images/Serprate_Sitting_Area-1.png',
       '/Images/Aravali Farm Images/Garden-3.jpg',
      '/Images/Aravali Farm Images/Pool-2.png',
    '/Images/Aravali Farm Images/King_Room1.jpg',
    '/Images/Aravali Farm Images/King_Room8.jpg',
    '/Images/Aravali Farm Images/Delux_Room1.jpg',
    '/Images/Aravali Farm Images/Standard_Room1.jpg',
     '/Images/Aravali Farm Images/Birthday-1.png',

    '/Images/Aravali Farm Images/pool_Sitting-3.jpg',
    '/Images/Aravali Farm Images/Living Room 3.jpg',
    '/Images/Aravali Farm Images/Serprate_Sitting_Area-2.jpg',
    '/Images/Aravali Farm Images/Garden-2.jpg',
    '/Images/Aravali Farm Images/Washroom2.jpg',
  ]

  const openModal = (image: string) => {
    const index = propertyImages.indexOf(image)
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const nextModalImage = () => {
    if (selectedImageIndex !== null) {
      const nextIndex = (selectedImageIndex + 1) % propertyImages.length
      setSelectedImageIndex(nextIndex)
    }
  }

  const prevModalImage = () => {
    if (selectedImageIndex !== null) {
      const prevIndex = selectedImageIndex === 0 ? propertyImages.length - 1 : selectedImageIndex - 1
      setSelectedImageIndex(prevIndex)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') {
          const nextIndex = (selectedImageIndex + 1) % propertyImages.length
          setSelectedImageIndex(nextIndex)
        } else if (e.key === 'ArrowLeft') {
          const prevIndex = selectedImageIndex === 0 ? propertyImages.length - 1 : selectedImageIndex - 1
          setSelectedImageIndex(prevIndex)
        } else if (e.key === 'Escape') {
          setSelectedImageIndex(null)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex, propertyImages.length])

  return (
    <>
      <section style={{ 
        padding: '4rem 0', 
        background: '#fafafa'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem' 
        }}>
          {/* Section Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '3rem' 
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#000000',
              marginBottom: '0.5rem',
              letterSpacing: '0.15em',
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 300,
            }}>
       Aravālī Portraits
            </h2>

            <div style={{
              width: '100%',
              height: '2px',
              background: '#111111',
              marginBottom: '1rem'
            }}></div>

            <p style={{
              fontSize: '1.2rem',
              color: '#595959',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto',
              fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
            }}>
              E X P L Ø R E · B E A U T Y · L U X U R Y · A R A V A L I
            </p>

          </div>

          {/* Photo Grid - Full Width */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            width: '100%'
          }}>
            {propertyImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openModal(image)}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '280px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  background: '#f9fafb'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)'
                  e.currentTarget.style.borderColor = '#000000'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                <img
                  src={image}
                  alt={`Property ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  padding: '1rem',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0'
                }}
                >
                  <div style={{
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    View Full Image
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Full Screen Gallery */}
      {selectedImageIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.98)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.transform = 'rotate(0deg) scale(1)'
            }}
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevModalImage()
            }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '3rem',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.transform = 'translateY(-50%) translateX(-5px) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextModalImage()
            }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '3rem',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
              e.currentTarget.style.transform = 'translateY(-50%) translateX(5px) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ›
          </button>

          {/* Image Counter */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '10px 25px',
            borderRadius: '30px',
            color: 'white',
            fontSize: '1.1rem',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '500',
            zIndex: 10001
          }}>
            {selectedImageIndex + 1} / {propertyImages.length}
          </div>

          {/* Image - Max Screen Size */}
          <img
            src={propertyImages[selectedImageIndex]}
            alt={`Property ${selectedImageIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              padding: '2rem'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          /* Grid responsive for mobile */
          div[style*='gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))'] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          div[style*='height: 280px'] {
            height: 240px !important;
          }

          /* Modal responsive styles */
          button[style*='left: 20px'][style*='top: 50%'] {
            left: 10px !important;
            width: 45px !important;
            height: 45px !important;
            font-size: 2rem !important;
          }

          button[style*='right: 20px'][style*='top: 50%'] {
            right: 10px !important;
            width: 45px !important;
            height: 45px !important;
            font-size: 2rem !important;
          }

          button[style*='top: 20px'][style*='right: 20px'] {
            top: 10px !important;
            right: 10px !important;
            width: 40px !important;
            height: 40px !important;
            font-size: 1.5rem !important;
          }

          div[style*='bottom: 30px'][style*='font-size: 1.1rem'] {
            font-size: 0.9rem !important;
            padding: 8px 20px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          /* Tablets - 2 columns */
          div[style*='gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))'] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  )
}

