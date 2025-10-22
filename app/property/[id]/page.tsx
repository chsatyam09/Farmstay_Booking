'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Navigationforgallery from '@/app/components/Navigationforgallery'
import PropertyDetails from '@/app/components/PropertyDetails'
import Footer from '@/app/components/Footer'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'

export default function PropertyPage() {
  const [location, setLocation] = useState<'gurgaon' | 'noida'>('noida')
  const params = useParams()
  const propertyId = params.id as string

  return (
    <main style={{ background: 'white', minHeight: '100vh' }}>
      <Navigationforgallery location={location} setLocation={setLocation} />
      <div style={{ paddingTop: '80px' }}>
        <PropertyDetails propertyId={propertyId} />
      </div>
      <Footer />
      
      {/* Scroll to Top Button - appears only when footer is visible */}
      <ScrollToTopButton />
    </main>
  )
}