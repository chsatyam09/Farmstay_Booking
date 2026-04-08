'use client'

import { useState } from 'react'
import Navigationforgallery from '@/app/components/Navigationforgallery'
import PropertyGallery from '@/app/components/PropertyGallery'
import Footer from '@/app/components/Footer'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'

export default function GalleryPage() {
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [numberOfGuests, setNumberOfGuests] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ checkInDate, checkOutDate, numberOfGuests, phoneNumber })
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f5f1eb'
    }}>
      {/* Hero Section with Dark Blue Background */}
      <div className="hero-section" style={{
        position: 'relative',
        minHeight: '42vh',
        width: '100%',
        overflow: 'visible',
        backgroundColor: '#5a7d5a'
      }}>
        {/* Navigation - positioned absolutely on top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50
        }}>
          <Navigationforgallery />
        </div>

        {/* Hero Content - centered */}
        <div className="hero-content" style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'white',
            marginBottom: '1rem'
          }}>

                       {/* <h1 style={{
              fontSize: 'clamp(2.75rem, 7vw, 4.5rem)',
              fontWeight: '200',
              color: 'white',
              margin: '0 0 0.5rem 0',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              lineHeight: '1.1',
              letterSpacing: '0.04em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}>
            </h1> */}

            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: '700',
              marginBottom: '0.5rem',
              color: '#ffffff'
            }}>
              Find your next stay
            </h1>
            <p className="hero-bhk-subtitle" style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#ffffff',
              fontWeight: '200',
              fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: '0.02em'
            }}>
              1 BHK · 2 BHK · 3 BHK · 4 BHK
              <br />
              ( Pool in Every Farmhouse )
            </p>
          </div>

          {/* Search Form - positioned at bottom overlapping */}
          <div className="search-form-container">
            <form onSubmit={handleSubmit} className="search-form">
              {/* Check-in Date */}
              <div className="form-field">
                <label className="form-label">
                  Check-in Date <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                    className="form-input date-input"
                  />
                  <span className="input-icon">📅</span>
                </div>
              </div>

              {/* Check-out Date */}
              <div className="form-field">
                <label className="form-label">
                  Check-out Date <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                    className="form-input date-input"
                    placeholder="dd/mm/yyyy"
                  />
                  <span className="input-icon">📅</span>
                </div>
              </div>

              {/* Number of Guests */}
              <div className="form-field">
                <label className="form-label">
                  Number of Guests
                </label>
                <div className="input-wrapper">
                  <select
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="">Select guests</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-15">11-15</option>
                    <option value="15-20">15-20</option>
                    <option value="20-25">20-25</option>
                    <option value="25-40">25-40</option>
                    <option value="40-70">40-70</option>
                    <option value="100+">100+</option>
                  </select>
                  <span className="input-icon chevron">▼</span>
                </div>
              </div>

              {/* Phone Number */}
              <div className="form-field">
                <label className="form-label">
                  Phone Number
                </label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className="form-input"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="search-button"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Content - warm cream to match footer */}
      <main className="main-content" style={{ background: '#f5f1eb', paddingTop: '52px' }}>
        {/* Other Farm Section */}
        <section style={{
          padding: '2rem 1.5rem',
          background: '#f5f1eb',
          position: 'relative',
          zIndex: 10
        }}>
          
          <PropertyGallery />
        </section>
        
        <Footer />
        
        {/* Scroll to Top Button - appears only when footer is visible */}
        <ScrollToTopButton />
      </main>

      {/* Responsive Styles */}
      <style jsx global>{`
        .search-form-container {
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

        .search-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          align-items: end;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .form-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 6px;
          display: block;
        }

        .required {
          color: #e74c3c;
        }

        .input-wrapper {
          position: relative;
          width: 100%;
        }

        .form-input {
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

        .form-input:focus {
          border-color: #FFB700;
          box-shadow: 0 0 0 3px rgba(255, 183, 0, 0.1);
        }

        .date-input {
          color: #333;
        }

        .date-input::-webkit-calendar-picker-indicator {
          opacity: 0;
          position: absolute;
          right: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .input-icon {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          font-size: 1.1rem;
          color: #666;
        }

        .input-icon.chevron {
          font-size: 0.75rem;
          color: #999;
        }

        .form-select {
          background-color: white;
          cursor: pointer;
          appearance: none;
          padding-right: 40px;
        }

        .search-button {
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

        .search-button:hover {
          background-color: #15803d;
        }

        /* Tablet: 2-column form, reduced hero */
        @media (max-width: 900px) {
          .hero-section {
            min-height: 38vh !important;
          }
          .hero-content {
            padding-top: 120px !important;
            padding-bottom: 80px !important;
          }
          .search-form {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Mobile - stacked form, compact hero */
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important;
            padding-bottom: 0 !important;
            overflow: visible !important;
            position: relative !important;
          }

          .hero-content {
            padding-top: 100px !important;
            padding-bottom: 0 !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
            min-height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            position: relative !important;
          }

          .hero-content > div:first-child {
            margin-bottom: 0 !important;
            padding-bottom: 24px !important;
            width: 100% !important;
          }

          .hero-content h1 {
            font-size: clamp(1.375rem, 5vw, 1.75rem) !important;
            margin-bottom: 0.25rem !important;
          }

          .hero-content p {
            font-size: clamp(0.875rem, 2.5vw, 1rem) !important;
            margin-bottom: 0 !important;
          }

          .hero-bhk-subtitle {
            font-size: clamp(0.7rem, 2vw, 0.85rem) !important;
          }

          .search-form-container {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            width: calc(100% - 32px) !important;
            max-width: 100% !important;
            margin: 20px 16px 24px 16px !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
            padding: 20px 16px !important;
            padding-bottom: max(20px, env(safe-area-inset-bottom)) !important;
            z-index: 30 !important;
          }

          .search-form {
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            align-items: stretch !important;
          }

          .form-field {
            width: 100% !important;
          }

          .form-label {
            font-size: 0.8125rem !important;
            font-weight: 600 !important;
            margin-bottom: 6px !important;
            color: #333 !important;
            display: block !important;
          }

          .form-input,
          .form-select {
            width: 100% !important;
            padding: 14px 40px 14px 14px !important;
            font-size: 16px !important;
            box-sizing: border-box !important;
            border: 2px solid #FFB700 !important;
            border-radius: 8px !important;
            min-height: 48px !important;
            background-color: white !important;
            -webkit-appearance: none;
            appearance: none;
          }

          .input-wrapper {
            width: 100% !important;
          }

          .input-icon {
            right: 14px !important;
            font-size: 1.1rem !important;
          }

          .input-icon.chevron {
            font-size: 0.75rem !important;
          }

          .search-button {
            width: 100% !important;
            padding: 16px !important;
            font-size: 1rem !important;
            font-weight: 600 !important;
            margin-top: 2px !important;
            border-radius: 8px !important;
            min-height: 48px !important;
          }

          .main-content {
            padding-top: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding-top: 88px !important;
            padding-bottom: 0 !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .hero-content > div:first-child {
            padding-bottom: 20px !important;
          }

          .hero-content h1 {
            font-size: clamp(1.25rem, 5vw, 1.5rem) !important;
          }

          .hero-content p {
            font-size: clamp(0.8125rem, 2vw, 0.9375rem) !important;
          }

          .hero-bhk-subtitle {
            font-size: clamp(0.5rem, 1.8vw, 0.7rem) !important;
          }

          .search-form-container {
            width: calc(100% - 24px) !important;
            margin: 16px 12px 20px 12px !important;
            padding: 16px 12px !important;
            padding-bottom: max(16px, env(safe-area-inset-bottom)) !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
          }

          .search-form {
            gap: 12px !important;
          }

          .form-label {
            font-size: 0.75rem !important;
            margin-bottom: 4px !important;
          }

          .form-input,
          .form-select {
            padding: 12px 36px 12px 12px !important;
            font-size: 16px !important;
            min-height: 44px !important;
          }

          .input-icon {
            right: 12px !important;
            font-size: 1rem !important;
          }

          .search-button {
            padding: 14px !important;
            font-size: 0.9375rem !important;
            min-height: 44px !important;
          }
        }
      `}</style>
    </div>
  )
}
