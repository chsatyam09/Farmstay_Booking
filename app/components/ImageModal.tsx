'use client'

import { useEffect, useState } from 'react'

interface ImageModalProps {
  imageSrc: string
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  currentIndex?: number
  totalImages?: number
}

const ImageModal = ({ imageSrc, onClose, onNext, onPrev, currentIndex, totalImages }: ImageModalProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden'
    
    // Handle keyboard navigation
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight' && onNext) {
        onNext()
      } else if (event.key === 'ArrowLeft' && onPrev) {
        onPrev()
      }
    }
    
    document.addEventListener('keydown', handleKeyPress)
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="image-modal-close-btn"
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          fontSize: '20px',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 10001,
          fontWeight: 'bold'
        }}
        onMouseOver={(e) => {
          const target = e.target as HTMLButtonElement
          target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'
          target.style.transform = 'scale(1.05)'
        }}
        onMouseOut={(e) => {
          const target = e.target as HTMLButtonElement
          target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
          target.style.transform = 'scale(1)'
        }}
      >
        ×
      </button>

      {/* Navigation Buttons */}
      {onPrev && onNext && totalImages && totalImages > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '24px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10001
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'
              target.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
              target.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '24px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10001
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'
              target.style.transform = 'translateY(-50%) scale(1.1)'
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLButtonElement
              target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'
              target.style.transform = 'translateY(-50%) scale(1)'
            }}
          >
            ›
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div
        className="image-modal-main-container"
        style={{
          position: 'fixed',
          top: '80px',
          left: '40px',
          right: '40px',
          bottom: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt="Full size view"
          onLoad={() => setImageLoaded(true)}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'center',
            borderRadius: '8px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
            transition: 'opacity 0.3s ease',
            opacity: imageLoaded ? 1 : 0,
            display: 'block'
          }}
        />
        
        {/* Loading Spinner */}
        {!imageLoaded && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderTop: '2px solid white',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
              }}
            ></div>
            Loading...
          </div>
        )}
      </div>

      {/* Image Counter */}
      {totalImages && totalImages > 1 && currentIndex !== undefined && (
        <div
          style={{
            position: 'absolute',
            top: '25px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            padding: '6px 12px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontWeight: '500'
          }}
        >
          {currentIndex + 1} / {totalImages}
        </div>
      )}

      {/* Instructions */}
      <div
        className="image-modal-instructions"
        style={{
          position: 'absolute',
          bottom: '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: '14px',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          padding: '8px 16px',
          borderRadius: '25px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
Use arrow keys to navigate • Press ESC or click outside to close
      </div>
      
      {/* CSS for loading spinner animation */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default ImageModal
