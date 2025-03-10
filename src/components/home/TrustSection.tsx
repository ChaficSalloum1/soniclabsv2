
import { 
  Code2, 
  AlertTriangle, 
  DollarSign, 
  Timer,
  Target,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrustSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-[#0047AB] mb-10 text-center">
            Why So Many Founders Struggle to Launch
          </h2>
          
          <div className="space-y-6 mb-10">
            {[
              {
                icon: <Code2 className="text-[#FF6200]" />,
                text: "No-code tools are great—until they aren't. They break when you need real functionality."
              },
              {
                icon: <AlertTriangle className="text-[#FF6200]" />,
                text: "Freelancers seemed like an affordable option—until deadlines got missed, communication broke down, and the work wasn't what you expected."
              },
              {
                icon: <DollarSign className="text-[#FF6200]" />,
                text: "Agencies varied wildly. Some charged $20K+ upfront, while others refused small projects or took weeks just to reply."
              },
              {
                icon: <Timer className="text-[#FF6200]" />,
                text: "Worst of all? Every time something failed, you had to start over. Weeks of lost progress. Wasted time. More stress."
              }
            ].map((point, index) => (
              <div key={index} className="flex items-start p-4 bg-sonic-50 rounded-lg shadow-sm">
                <span className="mr-4 mt-1">
                  {point.icon}
                </span>
                <p className="font-semibold text-[#343A40]">{point.text}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-sonic-100 p-6 rounded-xl border-l-4 border-[#0047AB] mb-10">
            <h3 className="text-xl font-semibold text-[#343A40] mb-3">
              💡 That's why we built SonicLabs. We've lived through the pain of hiring the wrong teams, fighting with broken tech, and feeling like progress was slipping away. We're here to make sure it doesn't happen to you.
            </h3>
          </div>
          
          <div className="text-center space-y-4">
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
