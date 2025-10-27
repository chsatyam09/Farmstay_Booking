'use client'

import { useParams } from 'next/navigation'
import PropertyDetails from '@/app/components/PropertyDetails'
import Footer from '@/app/components/Footer'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'

export default function PropertyPage() {
  const params = useParams()
  const propertyId = params.id as string

  return (
    <main style={{ background: 'white', minHeight: '100vh' }}>
      <div>
        <PropertyDetails propertyId={propertyId} />
         
      </div>
      <Footer />
      
      {/* Scroll to Top Button - appears only when footer is visible */}
      <ScrollToTopButton />
    </main>
  )
}