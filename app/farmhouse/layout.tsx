import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farmhouse | Aravali Farm',
  description: 'Explore our luxury farmhouse options coming soon.',
}

export default function FarmhouseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


