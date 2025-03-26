
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Zap, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState<'before' | 'after'>('before');
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-transition between states
    const autoSwitch = () => {
      setActiveSection(prev => prev === 'before' ? 'after' : 'before');
    };
    
    timeoutRef.current = setTimeout(autoSwitch, 4000);
    const interval = setInterval(autoSwitch, 8000);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearInterval(interval);
    };
  }, []);

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the hero section
      const x = (clientX - width / 2) / 50;
      const y = (clientY - height / 2) / 50;
      
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[95vh] flex flex-col justify-center overflow-hidden">
      {/* Dynamic background with subtle parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-sonic-950"></div>
        
        {/* Animated grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(80, 80, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(80, 80, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)`,
            transition: 'transform 0.2s ease-out'
          }}
        ></div>
        
        {/* Moving gradient orbs */}
        <div 
          className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]"
          style={{ 
            transform: `translate3d(${parallaxOffset.x * 2}px, ${parallaxOffset.y * 1.5}px, 0)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute -bottom-20 right-0 w-96 h-96 bg-sonic-600/20 rounded-full blur-[120px]"
          style={{ 
            transform: `translate3d(${-parallaxOffset.x * 1.5}px, ${-parallaxOffset.y * 2}px, 0)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20 pb-12">
        {/* "Limited availability" banner */}
        <div className="flex justify-center mb-8">
          <div 
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-sonic-500/20 text-sm font-medium text-sonic-400 shadow-lg shadow-sonic-500/5"
            style={{ 
              transform: `translate3d(${-parallaxOffset.x * 0.7}px, ${-parallaxOffset.y * 0.7}px, 0)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <Zap size={14} className="text-sonic-400 animate-pulse" /> 
            <span>Limited Availability: Only taking 5 clients per month</span>
          </div>
        </div>
        
        {/* Main headline and subheadline */}
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
          style={{ 
            transitionDelay: '200ms',
            transform: `translate3d(${parallaxOffset.x * 0.3}px, ${parallaxOffset.y * 0.3}px, 0)`,
            transition: 'transform 0.5s ease-out, opacity 0.7s ease-out, translate 0.7s ease-out'
          }}
        >
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            SonicLabs: The Expert Team That{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-sonic-400 via-purple-400 to-sonic-400 bg-size-200 animate-bg-position-x">
                Won't Let You Drown.
              </span>
              <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-sonic-500/20 via-purple-500/20 to-sonic-500/20 blur-sm"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Tired of wasted time, failed projects, and dev nightmares? We fix that—fast.
          </p>
        </div>
        
        {/* Main visualization area */}
        <div 
          className={`relative max-w-5xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
          style={{ 
            transitionDelay: '400ms',
            transform: `translate3d(${-parallaxOffset.x * 0.1}px, ${-parallaxOffset.y * 0.1}px, 0)`,
            transition: 'transform 0.5s ease-out, opacity 0.7s ease-out, translate 0.7s ease-out'
          }}
        >
          <div className="relative bg-gradient-to-b from-gray-900/50 to-gray-950/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            {/* "Before" state */}
            <div 
              className={`relative aspect-[21/9] md:aspect-[21/9] transition-all duration-1000 ease-in-out flex items-center justify-between p-6 ${activeSection === 'before' ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              aria-hidden={activeSection !== 'before'}
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute top-4 left-6 bg-red-500/10 text-red-400 px-3 py-1.5 rounded-full text-sm font-semibold border border-red-500/20">
                  Without SonicLabs
                </div>
                
                {/* Chaotic interconnected elements */}
                <div className="relative w-full h-full">
                  {/* Founder node */}
                  <div className="absolute left-[10%] top-[45%] transform -translate-y-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-3 border border-gray-700 shadow-lg">
                      <span className="text-2xl">😰</span>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-md text-gray-300 text-sm font-semibold">
                      Founder
                    </div>
                  </div>
                  
                  {/* Chaotic connections */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Randomly positioned, jagged, overlapping connection lines */}
                    <path d="M20% 45% Q25% 20% 35% 25%" stroke="rgba(255, 70, 70, 0.3)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
                    <path d="M20% 45% Q30% 55% 40% 60%" stroke="rgba(255, 70, 70, 0.3)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
                    <path d="M20% 45% Q25% 65% 45% 75%" stroke="rgba(255, 70, 70, 0.3)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
                    <path d="M20% 45% Q40% 45% 70% 30%" stroke="rgba(255, 70, 70, 0.3)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
                    <path d="M20% 45% Q35% 50% 65% 70%" stroke="rgba(255, 70, 70, 0.3)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
                  </svg>
                  
                  {/* Problem cards */}
                  <div className="absolute left-[35%] top-[25%] transform -rotate-3 animate-float-slow">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-red-800/30 shadow-lg max-w-[180px]">
                      <div className="text-sm font-medium text-gray-300">
                        "No-code tools broke when I needed custom features"
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[30%] top-[30%] transform rotate-2 animate-float-slow-reverse">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-red-800/30 shadow-lg max-w-[200px]">
                      <div className="text-sm font-medium text-gray-300">
                        "The deadline is approaching but the project still doesn't work"
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[15%] top-[70%] transform -rotate-2 animate-float-medium">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-red-800/30 shadow-lg max-w-[180px]">
                      <div className="text-sm font-medium text-gray-300">
                        "My freelancer disappeared mid-project"
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-[40%] top-[75%] transform rotate-1 animate-float-medium-reverse">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-red-800/30 shadow-lg flex flex-col items-start">
                      <div className="text-sm font-medium text-gray-300">
                        "Agency quoted me $24,500 upfront"
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[50%] top-[60%] transform -rotate-1 animate-float-slow">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-red-800/30 shadow-lg max-w-[200px]">
                      <div className="text-sm font-medium text-gray-300">
                        "Running out of runway with nothing to show"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* "After" state */}
            <div 
              className={`relative aspect-[21/9] md:aspect-[21/9] transition-all duration-1000 ease-in-out flex items-center justify-between p-6 ${activeSection === 'after' ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              aria-hidden={activeSection !== 'after'}
            >
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute top-4 left-6 bg-sonic-500/10 text-sonic-400 px-3 py-1.5 rounded-full text-sm font-semibold border border-sonic-500/20">
                  With SonicLabs
                </div>
                
                {/* Organized interconnected elements */}
                <div className="relative w-full h-full">
                  {/* Founder node */}
                  <div className="absolute left-[10%] top-[45%] transform -translate-y-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-3 border border-gray-700 shadow-lg">
                      <span className="text-2xl">😄</span>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-md text-gray-300 text-sm font-semibold">
                      Founder
                    </div>
                  </div>
                  
                  {/* Central SonicLabs node */}
                  <div className="absolute left-[50%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sonic-600 to-purple-600 flex items-center justify-center mb-3 border border-sonic-400/30 shadow-lg">
                      <div className="relative w-10 h-10 bg-sonic-600 rounded-full overflow-hidden flex items-center justify-center">
                        <span className="text-white font-bold text-xl">S</span>
                        <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent"></div>
                      </div>
                    </div>
                    <div className="bg-sonic-900/50 backdrop-blur-sm px-3 py-1 rounded-md text-sonic-300 text-sm font-semibold border border-sonic-500/20">
                      SonicLabs
                    </div>
                  </div>
                  
                  {/* Ordered connections */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Clean, organized connection lines */}
                    <path d="M20% 45% L50% 45%" stroke="rgba(80, 160, 255, 0.4)" strokeWidth="2" fill="none" />
                    <path d="M50% 45% Q65% 25% 75% 30%" stroke="rgba(80, 160, 255, 0.4)" strokeWidth="2" fill="none" />
                    <path d="M50% 45% Q65% 65% 75% 70%" stroke="rgba(80, 160, 255, 0.4)" strokeWidth="2" fill="none" />
                    <path d="M50% 45% Q70% 45% 85% 45%" stroke="rgba(80, 160, 255, 0.4)" strokeWidth="2" fill="none" />
                  </svg>
                  
                  {/* Solution cards */}
                  <div className="absolute right-[15%] top-[30%] transform rotate-1 animate-float-slow">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-sonic-500/30 shadow-lg max-w-[180px]">
                      <div className="text-sm font-medium text-gray-300">
                        "MVP delivered on time with custom features"
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[15%] top-[70%] transform -rotate-1 animate-float-medium">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-sonic-500/30 shadow-lg max-w-[180px]">
                      <div className="text-sm font-medium text-gray-300">
                        "Investor-ready codebase with milestone payments"
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[25%] top-[45%] transform -rotate-1 animate-float-medium-reverse">
                    <div className="bg-gray-900/80 backdrop-blur-sm p-3 rounded-lg border border-sonic-500/30 shadow-lg max-w-[180px]">
                      <div className="text-sm font-medium text-gray-300">
                        "Expert team that never disappears"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* State selector dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              <button 
                onClick={() => setActiveSection('before')}
                aria-label="View struggle state"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'before' ? 'bg-red-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
              ></button>
              <button 
                onClick={() => setActiveSection('after')}
                aria-label="View solution state"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 'after' ? 'bg-sonic-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
              ></button>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div 
          className={`max-w-xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
          style={{ 
            transitionDelay: '600ms',
            transform: `translate3d(${parallaxOffset.x * 0.2}px, ${parallaxOffset.y * 0.2}px, 0)`,
            transition: 'transform 0.5s ease-out, opacity 0.7s ease-out, translate 0.7s ease-out'
          }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button 
              className="bg-gradient-to-r from-sonic-600 to-purple-600 hover:from-sonic-500 hover:to-purple-500 text-white px-6 py-6 h-auto rounded-xl text-base font-medium shadow-lg hover:shadow-2xl transition-all duration-300 border-0 group"
            >
              🚀 Get a Free Strategy Call 
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline"
              className="border-sonic-600/20 text-gray-300 hover:bg-sonic-900/30 px-6 py-6 h-auto rounded-xl text-base font-medium transition-all duration-300 group"
            >
              <ExternalLink className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" /> 
              See Our Work
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent h-px w-full max-w-xs mx-auto mb-6"></div>
          
          <p className="text-sm text-gray-400">
            💡 No commitment—just expert guidance on your MVP.
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/20 rounded-full animate-pulse"></div>
        </div>
        <p className="text-white/40 text-xs mt-2">Scroll to explore</p>
      </div>
    </section>
  );
};

export default HeroSection;
