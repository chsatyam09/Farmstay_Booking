'use client'

import React from 'react'

const Footer = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .footer-main {
            flex-direction: column !important;
          }
          .footer-content {
            padding: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-section {
            padding: 1rem !important;
          }
          .footer-header {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

      <footer
        style={{
          backgroundImage: 'url(/wowowow.jpeg)', // Background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          marginTop: '1rem',
          overflow: 'hidden',
          fontFamily: 'Inter, sans-serif',
          
        }}
      >
        {/* Dark overlay to enhance text visibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 0,
          }}
        />

        {/* Main Content */}
        <div
          className="footer-main"
          style={{
            display: 'flex',
            minHeight: '250px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem 2rem',
            position: 'relative',
            zIndex: 1,
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Left Section - Arvali Farm */}
<div
  className="footer-content"
  style={{
    flex: '1',
    color: '#ffffff',
    padding: '1rem 1rem 1rem 1rem', // 🔹 Reduced left padding
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }}
>
<h2
  className="footer-header"
  style={{
    fontSize: '3.2rem',
    fontWeight: '800',
    fontFamily: "'Poppins', 'Inter', 'Helvetica Neue', sans-serif",
    marginBottom: '1.2rem',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    paddingLeft: '0rem', // 🔹 Removed left padding
    background: 'linear-gradient(90deg, #fff8e1, #ffd54f, #ffca28)', // 🔹 Warm gold gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '1px 1px 8px rgba(255, 215, 0, 0.25)', // 🔹 Subtle gold glow
    transition: 'all 0.3s ease',
  }}
>
  Arvali Farm
</h2>


            
            {/* Decorative line */}
            <div
              style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, #4ade80, #22c55e)',
                marginBottom: '1.5rem',
                borderRadius: '2px',
              }}
            />
            
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}
            >
              Premium Farmhouse Experience
            </p>
            
            {/* Location List */}
            <div
              style={{
                fontSize: '1.3rem',
                lineHeight: '2.2',
                color: '#ffffff',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '0.5rem', fontSize: '1.5rem' }}>🌿</span>
                <span>Haldi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '0.5rem', fontSize: '1.5rem' }}>🌿</span>
                <span>Mehinfi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ color: '#4ade80', marginRight: '0.5rem', fontSize: '1.5rem' }}>🌿</span>
                <span>Bithtgdya</span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div
            className="footer-content"
            style={{
              flex: '1',
              color: '#ffffff',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* Contact Card */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: '1.5rem',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Decorative background pattern */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, transparent 70%)',
                  zIndex: 0,
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3
                  style={{
                    fontWeight: '700',
                    fontSize: '1.8rem',
                    marginBottom: '2rem',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    color: '#ffffff',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  📞 Contact Details
                </h3>
                
                {/* Phone Numbers */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    fontWeight: '600', 
                    fontSize: '1.1rem', 
                    marginBottom: '0.8rem', 
                    textTransform: 'uppercase',
                    color: '#4ade80',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>📱</span>
                    Phone Numbers
                  </h4>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <p style={{ marginBottom: '0.5rem' }}>
                      <a 
                        href="tel:+917903962473" 
                        style={{ 
                          color: '#fff', 
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          fontWeight: '500',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#4ade80'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        +91 79039 62473
                      </a>
                    </p>
                    <p>
                      <a 
                        href="tel:+919211255393" 
                        style={{ 
                          color: '#fff', 
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          fontWeight: '500',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#4ade80'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        +91 92112 55393
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    fontWeight: '600', 
                    fontSize: '1.1rem', 
                    marginBottom: '0.8rem', 
                    textTransform: 'uppercase',
                    color: '#4ade80',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>✉️</span>
                    Email
                  </h4>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <p>
                      <a 
                        href="mailto:rajsatyam200@gmail.com" 
                        style={{ 
                          color: '#fff', 
                          textDecoration: 'none',
                          fontSize: '1.1rem',
                          fontWeight: '500',
                          transition: 'color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = '#4ade80'}
                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        rajsatyam200@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontWeight: '600', 
                    fontSize: '1.1rem', 
                    marginBottom: '0.8rem', 
                    textTransform: 'uppercase',
                    color: '#4ade80',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{ marginRight: '0.5rem' }}>📍</span>
                    Location
                  </h4>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <p style={{ 
                      color: '#fff', 
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      lineHeight: '1.4',
                    }}>
                      Plot No - 7A, Para, Pachgaon,<br />
                      Gurugram, Haryana 122105
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}>
                  <a
                    href="https://wa.me/917903962473"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '14px 28px',
                      borderRadius: '30px',
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                    }}
                  >
                    💬 WhatsApp
                  </a>
                  
                  <a
                    href="tel:+917903962473"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '14px 28px',
                      borderRadius: '30px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                    }}
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            backgroundColor: 'rgba(26, 25, 25, 0.4)',
            color: '#a19d9dff',
            textAlign: 'center',
            padding: '1rem',
            fontSize: '0.9rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          © 2025 Aravali Farm — All rights reserved | Crafted by Choudhary's Family
        </div>
      </footer>
    </>
  )
}

export default Footer
