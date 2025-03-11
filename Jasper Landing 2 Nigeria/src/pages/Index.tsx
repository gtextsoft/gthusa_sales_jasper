
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Benefits from '@/components/Benefits';
import Amenities from '@/components/Amenities';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <Benefits />
      <Amenities />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
