
import React from 'react';
import { Home, School, Building, ShieldCheck } from 'lucide-react';

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-luxury-navy text-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Targeted <span className="text-luxury-gold">Amenities</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-8"></div>
          <p className="text-luxury-lightgold/80 max-w-3xl mx-auto">
            Jasper Brookshire is designed with the needs of discerning residents in mind, 
            offering world-class amenities that rival the finest developments globally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Smart Homes */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all">
            <Home className="text-luxury-gold mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold mb-3 text-luxury-gold">Smart Homes</h3>
            <p className="text-luxury-lightgold/80">
              State-of-the-art technology integrated into every residence for convenience, 
              security, and energy efficiency.
            </p>
          </div>
          
          {/* Proximity to Essential Services */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all">
            <School className="text-luxury-gold mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold mb-3 text-luxury-gold">Prime Location</h3>
            <p className="text-luxury-lightgold/80">
              Easy access to top-rated schools, modern hospitals, 
              and premium shopping centers.
            </p>
          </div>
          
          {/* Community Features */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all">
            <Building className="text-luxury-gold mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold mb-3 text-luxury-gold">Luxury Facilities</h3>
            <p className="text-luxury-lightgold/80">
              Exclusive clubhouse, fitness center, swimming pools, 
              and landscaped green spaces for recreation and relaxation.
            </p>
          </div>
          
          {/* Security */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all">
            <ShieldCheck className="text-luxury-gold mb-4 h-12 w-12" />
            <h3 className="text-xl font-bold mb-3 text-luxury-gold">24/7 Security</h3>
            <p className="text-luxury-lightgold/80">
              Gated community with round-the-clock security personnel, 
              surveillance systems, and controlled access.
            </p>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/20 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Architectural Excellence</h3>
                <p className="text-luxury-lightgold/80 mb-6">
                  Jasper Brookshire is meticulously designed by award-winning architects, 
                  combining modern aesthetics with functional luxury to create timeless residences.
                </p>
                <ul className="space-y-3 text-luxury-lightgold/80">
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>Premium materials and finishes throughout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>Energy-efficient and sustainable building design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-2">•</span>
                    <span>Spacious floor plans with luxurious features</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="/Brookshire.jpg" 
                  alt="Jasper Brookshire Architecture" 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
