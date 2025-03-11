
import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-white pt-16 pb-8">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              Jasper <span className="text-luxury-gold">Brookshire</span>
            </h3>
            <p className="text-luxury-lightgold/80 mb-6">
              Elevating luxury real estate investment opportunities for discerning Nigerian investors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-luxury-lightgold hover:text-luxury-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-luxury-lightgold hover:text-luxury-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-luxury-lightgold hover:text-luxury-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-luxury-lightgold hover:text-luxury-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-luxury-lightgold/80 hover:text-luxury-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#benefits" className="text-luxury-lightgold/80 hover:text-luxury-gold transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#amenities" className="text-luxury-lightgold/80 hover:text-luxury-gold transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#" className="text-luxury-lightgold/80 hover:text-luxury-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-luxury-lightgold/80 hover:text-luxury-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-luxury-gold mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-luxury-lightgold/80">
                  Brookshire Development, Houston Metropolitan Area, Texas, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-luxury-gold mr-3 flex-shrink-0" size={18} />
                <span className="text-luxury-lightgold/80">+234 701 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-luxury-gold mr-3 flex-shrink-0" size={18} />
                <span className="text-luxury-lightgold/80">info@gtexthomesusa.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-medium mb-6">Stay Updated</h4>
            <p className="text-luxury-lightgold/80 mb-4">
              Subscribe to our newsletter for exclusive investment opportunities and updates.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 bg-white/10 border border-luxury-gold/20 rounded-md focus:outline-none focus:border-luxury-gold text-white"
              />
              <button 
                type="submit" 
                className="w-full bg-luxury-gold hover:bg-luxury-lightgold text-luxury-navy font-medium py-3 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="gold-divider mb-8"></div>
        
        <div className="text-center text-luxury-lightgold/60 text-sm">
          <p>
            © {new Date().getFullYear()} Jasper Brookshire. All rights reserved. | 
            <a href="#" className="hover:text-luxury-gold ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-luxury-gold ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
