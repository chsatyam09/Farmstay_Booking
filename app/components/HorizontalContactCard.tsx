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
      icon: '☎️ ',
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
      padding: '4rem 3rem',
      alignItems: 'center',
      fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
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
            onClick={() => handleItemClick(item)}
          >
             {/* Icon */}
             <div style={{
               width: '40px',
               height: '40px',
               background: 'rgba(255, 255, 255, 0.2)',
               borderRadius: '50%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               fontSize: '1.2rem',
               flexShrink: 0,
               border: '1px solid rgba(255, 255, 255, 0.3)',
               backdropFilter: 'blur(10px)'
             }}>
               {item.icon}
             </div>

             {/* Text Content */}
             <div style={{ flex: 1 }}>
               <h3 style={{
                 fontSize: '1.1rem',
                 color: '#ffffff',
                 margin: '0 0 0.25rem 0',
                 fontWeight: '700',
                 textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                 letterSpacing: '0.5px',
                 textTransform: 'uppercase',
                 fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
               }}>
                 {item.title}
               </h3>
               <p style={{
                 margin: 0,
                 color: '#ffffff',
                 fontSize: '1rem',
                 fontWeight: '600',
                 textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                 letterSpacing: '0.3px',
                 lineHeight: '1.4',
                 fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
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
      background: 'transparent',
      color: 'white',
      padding: '0.6rem 1.4rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '600',
      border: '2px solid white',
      fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      letterSpacing: '0.5px',
      transition: 'all 0.3s ease',
      boxShadow: '0 0 0 rgba(37, 211, 102, 0)',
      minWidth: '260px'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.background = 'white'
      e.currentTarget.style.color = 'black'
      e.currentTarget.style.boxShadow = '0 0 12px 2px rgba(37, 211, 102, 0.7)'
      e.currentTarget.style.transform = 'translateY(-2px)'
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = 'transparent'
      e.currentTarget.style.color = 'white'
      e.currentTarget.style.boxShadow = '0 0 0 rgba(37, 211, 102, 0)'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
  >
    <span style={{ 
      marginRight: '0.5rem', 
      fontSize: '1.1rem'
    }}>💬</span>
    WhatsApp Us
  </a>
</div>


    </div>
  )
}

export default HorizontalContactCard
