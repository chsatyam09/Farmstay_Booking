'use client'

import { useState, useEffect, useRef } from 'react'

const ClientReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const reviews = [
    {
      id: 1,
      source: "Google",
      reviewer: "Dhruv Sharma",
      reviewText: "Rooms were super clean, beds comfy, and the vibe felt like our own home. Excellent value for money and great hospitality.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/google-1.jpeg",
      rating: 5
    },
    {
      id: 2,
      source: "MakeMyTrip",
      reviewer: "Rohan Anand",
      reviewText: "It's a wonderful place to stay with family. Nice ambience and greenery. Will definitely suggest this place to enjoy.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Make my trip.png",
      rating: 5
    },
        {
      id: 4,
      source: "Agoda",
      reviewer: "Priya Mehta",
      reviewText: "Amazing property with excellent facilities. The pool area is fantastic and the staff is very accommodating. Perfect for celebrations.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Agoda_Logo_1.png",
      rating: 5
    },
    {
      id: 3,
      source: "Booking.com",
      reviewer: "Sihka Tyagi",
      reviewText: "Best farm-stay experience. Lots of greenery, a beautiful swimming pool, and a large spacious area. Everything is great about the place.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Booking-1.png",
      rating: 5
    },

    {
      id: 5,
      source: "Airbnb",
      reviewer: "Amit Kumar",
      reviewText: "Exceptional service and beautiful location. Great for family outings and corporate events. Highly recommended for weekend getaways.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Airbnb2.png",
      rating: 5
    },
    {
      id: 6,
      source: "MakeMyTrip",
      reviewer: "Neha Singh",
      reviewText: "Lovely farmhouse with all modern amenities. The kids enjoyed the pool and lawn area. Will definitely come back again.",
      stars: "🌟 🌟 🌟 🌟 🌟",
      image: "/Images/Aravali Farm Images/Hotel Images/Make my trip-2.png",
      rating: 5
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % reviews.length
        console.log('Auto-scroll: moving from', prevIndex, 'to', nextIndex)
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, reviews.length])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000)
  }

  return (
    <section id="client-reviews" style={{
      padding: '4rem 0',
      background: '#f8f8f8'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>


        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              color: '#000000ff',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em',
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 400,
              marginTop: '0rem'
            }}
          >
            What Our Guests Say
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
            Hear authentic stories and experiences shared by our happy guests.
Their words reflect the memorable moments we strive to create every day.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div style={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoPlay(true), 2000)}
            className="carousel-arrow"
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              width: '60px',
              height: '60px',
              fontSize: '1.8rem',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(107, 114, 128, 0.3)',
              zIndex: 10,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #4b5563 0%, #374151 100%)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(107, 114, 128, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(107, 114, 128, 0.3)'
            }}
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setTimeout(() => setIsAutoPlay(true), 2000)}
            className="carousel-arrow"
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              width: '60px',
              height: '60px',
              fontSize: '1.8rem',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(107, 114, 128, 0.3)',
              zIndex: 10,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #4b5563 0%, #374151 100%)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(107, 114, 128, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(107, 114, 128, 0.3)'
            }}
          >
            →
          </button>

          {/* Carousel Container */}
          <div style={{
            overflow: 'visible',
            position: 'relative',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              width: '100%',
              maxWidth: '900px'
            }}>
              {/* Show 3 cards: previous, current, next */}
              {[-1, 0, 1].map((offset) => {
                const reviewIndex = (currentIndex + offset + reviews.length) % reviews.length
                const review = reviews[reviewIndex]
                const isCenter = offset === 0
                const isAdjacent = Math.abs(offset) === 1
                
                return (
                  <div
                    key={`${review.id}-${offset}`}
                    style={{
                      flex: isCenter ? '0 0 400px' : '0 0 280px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'all 0.6s ease',
                      zIndex: isCenter ? 10 : 5
                    }}
                    onClick={() => !isCenter && goToSlide(reviewIndex)}
                  >
                    <div style={{
                      background: '#fff',
                      borderRadius: '20px',
                      padding: isCenter ? '2.5rem' : '2rem',
                      boxShadow: isCenter 
                        ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                        : '0 8px 20px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                      transform: isCenter ? 'scale(1)' : 'scale(0.85)',
                      opacity: isCenter ? 1 : 0.7,
                      transition: 'all 0.6s ease',
                      width: '100%',
                      position: 'relative',
                      cursor: !isCenter ? 'pointer' : 'default',
                      border: isCenter ? '2px solid #6b7280' : '1px solid #e5e7eb'
                    }}
                  >
                    {/* Platform Logo */}
                    <div style={{
                      marginBottom: '1.5rem',
                      width: isCenter ? '80px' : '60px',
                      height: isCenter ? '80px' : '60px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto',
                      border: '3px solid #6b7280',
                      transition: 'all 0.6s ease'
                    }}>
                      <img 
                        src={review.image} 
                        alt={review.source} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: '8px'
                        }} 
                      />
                    </div>

                    {/* Stars */}
                    <div style={{
                      fontSize: isCenter ? '1.5rem' : '1.2rem',
                      marginBottom: '1rem',
                      transition: 'all 0.6s ease'
                    }}>
                      {review.stars}
                    </div>

                    {/* Review Text */}  
                    <p style={{
                      fontSize: isCenter ? '1.1rem' : '0.95rem',
                      color: '#494545ff',
                      lineHeight: '1.7',
                      marginBottom: '1.5rem',
                                fontFamily:  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      fontStyle: 'italic',
                      transition: 'all 0.6s ease',
                      display: '-webkit-box',
                      WebkitLineClamp: isCenter ? 4 : 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      “{review.reviewText}”
                    </p>

                    {/* Reviewer Name */} 
                    <div style={{
                      borderTop: '2px solid #f0f0f0',
                      paddingTop: '1rem'
                    }}>
                      <p style={{
                        fontSize: isCenter ? '1.7rem' : '1rem',
                        color: '#000000ff',
                        fontWeight: '300',
                        margin: 0,
                         fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
                        transition: 'all 0.6s ease'
                      }}>
                        {review.reviewer}
                      </p>
                      <p style={{
                        fontSize: isCenter ? '0.9rem' : '0.8rem',
                        color: '#111111',
                        margin: '0.25rem 0 0',
                        fontWeight: '500',
                        transition: 'all 0.6s ease'
                      }}>
                        {/* via {review.source} */}
                      </p>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>

          {/* Dots Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
          }}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: currentIndex === index ? '30px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  background: currentIndex === index ? '#111111' : '#ddd',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (currentIndex !== index) {
                    e.currentTarget.style.background = '#bbb'
                  }
                }}
                onMouseOut={(e) => {
                  if (currentIndex !== index) {
                    e.currentTarget.style.background = '#ddd'
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-arrow {
            left: 10px !important;
            right: 10px !important;
            width: 50px !important;
            height: 50px !important;
            font-size: 1.4rem !important;
            border-radius: 12px !important;
          }
        }
        
        @media (max-width: 640px) {
          .carousel-container {
            padding: 0 0.5rem !important;
            flex-direction: column !important;
            gap: 1rem !important;
            height: auto !important;
          }
          .review-card {
            padding: 1.5rem !important;
            flex: 0 0 300px !important;
            transform: scale(1) !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ClientReview
