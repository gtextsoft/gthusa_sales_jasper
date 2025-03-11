
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-20 border-b border-luxury-gold/20">
      <div className="luxury-container flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-luxury-navy font-serif text-2xl font-bold">Jasper <span className="text-luxury-gold">Brookshire</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-luxury-navy hover:text-luxury-gold transition-colors font-medium">About</a>
          <a href="#benefits" className="text-luxury-navy hover:text-luxury-gold transition-colors font-medium">Benefits</a>
          <a href="#amenities" className="text-luxury-navy hover:text-luxury-gold transition-colors font-medium">Amenities</a>
          <a href="#contact" className="text-luxury-navy hover:text-luxury-gold transition-colors font-medium">Contact</a>
          <Button className="bg-luxury-navy hover:bg-luxury-navy/90 text-white flex items-center gap-2">
            <Phone size={16} />
            <span>+234 (818) 000 0618</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-luxury-navy p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-luxury-gold/10 animate-fade-in">
          <div className="luxury-container py-4 space-y-4 flex flex-col">
            <a 
              href="#about" 
              className="text-luxury-navy hover:text-luxury-gold transition-colors py-2 px-4 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#benefits" 
              className="text-luxury-navy hover:text-luxury-gold transition-colors py-2 px-4 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#amenities" 
              className="text-luxury-navy hover:text-luxury-gold transition-colors py-2 px-4 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Amenities
            </a>
            <a 
              href="#contact" 
              className="text-luxury-navy hover:text-luxury-gold transition-colors py-2 px-4 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-luxury-navy hover:bg-luxury-navy/90 text-white mx-4 flex items-center justify-center gap-2">
              <Phone size={16} />
              <span>+234 (818) 000 0618</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
