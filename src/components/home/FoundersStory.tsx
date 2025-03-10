
import React from 'react';
import { AlertTriangle, Code2, DollarSign, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FoundersStory = () => {
  return (
    <section className="py-20 bg-sonic-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-[#0047AB] mb-10 text-center">
            Why I Built SonicLabs
          </h2>
          
          <div className="mb-8 text-[#343A40]">
            <p className="text-lg mb-6">
              When I was building my own startup, I struggled to find an agency that was fast, reliable, and affordable.
            </p>
            
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <Code2 className="text-[#FF6200]" />,
                  text: "I tried no-code tools—but they broke when I needed something custom."
                },
                {
                  icon: <AlertTriangle className="text-[#FF6200]" />,
                  text: "I hired a freelancer—but the project stalled, and I had to start over."
                },
                {
                  icon: <DollarSign className="text-[#FF6200]" />,
                  text: "I reached out to agencies—some wanted $20K upfront, others didn't even reply."
                }
              ].map((point, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <span className="mr-4 mt-1">
                    {point.icon}
                  </span>
                  <p className="font-medium text-[#343A40]">{point.text}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg mb-6">
              Eventually, I found a development agency that worked on milestone payments, but it took weeks of searching and setbacks just to get there.
            </p>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#0047AB] mb-8">
              <p className="text-lg font-semibold text-[#343A40]">
                💡 I knew there had to be a better way. That's why I built SonicLabs—to be the expert team that moves fast, executes precisely, and never leaves founders stuck.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-[#FF6200] hover:bg-[#E55A00] text-white px-8 py-6 h-auto rounded-lg text-lg font-bold"
            >
              <Zap className="mr-2" /> 🚀 Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersStory;
