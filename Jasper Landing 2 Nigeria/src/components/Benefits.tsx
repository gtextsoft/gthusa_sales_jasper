
import React from 'react';
import { TrendingUp, DollarSign, Shield, CreditCard } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-navy">
            Benefits of Investing in Jasper Brookshire
          </h2>
          <div className="gold-divider w-24 mx-auto mb-8"></div>
          <p className="text-luxury-darkgray max-w-3xl mx-auto">
            Our exclusive development provides exceptional value beyond typical real estate investments,
            designed specifically for discerning Nigerian investors seeking global opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Capital Appreciation */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-luxury-navy/5 p-4 rounded-full">
              <TrendingUp size={32} className="text-luxury-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-3">Capital Appreciation</h3>
              <ul className="space-y-3 text-luxury-darkgray">
                <li>• Properties in Brookshire, Texas, have seen consistent appreciation rates of 8–10% annually.</li>
                <li>• With Houston's expansion and Jasper Brookshire's strategic location, your investment is set to outperform market averages.</li>
              </ul>
            </div>
          </div>
          
          {/* Rental Income */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-luxury-navy/5 p-4 rounded-full">
              <DollarSign size={32} className="text-luxury-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-3">Rental Income</h3>
              <p className="text-luxury-darkgray">
                The high demand for rental properties in the area ensures steady income for investors. 
                Jasper Brookshire offers property management services to maximize your returns.
              </p>
            </div>
          </div>
          
          {/* Diversification and Security */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-luxury-navy/5 p-4 rounded-full">
              <Shield size={32} className="text-luxury-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-3">Diversification and Security</h3>
              <p className="text-luxury-darkgray">
                Investing in the U.S. real estate market provides a hedge against economic instability in Nigeria. 
                Jasper Brookshire's compliance with U.S. real estate laws guarantees your investment's safety.
              </p>
            </div>
          </div>
          
          {/* Flexible Payment Options */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-luxury-navy/5 p-4 rounded-full">
              <CreditCard size={32} className="text-luxury-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-3">Flexible Payment Options</h3>
              <ul className="space-y-3 text-luxury-darkgray">
                <li>• Initial deposit: $50,000.</li>
                <li>• Balance spread over 24 months.</li>
                <li>• Multiple payment methods accepted for international investors.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
