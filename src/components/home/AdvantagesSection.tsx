
import React from 'react';
import { Rocket, DollarSign, Brain } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Rocket className="h-10 w-10 text-[#FF6200]" />,
      title: "10X Faster Than Traditional Dev Agencies",
      description: "AI-powered efficiency, expert-built quality."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#FF6200]" />,
      title: "No $20K+ Overpriced Fees",
      description: "Transparent pricing, structured milestones, no surprises."
    },
    {
      icon: <Brain className="h-10 w-10 text-[#FF6200]" />,
      title: "Investor-Ready Tech",
      description: "Not just a prototype—built for scale."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-[#0047AB] mb-12 text-center">
            Why Founders Choose SonicLabs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-sonic-50 rounded-full">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#343A40]">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
