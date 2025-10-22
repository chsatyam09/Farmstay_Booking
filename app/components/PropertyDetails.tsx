'use client'

import { useState } from 'react'
import ImageModal from '@/app/components/ImageModal'

interface PropertyDetailsProps {
  propertyId: string
}

interface Property {
  id: string
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  images: string[]
  description: string
  amenities: string[]
  reviews: Array<{
    name: string
    rating: number
    comment: string
    date: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

const propertyData: { [key: string]: Property } = {
  '1': {
    id: '1',
    title: '2 BHK Crystal Farmhouse in Noida Sector 135 with Pool - FVB 116',
    location: 'Noida · Sector 135',
    price: '₹16,000',
    bedrooms: 2,
    bathrooms: 3,
    images: [
      '/images/noida1.jpg',
      '/King_Room61.jpg',
      '/LivingRoom31.jpg',
      '/SittingArea21.jpg',
      '/Kitchen 2.JPG',
      '/Pool WIth Water Front View .png',
      '/WaterFountain1.jpg',
      '/TVunit.JPG'
    ],
    description: '2 BHK Crystal Farmhouse in Noida Sector 135 with Pool offers a perfect mix of luxury and comfort. This beautifully designed farmhouse comes with spacious bedrooms, modern interiors, a private swimming pool, and a lush green lawn. Located in a secure gated community, it provides peace, privacy, and premium facilities for families and gatherings. With excellent connectivity via Noida Expressway, it is ideal for weekend getaways, parties, and long stays.',
    amenities: [
      'Private Swimming Pool',
      'Lush Green Lawn',
      'Modern Kitchen',
      'Air Conditioning',
      'WiFi',
      'Parking',
      'Security',
      'Garden View',
      'BBQ Area',
      'Entertainment System'
    ],
    reviews: [
      {
        name: 'Dhruv Sharma',
        rating: 5,
        comment: 'Rooms were super clean, beds comfy, and the vibe felt like our own home. Excellent value.',
        date: '2 weeks ago'
      },
      {
        name: 'Rohan Anand',
        rating: 5,
        comment: "It's a wonderful place to stay with family. Nice ambience and greenery. Will definitely suggest this place to enjoy.",
        date: '1 month ago'
      }
    ],
    faqs: [
      {
        question: 'What is the check-in and check-out time?',
        answer: 'Check-in: 2:00 PM, Check-out: 12:00 PM'
      },
      {
        question: 'Is parking available?',
        answer: 'Yes, free parking is available for guests.'
      },
      {
        question: 'Are pets allowed?',
        answer: 'Please contact the property owner for pet policy.'
      },
      {
        question: 'Is the swimming pool private?',
        answer: 'Yes, the swimming pool is private and exclusively for guests.'
      }
    ]
  },
  '2': {
    id: '2',
    title: '2 BHK Farmhouse Noida Sector 135 - FVB 101',
    location: 'Noida · Sector 135',
    price: '₹18,000',
    bedrooms: 2,
    bathrooms: 3,
    images: [
      '/images/noida2.jpg',
      '/King_Room6.JPG',
      '/Living Room 3.JPG',
      '/Sitting Area 2.JPG',
      '/Kitchen 3.JPG',
      '/Pool WIth Water Front View  (1).png'
    ],
    description: 'A premium 2 BHK farmhouse with modern amenities and beautiful interiors. Perfect for family getaways and celebrations.',
    amenities: ['Swimming Pool', 'Garden', 'Kitchen', 'AC', 'WiFi', 'Parking'],
    reviews: [],
    faqs: []
  },
  '3': {
    id: '3',
    title: '2 BHK Green Beauty Farmhouse Noida Sector 135 - FVB 103',
    location: 'Noida · Sector 135',
    price: '₹18,000',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      '/images/noida3.jpg',
      '/King_Room6 (1).jpg',
      '/LivingRoom31.jpg',
      '/SittingArea21.jpg'
    ],
    description: 'Green Beauty Farmhouse offers a serene environment with lush greenery and modern facilities.',
    amenities: ['Garden View', 'Kitchen', 'AC', 'WiFi', 'Parking'],
    reviews: [],
    faqs: []
  },
  '4': {
    id: '4',
    title: '3 BHK Luxury Farmhouse Noida Sector 135 - FVB 104',
    location: 'Noida · Sector 135',
    price: '₹22,000',
    bedrooms: 3,
    bathrooms: 3,
    images: [
      '/images/noida1.jpg',
      '/King_Room61.jpg',
      '/LivingRoom31.jpg',
      '/SittingArea21.jpg',
      '/Kitchen 2.JPG',
      '/Pool WIth Water Front View .png',
      '/WaterFountain1.jpg',
      '/TVunit.JPG'
    ],
    description: '3 BHK Luxury Farmhouse in Noida Sector 135 offers premium accommodations with spacious bedrooms, elegant interiors, and top-notch amenities. This farmhouse features a private swimming pool, beautifully landscaped gardens, and modern facilities perfect for large families, corporate events, and celebrations. The property combines luxury with comfort, providing an unforgettable experience.',
    amenities: [
      'Private Swimming Pool',
      'Spacious Lawn',
      'Modern Kitchen',
      'Air Conditioning',
      'High-Speed WiFi',
      'Ample Parking',
      '24/7 Security',
      'Garden View',
      'BBQ Area',
      'Entertainment System',
      'Dining Area'
    ],
    reviews: [
      {
        name: 'Priya Mehta',
        rating: 5,
        comment: 'Amazing property with excellent facilities. The pool area is fantastic and the staff is very accommodating. Perfect for celebrations.',
        date: '1 week ago'
      },
      {
        name: 'Rajesh Kumar',
        rating: 5,
        comment: 'Spacious and well-maintained property. Great for family gatherings and corporate events.',
        date: '2 weeks ago'
      }
    ],
    faqs: [
      {
        question: 'What is the maximum occupancy?',
        answer: 'The property can accommodate up to 12 guests comfortably.'
      },
      {
        question: 'Is catering service available?',
        answer: 'Yes, we can arrange catering services upon request with advance notice.'
      },
      {
        question: 'Can we organize events here?',
        answer: 'Yes, the property is perfect for birthday parties, corporate events, and small celebrations.'
      }
    ]
  },
  '5': {
    id: '5',
    title: '2 BHK Premium Farmhouse with Garden - FVB 105',
    location: 'Noida · Sector 135',
    price: '₹20,000',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      '/images/noida2.jpg',
      '/King_Room6.JPG',
      '/Living Room 3.JPG',
      '/Sitting Area 2.JPG',
      '/Kitchen 3.JPG',
      '/Pool WIth Water Front View  (1).png'
    ],
    description: '2 BHK Premium Farmhouse with Garden offers a perfect blend of luxury and tranquility. Surrounded by lush greenery, this property features well-appointed bedrooms, modern amenities, and beautifully landscaped gardens. Ideal for romantic getaways, family vacations, and peaceful retreats away from city life.',
    amenities: [
      'Beautiful Garden',
      'Swimming Pool',
      'Modern Kitchen',
      'Air Conditioning',
      'WiFi',
      'Parking',
      'Security',
      'Outdoor Seating',
      'BBQ Area',
      'Entertainment System'
    ],
    reviews: [
      {
        name: 'Amit Kumar',
        rating: 5,
        comment: 'Exceptional service and beautiful location. Great for family outings and corporate events. Highly recommended for weekend getaways.',
        date: '3 days ago'
      }
    ],
    faqs: [
      {
        question: 'Is the garden private?',
        answer: 'Yes, the garden is private and exclusively for guests staying at the property.'
      },
      {
        question: 'Can we have outdoor dining?',
        answer: 'Yes, there is outdoor seating available for dining in the garden area.'
      }
    ]
  },
  '6': {
    id: '6',
    title: '4 BHK Grand Farmhouse with Pool & Lawn - FVB 106',
    location: 'Noida · Sector 135',
    price: '₹35,000',
    bedrooms: 4,
    bathrooms: 4,
    images: [
      '/images/noida3.jpg',
      '/King_Room6 (1).jpg',
      '/LivingRoom31.jpg',
      '/SittingArea21.jpg',
      '/Kitchen 2.JPG',
      '/Pool WIth Water Front View .png',
      '/WaterFountain1.jpg',
      '/TVunit.JPG'
    ],
    description: '4 BHK Grand Farmhouse with Pool & Lawn is the epitome of luxury and grandeur. This expansive property features four spacious bedrooms, a large swimming pool, and extensive lawn areas perfect for large gatherings, weddings, and corporate events. With premium amenities and impeccable service, it offers an unparalleled experience.',
    amenities: [
      'Large Swimming Pool',
      'Extensive Lawn Area',
      'Premium Kitchen',
      'Central Air Conditioning',
      'High-Speed WiFi',
      'Multiple Parking Spaces',
      '24/7 Security',
      'Garden Views',
      'BBQ & Grilling Area',
      'Entertainment Systems',
      'Multiple Dining Areas',
      'Event Space'
    ],
    reviews: [
      {
        name: 'Neha Singh',
        rating: 5,
        comment: 'Lovely farmhouse with all modern amenities. The kids enjoyed the pool and lawn area. Will definitely come back again.',
        date: '5 days ago'
      },
      {
        name: 'Vikram Joshi',
        rating: 5,
        comment: 'Perfect venue for our corporate retreat. Spacious, well-maintained, and excellent hospitality.',
        date: '1 week ago'
      }
    ],
    faqs: [
      {
        question: 'Is this suitable for large events?',
        answer: 'Yes, this property can accommodate large groups and is perfect for weddings, corporate events, and celebrations.'
      },
      {
        question: 'What is the maximum guest capacity?',
        answer: 'The property can comfortably accommodate up to 20 guests with additional space for day visitors.'
      },
      {
        question: 'Are there separate dining areas?',
        answer: 'Yes, there are multiple dining areas including indoor and outdoor options.'
      }
    ]
  },
  '7': {
    id: '7',
    title: '3 BHK Executive Farmhouse with Modern Amenities - FVB 107',
    location: 'Noida · Sector 135',
    price: '₹25,000',
    bedrooms: 3,
    bathrooms: 3,
    images: [
      '/images/noida1.jpg',
      '/King_Room61.jpg',
      '/LivingRoom31.jpg',
      '/SittingArea21.jpg',
      '/Kitchen 2.JPG',
      '/Pool WIth Water Front View .png'
    ],
    description: '3 BHK Executive Farmhouse with Modern Amenities is designed for discerning guests who appreciate luxury and convenience. This property features contemporary interiors, state-of-the-art amenities, and professional hospitality services. Perfect for executive retreats, family holidays, and upscale celebrations.',
    amenities: [
      'Executive Lounge',
      'Swimming Pool',
      'Modern Kitchen',
      'Climate Control',
      'High-Speed Internet',
      'Secure Parking',
      'Professional Security',
      'Landscaped Gardens',
      'Outdoor Entertainment',
      'Smart TV Systems',
      'Conference Facilities'
    ],
    reviews: [
      {
        name: 'Arjun Kapoor',
        rating: 5,
        comment: 'Excellent property for business meetings and executive retreats. Professional service and modern facilities.',
        date: '2 days ago'
      }
    ],
    faqs: [
      {
        question: 'Does it have conference facilities?',
        answer: 'Yes, there are facilities suitable for small business meetings and presentations.'
      },
      {
        question: 'Is professional catering available?',
        answer: 'Yes, we can arrange professional catering services for business events.'
      },
      {
        question: 'What makes this property executive-friendly?',
        answer: 'The property features modern amenities, reliable internet, quiet environment, and professional services suitable for business travelers.'
      }
    ]
  }
}

export default function PropertyDetails({ propertyId }: PropertyDetailsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [gridCurrentIndex, setGridCurrentIndex] = useState(0)
  const [inquiryForm, setInquiryForm] = useState({
    area: '',
    eventDate: '',
    guests: '',
    mobile: '',
    name: '',
    email: '',
    message: ''
  })

  const property = propertyData[propertyId]

  if (!property) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Property not found</h2>
      </div>
    )
  }

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInquiryForm({ ...inquiryForm, [e.target.name]: e.target.value })
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Inquiry submitted:', inquiryForm)
    alert('Thank you for your inquiry! We will get back to you soon.')
  }

  const openImageModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl)
    setCurrentImageIndex(index)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % property.images.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(property.images[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? property.images.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(property.images[prevIndex])
  }

  const nextGridImage = () => {
    const maxIndex = Math.max(0, property.images.length - 4)
    setGridCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevGridImage = () => {
    setGridCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  const getGridImages = () => {
    return property.images.slice(gridCurrentIndex, gridCurrentIndex + 4)
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Back Button */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button
          onClick={() => window.history.back()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'transparent',
            border: '2px solid #111111',
            borderRadius: '8px',
            padding: '0.75rem 1.5rem',
            color: '#111111',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: 'sans-serif'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#111111';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'translateX(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#111111';
            e.currentTarget.style.transform = 'translateX(0)';
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Properties
        </button>
      </div>

      {/* Header Section */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: '#111111',
          marginBottom: '0.5rem',
          fontWeight: '600',
          lineHeight: '1.2',
        }}>
          {property.title}
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          <p style={{ 
            color: '#666', 
            fontSize: '1.1rem',
          }}>{property.location}</p>
          <span style={{
            background: '#111111',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '1.2rem',
            fontWeight: '600',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}>
            {property.price}/night
          </span>
        </div>
      </div>

      {/* Image Gallery - New Layout matching the image */}
      <div style={{ marginBottom: '2rem', position: 'relative' }}>
        <div 
          className="image-gallery-container"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '0.75rem',
            height: '500px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
          {/* Main Large Image - Left Side */}
          <div
            onClick={() => openImageModal(property.images[0], 0)}
            style={{
              position: 'relative',
              height: '100%',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              borderRadius: '12px 0 0 12px',
              overflow: 'hidden',
              background: '#f8f8f8'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <img
              src={property.images[0]}
              alt="Main property image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>

          {/* Right Side - Two Images Stacked */}
          <div style={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr',
            gap: '0.75rem',
            height: '100%',
            minHeight: '0'
          }}>
            {/* Top Right Image */}
            {property.images[1] && (
              <div
                onClick={() => openImageModal(property.images[1], 1)}
                style={{
                  position: 'relative',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  borderRadius: '0 12px 0 0',
                  overflow: 'hidden',
                  background: '#f8f8f8'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <img
                  src={property.images[1]}
                  alt="Property image 2"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            )}

            {/* Bottom Right Image with +3 More overlay */}
            {property.images[2] && (
              <div
                onClick={() => openImageModal(property.images[2], 2)}
                style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '200px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  borderRadius: '0 0 12px 0',
                  overflow: 'hidden',
                  background: '#f8f8f8'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <img
                  src={property.images[2]}
                  alt="Property image 3"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                
                {/* +3 More Overlay */}
                {property.images.length > 3 && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    zIndex: 5
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      marginBottom: '1rem'
                    }}>
                      +{property.images.length - 3} More
                    </div>
                  </div>
                )}
                
                {/* View photos button in corner */}
                {property.images.length > 3 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(0);
                      setSelectedImage(property.images[0]);
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'white',
                      color: '#333',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                      zIndex: 20
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#f0f0f0';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    View photos
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar - Starting from About This Venue */}
      <div 
        className="property-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
        {/* Main Content Area */}
        <div>

          {/* About This Venue Section */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f0f0f0',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#333',
              marginBottom: '1.5rem',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              About This Venue
            </h2>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.7',
              color: '#666',
              marginBottom: 0,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              {property.description}
            </p>
          </div>

          {/* Amenities & Features Section */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f0f0f0',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#333',
              marginBottom: '1.5rem',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              Amenities & Features
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              {property.amenities.map((amenity, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                    color: '#333',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}
                >
                  <div style={{
                    color: '#10B981',
                    fontSize: '1.2rem'
                  }}>
                    ✓
                  </div>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          {/* House Rules Section */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f0f0f0',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#333',
              marginBottom: '1.5rem',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              House Rules
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#666',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                <div style={{ color: '#EF4444', fontSize: '1rem' }}>•</div>
                Government approved ID required for all guests
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#666',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                <div style={{ color: '#EF4444', fontSize: '1rem' }}>•</div>
                Music limit: Outdoor till 11 PM, Indoor no limit
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#666',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                <div style={{ color: '#EF4444', fontSize: '1rem' }}>•</div>
                Refundable security deposit may apply
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#666',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                <div style={{ color: '#EF4444', fontSize: '1rem' }}>•</div>
                Check-in post 2 PM, Check-out before 11 AM
              </div>
            </div>
          </div>

          {/* Nearby Areas & Attractions Section */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f0f0f0',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#333',
              marginBottom: '1.5rem',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              Nearby Areas & Attractions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#666',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                <div style={{ color: '#EF4444', fontSize: '1rem' }}>📍</div>
                Okhla Bird Sanctuary Metro Station
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.95rem',
                color: '#666',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                <div style={{ color: '#EF4444', fontSize: '1rem' }}>📍</div>
                Advant Navis Business Park Noida Sector 137
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Send Inquiry Form */}
        <div 
          className="sticky-sidebar"
          style={{
            position: 'sticky',
            top: '2rem'
          }}>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e0e0e0'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: '#333',
              marginBottom: '0.5rem',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              Send Inquiry
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1.5rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              Get instant quotes and availability
            </p>

            {/* Selected Property Info */}
            <div style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                fontSize: '0.8rem',
                color: '#666',
                marginBottom: '0.25rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                SELECTED
              </div>
              <div style={{
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#333',
                marginBottom: '0.25rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                {property.title}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: '#666',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                {property.location} • Farmhouse
              </div>
            </div>

            <form onSubmit={handleInquirySubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div 
                className="form-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem'
                }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}>Area *</label>
                  <select
                    name="area"
                    value={inquiryForm.area}
                    onChange={handleInquiryChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d0d0d0',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      color: inquiryForm.area ? '#333' : '#999',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  >
                    <option value="">Select Area</option>
                    <option value="noida">Noida</option>
                    <option value="gurgaon">Gurgaon</option>
                    <option value="delhi">Delhi</option>
                  </select>
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}>Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={inquiryForm.eventDate}
                    onChange={handleInquiryChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d0d0d0',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>Guests *</label>
                  <input
                    type="number"
                    name="guests"
                    value={inquiryForm.guests}
                    onChange={handleInquiryChange}
                    required
                    placeholder="50"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d0d0d0',
                      borderRadius: '6px',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>Mobile *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={inquiryForm.mobile}
                    onChange={handleInquiryChange}
                    required
                    placeholder="9876543210"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d0d0d0',
                      borderRadius: '6px',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={inquiryForm.name}
                    onChange={handleInquiryChange}
                    required
                    placeholder="John Doe"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d0d0d0',
                      borderRadius: '6px',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={inquiryForm.email}
                    onChange={handleInquiryChange}
                    placeholder="john@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d0d0d0',
                      borderRadius: '6px',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem'
                }}>Message</label>
                <textarea
                  name="message"
                  value={inquiryForm.message}
                  onChange={handleInquiryChange}
                  rows={3}
                  placeholder="Any specific requirements..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d0d0d0',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                    minHeight: '80px'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#4A5568',
                  color: 'white',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#2D3748'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#4A5568'
                }}
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          imageSrc={selectedImage} 
          onClose={closeImageModal}
          onNext={nextImage}
          onPrev={prevImage}
          currentIndex={currentImageIndex}
          totalImages={property.images.length}
        />
      )}
      
      {/* Responsive Design */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .property-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .sticky-sidebar {
            position: relative !important;
            top: auto !important;
          }
        }
        
        @media (max-width: 768px) {
          .property-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .sticky-sidebar {
            position: relative !important;
            top: auto !important;
          }
          
          .image-grid {
            grid-template-columns: 1fr !important;
            height: 300px !important;
          }
          
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1200px) {
          .image-gallery-container {
            height: 450px !important;
          }
        }
        
        @media (min-width: 1201px) {
          .image-gallery-container {
            height: 500px !important;
          }
        }
      `}</style>
    </div>
  )
}