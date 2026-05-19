// =============================================
// CONTACT PAGE — src/pages/Contact.jsx
//
// YEH KYA HAI:
// Contact page — "Let's Talk" wala page
//
// IS PAGE MEIN KYA HAI:
// 1. AnnouncementBar — upar wala announcement
// 2. Navbar          — navigation
// 3. ContactHero     — "Let's Talk" heading (components/contact/ContactHero.jsx)
// 4. ContactInfo     — form + social links (components/contact/ContactInfo.jsx)
// 5. Footer          — neeche wala footer
// 6. WhatsAppButton  — floating WhatsApp button
//
// KUCH ADD KARNA HO TO:
// Naya section likhke yahan <ContactInfo /> ke upar ya neeche lagao
// =============================================

import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar-Premium';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';
import ContactHero from '../components/contact/ContactHero';  // ← apni file mein aa gaya
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div className="lux-surface">
      <AnnouncementBar />
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;