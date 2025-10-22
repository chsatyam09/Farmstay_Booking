"use client";

import Navigation from '@/app/components/Navigation'
import ScrollToTopButton from '@/app/components/ScrollToTopButton'
import GurgaonHome from "./GurgaonHome";

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ margin: 0, padding: 0 }}>
      {/* Navigation bar */}
      <Navigation />

      {/* Home content */}
      <GurgaonHome />
      
      {/* Scroll to Top Button - appears only when footer is visible */}
      <ScrollToTopButton />
    </main>
  );
}
