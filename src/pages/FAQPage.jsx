// =============================================
// FAQ PAGE — src/pages/FAQPage.jsx
//
// YEH KYA HAI:
// FAQ page — "Frequently Asked Questions" wala page
//
// IS PAGE MEIN KYA HAI:
// 1. AnnouncementBar — upar wala announcement
// 2. Navbar          — navigation
// 3. FAQHero         — heading section (components/faq/FAQHero.jsx)
// 4. FaqSection      — actual questions & answers (components/home/FaqSection.jsx)
// 5. Footer          — footer
// 6. WhatsAppButton  — floating button
//
// NOTE: FaqSection home page pe bhi use hoti hai — isliye components/home/ mein hai
// =============================================

import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar-Premium';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';
import FAQHero from '../components/faq/FAQHero';        // ← apni file mein aa gaya
import FaqSection from '../components/home/FaqSection'; // ← home mein hai, dono pages use karte hain

const FAQPage = () => {
  return (
    <div className="lux-surface">
      <AnnouncementBar />
      <Navbar />
      <FAQHero />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FAQPage;