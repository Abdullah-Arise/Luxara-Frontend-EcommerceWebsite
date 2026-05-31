import React from 'react';

import AnnouncementBar from '../components/AnnouncementBar-Premium';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';

import Hero from '../components/home/Hero';
import PromoCarousel from '../components/home/PromoCarousel';
import FeaturesStrip from '../components/home/FeaturesStrip';
import WaterproofCuffPromo from '../components/home/WaterproofCuffPromo';
import Categories from '../components/home/Categories';
import BestSellers from '../components/home/BestSellers';
import Gallery from '../components/home/Gallery';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProductSpotlight from '../components/home/ProductSpotlight';
import NewsletterSection from '../components/home/NewsletterSection';
import FaqSection from '../components/home/FaqSection';
import HeroJewelryShowcase from '../components/home/HeroJewelryShowcase';

const Home = () => {
  return (
    <div className="lux-surface">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <HeroJewelryShowcase />
      <PromoCarousel />
      <FeaturesStrip />
      <WaterproofCuffPromo />
      <Categories />
      <BestSellers />
      <Gallery />
      <BrandStory />
      <Testimonials />
      <WhyChooseUs />
      <ProductSpotlight />
      <NewsletterSection />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
