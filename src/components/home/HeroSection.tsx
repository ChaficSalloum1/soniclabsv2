
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Zap, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  MessageSquareX,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState<'before' | 'after'>('before');
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
      {/* Dark background with subtle grid */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      </div>
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sonic-600/20 rounded-full blur-[100px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-16 pb-12">
        {/* "Limited availability" banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-sonic-400">
            <Zap size={14} className="text-sonic-400" /> <span>Limited Availability: Only taking 5 clients per month</span>
          </div>
        </div>
        
        {/* Main headline and subheadline */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            SonicLabs: The Expert Team That <span className="text-transparent bg-clip-text bg-gradient-to-r from-sonic-400 to-purple-400">Won't Let You Drown.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Tired of wasted time, failed projects, and dev nightmares? We fix that—fast.
          </p>
        </div>
        
        {/* Main visualization area */}
        <div className={`relative max-w-5xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-gradient-to-b from-gray-900/50 to-gray-950/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]">
            <div className="relative aspect-[21/9] md:aspect-[21/8]">
              {/* Background grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,20,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,20,0.8)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
              
              {/* "Before" state */}
              <div 
                className={`absolute inset-0 p-6 transition-all duration-1000 ease-in-out flex items-center justify-between ${activeSection === 'before' ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={activeSection !== 'before'}
              >
                <div className="w-full h-full relative">
                  {/* Left side: Founder state */}
                  <div className="absolute left-[10%] bottom-[30%] md:bottom-[40%] flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800/80 flex items-center justify-center mb-3 border border-gray-700/50 shadow-lg">
                      <span className="text-2xl md:text-3xl">😰</span>
                    </div>
                    <span className="bg-gray-800/70 px-3 py-1 rounded-md text-gray-300 text-sm font-medium">Founder</span>
                  </div>
                  
                  {/* Visual elements: Problems */}
                  <div className="absolute left-[25%] top-[20%] transform -rotate-3 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-red-800/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Clock className="text-red-500" size={18} />
                        <span className="text-sm font-medium text-gray-300">Deadline in 3 days!</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[30%] top-[35%] transform rotate-2 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-red-800/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="text-red-500" size={18} />
                        <span className="text-sm font-medium text-gray-300">Build failed: 23 errors</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[15%] bottom-[25%] transform -rotate-2 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-red-800/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <MessageSquareX className="text-red-500" size={18} />
                        <span className="text-sm font-medium text-gray-300">Dev: "Sorry, I quit."</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-[45%] top-[60%] transform rotate-1 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-red-800/30 shadow-lg flex flex-col items-center">
                      <span className="text-sm text-gray-400 mb-1">Agency Quote:</span>
                      <span className="text-base font-bold text-red-500">$24,500 upfront</span>
                    </div>
                  </div>
                  
                  {/* Connecting lines showing chaos */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25% 25% Q40% 10% 55% 60%" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2" fill="none" />
                    <path d="M70% 35% Q60% 50% 45% 60%" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2" fill="none" />
                    <path d="M85% 75% Q70% 80% 45% 60%" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
              
              {/* "After" state */}
              <div 
                className={`absolute inset-0 p-6 transition-all duration-1000 ease-in-out flex items-center justify-between ${activeSection === 'after' ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={activeSection !== 'after'}
              >
                <div className="w-full h-full relative">
                  {/* Left side: Founder state */}
                  <div className="absolute left-[10%] bottom-[30%] md:bottom-[40%] flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-800/80 flex items-center justify-center mb-3 border border-gray-700/50 shadow-lg">
                      <span className="text-2xl md:text-3xl">😄</span>
                    </div>
                    <span className="bg-gray-800/70 px-3 py-1 rounded-md text-gray-300 text-sm font-medium">Founder</span>
                  </div>
                  
                  {/* Visual elements: Solutions */}
                  <div className="absolute left-[25%] top-[20%] transform -rotate-3 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-green-800/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={18} />
                        <span className="text-sm font-medium text-gray-300">MVP launched on time</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[30%] top-[35%] transform rotate-2 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-sonic-800/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Zap className="text-sonic-400" size={18} />
                        <span className="text-sm font-medium text-gray-300">Clean codebase</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute right-[15%] bottom-[25%] transform -rotate-2 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-sonic-800/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Rocket className="text-sonic-400" size={18} />
                        <span className="text-sm font-medium text-gray-300">Ready for investors</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-[45%] top-[60%] transform rotate-1 opacity-90">
                    <div className="bg-gray-800/80 backdrop-blur p-3 rounded-lg border border-green-800/30 shadow-lg flex flex-col items-center">
                      <span className="text-sm text-gray-400 mb-1">SonicLabs:</span>
                      <span className="text-base font-bold text-green-500">Milestone payments</span>
                    </div>
                  </div>
                  
                  {/* Connecting lines showing organization */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25% 25% Q40% 30% 45% 60%" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2" fill="none" />
                    <path d="M70% 35% Q60% 40% 45% 60%" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2" fill="none" />
                    <path d="M85% 75% Q70% 70% 45% 60%" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>

              {/* State indicator dots */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3">
                <button 
                  onClick={() => setActiveSection('before')}
                  aria-label="View before state"
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === 'before' ? 'bg-sonic-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
                ></button>
                <button 
                  onClick={() => setActiveSection('after')}
                  aria-label="View after state"
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === 'after' ? 'bg-sonic-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
                ></button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className={`max-w-xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-sonic-600 to-purple-600 hover:from-sonic-500 hover:to-purple-500 text-white px-6 py-6 h-auto rounded-xl text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            >
              🚀 Get a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 px-6 py-6 h-auto rounded-xl text-base font-medium transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5" /> See Our Work
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            💡 No commitment—just expert guidance on your MVP.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
