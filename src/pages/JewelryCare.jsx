import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar-Premium';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';

import CareHero from '../components/care/CareHero';
import CareTips from '../components/care/CareTips_new';
import FaqSection from '../components/home/FaqSection';

const JewelryCare = () => {
  return (
    <div className="lux-surface">
      <AnnouncementBar />
      <Navbar />
      <CareHero />
      <CareTips />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default JewelryCare;