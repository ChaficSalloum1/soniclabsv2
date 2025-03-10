
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
