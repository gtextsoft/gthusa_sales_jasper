
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/gtexthomes.jpg" alt="" className="w-20" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-jasper-blue hover:text-jasper-navy transition-colors">Benefits</a>
          <a href="#features" className="text-jasper-blue hover:text-jasper-navy transition-colors">Features</a>
          <a href="#location" className="text-jasper-blue hover:text-jasper-navy transition-colors">Location</a>
          <a href="#contact" className="text-jasper-blue hover:text-jasper-navy transition-colors">Contact</a>
          <Button className="bg-jasper-gold hover:bg-jasper-lightgold text-jasper-navy flex items-center space-x-2">
            <Phone size={16} />
            <span>+1 (443) 790-3925</span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#benefits" 
              className="text-jasper-blue hover:text-jasper-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#features" 
              className="text-jasper-blue hover:text-jasper-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#location" 
              className="text-jasper-blue hover:text-jasper-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Location
            </a>
            <a 
              href="#contact" 
              className="text-jasper-blue hover:text-jasper-navy transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-jasper-gold hover:bg-jasper-lightgold text-jasper-navy w-full justify-center flex items-center space-x-2">
              <Phone size={16} />
              <span>+1 (443) 790-3925</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
