
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-hero-pattern bg-cover bg-center py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-jasper-navy/90 to-jasper-blue/80"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <p className="text-jasper-gold font-medium mb-2 animate-fade-in">For Foreigners and Non-Residents in the U.S.</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Invest in Jasper Brookshire: Texas' Secure and Premier Real Estate Opportunity for Global Investors.
          </h1>
          <h2 className="text-xl md:text-2xl text-jasper-lightgold mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Own luxury property in the U.S., enjoy high returns, and be part of Texas' booming real estate market.
          </h2>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              className="bg-jasper-gold hover:bg-jasper-lightgold text-jasper-navy font-medium text-lg px-8 py-6"
              onClick={() => window.open('https://wa.link/6yfj33', '_blank')}
            >
              <Globe className="mr-2 h-5 w-5" />
              Book a Consultation
            </Button>
            <Button 
              variant="outline" 
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
