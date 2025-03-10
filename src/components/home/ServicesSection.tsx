
import { ArrowRight, Search, Code2, Rocket, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
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
  ];

  return (
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
          {services.map((service, index) => (
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
        
        <div className="mt-16 text-center space-y-4">
          <Button variant="outline" className="border-sonic-200 text-foreground hover:bg-sonic-50">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div>
            <Button 
              className="bg-sonic-600 hover:bg-sonic-700 text-white"
            >
              <Rocket className="mr-2" /> 🚀 Get a Free Strategy Call—No Pressure, Just Insights
            </Button>
          </div>
          <div>
            <Button 
              variant="outline" 
              className="text-[#343A40] border-[#343A40]/20 hover:bg-[#343A40]/5"
            >
              <Download className="mr-2" /> 💡 Not Ready Yet? Download Our Free AI MVP Planning Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
