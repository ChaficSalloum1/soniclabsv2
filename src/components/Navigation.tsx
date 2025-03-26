
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type NavigationProps = {
  onNavigate?: {
    whyFounders: () => void;
    trust: () => void;
    story: () => void;
    services: () => void;
    contact: () => void;
  };
};

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active section based on scroll position
      // This is a simplified example - you would need to calculate actual section positions
      if (scrollPosition < 500) setActiveSection('hero');
      else if (scrollPosition < 1000) setActiveSection('whyFounders');
      else if (scrollPosition < 1500) setActiveSection('trust');
      else if (scrollPosition < 2000) setActiveSection('story');
      else if (scrollPosition < 2500) setActiveSection('services');
      else setActiveSection('contact');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with scroll functions
  const navItems = [
    { name: 'Why Founders Struggle', id: 'whyFounders', action: onNavigate?.whyFounders },
    { name: 'Why SonicLabs', id: 'trust', action: onNavigate?.trust },
    { name: 'Our Story', id: 'story', action: onNavigate?.story },
    { name: 'Services', id: 'services', action: onNavigate?.services },
    { name: 'Contact', id: 'contact', action: onNavigate?.contact },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-3 bg-black/80 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-sonic-500 to-purple-500 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-xl">S</span>
              <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent opacity-50"></div>
            </div>
            <span className="font-bold text-xl tracking-tight group-hover:text-sonic-400 transition-colors duration-300">SonicLabs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={cn(
                  "font-medium transition-colors duration-200 relative",
                  activeSection === item.id
                    ? "text-sonic-400"
                    : "text-foreground/80 hover:text-sonic-600",
                  "after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:rounded-full after:transition-transform after:duration-300",
                  activeSection === item.id
                    ? "after:bg-sonic-400 after:scale-x-100"
                    : "after:bg-sonic-600 after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={onNavigate?.contact}
              className="bg-gradient-to-r from-sonic-600 to-purple-600 hover:from-sonic-500 hover:to-purple-500 text-white border-0 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🚀 Get a Free Strategy Call
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 top-[61px] bg-black/95 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out z-40 border-t border-white/5',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                item.action?.();
                setMobileMenuOpen(false);
              }}
              className={cn(
                "py-3 px-4 font-medium rounded-md transition-colors duration-200",
                activeSection === item.id
                  ? "bg-sonic-900/50 text-sonic-400"
                  : "text-foreground/80 hover:text-sonic-600 hover:bg-sonic-900/30"
              )}
            >
              {item.name}
            </button>
          ))}
          <Button 
            onClick={() => {
              onNavigate?.contact?.();
              setMobileMenuOpen(false);
            }}
            className="mt-4 bg-gradient-to-r from-sonic-600 to-purple-600 hover:from-sonic-500 hover:to-purple-500 text-white w-full rounded-lg"
          >
            🚀 Get a Free Strategy Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
