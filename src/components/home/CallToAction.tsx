
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-sonic-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <h2 className="section-title mb-6">🚀 Let's Chat—No Commitment Needed</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">15-Min Quick Chat</h3>
                <p className="text-white/80">Perfect for discussing your initial idea</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">30-Min Deep Dive</h3>
                <p className="text-white/80">For detailed technical discussions</p>
              </div>
            </div>
            
            <form className="max-w-md mx-auto mb-8">
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    required
                  />
                </div>
                <div>
                  <select 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none"
                    required
                  >
                    <option value="" className="bg-sonic-950">Select a Time Slot</option>
                    <option value="morning" className="bg-sonic-950">Morning (9AM - 12PM)</option>
                    <option value="afternoon" className="bg-sonic-950">Afternoon (1PM - 5PM)</option>
                    <option value="evening" className="bg-sonic-950">Evening (6PM - 8PM)</option>
                  </select>
                </div>
              </div>
              
              <Button className="mt-6 bg-white text-sonic-950 hover:bg-white/90 h-12 px-6 rounded-md w-full">
                Schedule Your Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <p className="text-white/70 text-sm">💡 No sales pitch—just honest MVP guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
