
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Plane } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Brand Name
              </span>
              <span className="text-xs text-gray-500 font-medium">Travel</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Home</Link>
            <button onClick={scrollToDestinations} className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Destinations</button>
            <Link to="/insurance" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Insurance</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-blue-400/30 text-white font-semibold backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group" 
              asChild
            >
              <a href="tel:1-800-700-600" className="flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Phone className="w-4 h-4 mr-2 animate-pulse" />
                <span className="relative z-10">1-800-700-600</span>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={scrollToDestinations}
                className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2"
              >
                Destinations
              </button>
              <Link 
                to="/insurance" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Insurance
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Call Button */}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel:1-800-700-600"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  1-800-700-600
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
