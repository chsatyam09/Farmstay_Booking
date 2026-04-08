'use client'

import { useRouter } from 'next/navigation'

const Themes = () => {
  const router = useRouter()
  const themes = [
   {
  id: 1,
  title: "Farmhouse for Birthday Party in Gurgaon",
  subtitle: "Best Birthday Venue in Delhi NCR",
  description: "Perfect farmhouse for birthday party in Gurgaon with private pool, spacious lawns, and premium amenities. Book now for unforgettable celebrations.",
  image: "/Images/Aravali Farm Images/Birthday-1.png",
  imageAlt: "Farmhouse for Birthday Party in Gurgaon - Best Birthday Celebration Venue with Private Pool",
  buttonText: "BOOK YOUR PARTY",
  layout: "left"
},
{
  id: 2,
  title: "Farmhouse for Corporate Party in Gurgaon",
  subtitle: "Corporate Event Venue Near Delhi NCR",
  description: "Premium farmhouse for corporate party in Gurgaon. Perfect for team building with modern amenities, private pool, and professional setup.",
  image: "/Images/Aravali Farm Images/Pool-1.png",
  imageAlt: "Farmhouse for Corporate Party in Gurgaon - Professional Event Venue with Pool and Modern Amenities",
  buttonText: "BOOK EVENT",
  layout: "right"
},
{
  id: 3,
  title: "Farmhouse for Bachelor Party in Gurgaon",
  subtitle: "Ultimate Bachelor Party Venue Near Delhi",
  description: "Best farmhouse for bachelor party in Gurgaon. Private pool, music until 4 AM, BBQ setup, and complete privacy. Perfect for your celebration.",
  image: "/Images/Aravali Farm Images/Beer.jpg",
  imageAlt: "Farmhouse for Bachelor Party in Gurgaon - Ultimate Party Venue with Pool and Entertainment",
  buttonText: "PLAN EVENT",
  layout: "left"
},
{
  id: 4,
  title: "Farmhouse for Family Get-Together in Gurgaon",
  subtitle: "Family Celebration Venue in Delhi NCR",
  description: "Perfect farmhouse for family get-together in Gurgaon. Spacious lawns, modern rooms, and all amenities for memorable family celebrations.",
  image: "/Images/Aravali Farm Images/property-2.jpg",
  imageAlt: "Farmhouse for Family Get-Together in Gurgaon - Beautiful Family Celebration Venue with Garden",
  buttonText: "BOOK NOW",
  layout: "right"
}

  ]

  return (
    <section id="themes" style={{ padding: '1rem 0', background: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <h2
            style={{
               fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', // smaller than before
              color: '#000000',
              marginBottom: '0.5rem',
              letterSpacing: '0.15em',
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 300,
              marginTop: '0rem'
            }}
          >
            Perfect Venues for Every Celebration in Gurgaon
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
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#595959',
              lineHeight: '1.6',
              marginBottom: '2rem',
              width: '100%',
              fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}
          >
            Luxury farmhouse in Gurgaon perfect for parties, birthdays, corporate events, and weekend getaways near Delhi NCR.
          </p>
        </div>

        {/* Theme Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 6rem)' }}>
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1.5rem, 4vw, 3rem)',
                flexDirection: theme.layout === 'right' ? 'row-reverse' : 'row',
                minHeight: 'auto'
              }}
              className="theme-card"
            >
              {/* Image Section */}
              <div
                style={{
                  flex: '1',
                  position: 'relative',
                  height: 'clamp(250px, 40vw, 400px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <img
                  src={theme.image}
                  alt={theme.imageAlt || theme.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                  className="theme-image"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div
                style={{
                  flex: '1',
                  padding: 'clamp(1rem, 3vw, 2rem)',
                  textAlign: theme.layout === 'right' ? 'right' : 'left'
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                    color: '#000000ff',
                    marginBottom: '0.5rem',
                    lineHeight: '1.2',
                    fontFamily: "'Dancing Script', cursive",
                  }}
                >
                  {theme.title}
                </h3>

                <h4
                  style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                    color: '#3f3f3f',
                    marginBottom: '1rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontWeight: '550',
                    fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
                  }}
                >
                  {theme.subtitle}
                </h4>

                <p
                  style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: '#595959',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    maxWidth: '100%',
                    fontFamily: 'Montserrat'
                  }}
                >
                  {theme.description}
                </p>

     <button
  style={{
    background: 'linear-gradient(135deg, #000000 0%, #595959 100%)',
    color: 'white',
    padding: 'clamp(0.7rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 2.5rem)',
    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
    fontWeight: '600',
    letterSpacing: '0.05em',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50px',
    textTransform: 'uppercase',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(63, 63, 63, 0.3)',
    fontFamily: '"Poppins", sans-serif',
    width: 'fit-content',
  }}
  onMouseOver={(e) => {
    const target = e.target as HTMLButtonElement
    target.style.transform = 'translateY(-3px) scale(1.05)'
    target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(63, 63, 63, 0.4)'
    target.style.background = 'linear-gradient(135deg, #595959 0%, #000000 100%)'
    target.style.borderRadius = '40px' // shape morph effect
  }}
  onMouseOut={(e) => {
    const target = e.target as HTMLButtonElement
    target.style.transform = 'translateY(0) scale(1)'
    target.style.boxShadow = '0 4px 15px rgba(63, 63, 63, 0.3)'
    target.style.background = 'linear-gradient(135deg, #000000 0%, #595959 100%)'
    target.style.borderRadius = '50px' // reset shape
  }}
  onClick={(e) => {
    const target = e.target as HTMLButtonElement
    target.style.animation = 'shake 0.5s ease-in-out'

    setTimeout(() => {
      target.style.animation = ''
    }, 500)

    // If button text is "BOOK NOW", redirect to Gallery page
    if (theme.buttonText === "BOOK NOW") {
      router.push('/Gallery')
    } else {
      // For other buttons, keep WhatsApp functionality
      const message = `Hi! I'm interested in booking ${theme.title} at Aravali Farm. Please provide me with more details, pricing, and availability.`
      window.open(
        `https://wa.me/917903962473?text=${encodeURIComponent(message)}`,
        '_blank'
      )
    }
  }}
>
  {theme.buttonText}
</button>

<style>
{`
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}
`}
</style>


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
          
          div[style*='height: clamp(250px, 40vw, 400px)'] {
            height: 300px !important;
          }
        }

        @media (max-width: 768px) {
          div[style*='flex-direction: row'],
          div[style*='flex-direction: row-reverse'] {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          
          div[style*='height: clamp(250px, 40vw, 400px)'] {
            height: 250px !important;
          }
          
          div[style*='padding: clamp(1rem, 3vw, 2rem)'] {
            padding: 1rem !important;
            text-align: center !important;
          }
          
          h3 {
            font-size: clamp(1.2rem, 4vw, 1.6rem) !important;
            text-align: center !important;
          }
          
          h4 {
            font-size: clamp(0.8rem, 2.5vw, 0.95rem) !important;
            text-align: center !important;
          }
          
          p {
            font-size: clamp(0.85rem, 2.5vw, 0.95rem) !important;
            text-align: center !important;
            max-width: 100% !important;
            margin: 0 auto 1.5rem !important;
          }
          
          button {
            font-size: clamp(0.7rem, 2.5vw, 0.85rem) !important;
            padding: 0.7rem 1.5rem !important;
            width: 100% !important;
            max-width: 280px !important;
            margin: 0 auto !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*='height: clamp(250px, 40vw, 400px)'] {
            height: 200px !important;
          }
          
          div[style*='gap: clamp(3rem, 6vw, 6rem)'] {
            gap: 2.5rem !important;
          }
          
          div[style*='marginBottom: clamp(2rem, 5vw, 4rem)'] {
            margin-bottom: 2rem !important;
          }
          
          h2 {
            font-size: clamp(1.3rem, 5vw, 1.8rem) !important;
          }
          
          p[style*='fontSize: clamp(0.9rem, 2vw, 1rem)'] {
            font-size: clamp(0.85rem, 3vw, 0.95rem) !important;
            padding: 0 0.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Themes
