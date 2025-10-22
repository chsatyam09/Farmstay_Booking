'use client'

interface ContactInfo {
  icon: string
  title: string
  value: string
  link?: string
  action?: () => void
}

const HorizontalContactCard = () => {

  const contactInfo: ContactInfo[] = [
    {
      icon: '📞',
      title: 'Phone',
      value: '+91 7903962473 | +91 9211255393',
      link: 'tel:+917903962473'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'aravalifarm@gmail.com',
      link: 'mailto:aravalifarm@gmail.com'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Plot no - 7A, Para, Pachgaon, Gurugram, Haryana 122105',
      action: () => {
        // Open Google Maps
        window.open('https://maps.google.com/?q=Plot+no+-+7A,+Para,+Pachgaon,+Gurugram,+Haryana+122105', '_blank')
      }
    }
  ]

  const handleItemClick = (item: ContactInfo) => {
    if (item.link) {
      window.open(item.link, '_blank')
    } else if (item.action) {
      item.action()
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      padding: '1rem 0',
      alignItems: 'center'
    }}>


      {/* Contact Items */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '400px'
      }}>
        {contactInfo.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
            onClick={() => handleItemClick(item)}
          >
            {/* Icon */}
            <div style={{
              width: '40px',
              height: '40px',
              background: '#667eea',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              flexShrink: 0
            }}>
              {item.icon}
            </div>

            {/* Text Content */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1rem',
                color: '#2d3748',
                margin: '0 0 0.25rem 0',
                fontWeight: '600'
              }}>
                {item.title}
              </h3>
              <p style={{
                margin: 0,
                color: '#4a5568',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <div style={{
        textAlign: 'center',
        marginTop: '1rem'
      }}>
        <a
          href="https://wa.me/917903962473"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#25D366',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
            minWidth: '200px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#20B358'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#25D366'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)'
          }}
        >
          <span style={{ 
            marginRight: '0.75rem', 
            fontSize: '1.3rem'
          }}>💬</span>
          WhatsApp Us Now
        </a>
      </div>

    </div>
  )
}

export default HorizontalContactCard
