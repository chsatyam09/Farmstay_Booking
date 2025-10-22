import './globals.css'
import localFont from 'next/font/local'

const inter = localFont({
  src: '../public/fonts/customfont.ttf',
  variable: '--font-custom'
})

export const metadata = {
  title: 'ARAVALI FARM - Premium Venue for Events & Stays',
  description: 'Beautiful property venue for Airbnb stays, photo shoots, events, and wellness activities.',
   icons: {
    icon: "/favicon.ico",   
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
