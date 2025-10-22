'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      message: ''
    })
  }

  return (
    <section id="contact" style={{
      padding: '4rem 0',
      background: '#ffffff',
      color: '#111111'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#111111',
            marginBottom: '1rem',
            letterSpacing: '0.05em'
          }}>
            Contact Us
          </h2>
          <div style={{
            width: '6rem',
            height: '2px',
            background: '#111111',
            margin: '0 auto 1rem',
          }}></div>
          <p style={{
            fontSize: '1.125rem',
            color: '#4B5563',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to book your event? Get in touch with us and let's make your celebration unforgettable.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              color: '#111111',
              fontWeight: '600'
            }}>
              Get in Touch
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>📞</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#111111' }}>Phone</h4>
                  <p style={{ margin: 0, color: '#4B5563' }}>+91 98765 43210</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>📧</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#111111' }}>Email</h4>
                  <p style={{ margin: 0, color: '#4B5563' }}>info@aravalifarm.com</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>📍</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#111111' }}>Location</h4>
                  <p style={{ margin: 0, color: '#4B5563' }}>Aravali Hills, Gurgaon, Haryana</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>🕒</div>
                <div>
                  <h4 style={{ margin: 0, marginBottom: '0.25rem', color: '#111111' }}>Hours</h4>
                  <p style={{ margin: 0, color: '#4B5563' }}>9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 8px 16px rgba(0,0,0,0.06)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }} className="form-grid">
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      color: '#111111',
                      fontSize: '1rem'
                    }}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      color: '#111111',
                      fontSize: '1rem'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }} className="form-grid">
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                  }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      color: '#111111',
                      fontSize: '1rem'
                    }}
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                  }}>
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      color: '#111111',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="" style={{color: '#333'}}>Select Event Type</option>
                    <option value="birthday" style={{color: '#333'}}>Birthday Party</option>
                    <option value="corporate" style={{color: '#333'}}>Corporate Event</option>
                    <option value="wedding" style={{color: '#333'}}>Wedding Function</option>
                    <option value="bachelor" style={{color: '#333'}}>Bachelor Party</option>
                    <option value="family" style={{color: '#333'}}>Family Gathering</option>
                    <option value="other" style={{color: '#333'}}>Other</option>
                  </select>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }} className="form-grid">
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                  }}>
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      color: '#111111',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#374151',
                    fontSize: '0.9rem'
                  }}>
                    Expected Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '6px',
                      border: '1px solid #E5E7EB',
                      background: '#ffffff',
                      color: '#111111',
                      fontSize: '1rem'
                    }}
                    placeholder="Number of guests"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#374151',
                  fontSize: '0.9rem'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #E5E7EB',
                    background: '#ffffff',
                    color: '#111111',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#111111',
                  color: 'white',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                onMouseOver={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = '#222222';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.background = '#111111';
                  target.style.transform = 'translateY(0)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm