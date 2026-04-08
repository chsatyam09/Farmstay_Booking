'use client'

import React, { useState, useEffect } from 'react'
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
  faqs: Array<{
    question: string
    answer: string
  }>
}

const propertyData: { [key: string]: Property } = {
  '1': {
    id: '1',
    title: '3 BHK Farmhouse With Swimming Pool In Gurgaon - OP-001',
    location: 'Gurgaon Manesar',
    price: 'Starting From ₹10,000 ',
    bedrooms: 3,
    bathrooms: 2,
    images: [
      '/Images/FarmStay/Gurgaon farm/property-2.jpg',
        '/Images/FarmStay/Gurgaon farm/Living Room 2.jpg',
        '/Images/FarmStay/Gurgaon farm/Pool-1.png',
      '/Images/FarmStay/Gurgaon farm/BornFire.png',
      '/Images/FarmStay/Gurgaon farm/Born_FIre-1.png',
      '/Images/FarmStay/Gurgaon farm/Born_FIre-1.png',
      '/Images/FarmStay/Gurgaon farm/Graden-1.png',
      '/Images/FarmStay/Gurgaon farm/Living Room 4.jpg',
      '/Images/FarmStay/Gurgaon farm/Living room 7.jpg',
      '/Images/FarmStay/Gurgaon farm/Living room 8.jpg',
      '/Images/FarmStay/Gurgaon farm/Property-1.png',
     '/Images/FarmStay/Gurgaon farm/King_Room7.jpg',
      '/Images/FarmStay/Gurgaon farm/King_Room6.jpg',
      '/Images/FarmStay/Gurgaon farm/Delux_Room3.jpg',
 '/Images/FarmStay/Gurgaon farm/Room_2.png',
 '/Images/FarmStay/Gurgaon farm/Room_1.png',
  '/Images/FarmStay/Gurgaon farm/Standard_Room5.jpg',
      '/Images/FarmStay/Gurgaon farm/Kitchen 2.jpg',
      '/Images/FarmStay/Gurgaon farm/Kitchen 3.jpg',
      '/Images/FarmStay/Gurgaon farm/Kitchen.jpeg',
      '/Images/FarmStay/Gurgaon farm/Pool-1.png',
      '/Images/FarmStay/Gurgaon farm/Pool-2.png',
      '/Images/FarmStay/Gurgaon farm/Pool_Sitting-1.png',
      '/Images/FarmStay/Gurgaon farm/Pool Decoration.jpeg',
      '/Images/FarmStay/Gurgaon farm/Garden_2.png',
      '/Images/FarmStay/Gurgaon farm/Graden-1.png',
      '/Images/FarmStay/Gurgaon farm/Serprate_Sitting_Area-1.png',
      '/Images/FarmStay/Gurgaon farm/BBQ-1.jpg',
      '/Images/FarmStay/Gurgaon farm/Born_FIre-1.png',
      '/Images/FarmStay/Gurgaon farm/Born_FIre_best.png',
      '/Images/FarmStay/Gurgaon farm/BornFire.png',
      '/Images/FarmStay/Gurgaon farm/Birthday-1.png',
      '/Images/FarmStay/Gurgaon farm/Birthday Decoration.png',
      '/Images/FarmStay/Gurgaon farm/Happy Client.jpg',
      '/Images/FarmStay/Gurgaon farm/Happy_Client.jpg',
      '/Images/FarmStay/Gurgaon farm/Happy-Client_3.jpg',
      '/Images/FarmStay/Gurgaon farm/x.jpeg',
            '/Images/FarmStay/Gurgaon farm/Washroom2.jpg',
      '/Images/FarmStay/Gurgaon farm/Washroom9.JPG',
    ],
    description: 'Experience Nature and comfort at this 3 BHK farmhouse in Gurgaon, featuring a large private swimming pool, bonfire area, and barbecue setup, along with premium amenities for a perfect getaway.This beautifully designed farmhouse offers spacious bedrooms, modern interiors, a lush green lawn, and a private swimming pool. Located in a secure gated community, it ensures peace, privacy, and safety—making it ideal for families, parties, celebrations, and social gatherings.With excellent connectivity via the Noida Expressway, the farmhouse is perfect for weekend getaways, private events, and long-term stays.',
    amenities: [
   '🛏️ 3 Bedrooms with attached bathrooms & garden-view windows',
'❄️ Split Air Conditioning in all rooms',
'🏊 Private Swimming Pool (17 × 30 ft) with a 5–6 ft depth slope',
'🔥 Bonfire and 🍖 Barbecue Setup',
'🏞️ Gazebo Seating for 10–12 people',
'📶 High-Speed Wi-Fi',
'♨️ Geysers for hot water',
'🍷 Wine Glasses available',
'🧴 Fresh towels provided in every bedroom and washroom',
'🍳 Fully equipped indoor kitchen with gas stove, microwave, RO system & double-door refrigerator',
'🔊 Large JBL party speakers near the swimming pool',
'🌳 Expansive garden area – ideal for outdoor games and events',
'🎠 Kids’ play area',
'👨‍💼 24/7 caretaker service',
'🚗 Private parking for up to 6 cars inside the property',
'🛌 Sleeping capacity: up to 15 guests',
'🛋️ Extra sofa-cum-beds available',
'🛏️ Extra mattresses & pillows available'

    ],
    faqs: [
      {
        question: 'What is the check-in and check-out time?',
        answer: 'Check-in After: 1:00 PM, Check-out before: 11:00 AM'
      },
      {
        question: 'Is parking available?',
        answer: 'Yes, free parking is available for guests.'
      },
      {
        question: 'Are pets allowed?',
        answer: 'Yes, this porperty is pet Friendly.'
      },
      {
        question: 'Is the swimming pool private?',
        answer: 'Yes, the swimming pool is private and exclusively for guests.'
      },
       {
        question: 'What is the maximum occupancy?',
       answer: 'This property can accommodate up to 50-70 guests comfortably and has a comfortable sleeping capacity of 12–14 people.'
      }
    ]
  },
  '2': {
    id: '2',
    title: '2 BHK Farmhouse Noida Sector 135 - OP-001',
    location: 'Noida · Sector 135',
     price: 'Starting From ₹10,000 ',
    bedrooms: 2,
    bathrooms: 2,
    images: [
      '/Images/FarmStay/Noida Farm/Property_1.png',
      '/Images/FarmStay/Noida Farm/Property_2.png',
      '/Images/FarmStay/Noida Farm/Property_4.png',
      '/Images/FarmStay/Noida Farm/Entrance.png',
      '/Images/FarmStay/Noida Farm/Living Room.png',
      '/Images/FarmStay/Noida Farm/living_room1.png',
      '/Images/FarmStay/Noida Farm/Living_room2.png',
      '/Images/FarmStay/Noida Farm/Living_room3.jpg',
      '/Images/FarmStay/Noida Farm/Living_rrom.jpg',
      '/Images/FarmStay/Noida Farm/RoomA1.png',
      '/Images/FarmStay/Noida Farm/RoomA2.png',
      '/Images/FarmStay/Noida Farm/RoomA3.png',
      '/Images/FarmStay/Noida Farm/RoomA4.png',
      '/Images/FarmStay/Noida Farm/RoomB1.png',
      '/Images/FarmStay/Noida Farm/RoomB3.png',
      '/Images/FarmStay/Noida Farm/Kitchen.jpg',
      '/Images/FarmStay/Noida Farm/Washroom1.jpg',
      '/Images/FarmStay/Noida Farm/Washroom-2.png',
      '/Images/FarmStay/Noida Farm/pool.png',
      '/Images/FarmStay/Noida Farm/Swimming_Pool_1.png',
      '/Images/FarmStay/Noida Farm/Garden_1.png',
      '/Images/FarmStay/Noida Farm/Garden_2.png',
      '/Images/FarmStay/Noida Farm/TV_Stand .png',
      '/Images/FarmStay/Noida Farm/Dinner_1.jpg',
      '/Images/FarmStay/Noida Farm/Dinner_2.png',
    ],
    description: 'Experience Nature and comfort at this 2 BHK farmhouse in Noida Sector 135, featuring a large private swimming pool, bonfire area, and barbecue setup, along with premium amenities for a perfect getaway.This beautifully designed farmhouse offers spacious bedrooms, modern interiors, a lush green lawn, and a private swimming pool. Located in a secure gated community, it ensures peace, privacy, and safety—making it ideal for families, parties, celebrations, and social gatherings.With excellent connectivity via the NH-48, the farmhouse is perfect for weekend getaways, private events, and long-term stays.',
    amenities: [
   '🛏️ 2 Bedrooms with attached bathrooms & garden-view windows',
'❄️ Split Air Conditioning in all rooms',
'🏊 Private Swimming Pool (17 × 30 ft) with a 5–6 ft depth slope',
'🔥 Bonfire and 🍖 Barbecue Setup',
'📶 High-Speed Wi-Fi',
'♨️ Geysers for hot water',
'🍷 Wine Glasses available',
'🧴 Fresh towels provided in every bedroom and washroom',
'🍳 Fully equipped indoor kitchen with gas stove, microwave, RO system & double-door refrigerator',
'🔊 Large JBL party speakers near the swimming pool',
'🌳 Expansive garden area – ideal for outdoor games and events',
'🎠 Kids’ play area',
'👨‍💼 24/7 caretaker service',
'🚗 Private parking for up to 6 cars inside the property',
'🛌 Sleeping capacity: up to 10 guests',
'🛋️ Extra sofa-cum-beds available',
'🛏️ Extra mattresses & pillows available'

    ],
      faqs: [
      {
        question: 'What is the check-in and check-out time?',
        answer: 'Check-in After: 1:00 PM, Check-out before: 11:00 AM'
      },
      {
        question: 'Is parking available?',
        answer: 'Yes, free parking is available for guests.'
      },
      {
        question: 'Are pets allowed?',
        answer: 'Yes, this porperty is pet Friendly.'
      },
      {
        question: 'Is the swimming pool private?',
        answer: 'Yes, the swimming pool is private and exclusively for guests.'
      },
       {
        question: 'What is the maximum occupancy?',
       answer: 'This property can accommodate up to 50-70 guests comfortably and has a comfortable sleeping capacity of 12–14 people.'
      }
    ]
  },
  '3': {
    id: '3',
    title: '2 BHK Green Beauty Farmhouse Noida Sector 135 - FVB 103',
    location: 'Noida · Sector 135',
    price: 'Starting From ₹10,000 ',
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
    faqs: [
      {
        question: 'What is the check-in and check-out time?',
        answer: 'Check-in: 1:00 PM, Check-out: 12:00 PM'
      },
      {
        question: 'Is parking available?',
        answer: 'Yes, parking is available for guests.'
      },
      {
        question: 'What amenities are included?',
        answer: 'The property includes garden view, fully equipped kitchen, air conditioning, high-speed WiFi, and secure parking.'
      },
      {
        question: 'Is the garden area accessible?',
        answer: 'Yes, guests have full access to the beautiful garden area for relaxation and outdoor activities.'
      }
    ]
  },
  '4': {
    id: '4',
    title: '3 BHK Luxury Farmhouse Noida Sector 135 - FVB 104',
    location: 'Noida · Sector 135',
    price: 'Starting From ₹10,000 ',
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
    price: 'Starting From ₹10,000 ',
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
    price: 'Starting From ₹10,000 ',
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

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1rem 1.25rem',
          background: isOpen ? '#f9fafb' : 'white',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}
        onMouseOver={(e) => {
          if (!isOpen) {
            e.currentTarget.style.background = '#f9fafb'
          }
        }}
        onMouseOut={(e) => {
          if (!isOpen) {
            e.currentTarget.style.background = 'white'
          }
        }}
      >
        <span style={{
          fontSize: '1rem',
          fontWeight: '600',
          color: '#1f2937',
          flex: 1,
          paddingRight: '1rem'
        }}>
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            color: '#6b7280',
            flexShrink: 0
          }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div style={{
          padding: '1rem 1.25rem',
          background: '#f9fafb',
          borderTop: '1px solid #e5e7eb',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#4b5563',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          animation: 'fadeIn 0.3s ease'
        }}>
          {answer}
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

// Success Modal Component
function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const phoneNumbers = [
    { number: '+91 7903962473', whatsapp: '917903962473' },
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
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
  fontWeight: 'bold',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#1a202c',
  marginBottom: '0.25rem'
}}>
  Message Sent Successfully!
</h2>

<p style={{
  textAlign: 'center',
  color: '#4a5568',
  fontSize: '0.9rem',
  fontWeight: '300', // thin text
  fontFamily: 'Inter, Arial, sans-serif',
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
        }}>
          {phoneNumbers.map((phone, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem',
              background: '#f8fafc',
              borderRadius: '10px',
              border: '1px solid #e5e7eb',
                fontWeight: '300', // thin text
  fontFamily: 'Inter, Arial, sans-serif',
            }}>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366 0%, #20BA5A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                flexShrink: 0,
                  fontWeight: '300', // thin text
  fontFamily: 'Inter, Arial, sans-serif',
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
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)'
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
      `}</style>
    </div>
  )
}

export default function PropertyDetails({ propertyId }: PropertyDetailsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [gridCurrentIndex, setGridCurrentIndex] = useState(0)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({
    selectedProperty: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    numberOfGuests: '',
    checkInDate: '',
    checkOutDate: '',
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

  // Set the selected property title when component loads or property changes
  useEffect(() => {
    if (property) {
      setInquiryForm(prev => ({ ...prev, selectedProperty: property.title }))
    }
  }, [property])

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInquiryForm({ ...inquiryForm, [e.target.name]: e.target.value })
  }

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Prepare form data for web3forms
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', '505625ac-de77-4afc-8da0-3ebf5c632d45')
      formDataToSend.append('selectedProperty', inquiryForm.selectedProperty)
      formDataToSend.append('name', inquiryForm.fullName)
      formDataToSend.append('phone', inquiryForm.phoneNumber)
      formDataToSend.append('email', inquiryForm.email)
      formDataToSend.append('numberOfGuests', inquiryForm.numberOfGuests)
      formDataToSend.append('checkInDate', inquiryForm.checkInDate)
      formDataToSend.append('checkOutDate', inquiryForm.checkOutDate)
      formDataToSend.append('message', inquiryForm.message || 'No additional message')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      const data = await response.json()

      if (data.success) {
        console.log('Form submitted successfully:', data)
        setShowSuccessModal(true)
        setInquiryForm(prev => ({ 
          ...prev,
          fullName: '', 
          phoneNumber: '', 
          email: '', 
          numberOfGuests: '', 
          checkInDate: '', 
          checkOutDate: '', 
          message: '' 
        }))
      } else {
        console.error('Form submission failed:', data)
        alert('Failed to send message. Please try again later.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again later.')
    }
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
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 0.5rem', paddingTop: '0' }}>
      {/* Farm House details screen Header */}

      {/* <div style={{
        textAlign: 'center',
        marginBottom: '2rem',
        paddingTop: '2rem'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: '600',
          color: '#111827',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          Farm House details screen
        </h2>
      </div> */}

      {/* Back Button */}
      
      <div style={{ marginBottom: '1rem', marginTop: '0', paddingTop: '1rem' }}>
        <button
          onClick={() => window.history.back()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            background: 'transparent',
            border: '1px solid #111111',
            borderRadius: '6px',
            padding: '0.4rem 0.8rem',
            color: '#111111',
            fontSize: '0.75rem',
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
            width="12"
            height="8"
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

      {/* Property Header Section */}
      <div style={{ marginBottom: '2rem' }}>
        {/* Property Title */}
        <h1 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '0.75rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          lineHeight: '1.2'
        }}>
          {property.title}
        </h1>

        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          color: '#6b7280',
          fontSize: '0.95rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
        }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          {property.location}
        </div>

        {/* Feature Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center'
        }}>
          {/* Farmhouse Tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: '#f3f4f6',
            borderRadius: '8px',
            fontSize: '0.875rem',
            color: '#374151',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Farmhouse
          </div>

          {/* Bedrooms Tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: '#f3f4f6',
            borderRadius: '8px',
            fontSize: '0.875rem',
            color: '#374151',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            {property.bedrooms} Bedrooms
          </div>

          {/* Bathrooms Tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: '#f3f4f6',
            borderRadius: '8px',
            fontSize: '0.875rem',
            color: '#374151',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
              <line x1="3" y1="9" x2="21" y2="9"></line>
            </svg>
            {property.bathrooms} Bathrooms
          </div>

          {/* Swimming Pool Tag (if in amenities) */}
          {property.amenities.some(a => a.toLowerCase().includes('pool')) && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: '#f3f4f6',
              borderRadius: '8px',
              fontSize: '0.875rem',
              color: '#374151',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Swimming Pool
            </div>
          )}

          {/* Guests Tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: '#f3f4f6',
            borderRadius: '8px',
            fontSize: '0.875rem',
            color: '#374151',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            12-25 Guests
          </div>

          {/* Price Tag */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: '#dbeafe',
            borderRadius: '8px',
            fontSize: '0.875rem',
            color: '#1e40af',
            fontWeight: '600',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
          }}>
            {property.price}/night
          </div>
        </div>
      </div>

      {/* Image Gallery - New Layout matching the image */}
      <div style={{ marginBottom: '2rem', position: 'relative' }}>
        {/* Desktop Layout */}
        <div 
          className="image-gallery-container desktop-gallery"
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

        {/* Mobile Layout */}
        <div 
          className="mobile-gallery"
          style={{
            display: 'none',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
          {/* Large Top Image */}
          <div
            onClick={() => openImageModal(property.images[0], 0)}
            style={{
              position: 'relative',
              width: '100%',
              height: '320px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              borderRadius: '12px 12px 0 0',
              overflow: 'hidden',
              background: '#f8f8f8',
              marginBottom: '0.75rem'
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

          {/* Two Smaller Images Side by Side */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            height: '200px'
          }}>
            {/* Left Small Image */}
            {property.images[1] && (
              <div
                onClick={() => openImageModal(property.images[1], 1)}
                style={{
                  position: 'relative',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  borderRadius: '0 0 0 12px',
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

            {/* Right Small Image with Overlay */}
            {property.images[2] && (
              <div
                onClick={() => openImageModal(property.images[2], 2)}
                style={{
                  position: 'relative',
                  height: '100%',
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
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '0.75rem'
                    }}>
                      +{property.images.length - 3} More
                    </div>
                  </div>
                )}
                
                {/* View photos button */}
                {property.images.length > 3 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(0);
                      setSelectedImage(property.images[0]);
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      background: 'white',
                      color: '#333',
                      border: 'none',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
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
                 Music limit: No Outdoor/ Indoor Music Limit, Play Loud Music Non-Stop till Morning
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
                Any vomiting or damage to property will result in additional charges.
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
                Check-in After 1 PM, Check-out before 11 AM
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          {property.faqs && property.faqs.length > 0 && (
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
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {property.faqs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          )}

          {/* Nearby Areas & Attractions Section */}
          {/* <div style={{
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
          </div> */}

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
              Send Us a Message
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1.5rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              We'd love to hear from you
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
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>Selected Property</label>
                <input
                  type="text"
                  name="selectedProperty"
                  value={inquiryForm.selectedProperty}
                  readOnly
                  disabled
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d0d0d0',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    background: '#f5f5f5',
                    color: '#666',
                    cursor: 'not-allowed'
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={inquiryForm.fullName}
                  onChange={handleInquiryChange}
                  required
                  placeholder="Enter your full name"
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

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={inquiryForm.phoneNumber}
                  onChange={handleInquiryChange}
                  required
                  placeholder="Enter 10-digit phone number"
                  maxLength={10}
                  pattern="[0-9]{10}"
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

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={inquiryForm.email}
                  onChange={handleInquiryChange}
                  required
                  placeholder="Enter your email address"
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

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>Number of Guests</label>
                <select
                  name="numberOfGuests"
                  value={inquiryForm.numberOfGuests}
                  onChange={handleInquiryChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d0d0d0',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    color: inquiryForm.numberOfGuests ? '#333' : '#999',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}
                >
                  <option value="">Select guests</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="21-30">21-30</option>
                  <option value="31-50">31-50</option>
                  <option value="25-40">25-40</option>
                  <option value="40-70">40-70</option>
                  <option value="100+">100+</option>
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
                }}>Check-in Date *</label>
                <input
                  type="date"
                  name="checkInDate"
                  value={inquiryForm.checkInDate}
                  onChange={handleInquiryChange}
                  required
                  placeholder="dd/mm/yyyy"
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

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>Check-out Date *</label>
                <input
                  type="date"
                  name="checkOutDate"
                  value={inquiryForm.checkOutDate}
                  onChange={handleInquiryChange}
                  required
                  placeholder="dd/mm/yyyy"
                  min={inquiryForm.checkInDate}
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

              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#333',
                  marginBottom: '0.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>Message</label>
                <textarea
                  name="message"
                  value={inquiryForm.message}
                  onChange={handleInquiryChange}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d0d0d0',
                    borderRadius: '6px',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                    minHeight: '80px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
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
                  transition: 'all 0.3s ease',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#2D3748'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#4A5568'
                }}
              >
                Send Us a Message
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

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
      
      {/* Responsive Design */}
      <style jsx>{`
        /* Hide mobile gallery by default */
        .mobile-gallery {
          display: none !important;
        }
        
        /* Show desktop gallery by default */
        .desktop-gallery {
          display: grid !important;
        }
        
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
          
          /* Hide desktop gallery on mobile */
          .desktop-gallery {
            display: none !important;
          }
          
          /* Show mobile gallery on mobile */
          .mobile-gallery {
            display: block !important;
          }
          
          .image-grid {
            grid-template-columns: 1fr !important;
            height: 300px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1200px) {
          .desktop-gallery {
            height: 450px !important;
          }
        }
        
        @media (min-width: 1201px) {
          .desktop-gallery {
            height: 500px !important;
          }
        }
      `}</style>
    </div>
  )
}