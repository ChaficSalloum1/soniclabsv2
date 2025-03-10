
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import FoundersStory from '@/components/home/FoundersStory';
import ServicesSection from '@/components/home/ServicesSection';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Founder's Story Section */}
      <FoundersStory />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
