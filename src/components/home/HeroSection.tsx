
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Zap, 
  BarChart3, 
  Lightbulb,
  ExternalLink,
  Clock,
  AlertTriangle,
  MessageSquareX,
  CheckCircle,
  Rocket,
  Smile
} from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAfterState, setShowAfterState] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Add transition between before and after states
    const interval = setInterval(() => {
      setShowAfterState(prev => !prev);
    }, 5000); // Toggle every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-6 space-y-8">
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center rounded-full border border-sonic-600/20 bg-sonic-50 px-3 py-1 text-sm font-medium text-sonic-800 mb-6">
                <Zap size={14} className="mr-1 text-sonic-600" /> AI-Powered MVP Development
              </div>
              <h1 className="hero-text text-balance mb-6 text-[#0047AB] leading-tight tracking-tight">
                SonicLabs: The Expert Team That Won't Let You Drown.
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-[#343A40] max-w-xl mb-10 leading-relaxed">
                Tired of wasted time, failed projects, and dev nightmares? We fix that—fast.
              </h2>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  className="bg-[#FF6200] hover:bg-[#E55A00] text-white h-14 px-8 rounded-lg text-lg font-bold w-full sm:w-auto shadow-sm hover:shadow-md transition-all duration-300"
                >
                  🚀 Get a Free Strategy Call
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB]/10 h-14 px-8 rounded-lg text-lg font-medium w-full sm:w-auto transition-all duration-300"
                >
                  <ExternalLink className="mr-2 h-5 w-5" /> See Our Work
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                💡 No commitment—just expert guidance on your MVP.
              </p>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-6 flex justify-center items-start mt-12 md:mt-0">
            <div className={`relative w-full h-[400px] transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              {/* Split design container with refined visual styling */}
              <div className="w-full h-full relative rounded-xl overflow-hidden shadow-xl border border-gray-100">
                {/* "Before" state - Chaos with professional styling */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-opacity duration-1000 ease-in-out ${showAfterState ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="relative w-full h-full">
                    {/* Visual elements of chaos with refined styling */}
                    <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md border border-red-200 flex items-center animate-float">
                      <Clock className="text-red-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-700">Deadline approaching!</span>
                    </div>
                    
                    <div className="absolute top-1/3 right-6 bg-white p-4 rounded-lg shadow-md border border-red-200 flex items-center animate-float" style={{ animationDelay: '1s' }}>
                      <AlertTriangle className="text-red-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-700">Build failed: 23 errors</span>
                    </div>
                    
                    <div className="absolute bottom-12 left-8 bg-white p-4 rounded-lg shadow-md border border-red-200 flex items-center animate-float" style={{ animationDelay: '1.5s' }}>
                      <MessageSquareX className="text-red-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-700">Freelancer: "Sorry, I quit."</span>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/4 bg-white p-4 rounded-lg shadow-md border border-red-200 animate-float" style={{ animationDelay: '0.7s' }}>
                      <div className="text-sm font-medium text-gray-700 text-center mb-2">Agency Quote:</div>
                      <div className="text-lg font-bold text-red-500 text-center">$24,500 upfront</div>
                    </div>
                    
                    {/* Stressed founder illustration */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-3xl animate-pulse">😰</div>
                    </div>
                  </div>
                </div>
                
                {/* "After" state - Clarity with professional styling */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-white p-6 transition-opacity duration-1000 ease-in-out ${showAfterState ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="relative w-full h-full">
                    {/* Visual elements of success with refined styling */}
                    <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md border border-green-200 flex items-center animate-float">
                      <CheckCircle className="text-green-600 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-700">MVP launched on schedule!</span>
                    </div>
                    
                    <div className="absolute top-1/3 right-6 bg-white p-4 rounded-lg shadow-md border border-blue-200 flex items-center animate-float" style={{ animationDelay: '0.5s' }}>
                      <BarChart3 className="text-blue-600 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-700">User growth +32%</span>
                    </div>
                    
                    <div className="absolute bottom-12 left-8 bg-white p-4 rounded-lg shadow-md border border-blue-200 flex items-center animate-float" style={{ animationDelay: '1s' }}>
                      <Rocket className="text-blue-600 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-700">Ready for investor demo</span>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/4 bg-white p-4 rounded-lg shadow-md border border-green-200 animate-float" style={{ animationDelay: '1.3s' }}>
                      <div className="text-sm font-medium text-gray-700 text-center mb-2">SonicLabs:</div>
                      <div className="text-lg font-bold text-green-600 text-center">Milestone payments</div>
                    </div>
                    
                    {/* Happy founder illustration */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                      <div className="text-3xl animate-pulse-light">😄</div>
                    </div>
                  </div>
                </div>
                
                {/* Refined transition indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${!showAfterState ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${showAfterState ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
