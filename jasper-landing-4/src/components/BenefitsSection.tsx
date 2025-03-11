
import React from 'react';
import { CheckCircle2, DollarSign, Shield, Building, Map } from 'lucide-react';

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8 animate-fade-in">
    <div className="bg-jasper-navy p-3 rounded-full text-jasper-gold shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-jasper-navy mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Foreign Investors Should Choose Jasper Brookshire</h2>
          <div className="w-20 h-1 bg-jasper-gold mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our development provides unique advantages for international investors looking for secure, 
            high-performing assets in the U.S. market.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <BenefitItem 
              icon={<DollarSign size={24} />}
              title="Unmatched ROI"
              description="Enjoy a 20–25% return on investment annually. High appreciation rates in Texas ensure your investment grows steadily."
            />
            
            <BenefitItem 
              icon={<Shield size={24} />}
              title="Legal and Tax Compliance"
              description="We provide full assistance with legal processes and tax obligations, ensuring a hassle-free experience for non-residents."
            />
            
            <BenefitItem 
              icon={<Building size={24} />}
              title="Premium Property Management"
              description="Onsite management services handle rentals, maintenance, and tenant relations, so you can focus on other priorities."
            />
            
            <BenefitItem 
              icon={<Map size={24} />}
              title="Thriving Location"
              description="Brookshire's proximity to Houston ensures a vibrant community and robust demand for housing and commercial spaces."
            />
          </div>
          
          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/Clodine 3D.jpeg" 
              alt="Jasper Brookshire Property" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-jasper-navy/90 to-transparent p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">$200M Development</h3>
                <p className="font-medium">Brookshire, Texas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
