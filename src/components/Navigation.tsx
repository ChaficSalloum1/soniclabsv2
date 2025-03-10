import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Why SonicLabs', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-3 blur-backdrop shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 bg-sonic-600 rounded-full overflow-hidden flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
              <div className="absolute inset-0 bg-gradient-radial from-sonic-400/50 to-transparent"></div>
            </div>
            <span className="font-bold text-xl">SonicLabs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-foreground/80 hover:text-sonic-600 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-sonic-600 hover:bg-sonic-700 text-white">
              🚀 Get a Free Strategy Call
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
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
          'fixed inset-0 top-[61px] bg-background shadow-lg md:hidden transition-transform duration-300 ease-in-out z-40',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="py-3 px-4 font-medium text-foreground/80 hover:text-sonic-600 hover:bg-muted rounded-md transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="mt-4 bg-sonic-600 hover:bg-sonic-700 text-white w-full">
            🚀 Get a Free Strategy Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
