
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/home/HeroSection';
import WhyFoundersStruggle from '@/components/home/WhyFoundersStruggle';
import TrustSection from '@/components/home/TrustSection';
import FoundersStory from '@/components/home/FoundersStory';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import ServicesSection from '@/components/home/ServicesSection';
import CallToAction from '@/components/home/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      <div>
        {/* Why Founders Struggle Section */}
        <WhyFoundersStruggle />
        
        {/* Trust Section */}
        <TrustSection />
        
        {/* Founder's Story Section */}
        <FoundersStory />
        
        {/* Advantages Section */}
        <AdvantagesSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Call to Action */}
        <CallToAction />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
