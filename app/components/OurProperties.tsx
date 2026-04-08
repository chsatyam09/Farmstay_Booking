'use client'

import { useState, useEffect } from 'react'

export default function OurProperties() {
  // Images for Aravali Farm (Gurgaon)
  const gurgaonImages = [
    '/Images/Aravali Farm Images/Property-1.png',
    '/Images/Aravali Farm Images/property-2.jpg',
    '/Images/Aravali Farm Images/Pool-1.png',
    '/Images/Aravali Farm Images/Living Room 2.jpg',
    '/Images/Aravali Farm Images/Graden-1.png',
    '/Images/Aravali Farm Images/Garden-3.jpg',
  ]

  // Images for Aravali Farm (Noida)
  const noidaImages = [
    '/Images/Aravali Farm Images/Pool-2.png',
    '/Images/Aravali Farm Images/Living Room 3.jpg',
    '/Images/Aravali Farm Images/Serprate_Sitting_Area-1.png',
    '/Images/Aravali Farm Images/Garden-2.jpg',
    '/Images/Aravali Farm Images/pool_Sitting-3.jpg',
    '/Images/Aravali Farm Images/Serprate_Sitting_Area-2.jpg',
  ]

  // Slider states
  const [gurgaonCurrent, setGurgaonCurrent] = useState(0)
  const [noidaCurrent, setNoidaCurrent] = useState(0)
  
  // Modal states
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [selectedProperty, setSelectedProperty] = useState<'gurgaon' | 'noida' | null>(null)

  // Auto-slide effect for Gurgaon (2.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setGurgaonCurrent((prev) => (prev + 1) % gurgaonImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [gurgaonImages.length])

  // Auto-slide effect for Noida (2.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setNoidaCurrent((prev) => (prev + 1) % noidaImages.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [noidaImages.length])

  const nextSlide = (property: 'gurgaon' | 'noida') => {
    if (property === 'gurgaon') {
      setGurgaonCurrent((prev) => (prev + 1) % gurgaonImages.length)
    } else {
      setNoidaCurrent((prev) => (prev + 1) % noidaImages.length)
    }
  }

  const prevSlide = (property: 'gurgaon' | 'noida') => {
    if (property === 'gurgaon') {
      setGurgaonCurrent((prev) => (prev === 0 ? gurgaonImages.length - 1 : prev - 1))
    } else {
      setNoidaCurrent((prev) => (prev === 0 ? noidaImages.length - 1 : prev - 1))
    }
  }

  const openModal = (property: 'gurgaon' | 'noida', imageIndex: number) => {
    setSelectedProperty(property)
    const images = property === 'gurgaon' ? gurgaonImages : noidaImages
    setSelectedImages(images)
    setSelectedImageIndex(imageIndex)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
    setSelectedImages([])
    setSelectedProperty(null)
  }

  const nextModalImage = () => {
    if (selectedImageIndex !== null && selectedImages.length > 0) {
      const nextIndex = (selectedImageIndex + 1) % selectedImages.length
      setSelectedImageIndex(nextIndex)
    }
  }

  const prevModalImage = () => {
    if (selectedImageIndex !== null && selectedImages.length > 0) {
      const prevIndex = selectedImageIndex === 0 ? selectedImages.length - 1 : selectedImageIndex - 1
      setSelectedImageIndex(prevIndex)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'ArrowRight') {
          nextModalImage()
        } else if (e.key === 'ArrowLeft') {
          prevModalImage()
        } else if (e.key === 'Escape') {
          closeModal()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex, selectedImages.length])

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
              Our Properties
            </h2>

            <div style={{
              width: '100%',
              height: '2px',
              background: '#111111',
              marginBottom: '1rem'
            }}></div>
          </div>

          {/* Properties Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            width: '100%'
          }}>
            {/* Aravali Farm (Gurgaon) Slider */}
            <div style={{
              position: 'relative',
              width: '100%',
            }}>
                   <h3 style={{
                fontSize: '1.75rem',
                color: '#000000',
                marginBottom: '1.25rem',
                textAlign: 'center',
                fontFamily: '"Poppins", cursive',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}>

  Aravali Farm (Gurgaon)
</h3>

              
              <div style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => openModal('gurgaon', gurgaonCurrent)}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1)'
              }}
              >
                {gurgaonImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: index === gurgaonCurrent ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Gurgaon Property ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}

                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide('gurgaon')
                  }}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ‹
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide('gurgaon')
                  }}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ›
                </button>
              </div>
            </div>

            {/* Aravali Farm (Noida) Slider */}
            <div style={{
              position: 'relative',
              width: '100%',
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                color: '#000000',
                marginBottom: '1.25rem',
                textAlign: 'center',
                fontFamily: '"Poppins", cursive',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}>
                Aravali Farm (Noida)
              </h3>
              
              <div style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onClick={() => openModal('noida', noidaCurrent)}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.transform = 'scale(1)'
              }}
              >
                {noidaImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: index === noidaCurrent ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                    }}
                  >
                    <img
                      src={image}
                      alt={`Noida Property ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}

                {/* Previous Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide('noida')
                  }}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ‹
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide('noida')
                  }}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    fontSize: '2rem',
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    backdropFilter: 'blur(5px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.35)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal - Full Screen Gallery (similar to PropertyPhotos) */}
      {selectedImageIndex !== null && selectedImages.length > 0 && (
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
            {selectedImageIndex + 1} / {selectedImages.length}
          </div>

          {/* Image - Max Screen Size */}
          <img
            src={selectedImages[selectedImageIndex]}
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
          div[style*='gridTemplateColumns: repeat(auto-fit, minmax(400px, 1fr))'] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          div[style*='height: 400px'] {
            height: 300px !important;
          }
          
          /* Title size on mobile */
          h3 {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
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
          /* Tablets - single column */
          div[style*='gridTemplateColumns: repeat(auto-fit, minmax(400px, 1fr))'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

