
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Diamond } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-luxury-cream">
      <div className="luxury-container">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Diamond className="text-luxury-gold h-8 w-8 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy">
                Don't Miss Out on Texas' Most Exclusive Real Estate Opportunity!
              </h2>
            </div>
            
            <div className="gold-divider w-32 mx-auto mb-10"></div>
            
            <p className="text-luxury-darkgray text-center text-lg mb-10 max-w-2xl mx-auto">
              Secure your place in this prestigious development today. Our team of experts is ready to guide 
              you through every step of the investment process.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
              <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-luxury-navy hover:bg-luxury-navy/90 text-white px-8 py-6 text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule a Tour</span>
              </a>
              
              <Button variant="outline" className="border-luxury-gold text-luxury-navy hover:bg-luxury-gold/10 px-8 py-6 text-lg flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+234 701 234 5678</span>
              </Button>
            </div>
            
            <div className="text-center text-luxury-darkgray/70 text-sm">
              <p>Initial consultations available in English, Yoruba, Igbo, and Hausa</p>
            </div>
          </div>
          
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1200&q=80')" 
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
