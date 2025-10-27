import './globals.css'
import localFont from 'next/font/local'

const inter = localFont({
  src: '../public/fonts/customfont.ttf',
  variable: '--font-custom'
})

export const metadata = {
  title: 'Farm House in Gurgaon | Aravali Farm – Luxury Pool & Party Venue',
  description: 'Book Aravali Farm, a premium farmhouse in Gurgaon with a private pool & lush lawns. Ideal for parties, birthdays, weddings & corporate events.',
  keywords: 'farmhouse in gurgaon, my farm gurgaon, farm in gurgaon, farmhouse for party, luxury farmhouse gurgaon, farmhouse with pool gurgaon, private farmhouse rent gurgaon, weekend farm stay gurgaon, farm stay gurgaon, farm rental gurgaon, farm house rental gurgaon, farm vacation gurgaon, organic farm gurgaon, farm retreat gurgaon, weekend getaway gurgaon, corporate party farmhouse, birthday party farmhouse, pool party venue gurgaon, farm house gurgaon, farm in gurgaon for rent, my farm in gurgaon',
  icons: {
    icon: "/favicon.ico",   
  },
  openGraph: {
    title: 'Farm House in Gurgaon | Aravali Farm – Luxury Pool & Party Venue',
    description: 'Book Aravali Farm, a premium farmhouse in Gurgaon with a private pool & lush lawns. Ideal for parties, birthdays, weddings & corporate events.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farm House in Gurgaon | Aravali Farm',
    description: 'Premium farmhouse in Gurgaon with pool & lush lawns.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: 'Aravali Farm',
    description: 'Premium farmhouse in Gurgaon with private pool and lush lawns. Perfect for parties, corporate events, and weekend getaways.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.2918',
      longitude: '76.9234'
    },
    url: 'https://aravalifarm.com',
    telephone: '+91-7903962473',
    priceRange: '₹₹',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Swimming Pool',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Air Conditioning',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'WiFi',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parking',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'BBQ Area',
        value: true
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
