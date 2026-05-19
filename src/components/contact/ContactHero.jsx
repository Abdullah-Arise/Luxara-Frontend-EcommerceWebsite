// =============================================
// CONTACT HERO — src/components/contact/ContactHero.jsx
// 
// YEH KYA HAI:
// Contact page ke upar wala hero section
// "Let's Talk" heading wala hissa
//
// KAHAN USE HOTA HAI:
// src/pages/Contact.jsx mein import hoga
//
// CHANGE KARNA HO TO:
// - Heading change karni ho → h1 tag edit karo
// - Color change → text-yellow-600 classes edit karo
// - Background change -> dark section class edit karo
// =============================================

import React from 'react';

const ContactHero = () => {
  return (
    <div className="pt-32 pb-12 bg-neutral-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Upar wala chhota text — "Contact" */}
        <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Contact
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl text-white font-light">
          Let's <span className="italic text-amber-300">Talk.</span>
        </h1>

      </div>
    </div>
  );
};

export default ContactHero;
