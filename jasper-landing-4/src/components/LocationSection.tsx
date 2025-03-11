
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Strategic Location</h2>
          <div className="w-20 h-1 bg-jasper-gold mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Brookshire's prime location offers the perfect balance of suburban tranquility and urban accessibility, 
            making it an ideal investment opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl h-[400px] lg:h-[500px] relative">
            {/* Ideally this would be a real map, but for now using a placeholder */}
            <div className="absolute inset-0 bg-jasper-white/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-jasper-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-jasper-white text-color-white">Brookshire, Texas</h3>
                <p className="text-jasper-white text-color-white">Just 35 miles west of Houston</p>
              </div>
            </div>
            <img 
              src="/JASPER CLODINE 1.jpg" 
              alt="Houston Skyline" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-jasper-navy mb-6">Why This Location Matters</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-jasper-navy mb-2">Houston Proximity</h4>
                <p className="text-gray-600">
                  Located just 35 miles west of Houston, residents enjoy easy access to one of America's 
                  most dynamic metropolitan areas while living in a peaceful suburban setting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-jasper-navy mb-2">Economic Growth</h4>
                <p className="text-gray-600">
                  Texas continues to lead the nation in job creation and economic development, with the 
                  Houston area attracting major corporations and a diverse workforce.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-jasper-navy mb-2">Infrastructure Development</h4>
                <p className="text-gray-600">
                  Significant investments in transportation and infrastructure are enhancing connectivity 
                  and driving property values throughout the region.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-jasper-navy mb-2">Population Growth</h4>
                <p className="text-gray-600">
                  The Greater Houston area continues to experience substantial population growth, 
                  creating strong demand for quality housing and commercial spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
