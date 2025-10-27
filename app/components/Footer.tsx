'use client'

import React from 'react'

const Footer = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 0.8rem !important;
          }
          .footer-main {
            flex-direction: column !important;
            min-height: 180px !important;
            padding: 1.2rem !important;
            gap: 1.5rem !important;
            justify-content: center !important;
          }
          .footer-content {
            padding: 0.8rem !important;
            align-items: center !important;
          }
        }
        @media (max-width: 480px) {
          .footer-section {
            padding: 0.8rem !important;
          }
          .footer-header {
            font-size: 2rem !important;
          }
          .footer-main {
            min-height: 160px !important;
            padding: 1rem !important;
            gap: 1.2rem !important;
          }
        }
      `}</style>

      <footer
        style={{
         backgroundImage: "url('/Images/Aravali Farm Images/Property-1.png')",
         //  backgroundImage: `url('/Images/Aravali%20Farm%20Images/Pool-1.png')`, // Alternative image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          marginTop: '1rem',
          overflow: 'hidden',
          fontFamily: 'Inter, sans-serif',
          minHeight: '200px',
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
            minHeight: '200px',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1.8rem 2rem',
            position: 'relative',
            zIndex: 1,
            gap: '3rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left Section - Arvali Farm */}
<div
  className="footer-content"
  style={{
    flex: '1',
    color: '#ffffff',
    padding: '1rem 1rem 8rem rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '400px',
  }}
>

<h2
  className="footer-header"
  style={{
    fontSize: '5rem', // 🔹 Large and impactful
    fontWeight: '800',
    fontFamily: "'Poppins', 'Inter', 'Helvetica Neue', sans-serif",
    marginBottom: '1.0rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap', // 🔹 Prevents line break — keeps it in one line
    overflow: 'hidden', // 🔹 Avoids weird wrapping behavior
    textOverflow: 'ellipsis', // 🔹 Optional – adds ... if space runs out

    // ✨ Luxurious golden gradient highlight
    background: 'linear-gradient(90deg, #fff3e0, #ffd54f, #ffb300, #ffca28, #fff8e1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',

    // 🌟 Enhanced golden glow + depth
    textShadow: `
      0 0 10px rgba(255, 215, 0, 0.5),
      0 0 20px rgba(255, 215, 0, 0.3),
      0 0 40px rgba(255, 215, 0, 0.2)
    `,

    transition: 'all 0.4s ease-in-out',
    cursor: 'pointer',
  }}
>
  Arvali&nbsp;Farm
</h2>


   
            {/* Decorative line */}
<div
  style={{
    width: '560px',
    height: '1.5px',
    // ⚪ Changed the background to a solid white color
    background: '#FFFFFF', 
    // You could also use a white gradient for a subtle effect:
    // background: 'linear-gradient(90deg, #f0f0f0, #ffffff)', 
    marginTop: '0',
    marginBottom: '1rem',
    borderRadius: '2px',
  }}
/>

<p
  style={{
    fontSize: '1.2rem',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '1rem',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '300',
    whiteSpace: 'nowrap', // 🔹 ensures it stays in one line
  }}
>
  Create Memories and Enjoy Unforgettable Experience
</p>

            
            {/* Location List */}
<div 
  style={{ 
    fontSize: '1.0rem', 
    lineHeight: '1.8', 
    color: '#ffffff', 
    display: 'flex', 
    flexWrap: 'wrap', 
    columnGap: '3rem',
    gap: '1rem', 
   fontWeight: '300',
  }} 
>
  
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ color: '#ffffff', marginRight: '1.5rem',  fontSize: '1.2rem' }}>
      🍻 Chill with Friends
    </span> 
  
  </div> 

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ color: '#ffffff', marginRight: '1.5rem',fontSize: '1.2rem' }}>
      🎉Pool Parties
    </span> 

  </div> 

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ color: '#ffffff', marginRight: '1.5rem', fontSize: '1.2rem' }}>
       💖 Staycations
    </span>

  </div> 

  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ color: '#ffffff', marginRight: '1.5rem', fontSize: '1.2rem' }}>
      🏢 Corporate Events
    </span>

  </div> 
</div>
          </div>




          {/* Right Section - Contact Information */}
  

<div
    className="footer-content"
    style={{
        flex: '0.7',
        color: '#ffffff',
        padding: '0.1rem 0.1rem', // Increased vertical padding for better spacing
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end', // Aligns the card to the right
        fontFamily: 'Roboto, sans-serif', // Ensure a thin font is available (Roboto is common)
    }}
>
    {/* Contact Card */}
    <div
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)', // Slightly more transparent background
            borderRadius: '16px', // Slightly rounder corners
            padding: '1.5rem',
            backdropFilter: 'blur(10px)', // Slightly less blur
            border: '1px solid rgba(255, 255, 255, 0.15)', // Thinner border
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)', // Stronger, smoother shadow
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '320px',
            width: '100%',
            fontWeight: '300', // Thin font for the entire card content
        }}
    >
        {/* Decorative background pattern - simplified */}
        <div
            style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 100% 0%, rgba(74, 222, 128, 0.05) 0%, transparent 50%)',
                zIndex: 0,
            }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
            <h3
                style={{
                    fontWeight: '400', // Slightly less thin for the heading
                    fontSize: '1.3rem',
                    marginBottom: '1.5rem', // Increased margin
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    color: '#ffffff',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)',
                    letterSpacing: '1px',
                }}
            >
                📞 Contact Details
            </h3>

            {/* Content Container - organized for your required layout */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem', // Good vertical spacing between sections
            }}>

                {/* Phone Numbers */}
                <div>
                    <h4 style={{
                        fontWeight: '500', // Category label slightly bolder
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <span style={{ marginRight: '0.6rem', fontSize: '1.1rem' }}>☎️</span>
                        Phone Numbers
                    </h4>
                    {/* Phone numbers in one line */}
<p style={{ fontSize: '1rem', fontWeight: '300', letterSpacing: '0.5px' }}>
  <a
    href="tel:+917903962473"
    style={{
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      // paddingLeft:'rem',
      marginRight: '1rem', // Adds clear space between numbers
    }}
  >
    +91 7903962473
    <br></br>
  </a>

  <a
    href="tel:+919211255393"
    style={{
      color: '#ffffff',
            // paddingLeft:'2rem',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    }}
  >
    +91 9211255393
  </a>
</p>


                </div>

                {/* Email - in the next line */}
                <div>
                    <h4 style={{
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <span style={{ marginRight: '0.6rem', fontSize: '1.1rem' }}>✉️</span>
                        Email
                    </h4>
                    <p style={{ fontSize: '1rem', fontWeight: '300' }}>
                        <a
                            href="mailto:rajsatyam200@gmail.com"
                            style={{
                                color: '#ffffff',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                                borderBottom: '1px dotted rgba(255, 255, 255, 0.5)', // Subtle underline
                                paddingBottom: '2px',
                            }}
                        >
                           aravalifarm21@gmail.com
                        </a>
                    </p>
                </div>

                {/* Location */}
                <div>
                    <h4 style={{
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <span style={{ marginRight: '0.6rem', fontSize: '1.1rem' }}>📍</span>
                        Location
                    </h4>
                    <p style={{
                        color: '#ffffff',
                        fontSize: '1rem',
                        fontWeight: '300',
                        lineHeight: '1.5', // Increased line height for spacing
                    }}>
                        Plot No - 7A, Para, Pachgaon,<br />
                        Gurugram, Haryana 122105
                    </p>
                </div>
            </div>

            {/* Action Buttons */}
            <div style={{
                display: 'flex',
                gap: '1rem', // Spacing between buttons
                justifyContent: 'center',
                marginTop: '1.5rem', // Separates buttons from info
            }}>

                {/* WhatsApp Button - Transparent on hover */}
                <a
                    href="https://wa.me/917903962473"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        background: 'rgba(74, 222, 128, 0.9)', // Solid color
                        color: '#ffffffff', // Black text for contrast
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(74, 222, 128, 0.9)', // Solid border
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'transparent'; // Transparent on hover
                        e.currentTarget.style.color = '#79FF79';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 6px 15px rgba(74, 222, 128, 0.6)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(74, 222, 128, 0.9)'; // Solid color on mouse out
                        e.currentTarget.style.color = '#ffffffff';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(255, 255, 255, 0.3)';
                    }}
                >
                    💬 WhatsApp
                </a>

                {/* Call Now Button - Standard Glass Effect */}
                <a
                    href="tel:+917903962473"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        background: 'rgba(255, 255, 255, 0.2)', // Glass effect background
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 6px 15px rgba(59, 130, 246, 0.6)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    }}
                >
                    ☎️ Call Now
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
  color: '#f9f3f3ff',
  textAlign: 'center',
  padding: '0.8rem',
  fontSize: '0.8rem',
  position: 'relative',
  zIndex: 1,
  // Added font spacing
  letterSpacing: '2px', 
}}
        >
          © 2025 Aravali Farm — All rights reserved | Crafted by Choudhary's Family
        </div>
      </footer>
    </>
  )
}

export default Footer
