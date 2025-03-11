
import React from 'react';
import { Check } from 'lucide-react';

const FeatureCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="feature-card group animate-fade-in">
    <div className="bg-jasper-navy/10 group-hover:bg-jasper-navy/20 transition-colors p-4 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-jasper-navy mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-jasper-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What Jasper Brookshire Offers</h2>
          <div className="w-20 h-1 bg-jasper-gold mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our development combines premium amenities with strategic design to create an exceptional 
            investment opportunity with long-term growth potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Mixed-Use Spaces"
            description="Commercial spaces integrated with residential areas to maximize property value and rental income potential."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jasper-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>}
          />
          
          <FeatureCard 
            title="Gated Community"
            description="24/7 security, controlled access points, and comprehensive surveillance systems for peace of mind."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jasper-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>}
          />
          
          <FeatureCard 
            title="Smart Infrastructure"
            description="State-of-the-art technology including smart home systems, high-speed internet, and energy management."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jasper-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>}
          />
          
          <FeatureCard 
            title="Green Living"
            description="Sustainable design with energy-efficient buildings, solar options, and environmentally friendly landscaping."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jasper-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>}
          />
          
          <FeatureCard 
            title="Premium Amenities"
            description="Resort-style pools, fitness centers, parks, and recreational areas for an exceptional living experience."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jasper-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>}
          />
          
          <FeatureCard 
            title="Investment Management"
            description="Comprehensive support services including property management, rental assistance, and maintenance."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jasper-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>}
          />
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-jasper-navy mb-6">Key Investment Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Check className="text-jasper-gold h-6 w-6 shrink-0 mt-0.5" />
              <span className="text-gray-700">Tax-advantaged investment structure for foreign investors</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-jasper-gold h-6 w-6 shrink-0 mt-0.5" />
              <span className="text-gray-700">Strong rental demand in the Greater Houston area</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-jasper-gold h-6 w-6 shrink-0 mt-0.5" />
              <span className="text-gray-700">Multiple exit strategies to maximize returns</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-jasper-gold h-6 w-6 shrink-0 mt-0.5" />
              <span className="text-gray-700">Professional property management included</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-jasper-gold h-6 w-6 shrink-0 mt-0.5" />
              <span className="text-gray-700">Fully transparent investment reporting</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="text-jasper-gold h-6 w-6 shrink-0 mt-0.5" />
              <span className="text-gray-700">Access to U.S. visa opportunities through investment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
