import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | My Farm Gurgaon - Luxury Farm Stay Photos',
  description: 'Browse stunning photos of Aravali Farm - luxury farm in Gurgaon with private pool, lush lawns, modern rooms. See why we are the best farm stay experience in Gurgaon.',
  keywords: 'farm photos gurgaon, my farm gurgaon gallery, farm stay gurgaon images, luxury farm photos, farm rental gurgaon gallery, farm in gurgaon pictures, farm vacation images, best farm gurgaon photos'
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

