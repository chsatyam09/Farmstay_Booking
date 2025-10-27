import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Farm for Party in Gurgaon | My Farm Stay Experience',
  description: 'Host your dream party at the best farm in Gurgaon. Aravali Farm offers luxury farm stay amenities, private pool, farm rental options, and perfect setup for birthday parties, pool parties, and farm vacation experiences.',
  keywords: 'farm for party in gurgaon, my farm gurgaon, farm in gurgaon, farm stay gurgaon, farm rental gurgaon, farm vacation gurgaon, party venue gurgaon, birthday party farm, farm retreat gurgaon, weekend farm stay, corporate party farm, pool party venue, farm stay near me'
}

export default function PartyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

