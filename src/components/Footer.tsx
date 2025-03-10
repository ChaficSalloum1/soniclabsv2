
const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8 bg-sonic-600 rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">SonicLabs</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Transforming ideas into market-ready products with AI-powered development.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">MVP Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">AI Integration</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Product Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SonicLabs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-sonic-600 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
