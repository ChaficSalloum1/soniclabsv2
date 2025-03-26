
import { useRef } from 'react';
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
  // Create refs for each section to enable smooth scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const whyFoundersRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll to a section smoothly
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-b from-black to-sonic-950 text-white">
      {/* Navigation with scroll functions */}
      <Navigation 
        onNavigate={{
          whyFounders: () => scrollToSection(whyFoundersRef),
          trust: () => scrollToSection(trustRef),
          story: () => scrollToSection(storyRef),
          services: () => scrollToSection(servicesRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      
      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      
      {/* Main Content Sections */}
      <div className="relative z-10">
        {/* Why Founders Struggle Section */}
        <div ref={whyFoundersRef} className="section-transition">
          <WhyFoundersStruggle />
        </div>
        
        {/* Trust Section */}
        <div ref={trustRef} className="section-transition">
          <TrustSection />
        </div>
        
        {/* Founder's Story Section */}
        <div ref={storyRef} className="section-transition">
          <FoundersStory />
        </div>
        
        {/* Services Section */}
        <div ref={servicesRef} className="section-transition">
          <ServicesSection />
        </div>
        
        {/* Call to Action */}
        <div ref={contactRef} className="section-transition">
          <CallToAction />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
