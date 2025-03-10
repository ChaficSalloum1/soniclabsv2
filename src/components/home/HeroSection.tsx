
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Zap, 
  BarChart3, 
  Lightbulb,
  AlertTriangle,
  DollarSign,
  Timer
} from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-7 space-y-8">
            <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center rounded-full border border-sonic-500/20 bg-sonic-50 px-3 py-1 text-sm font-medium text-sonic-800 mb-6">
                <Zap size={14} className="mr-1 text-sonic-600" /> AI-Powered MVP Development
              </div>
              <h1 className="hero-text text-balance mb-6 text-[#0047AB]">
                SonicLabs: The Expert Team That Won't Let You Drown.
              </h1>
              <p className="text-xl text-[#343A40] max-w-xl mb-8">
                You had a vision. You set out to build something game-changing. But somewhere along the way, it got harder than expected.
              </p>

              {/* Bullet Frustrations */}
              <ul className="space-y-4 mb-8">
                {[
                  { icon: <Code2 className="text-[#FF6200]" />, text: "No-code tools hit a wall." },
                  { icon: <AlertTriangle className="text-[#FF6200]" />, text: "Freelancers overpromised and underdelivered." },
                  { icon: <DollarSign className="text-[#FF6200]" />, text: "Agencies quoted $20K+—before even getting started." },
                  { icon: <Timer className="text-[#FF6200]" />, text: "Your runway is shrinking, and you're running out of time." }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-[#343A40]">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col space-y-4">
                <Button 
                  className="bg-[#FF6200] hover:bg-[#E55A00] text-white h-14 px-8 rounded-lg text-lg font-bold w-full sm:w-auto"
                >
                  🚀 Get a Free Strategy Call—No Pressure, Just Insights
                </Button>
                <p className="text-sm text-muted-foreground">
                  💡 No commitment. Just expert guidance on your MVP.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-5 flex justify-center items-start mt-12 md:mt-0">
            <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-[#0047AB] to-[#3A8DFF] rounded-full opacity-20 animate-pulse-light"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-gradient-to-br from-[#0047AB] to-[#3A8DFF] rounded-full opacity-40"></div>
              <div className="absolute top-0 right-8 w-24 h-24 bg-white/90 backdrop-blur rounded-lg shadow-lg p-4 animate-float">
                <Code2 className="h-full w-full text-[#0047AB]" />
              </div>
              <div className="absolute bottom-10 left-0 w-20 h-20 bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                <BarChart3 className="h-full w-full text-[#0047AB]" />
              </div>
              <div className="absolute top-1/4 left-10 w-16 h-16 bg-white/90 backdrop-blur rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
                <Lightbulb className="h-full w-full text-[#FF6200]" />
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
