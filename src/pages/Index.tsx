
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Code2, 
  Search, 
  Lightbulb,
  Rocket,
  AlertTriangle,
  Clock,
  DollarSign,
  Timer
} from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
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
      
      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-sm font-medium text-sonic-600 mb-2">SERVICES</h3>
            <h2 className="section-title mb-6 text-balance">How We Turn Ideas Into Products</h2>
            <p className="text-muted-foreground">
              Our AI-powered development approach cuts time to market without sacrificing quality,
              enabling you to validate ideas faster and iterate with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-sonic-600" />,
                title: "Discovery & Strategy",
                description: "We identify market opportunities and develop a roadmap that prioritizes your core features."
              },
              {
                icon: <Code2 className="h-10 w-10 text-sonic-600" />,
                title: "AI-Powered Development",
                description: "Our AI tools accelerate development by automating repetitive tasks while maintaining quality."
              },
              {
                icon: <Rocket className="h-10 w-10 text-sonic-600" />,
                title: "Launch & Scaling",
                description: "We prepare your MVP for market with a focus on performance, reliability, and user experience."
              }
            ].map((service, index) => (
              <Card key={index} className="border-subtle bg-card/50 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-8">
                  <div className="mb-6 p-3 inline-block rounded-lg bg-sonic-50 text-sonic-700">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="mt-6 flex items-center text-sonic-600 font-medium group-hover:text-sonic-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-sonic-200 text-foreground hover:bg-sonic-50">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-sonic-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <h2 className="section-title mb-6">Ready to Build Your Next Big Thing?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join innovative teams who've trusted SonicLabs to bring their ideas to life with speed and precision.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-sonic-950 hover:bg-white/90 h-12 px-6 rounded-md">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="h-12 px-6 border-white/20 text-white hover:bg-white/10">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative w-8 h-8 bg-sonic-600 rounded-full overflow-hidden flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-lg">SonicLabs</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Transforming ideas into market-ready products with AI-powered development.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">MVP Development</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">AI Integration</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Product Strategy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} SonicLabs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
