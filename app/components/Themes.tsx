'use client'

import { useState } from 'react'

const Themes = () => {
  const themes = [
    {
      id: 1,
      title: "Birthday Celebration Venue",
      subtitle: "Perfect for Memorable Birthdays",
      description: "Celebrate your special day at our stunning venue. We offer a spacious area, delicious food, and a vibrant atmosphere, perfect for hosting unforgettable birthday parties with family and friends.",
      image: "/images/birthday.jpeg",
      buttonText: "BOOK YOUR PARTY",
      layout: "left"
    },
    {
      id: 2,
      title: "Corporate Party",
      subtitle: "The Perfect Venue for Your Next Corporate Event",
      description: "Host your corporate party in the serene beauty of our farm. Enjoy open spaces, lush greenery, and a refreshing outdoor ambiance—ideal for team-building, celebrations, and company gatherings. Create lasting memories with your colleagues in a setting that blends nature and comfort perfectly.",
      image: "/images/PoolLaw.jpeg",
      buttonText: "BOOK SHOOT",
      layout: "right"
    },
    {
      id: 3,
      title: "Bachelor Parties",
      subtitle: "Celebrate the Groom-to-Be in Style",
      description: "Make your bachelor party unforgettable at our beautiful farm. Enjoy wide-open spaces, fun outdoor activities, and a relaxed natural vibe—perfect for bonding with friends before the big day. Whether you want a lively celebration or a laid-back getaway, our farm offers the ideal setting for your ultimate pre-wedding bash.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "PLAN EVENT",
      layout: "left"
    },
    {
      id: 4,
      title: "Family & Friends Parties",
      subtitle: "Celebrate Life’s Special Moments Together",
      description: "Gather your loved ones and make memories that last at our scenic farm. Whether it’s a birthday, anniversary, reunion, or just a weekend get-together, our open spaces and peaceful surroundings create the perfect backdrop for fun, laughter, and togetherness. Enjoy nature, good food, and great company—all in one beautiful place.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      buttonText: "JOIN SESSION",
      layout: "right"
    }
  ]

  return (
    <section id="themes" style={{ padding: '1rem 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#111111',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em',
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 600,
              marginTop: '0rem'
            }}
          >
            What We Offer
          </h2>

          <div
            style={{
              width: '100%',
              height: '2px',
              background: '#111111',
              marginBottom: '1rem'
            }}
          ></div>

          <p
            style={{
              fontSize: '1.125rem',
              color: '#4b5563',
              lineHeight: '1.7',
              marginBottom: '2rem',
              width: '100%',
              fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
              textAlign: 'center'
            }}
          >
            Experience our beautiful property through various services – from
            comfortable stays to memorable events, creative shoots to wellness
            activities.
          </p>
        </div>

        {/* Theme Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3rem',
                flexDirection: theme.layout === 'right' ? 'row-reverse' : 'row',
                minHeight: '400px'
              }}
              className="theme-card"
            >
              {/* Image Section */}
              <div
                style={{
                  flex: '1',
                  position: 'relative',
                  height: '400px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <img
                  src={theme.image}
                  alt={theme.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                  className="theme-image"
                />
              </div>

              {/* Content Section */}
              <div
                style={{
                  flex: '1',
                  padding: '2rem',
                  textAlign: theme.layout === 'right' ? 'right' : 'left'
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    color: '#000000ff',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2',
                    fontFamily: "'Dancing Script', cursive", // <--  Birthday Celebration Venue
                    textShadow: '1px 1px 3px rgba(242, 10, 10, 0.2)',
                  }}
                >
                  {theme.title}
                </h3>


<h4
  style={{
    fontSize: '1.1rem',
    color: '#464444ff', // soft grey
    marginBottom: '1.5rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontWeight: '550',
    fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif', //  Perfect for Memorable Birthdays
    // fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
  }}
>
                  {theme.subtitle}
                </h4>

                <p
                  style={{
                    fontSize: '1.1rem',
                    color: '#4b5563',
                    lineHeight: '1.7',
                    marginBottom: '2rem',
                    maxWidth: '400px',
                    margin:
                      index % 2 === 1
                        ? '0 0 2rem auto'
                        : '0 0 2rem 0',
                    fontFamily: 'Montserrat' //  Perfect for Memorable Birthdays
                  }}
                >
                  {theme.description}
                </p>

           <button
  style={{
    background: 'linear-gradient(135deg, #000000ff 0%, #764ba2 100%)',
    color: 'white',
    padding: '0.875rem 2.5rem',
    fontSize: '0.9rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50px',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
    fontFamily: '"Poppins", sans-serif',
  }}
  onMouseOver={(e) => {
    const target = e.target as HTMLButtonElement
    target.style.transform = 'translateY(-3px) scale(1.05)'
    target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(22, 22, 22, 0.4)'
    target.style.background = 'linear-gradient(135deg, #764ba2 0%, #101112ff 100%)'
    target.style.borderRadius = '40px' // shape morph effect
  }}
  onMouseOut={(e) => {
    const target = e.target as HTMLButtonElement
    target.style.transform = 'translateY(0) scale(1)'
    target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(22, 22, 22, 0.4)'
    target.style.background = 'linear-gradient(135deg, #764ba2 0%, #101112ff 100%)'
    target.style.borderRadius = '50px' // reset shape
  }}
                  onClick={(e) => {
                    // Add shake effect
                    const target = e.target as HTMLButtonElement
                    target.style.animation = 'shake 0.5s ease-in-out'
                    
                    // Remove animation after it completes
                    setTimeout(() => {
                      target.style.animation = ''
                    }, 500)
                    
                    // Open WhatsApp
                    const message = `Hi! I'm interested in ${theme.title.toLowerCase()} at Aravali Farm. Please provide me with more details and availability.`
                    window.open(
                      `https://wa.me/917903962473?text=${encodeURIComponent(
                        message
                      )}`,
                      '_blank'
                    )
                  }}
                >
                  {theme.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Design */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
          20%, 40%, 60%, 80% { transform: translateX(3px); }
        }

        @media (max-width: 1024px) {
          div[style*='flex-direction: row'],
          div[style*='flex-direction: row-reverse'] {
            flex-direction: column !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          h3 {
            font-size: 1.8rem !important;
          }

          h2 {
            font-size: 2.2rem !important;
          }

          button {
            font-size: 0.9rem !important;
            padding: 0.8rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Themes
