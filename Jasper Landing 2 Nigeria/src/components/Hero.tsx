
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('/BROOKSHIREIM.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-luxury-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="luxury-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-block px-4 py-1 bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/30 rounded-full">
            <p className="text-white font-medium">For Nigerians (Home and Abroad)</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            Elevate Your Legacy with <span className="text-gradient">Jasper Brookshire</span>: Texas' Prime Real Estate Opportunity.
          </h1>
          
          <h2 className="text-xl md:text-2xl text-luxury-lightgold mb-8 font-light">
            Invest in a future-proof estate offering luxury, sustainability, and returns of up to 25% annually.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="https://wa.link/6yfj33" target="_blank" rel="noopener noreferrer">
              <Button className="bg-luxury-gold hover:bg-luxury-lightgold text-luxury-navy font-semibold px-8 py-6 text-lg">
                Schedule a Tour
              </Button>
            </a>
            <a href="#contact" className="block">
              <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 font-medium px-8 py-6 text-lg">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-luxury-gold/50 flex justify-center">
          <div className="w-1 h-3 bg-luxury-gold rounded-full mt-2"></div>
        </div>
        <span className="text-luxury-gold/50 mt-2 text-sm">Scroll Down</span>
      </div>
    </div>
  );
};

export default Hero;
