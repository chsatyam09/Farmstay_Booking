'use client'

const ContentSections = () => {
  return (
    <>
      {/* Overview Section */}
      <section id="overview" style={{
        padding: '4rem 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#111111',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Overview
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: '#111111',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }} className="content-grid">
            <div>
              <h3 style={{ color: '#111111', marginBottom: '1rem', fontSize: '1.5rem' }}>About Aravali Farm</h3>
              <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Nestled in the serene beauty of nature, Aravali Farm offers the perfect escape from city life. 
                Our beautiful property combines luxury with rustic charm, creating an ideal venue for celebrations, 
                corporate events, and peaceful getaways.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#111111', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Mission</h3>
              <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.1rem' }}>
                We strive to provide exceptional hospitality in a natural setting, creating memorable experiences 
                for our guests while maintaining harmony with the environment. Every event is crafted with attention 
                to detail and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" style={{
        padding: '4rem 0',
        background: '#f8f8f8'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#111111',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Amenities
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: '#111111',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }} className="amenities-grid">
            {[
              { title: 'Swimming Pool', icon: '🏊', description: 'Large swimming pool with crystal clear water' },
              { title: 'Garden Area', icon: '🌿', description: 'Beautiful landscaped gardens for relaxation' },
              { title: 'Event Spaces', icon: '🎉', description: 'Multiple venues for different types of events' },
              { title: 'Parking', icon: '🚗', description: 'Ample parking space for guests' },
              { title: 'Catering', icon: '🍽️', description: 'Professional catering services available' },
              { title: 'Sound System', icon: '🎵', description: 'High-quality audio equipment for events' }
            ].map((amenity, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '8px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{amenity.icon}</div>
                <h3 style={{ color: '#111111', marginBottom: '0.5rem', fontSize: '1.25rem' }}>{amenity.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" style={{
        padding: '4rem 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#111111',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Reviews
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: '#111111',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }} className="reviews-grid">
            {[
              {
                name: 'Priya Sharma',
                rating: 5,
                review: 'Amazing venue for our family function! The staff was incredibly helpful and the location is breathtaking.',
                event: 'Birthday Party'
              },
              {
                name: 'Rajesh Kumar',
                rating: 5,
                review: 'Perfect for our corporate retreat. Great facilities, peaceful environment, and excellent service.',
                event: 'Corporate Event'
              },
              {
                name: 'Anita Gupta',
                rating: 4,
                review: 'Beautiful farm house with all modern amenities. Our wedding celebration was memorable here.',
                event: 'Wedding Function'
              }
            ].map((review, index) => (
              <div key={index} style={{
                background: '#f8f8f8',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0'
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <h4 style={{ color: '#111111', fontSize: '1.1rem', margin: 0 }}>{review.name}</h4>
                    <div style={{ color: '#111111' }}>{'★'.repeat(review.rating)}</div>
                  </div>
                  <p style={{ color: '#999', fontSize: '0.9rem', margin: 0 }}>{review.event}</p>
                </div>
                <p style={{ color: '#666', lineHeight: '1.6', fontStyle: 'italic' }}>
                  "{review.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{
        padding: '4rem 0',
        background: '#f8f8f8'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#111111',
            marginBottom: '2rem',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: '#111111',
            margin: '0 auto 3rem',
          }}></div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                question: 'What is the capacity of the venue?',
                answer: 'Our venue can accommodate up to 200 guests for events, with flexible seating arrangements available.'
              },
              {
                question: 'Do you provide catering services?',
                answer: 'Yes, we have professional catering partners who can provide a variety of cuisines to suit your preferences.'
              },
              {
                question: 'Is parking available?',
                answer: 'Yes, we have ample parking space that can accommodate cars and buses for your guests.'
              },
              {
                question: 'Can we bring our own decorations?',
                answer: 'Absolutely! We encourage personalized decorations to make your event unique and memorable.'
              },
              {
                question: 'What are the booking terms?',
                answer: 'We require 50% advance payment to confirm booking, with the balance due before the event date.'
              }
            ].map((faq, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <h4 style={{ 
                  color: '#111111', 
                  marginBottom: '1rem',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {faq.question}
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentSections