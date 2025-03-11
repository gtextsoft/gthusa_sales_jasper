
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-jasper-beige">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">Welcome to Jasper Brookshire</h2>
          <div className="w-20 h-1 bg-jasper-gold mx-auto my-6"></div>
          <p className="text-lg md:text-xl text-jasper-blue leading-relaxed">
            As a foreign investor in the U.S., you need an opportunity that is secure, profitable, and easy to manage. 
            Jasper Brookshire delivers on all fronts. Located in Brookshire, Texas, this $200M development offers a 
            unique chance to own property in one of the most dynamic real estate markets in the world.
          </p>
          <p className="text-lg md:text-xl text-jasper-blue leading-relaxed mt-4">
            Whether you're building your portfolio or planning for retirement, Jasper Brookshire is your ticket to 
            long-term financial growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="h-16 w-16 bg-jasper-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jasper-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-jasper-navy text-center mb-4">Unmatched ROI</h3>
              <p className="text-center text-gray-600">Enjoy exceptional returns with our properties consistently delivering 20-25% ROI annually.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="h-16 w-16 bg-jasper-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jasper-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-jasper-navy text-center mb-4">Secure Investment</h3>
              <p className="text-center text-gray-600">Texas real estate offers stability and consistent growth in a business-friendly environment.</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="h-16 w-16 bg-jasper-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jasper-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-jasper-navy text-center mb-4">Growth Potential</h3>
              <p className="text-center text-gray-600">Benefit from Texas' rapid economic expansion and population growth driving property values higher.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
