
import React from 'react';

const Introduction = () => {
  return (
    <section id="about" className="py-20 bg-luxury-cream">
      <div className="luxury-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-luxury-navy">
            A Legacy That Transcends Generations
          </h2>
          
          <div className="gold-divider w-24 mx-auto mb-10"></div>
          
          <p className="text-lg text-luxury-darkgray leading-relaxed mb-6">
            Wealth isn't just about accumulation; but accumulation of a legacy that'll stand the test of time. 
            <span className="font-semibold"> Jasper Brookshire</span> offers you the chance to secure both. 
          </p>
          
          <p className="text-lg text-luxury-darkgray leading-relaxed mb-6">
            This $200M mixed-use development in Texas is set to redefine luxury living and investment. 
            Whether you're in Lagos, London, or anywhere in the world, this opportunity is perfect for you 
            if you value high returns and low risks.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-gold">
              <div className="text-4xl font-bold text-luxury-gold mb-2">$200M</div>
              <p className="text-luxury-darkgray">Development Value</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-gold">
              <div className="text-4xl font-bold text-luxury-gold mb-2">25%</div>
              <p className="text-luxury-darkgray">Potential Annual Returns</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-gold">
              <div className="text-4xl font-bold text-luxury-gold mb-2">24</div>
              <p className="text-luxury-darkgray">Month Payment Plan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
