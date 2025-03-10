
import { 
  Code2, 
  AlertTriangle, 
  DollarSign
} from 'lucide-react';

const WhyFoundersStruggle = () => {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-[#0047AB] mb-8 text-center">
            Why Founders Struggle
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="h-8 w-8 text-[#FF6200]" />,
                title: "Tech Limitations",
                text: "No-code tools breaking when you need custom features."
              },
              {
                icon: <AlertTriangle className="h-8 w-8 text-[#FF6200]" />,
                title: "Unreliable Partners",
                text: "Freelancers disappearing halfway through the project."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-[#FF6200]" />,
                title: "Financial Barriers",
                text: "Agencies demanding $20K+ upfront before even starting."
              }
            ].map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 bg-sonic-50 rounded-full inline-block">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#343A40]">
                  {point.title}
                </h3>
                <p className="text-[#343A40] font-medium">
                  🚧 {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFoundersStruggle;
