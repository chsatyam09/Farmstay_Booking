'use client'

import { useState } from 'react'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'
import HorizontalContactCard from '@/app/components/HorizontalContactCard'

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
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section style={{
        padding: '2rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        height: '60vh',
        minHeight: '500px'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}>
            {/* Left Side - Unique Shaped Image */}
            <div style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              height: '100%'
            }}>
              <div style={{
                position: 'relative',
                marginLeft:'5px',
                marginTop:'120px',
                width: '100%',
                maxWidth: '400px',
                height: '280px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '25px 60px 25px 60px',
                padding: '15px',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                transform: 'rotate(-2deg)',
                transition: 'all 0.4s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'rotate(-2deg) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}>
                <img 
                  src="/images/Property.png" 
                  alt="Aravali Farm Property"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px 40px 15px 40px',
                    display: 'block',
                    filter: 'brightness(1.05) contrast(1.1)'
                  }}
                />
                {/* Decorative overlay */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  padding: '0.75rem 1rem',
                  borderRadius: '20px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#667eea',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>Aravali Farm</div>
                </div>
                {/* Floating elements */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  display: 'flex',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}>
                    📍
                  </div>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }}>
                    🏡
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Details */}
            <div style={{
              padding: '0.5rem 0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50%'
            }}>
              {/* Horizontal Contact Card */}
              <div style={{
                width: '100%',
                maxWidth: '500px'
              }}>
                <HorizontalContactCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{
        padding: '4rem 0',
        background: '#f8fafc'
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
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
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
              Have questions or want to book your stay? Fill out the form below and we'll get back to you within 24 hours.
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
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '0.5rem'
                  }}>Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      background: '#ffffff'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

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
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    background: '#ffffff'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
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
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Property Booking</option>
                  <option value="general">General Inquiry</option>
                  <option value="event">Event Planning</option>
                  <option value="support">Customer Support</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
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
                    e.target.style.borderColor = '#667eea';
                    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Tell us about your requirements, preferred dates, number of guests, or any special requests..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? '#a0aec0' 
                    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSubmitting 
                    ? '0 4px 15px rgba(160, 174, 192, 0.3)' 
                    : '0 4px 15px rgba(102, 126, 234, 0.3)',
                  border: 'none',
                  alignSelf: 'center',
                  minWidth: '200px'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isSubmitting 
                    ? '0 4px 15px rgba(160, 174, 192, 0.3)' 
                    : '0 4px 15px rgba(102, 126, 234, 0.3)';
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
      <section style={{
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
                answer: "Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability and additional charges."
              },
              {
                question: "What amenities are included in the farmhouse?",
                answer: "Our farmhouse includes a swimming pool, fully equipped kitchen, air-conditioned rooms, WiFi, parking, outdoor seating areas, and access to our beautiful garden. All basic amenities are provided for your comfort."
              },
              {
                question: "Is the property pet-friendly?",
                answer: "Yes, we welcome well-behaved pets at our farmhouse. Please inform us in advance about your pet's stay and ensure they follow our pet guidelines for the comfort of all guests."
              },
              {
                question: "What is the maximum number of guests allowed?",
                answer: "Our farmhouse can accommodate up to 12 guests comfortably. For larger groups, please contact us to discuss special arrangements and availability."
              },
              {
                question: "Is there parking available?",
                answer: "Yes, we provide free parking space for up to 4 vehicles. Additional parking arrangements can be made upon request for larger groups."
              },
              {
                question: "Do you provide catering services?",
                answer: "We can arrange catering services for your events and celebrations. Please discuss your requirements with us in advance, and we'll help you plan the perfect menu."
              },
              {
                question: "What activities are available nearby?",
                answer: "The area offers various activities including nature walks, local sightseeing, adventure sports, and cultural experiences. We can help you plan activities based on your interests."
              },
              {
                question: "Is WiFi available throughout the property?",
                answer: "Yes, we provide complimentary WiFi throughout the farmhouse. The connection is reliable and suitable for both leisure and business needs."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy Section */}
      <section style={{
        padding: '4rem 0',
        background: '#f8fafc'
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
                Cancel up to 7 days before check-in for a full refund
              </p>
            </div>

            {/* Partial Refund Card */}
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
            </div>

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
                No Refund
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a4a4a',
                lineHeight: '1.5',
                margin: 0
              }}>
                No refund for cancellations within 3 days of check-in
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
              All cancellations must be made through our official channels (phone, email, or WhatsApp). 
              Refunds will be processed within 5-7 business days to the original payment method. 
              For emergency situations or severe weather, please contact us immediately for special arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{
        padding: '4rem 0',
        background: '#ffffff'
      }}>
        <div style={{
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Find Us Here
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #000000 0%, #666666 100%)',
            borderRadius: '2px',
            margin: '0 auto 3rem'
          }}></div>
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            height: '530px',
            border: '2px solid rgba(0, 0, 0, 0.05)',
            width: '100%'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4446.41228342973!2d76.92335707633261!3d28.291821375852507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3bd8d81db18d%3A0x289dc2edc4500c5f!2sAravali%20Farm!5e1!3m2!1sen!2sin!4v1760944508029!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
        
        /* Contact page responsive styles */
        @media (max-width: 1024px) {
          section[style*="height: 60vh"] {
            height: auto !important;
            min-height: 60vh !important;
            padding: 3rem 0 !important;
          }
          
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          div[style*="height: 280px"] {
            height: 250px !important;
          }
          
          div[style*="borderRadius: 25px 60px 25px 60px"] {
            border-radius: 20px 50px 20px 50px !important;
            transform: rotate(-1deg) !important;
          }
          
          div[style*="borderRadius: 20px 50px 20px 50px"] {
            border-radius: 15px 40px 15px 40px !important;
          }
          
          div[style*="maxWidth: 400px"] {
            max-width: 350px !important;
          }
          
          div[style*="maxWidth: 500px"] {
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          section[style*="height: 60vh"] {
            height: auto !important;
            min-height: 50vh !important;
            padding: 2rem 0 !important;
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
          
          div[style*="height: 600px"] {
            height: 400px !important;
          }
          
          div[style*="borderRadius: 25px 60px 25px 60px"] {
            border-radius: 15px 40px 15px 40px !important;
            transform: rotate(0deg) !important;
            padding: 12px !important;
          }
          
          div[style*="borderRadius: 15px 40px 15px 40px"] {
            border-radius: 10px 30px 10px 30px !important;
          }
          
          div[style*="maxWidth: 400px"] {
            max-width: 300px !important;
          }
          
          div[style*="maxWidth: 350px"] {
            max-width: 280px !important;
          }
          
          h1[style*="fontSize: clamp(2rem, 4vw, 3rem)"] {
            font-size: clamp(1.5rem, 3vw, 2.5rem) !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.5rem, 4vw, 2.5rem) !important;
          }
          
          div[style*="padding: 2rem 0"] {
            padding: 1.5rem 0 !important;
          }
          
          div[style*="padding: 3rem"] {
            padding: 2rem !important;
          }
          
          div[style*="padding: 2rem"] {
            padding: 1.5rem !important;
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
          
          div[style*="padding: 0 2rem"] {
            padding: 0 1rem !important;
          }
          
          h3[style*="fontSize: 1.2rem"] {
            font-size: 1.1rem !important;
          }
          
          h3[style*="fontSize: 1.1rem"] {
            font-size: 1rem !important;
          }
          
          /* Floating elements mobile adjustments */
          div[style*="width: 40px"] {
            width: 35px !important;
            height: 35px !important;
            font-size: 1rem !important;
          }
          
          div[style*="gap: 0.75rem"] {
            gap: 0.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          section[style*="height: 60vh"] {
            height: auto !important;
            min-height: 45vh !important;
            padding: 1.5rem 0 !important;
          }
          
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          div[style*="height: 280px"] {
            height: 150px !important;
          }
          
          div[style*="height: 250px"] {
            height: 130px !important;
          }
          
          div[style*="height: 200px"] {
            height: 120px !important;
          }
          
          div[style*="height: 180px"] {
            height: 100px !important;
          }
          
          div[style*="height: 600px"] {
            height: 300px !important;
          }
          
          div[style*="height: 400px"] {
            height: 250px !important;
          }
          
          div[style*="borderRadius: 30px 70px 30px 70px"] {
            border-radius: 15px 35px 15px 35px !important;
            transform: rotate(0deg) !important;
            padding: 12px !important;
          }
          
          div[style*="borderRadius: 20px 50px 20px 50px"] {
            border-radius: 10px 25px 10px 25px !important;
          }
          
          div[style*="padding: 2rem 0"] {
            padding: 1rem 0 !important;
          }
          
          div[style*="padding: 3rem 0"] {
            padding: 2rem 0 !important;
          }
          
          div[style*="padding: 2rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 1.5rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 0 2rem"] {
            padding: 0 0.75rem !important;
          }
          
          h1[style*="fontSize: clamp(2.5rem, 5vw, 4rem)"] {
            font-size: clamp(1.5rem, 3vw, 2.5rem) !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          
          p[style*="fontSize: 1.1rem"] {
            font-size: 1rem !important;
          }
          
          p[style*="fontSize: 0.95rem"] {
            font-size: 0.9rem !important;
          }
          
          h4[style*="fontSize: 1rem"] {
            font-size: 0.9rem !important;
          }
          
          /* Fix card layout for mobile */
          div[style*="display: flex"] {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          
          div[style*="marginBottom: 1.5rem"] {
            margin-bottom: 1rem !important;
          }
          
          div[style*="width: 50px"] {
            width: 45px !important;
            height: 45px !important;
          }
          
          div[style*="marginRight: 1rem"] {
            margin-right: 0 !important;
            margin-bottom: 0.75rem !important;
          }
          
          /* Floating elements mobile */
          div[style*="width: 40px"] {
            width: 30px !important;
            height: 30px !important;
            font-size: 0.9rem !important;
          }
          
          div[style*="gap: 0.75rem"] {
            gap: 0.4rem !important;
          }
          
          div[style*="bottom: 20px"] {
            bottom: 15px !important;
          }
          
          div[style*="left: 20px"] {
            left: 15px !important;
          }
          
          div[style*="top: 15px"] {
            top: 12px !important;
          }
          
          div[style*="right: 15px"] {
            right: 12px !important;
          }
        }
        
        @media (max-width: 360px) {
          div[style*="gridTemplateColumns: repeat(auto-fit, minmax(280px, 1fr))"] {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 0 0.5rem !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          div[style*="padding: 3rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 2rem"] {
            padding: 1rem !important;
          }
          
          div[style*="padding: 1.5rem"] {
            padding: 0.75rem !important;
          }
          
          div[style*="padding: 0 2rem"] {
            padding: 0 0.5rem !important;
          }
          
          h1[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          
          h2[style*="fontSize: clamp(2rem, 5vw, 3rem)"] {
            font-size: clamp(1.25rem, 3vw, 2rem) !important;
          }
          
          /* Extra small mobile fixes */
          div[style*="display: flex"] {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          
          div[style*="width: 50px"] {
            width: 40px !important;
            height: 40px !important;
          }
          
          div[style*="marginRight: 1rem"] {
            margin-right: 0 !important;
            margin-bottom: 0.5rem !important;
          }
          
          div[style*="marginBottom: 1.5rem"] {
            margin-bottom: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  )
}
