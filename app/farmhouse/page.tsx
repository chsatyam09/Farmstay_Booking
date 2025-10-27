'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FarmhousePage() {
  const router = useRouter()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-15%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        filter: 'blur(40px)'
      }} />

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '3rem 2rem',
        maxWidth: '800px',
        width: '100%'
      }}>
        {/* Icon */}
        <div style={{
          fontSize: '8rem',
          marginBottom: '2rem',
          animation: 'float 3s ease-in-out infinite'
        }}>
          🏡
        </div>

        {/* Main Heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '1.5rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          lineHeight: '1.2',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
        }}>
          We're Working on Something Amazing!
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
          color: 'rgba(255, 255, 255, 0.95)',
          marginBottom: '2.5rem',
          fontWeight: '300',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          lineHeight: '1.6'
        }}>
          Our farmhouse listings are being prepared with care. Stay tuned for exciting updates!
        </p>

        {/* Decorative Line */}
        <div style={{
          width: '80px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '2px',
          margin: '0 auto 2rem',
        }} />

        {/* Button */}
        <button
          onClick={() => router.push('/')}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            borderRadius: '50px',
            padding: '1rem 3rem',
            color: 'white',
            fontSize: '1.125rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          ← Back to Home
        </button>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}


