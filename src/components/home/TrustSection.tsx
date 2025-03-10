
import { 
  Rocket, 
  DollarSign, 
  Brain,
  Target,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrustSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-[#0047AB] mb-12 text-center">
            Why Founders Choose SonicLabs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Rocket className="h-10 w-10 text-[#FF6200]" />,
                title: "10X Faster Than Traditional Dev Agencies",
                description: "AI-powered efficiency, expert-built quality."
              },
              {
                icon: <DollarSign className="h-10 w-10 text-[#FF6200]" />,
                title: "No $20K+ Upfront Costs",
                description: "Transparent pricing, milestone-based payments."
              },
              {
                icon: <Brain className="h-10 w-10 text-[#FF6200]" />,
                title: "Founder-Friendly Development",
                description: "We guide you every step of the way."
              }
            ].map((point, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-sonic-50 rounded-full">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#343A40]">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center space-y-4">
            <Button 
              className="bg-[#FF6200] hover:bg-[#E55A00] text-white px-8 py-6 h-auto rounded-lg text-lg font-bold"
            >
              <Target className="mr-2" /> 🚀 Get a Free Strategy Call—No Pressure, Just Insights
            </Button>
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
      </div>
    </section>
  );
};

export default TrustSection;
