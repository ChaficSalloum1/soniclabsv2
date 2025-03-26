
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
  ArrowRight
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
    <section className="relative min-h-screen overflow-hidden bg-[#111] text-white">
      {/* Grid background pattern similar to the reference image */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIwLjUiPjxwYXRoIGQ9Ik0wIDB2NjBoNjBWMEgweiIvPjxwYXRoIGQ9Ik0zMCAwdjYwTTAgMzBoNjAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#11111100] via-[#11111150] to-[#111] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-screen-xl mx-auto">
          {/* Limited availability banner */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center rounded-full border border-sonic-600/30 bg-[#222]/80 backdrop-blur-sm px-6 py-2 text-sm font-medium text-sonic-400">
              <Zap size={14} className="mr-2 text-sonic-400" /> Limited Availability: Only taking 5 clients per month
            </div>
          </div>
          
          <div className="grid-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center space-y-8 mb-16">
              <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                  SonicLabs: The Expert Team That <span className="bg-gradient-to-r from-sonic-500 to-purple-500 bg-clip-text text-transparent">Won't Let You Drown.</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Tired of wasted time, failed projects, and dev nightmares? We fix that—fast.
                </h2>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    className="bg-gradient-to-r from-sonic-600 to-purple-600 hover:from-sonic-500 hover:to-purple-500 text-white h-14 px-8 rounded-lg text-lg font-bold w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                  >
                    🚀 Get a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 h-14 px-8 rounded-lg text-lg font-medium w-full sm:w-auto transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" /> See Our Work
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  💡 No commitment—just expert guidance on your MVP.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 flex justify-center items-start mt-4">
            <div className={`relative w-full max-w-4xl h-[400px] transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              {/* Split design container with refined visual styling */}
              <div className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#151515]">
                {/* "Before" state - Chaos with professional styling */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#151515] to-[#1a1a1a] p-6 transition-opacity duration-1000 ease-in-out ${showAfterState ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="relative w-full h-full">
                    {/* Visual elements of chaos with refined styling */}
                    <div className="absolute top-4 left-4 bg-[#181818] p-4 rounded-lg shadow-md border border-red-900/30 flex items-center animate-float">
                      <Clock className="text-red-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-300">Deadline approaching!</span>
                    </div>
                    
                    <div className="absolute top-1/3 right-6 bg-[#181818] p-4 rounded-lg shadow-md border border-red-900/30 flex items-center animate-float" style={{ animationDelay: '1s' }}>
                      <AlertTriangle className="text-red-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-300">Build failed: 23 errors</span>
                    </div>
                    
                    <div className="absolute bottom-12 left-8 bg-[#181818] p-4 rounded-lg shadow-md border border-red-900/30 flex items-center animate-float" style={{ animationDelay: '1.5s' }}>
                      <MessageSquareX className="text-red-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-300">Freelancer: "Sorry, I quit."</span>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/4 bg-[#181818] p-4 rounded-lg shadow-md border border-red-900/30 animate-float" style={{ animationDelay: '0.7s' }}>
                      <div className="text-sm font-medium text-gray-400 text-center mb-2">Agency Quote:</div>
                      <div className="text-lg font-bold text-red-500 text-center">$24,500 upfront</div>
                    </div>
                    
                    {/* Stressed founder illustration */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#181818]/90 rounded-full flex items-center justify-center shadow-md border border-gray-800">
                      <div className="text-3xl animate-pulse">😰</div>
                    </div>
                  </div>
                </div>
                
                {/* "After" state - Clarity with professional styling */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#151825] to-[#152030] p-6 transition-opacity duration-1000 ease-in-out ${showAfterState ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="relative w-full h-full">
                    {/* Visual elements of success with refined styling */}
                    <div className="absolute top-4 left-4 bg-[#181825] p-4 rounded-lg shadow-md border border-green-900/30 flex items-center animate-float">
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-300">MVP launched on schedule!</span>
                    </div>
                    
                    <div className="absolute top-1/3 right-6 bg-[#181825] p-4 rounded-lg shadow-md border border-sonic-900/30 flex items-center animate-float" style={{ animationDelay: '0.5s' }}>
                      <BarChart3 className="text-sonic-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-300">User growth +32%</span>
                    </div>
                    
                    <div className="absolute bottom-12 left-8 bg-[#181825] p-4 rounded-lg shadow-md border border-sonic-900/30 flex items-center animate-float" style={{ animationDelay: '1s' }}>
                      <Rocket className="text-sonic-500 mr-2" size={20} />
                      <span className="text-sm font-medium text-gray-300">Ready for investor demo</span>
                    </div>
                    
                    <div className="absolute top-1/2 left-1/4 bg-[#181825] p-4 rounded-lg shadow-md border border-green-900/30 animate-float" style={{ animationDelay: '1.3s' }}>
                      <div className="text-sm font-medium text-gray-400 text-center mb-2">SonicLabs:</div>
                      <div className="text-lg font-bold text-green-500 text-center">Milestone payments</div>
                    </div>
                    
                    {/* Happy founder illustration */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 bg-[#181825]/90 rounded-full flex items-center justify-center shadow-md border border-gray-800">
                      <div className="text-3xl animate-pulse-light">😄</div>
                    </div>
                  </div>
                </div>
                
                {/* Refined transition indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${!showAfterState ? 'bg-sonic-600' : 'bg-gray-700'}`}></div>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${showAfterState ? 'bg-sonic-600' : 'bg-gray-700'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom subtle gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
