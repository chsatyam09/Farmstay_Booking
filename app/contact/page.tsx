'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'
import { properties } from '@/app/data/properties'

// Success Modal Component
function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const phoneNumbers = [
    { number: '+91 9211255393', whatsapp: '919211255393' }
  ]

  // Auto-close after 10 seconds
  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 10000)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '1.75rem 1.75rem 1.75rem 1.75rem',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        animation: 'slideIn 0.3s ease',
        position: 'relative',
        margin: 'auto'
      }} onClick={(e) => e.stopPropagation()}>
        {/* Close Button Icon - Top Right */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            color: '#6b7280',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6'
            e.currentTarget.style.color = '#1f2937'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.color = '#6b7280'
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6'
            e.currentTarget.style.color = '#1f2937'
          }}
        >
          ✕
        </button>
        {/* Success Icon */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#5a7d5a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            ✓
          </div>
        </div>

        {/* Success Message */}
        <h2 style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#1a202c',
          marginBottom: '0.25rem'
        }}>
          Message Sent Successfully!
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#4a5568',
          fontSize: '0.9rem',
          marginBottom: '1.25rem'
        }}>
          Thank you for contacting us! We'll get back to you soon.
        </p>

        {/* Mobile Numbers and WhatsApp Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1rem'
        }} className="phone-numbers-container">
          {phoneNumbers.map((phone, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '10px',
              border: '1px solid #e5e7eb'
            }} className="phone-number-item">
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                flexShrink: 0
              }}>
                📱
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: '#374151',
                  fontWeight: '600',
                  wordBreak: 'break-word'
                }}>
                  {phone.number}
                </p>
              </div>
              <a
                href={`https://wa.me/${phone.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)'
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <span style={{ marginRight: '0.4rem', fontSize: '0.95rem' }}>💬</span>
                WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '0.75rem 1.25rem',
            background: '#5a7d5a',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(90, 125, 90, 0.4)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Close
        </button>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @media (max-width: 768px) {
          div[style*="maxWidth: 500px"] {
            max-width: 90% !important;
            max-height: 85vh !important;
          }
          
          div[style*="padding: 1.75rem"] {
            padding: 1.25rem 1.25rem 1.25rem 1.25rem !important;
          }
          
          div[class*="phone-numbers-container"] {
            gap: 0.75rem !important;
          }
          
          div[class*="phone-number-item"] {
            padding: 0.875rem !important;
            gap: 0.75rem !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
          }
          
          p {
            font-size: 0.9rem !important;
          }
          
          button {
            padding: 0.75rem 1rem !important;
            font-size: 0.95rem !important;
          }
          
          a {
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
          }
          
          span {
            margin-right: 0.4rem !important;
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="maxWidth: 500px"] {
            max-width: 92% !important;
            max-height: 88vh !important;
          }
          
          div[style*="padding: 1.75rem"] {
            padding: 1rem 0.875rem 1rem 0.875rem !important;
          }
          
          div[class*="phone-number-item"] {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 1rem !important;
          }
          
          div[class*="phone-number-item"] > div:first-child {
            width: 35px !important;
            height: 35px !important;
            align-self: flex-start !important;
          }
          
          div[class*="phone-number-item"] > div:nth-child(2) {
            margin: 0.5rem 0 !important;
          }
          
          div[class*="phone-number-item"] > a {
            width: 100% !important;
            padding: 0.75rem 1rem !important;
            justify-content: center !important;
          }
          
          h2 {
            font-size: 1.25rem !important;
          }
          
          h2:first-of-type {
            padding-top: 2rem !important;
          }
          
          p {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
          }
          
          button {
            padding: 0.7rem 1rem !important;
            font-size: 0.9rem !important;
          }
          
          a {
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 360px) {
          div[style*="maxWidth: 500px"] {
            max-width: 95% !important;
            max-height: 90vh !important;
          }
          
          div[style*="padding: 1.75rem"] {
            padding: 0.875rem 0.75rem 0.875rem 0.75rem !important;
          }
          
          div {
            padding: 1rem !important;
          }
          
          button[style*="position: absolute"] {
            top: 0.5rem !important;
            right: 0.5rem !important;
            width: 28px !important;
            height: 28px !important;
            font-size: 1.3rem !important;
          }
          
          h2 {
            font-size: 1.1rem !important;
            padding-top: 1.5rem !important;
          }
          
          p {
            font-size: 0.8rem !important;
          }
          
          button {
            padding: 0.65rem 0.9rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  )
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      border: '1px solid rgba(0, 0, 0, 0.05)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div style={{
        width: '100%',
        padding: '1.5rem',
        background: isHovered 
          ? 'linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)' 
          : 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        cursor: 'default'
      }}>
        <h3 style={{
          fontSize: '1.1rem',
                      color: '#000000',
          margin: 0,
          fontWeight: '600',
          textAlign: 'left',
          flex: 1
        }}>
          {question}
        </h3>
        <span style={{
          fontSize: '1.2rem',
                      color: '#000000',
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          ▼
        </span>
      </div>
      <div style={{
        maxHeight: isHovered ? '200px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
        padding: isHovered ? '0 1.5rem 1.5rem' : '0 1.5rem 0',
        background: 'white',
        borderTop: isHovered ? '1px solid rgba(0, 0, 0, 0.05)' : 'none'
      }}>
        <p style={{
          margin: 0,
          color: '#4a4a4a',
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          {answer}
        </p>
      </div>
    </div>
  )
}


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: '',
    numberOfGuests: '',
    checkInDate: '',
    checkOutDate: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
  })
  const contactFormRef = useRef<HTMLDivElement>(null)
  const [heroQuick, setHeroQuick] = useState({ name: '', email: '', inquiry: '' })

  const handleHeroQuickChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setHeroQuick((prev) => ({ ...prev, [name]: value }))
  }

  const handleHeroGetInTouch = (e: React.FormEvent) => {
    e.preventDefault()
    if (heroQuick.name.trim()) setFormData((prev) => ({ ...prev, name: heroQuick.name }))
    if (heroQuick.email.trim()) setFormData((prev) => ({ ...prev, email: heroQuick.email }))
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      checkInDate: '',
      checkOutDate: '',
    }

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate phone (must be exactly 10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Phone number must be exactly 10 digits'
    }

    // Validate check-in date
    if (!formData.checkInDate) {
      newErrors.checkInDate = 'Check-in date is required'
    }

    // Validate check-out date
    if (!formData.checkOutDate) {
      newErrors.checkOutDate = 'Check-out date is required'
    } else if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate)
      const checkOut = new Date(formData.checkOutDate)
      if (checkOut <= checkIn) {
        newErrors.checkOutDate = 'Check-out date must be after check-in date'
      }
    }

    setErrors(newErrors)
    return Object.values(newErrors).every(error => error === '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Prepare form data for web3forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '505625ac-de77-4afc-8da0-3ebf5c632d45')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('property', formData.property)
      formDataToSend.append('numberOfGuests', formData.numberOfGuests)
      formDataToSend.append('checkInDate', formData.checkInDate)
      formDataToSend.append('checkOutDate', formData.checkOutDate)
      formDataToSend.append('message', formData.message || 'No additional message')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        console.log('Form submitted successfully:', data)
        setSubmitStatus('success')
        setShowSuccessModal(true)
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          property: '',
          numberOfGuests: '', 
          checkInDate: '', 
          checkOutDate: '', 
          message: '' 
        })
        setErrors({
          name: '',
          email: '',
          phone: '',
          checkInDate: '',
          checkOutDate: '',
        })
      } else {
        console.error('Form submission failed:', data)
        setSubmitStatus('error')
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      alert('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f5f1eb'
    }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - same size as Gallery page header */}
      <section className="contact-hero-section" style={{
        position: 'relative',
        minHeight: '42vh',
        width: '100%',
        overflow: 'visible',
        backgroundColor: '#5a7d5a'
      }}>
        <div className="contact-hero-container" style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          paddingLeft: '1rem',
          paddingRight: '1rem',
          height: '100%',
          minHeight: '42vh'
        }}>
          {/* Centered Text Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            gap: '0.5rem',
            width: '100%',
            maxWidth: '100%'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.75rem, 7vw, 4.5rem)',
              fontWeight: '200',
              color: 'white',
              margin: '0 0 0.5rem 0',
              fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              lineHeight: '1.1',
              letterSpacing: '0.04em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}>
              Contact us ...
            </h1>
            <Link
              href="/Gallery"
              style={{
                fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: '200',
                color: 'white',
                textDecoration: 'none',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                border: '1.5px solid white',
                background: 'transparent',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                textAlign: 'center',
                minWidth: 'auto',
                marginTop: '0.5rem',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLAnchorElement
                target.style.background = 'white'
                target.style.border = '2px solid white'
                target.style.color = '#5a7d5a'
                target.style.transform = 'translateY(-2px) scale(1.02)'
                target.style.boxShadow = '0 6px 25px rgba(255, 255, 255, 0.3)'
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLAnchorElement
                target.style.background = 'transparent'
                target.style.border = '2px solid white'
                target.style.color = 'white'
                target.style.transform = 'translateY(0) scale(1)'
                target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)'
              }}
              onTouchStart={(e) => {
                const target = e.currentTarget
                target.style.background = 'rgba(255, 255, 255, 0.2)'
                target.style.transform = 'scale(0.98)'
              }}
              onTouchEnd={(e) => {
                const target = e.currentTarget
                target.style.background = 'transparent'
                target.style.transform = 'scale(1)'
              }}
            >
              Explore Farmhouse
            </Link>

            {/* Contact hero form bar - same style as Gallery search bar, contact-related fields */}
            <div className="contact-hero-form-container">
              <form onSubmit={handleHeroGetInTouch} className="contact-hero-form">
                <div className="contact-hero-form-field">
                  <label className="contact-hero-form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <div className="contact-hero-input-wrapper">
                    <input
                      type="text"
                      name="name"
                      value={heroQuick.name}
                      onChange={handleHeroQuickChange}
                      placeholder="Enter your name"
                      className="contact-hero-form-input"
                    />
                    <span className="contact-hero-input-icon">👤</span>
                  </div>
                </div>
                <div className="contact-hero-form-field">
                  <label className="contact-hero-form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <div className="contact-hero-input-wrapper">
                    <input
                      type="email"
                      name="email"
                      value={heroQuick.email}
                      onChange={handleHeroQuickChange}
                      placeholder="your@email.com"
                      className="contact-hero-form-input"
                    />
                    <span className="contact-hero-input-icon">✉️</span>
                  </div>
                </div>
                <div className="contact-hero-form-field">
                  <label className="contact-hero-form-label">
                    I&apos;m interested in
                  </label>
                  <div className="contact-hero-input-wrapper">
                    <select
                      name="inquiry"
                      value={heroQuick.inquiry}
                      onChange={handleHeroQuickChange}
                      className="contact-hero-form-input contact-hero-form-select"
                    >
                      <option value="">Select...</option>
                      <option value="book">Book a stay</option>
                      <option value="event">Event / Party</option>
                      <option value="general">General inquiry</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="contact-hero-input-icon contact-hero-chevron">▼</span>
                  </div>
                </div>
                <button type="submit" className="contact-hero-form-button">
                  Get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />

      {/* Why Booking.com Section - warm cream to match footer */}
      <section className="why-booking-section" style={{
        padding: '4rem 0',
        paddingTop: '6rem',
        background: '#f5f1eb'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000',
            marginBottom: '3rem',
            fontWeight: '700',
            textAlign: 'left'
          }}>
            Why FunstayBooking.com ?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px'
          }}>
            {/* Card 1: Book now, pay at property */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.06)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px'
              }}>
                💵
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                color: '#000000',
                marginBottom: '0.75rem',
                fontWeight: '700',
                margin: '0 0 0.75rem 0'
              }}>
                Book now, pay at the property
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#000000',
                lineHeight: '1.5',
                margin: 0
              }}>
                FREE cancellation on most Farmhouse 
              </p>
            </div>

            {/* Card 2: Reviews */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.06)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px'
              }}>
                🏡
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                color: '#000000',
                marginBottom: '0.75rem',
                fontWeight: '700',
                margin: '0 0 0.75rem 0'
              }}>
                100+ bookings on Every Month
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#000000',
                lineHeight: '1.5',
                margin: 0
              }}>
                Get trusted Property with Farmstay 
              </p>
            </div>

            {/* Card 3: Properties worldwide */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.06)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px'
              }}>
                 🇮🇳
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                color: '#000000',
                marginBottom: '0.75rem',
                fontWeight: '700',
                margin: '0 0 0.75rem 0'
              }}>
                10 + properties in Delhi NCR
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#000000',
                lineHeight: '1.5',
                margin: 0
              }}>
                Deal Only in FarmHouse's
              </p>
            </div>

            {/* Card 4: Customer service */}
            <div style={{
              background: '#ffffff',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(0, 0, 0, 0.06)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80px'
              }}>
                🎧
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                color: '#000000',
                marginBottom: '0.75rem',
                fontWeight: '700',
                margin: '0 0 0.75rem 0'
              }}>
                Trusted 24/7 customer service you can rely on
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#000000',
                lineHeight: '1.5',
                margin: 0
              }}>
                We're always here to help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - warm cream to match footer */}
      <section id="contact-form" ref={contactFormRef} style={{
        padding: '4rem 0',
        background: '#f5f1eb'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#1a202c',
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Send us a Message 
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: '#5a7d5a',
              borderRadius: '2px',
              margin: '0 auto 1.5rem'
            }}></div>
            <p style={{
              fontSize: '1.1rem',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Have questions or want to book your stay ? Fill out the form below and we'll get back to you within 2-4 hours.
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            {submitStatus === 'success' && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                marginBottom: '2rem',
                border: '1px solid #c3e6cb'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: '#28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>✓</div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', fontWeight: '600' }}>Message Sent Successfully!</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Thank you! We'll get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.name ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5a7d5a';
                      e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                    }}
                    onBlur={(e) => {
                      if (errors.name) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.name}</div>
                  )}
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.phone ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5a7d5a';
                      e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                    }}
                    onBlur={(e) => {
                      if (errors.phone) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                    placeholder="Enter 10-digit phone number"
                  />
                  {errors.phone && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.phone}</div>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.email ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5a7d5a';
                      e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                    }}
                    onBlur={(e) => {
                      if (errors.email) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.email}</div>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Number of Guests</label>
                  <select
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5a7d5a';
                      e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select guests</option>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="25-40">25-40</option>
                    <option value="40-70">40-70</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Select Property</label>
                  <select
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5a7d5a';
                      e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Select a property</option>
                    {properties.map(property => (
                      <option key={property.id} value={property.id}>{property.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Check-in Date *</label>
                  <input
                    name="checkInDate"
                    type="date"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.checkInDate ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5a7d5a';
                      e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                    }}
                    onBlur={(e) => {
                      if (errors.checkInDate) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {errors.checkInDate && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.checkInDate}</div>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Check-out Date *</label>
                  <input
                    name="checkOutDate"
                    type="date"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    min={formData.checkInDate}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: errors.checkOutDate ? '2px solid #ef4444' : '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#5a7d5a';
                      e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                    }}
                    onBlur={(e) => {
                      if (errors.checkOutDate) {
                        e.target.style.borderColor = '#ef4444';
                        e.target.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                      } else {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />
                  {errors.checkOutDate && (
                    <div style={{
                      color: '#ef4444',
                      fontSize: '0.875rem',
                      marginTop: '0.5rem'
                    }}>{errors.checkOutDate}</div>
                  )}
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    resize: 'vertical',
                    background: '#ffffff',
                    lineHeight: '1.5'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#5a7d5a';
                    e.target.style.boxShadow = '0 0 0 3px rgba(90, 125, 90, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell us about your requirements, number of guests, or any special requests (optional)..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? '#a0aec0' 
                    : '#5a7d5a',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSubmitting 
                    ? '0 4px 15px rgba(160, 174, 192, 0.3)' 
                    : '0 4px 15px rgba(90, 125, 90, 0.25)',
                  border: 'none',
                  alignSelf: 'center',
                  minWidth: '200px'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(90, 125, 90, 0.35)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isSubmitting 
                    ? '0 4px 15px rgba(160, 174, 192, 0.3)' 
                    : '0 4px 15px rgba(90, 125, 90, 0.25)';
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <span style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid #fff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></span>
                    Sending Message...
                  </span>
                ) : (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>📧</span>
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section style={{
        padding: '4rem 0',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #000000 0%, #666666 100%)',
            borderRadius: '2px',
            margin: '0 auto 3rem'
          }}></div>
          
          <div style={{
            display: 'grid',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: "What are the check-in and check-out times?",
                answer: "Check-in time is 1:00 PM and check-out time is 10:00 AM. Early check-in or late check-out may be available if there is no prior-day booking, with no additional charges."
              },
              {
  question: "Are there any restrictions at the property, such as loud music at night ?",
  answer: "No, there are no restrictions at our property. You can play loud music until 4 AM."
},
                 {
                question: "Is the property pet-friendly?",
                answer: "Yes, we welcome well-behaved pets at our farmhouse. Please inform us in advance."
              },
                            {
                question: "Is there parking available?",
                answer: "Yes, we provide free parking space for up to 6 vehicles inside the FarmHouse. Additional parking arrangements can be made upon request for larger groups."
              },
                 {
                question: "Is WiFi available throughout the property?",
                answer: "Yes, we provide complimentary WiFi throughout the farmhouse. The connection is reliable and suitable for both leisure and business needs."
              },
              {
                question: "What is the maximum number of guests allowed?",
                answer: "Our farmhouse has a sleeping capacity of up to 15 guests Comfortably. We provide all essentials, including blankets, bed sheets, and pillows. However, 40–50 guests can still enjoy their time at the farmhouse. Please contact us to discuss special arrangements and availability.."
              },
                     {
                question: "What amenities are included in the farmhouse?",
                answer: "Our farmhouse includes a swimming pool, bonfire, barbecue, fully equipped kitchen, air-conditioned rooms, Wi-Fi, parking, outdoor seating areas, and access to a beautiful garden. All basic amenities are provided for your comfort.."
              },
              {
                question: "Do you provide catering services?",
                answer: "We can arrange catering services for your events and celebrations. Please discuss your requirements with us in advance, and we'll help you plan the perfect menu."
              },
          
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section> */}


      <section style={{
        padding: '4rem 0',
        background: '#f5f1eb'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: '700'
          }}>
            Cancellation Policy
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>

            {/* Free Cancellation Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#000000',
                marginBottom: '1rem',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}>
                Free Cancellation
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a4a4a',
                lineHeight: '1.5',
                margin: 0
              }}>
               Guests will receive a 100% refund on full Payment
              </p>
            </div>

            {/* Partial Refund Card */}
            {/* <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#000000',
                marginBottom: '1rem',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}>
                Partial Refund
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a4a4a',
                lineHeight: '1.5',
                margin: 0
              }}>
                50% refund for cancellations 3-7 days before check-in
              </p>
            </div> */}

            {/* No Refund Card */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            }}>
              <h3 style={{
                fontSize: '1.2rem',
                color: '#000000',
                marginBottom: '1rem',
                fontWeight: '600',
                margin: '0 0 1rem 0'
              }}>
                No Token Refund
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a4a4a',
                lineHeight: '1.5',
                margin: 0
              }}>
                The token amount is non-refundable, but you can check in on another day completely free of charge.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            maxWidth: '700px',
            margin: '2rem auto 0'
          }}>
            <h3 style={{
              fontSize: '1.1rem',
              color: '#000000',
              marginBottom: '0.75rem',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Important Notes
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#666',
              lineHeight: '1.6',
              margin: 0,
              textAlign: 'center'
            }}>
After receiving your query, we will call you to take confirmation. Once the token amount is received, we will share an official booking confirmation with all the details through our official email ID: bookingfarmstay@gmail.com
.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />

      {/* Simplified Animations and Responsive Design */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Prevent horizontal overflow */
        * {
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        /* Contact hero form bar - same look as Gallery search bar */
        .contact-hero-form-container {
          position: absolute;
          bottom: -56px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          z-index: 20;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 12px 14px;
          margin: 0 auto;
        }

        .contact-hero-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          align-items: end;
        }

        .contact-hero-form-field {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .contact-hero-form-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
          display: block;
        }

        .contact-hero-form-label .required {
          color: #e74c3c;
        }

        .contact-hero-input-wrapper {
          position: relative;
          width: 100%;
        }

        .contact-hero-form-input {
          width: 100%;
          padding: 10px 36px 10px 12px;
          border: 2px solid #FFB700;
          border-radius: 8px;
          font-size: 0.9375rem;
          outline: none;
          transition: all 0.3s;
          font-family: inherit;
          box-sizing: border-box;
          background-color: white;
        }

        .contact-hero-form-input:focus {
          border-color: #FFB700;
          box-shadow: 0 0 0 3px rgba(255, 183, 0, 0.1);
        }

        .contact-hero-input-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 1.1rem;
          color: #666;
        }

        .contact-hero-input-icon.contact-hero-chevron {
          font-size: 0.75rem;
          color: #999;
        }

        .contact-hero-form-select {
          cursor: pointer;
          appearance: none;
          padding-right: 40px;
        }

        .contact-hero-form-button {
          padding: 10px 24px;
          background-color: #16a34a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.9375rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
          white-space: nowrap;
          height: fit-content;
        }

        .contact-hero-form-button:hover {
          background-color: #15803d;
        }

        @media (max-width: 900px) {
          .contact-hero-form {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-container {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          .contact-hero-form-container {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 20px 0 24px 0 !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
            padding: 20px 14px !important;
          }

          .contact-hero-form {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            align-items: stretch !important;
          }

          .contact-hero-form-field {
            width: 100% !important;
          }

          .contact-hero-form-input {
            padding: 14px 40px 14px 14px !important;
            font-size: 16px !important;
            min-height: 48px !important;
          }

          .contact-hero-form-button {
            width: 100% !important;
            padding: 16px !important;
            font-size: 1rem !important;
            font-weight: 600 !important;
            min-height: 48px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-container {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .contact-hero-form-container {
            width: 100% !important;
            margin: 16px 0 20px 0 !important;
            padding: 16px 12px !important;
          }
        }

        /* Contact hero - match Gallery header size at all breakpoints */
        @media (max-width: 900px) {
          .contact-hero-section {
            min-height: 38vh !important;
          }
          .contact-hero-container {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
        }

        @media (max-width: 768px) {
          .contact-hero-section {
            min-height: auto !important;
            padding-bottom: 0 !important;
            overflow: visible !important;
          }
          .contact-hero-container {
            padding-top: 100px !important;
            padding-bottom: 0 !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            min-height: auto !important;
          }
          .contact-hero-container h1 {
            font-size: clamp(2rem, 6vw, 2.75rem) !important;
            font-weight: 200 !important;
            margin-bottom: 0.25rem !important;
          }
          .contact-hero-container a {
            font-size: clamp(0.875rem, 2.5vw, 1rem) !important;
          }
        }

        @media (max-width: 480px) {
          .contact-hero-container {
            padding-top: 88px !important;
            padding-bottom: 0 !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          .contact-hero-container h1 {
            font-size: clamp(1.75rem, 5.5vw, 2.25rem) !important;
            font-weight: 200 !important;
          }
          .contact-hero-container a {
            font-size: clamp(0.8125rem, 2vw, 0.9375rem) !important;
          }
        }

        /* Rest of page responsive styles */
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="height: 280px"] {
            height: 250px !important;
          }
          div[style*="maxWidth: 400px"] {
            max-width: 350px !important;
          }
        }
        
        @media (max-width: 768px) {
          .why-booking-section {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
          .why-booking-section h2 {
            margin-bottom: 2rem !important;
          }
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          div[style*="height: 280px"] {
            height: 200px !important;
          }
          div[style*="height: 250px"] {
            height: 180px !important;
          }
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          }
          div[style*="maxWidth: 1000px"] {
            max-width: 100% !important;
            padding: 0 0.5rem !important;
          }
          div[style*="maxWidth: 900px"] {
            max-width: 100% !important;
            padding: 0 0.5rem !important;
          }
          div[style*="maxWidth: 800px"] {
            max-width: 100% !important;
            padding: 0 0.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .why-booking-section {
            padding-top: 1.75rem !important;
            padding-bottom: 1.75rem !important;
          }
          .why-booking-section h2 {
            margin-bottom: 1.5rem !important;
          }
          div[style*="height: 280px"] {
            height: 150px !important;
          }
          div[style*="height: 250px"] {
            height: 130px !important;
          }
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          div[style*="padding: 3rem"] {
            padding: 2rem !important;
          }
        }
        
        @media (max-width: 360px) {
          .contact-hero-container {
            padding-top: 88px !important;
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          .contact-hero-container h1 {
            font-size: clamp(1.5rem, 4vw, 2rem) !important;
            font-weight: 200 !important;
          }
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 0 0.5rem !important;
          }
        }
      `}</style>
    </div>
  )
}
