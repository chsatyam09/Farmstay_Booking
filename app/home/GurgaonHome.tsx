import Slideshow from "@/app/components/Slideshow";
import Themes from "@/app/components/Themes";
import ContentSections from "@/app/components/ContentSections";
import ContactForm from "@/app/components/ContactForm";
import ClientReview from '@/app/components/ClientReview';
import Footer from "@/app/components/Footer";
import Navigation from '@/app/components/Navigation'


export default function GurgaonHome() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Slideshow />
      <div style={{ marginTop: '2rem', position: 'relative', zIndex: 2 }}>
        <Themes />
        {/* <ContentSections /> */}
        {/* <ContactForm /> */}
        <ClientReview />
        <Footer />
      </div>
    </div>
  );
}
