import Slideshow from "@/app/components/Slideshow";
import PropertyGallery from "@/app/components/PropertyGallery";
import TrustedBySection from "@/app/components/TrustedBy";
import ClientReview from '@/app/components/ClientReview';
import Footer from "@/app/components/Footer";
import Navigation from '@/app/components/Navigation'


export default function GurgaonHome() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#f5f1eb' }}>
      <Slideshow />
      <div style={{ marginTop: '2rem', position: 'relative', zIndex: 2 }}>
        <PropertyGallery />
        <TrustedBySection />
        <ClientReview />
        <Footer />
      </div>
    </div>
  );
}
