import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amenities at My Farm Gurgaon | Luxury Farm Stay Facilities',
  description: 'Explore premium amenities at Aravali Farm - luxury farm in Gurgaon. Private pool, spacious lawns, modern rooms, BBQ area, and all amenities for perfect farm stay experience.',
  keywords: 'farm amenities gurgaon, farm stay amenities, farm in gurgaon facilities, farm vacation amenities, farm rental gurgaon facilities, my farm gurgaon amenities, luxury farm amenities, farm stay facilities'
}

export default function AmenitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

