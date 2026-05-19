// =============================================
// FAQ HERO — src/components/faq/FAQHero.jsx
//
// YEH KYA HAI:
// FAQ page ke upar wala hero section
// "Frequently Asked Questions" heading wala hissa
//
// KAHAN USE HOTA HAI:
// src/pages/FAQPage.jsx mein import hoga
//
// CHANGE KARNA HO TO:
// - Heading change → h1 tag edit karo
// - "Support" label change → pehle wali <p> tag edit karo
// =============================================

import React from 'react';

const FAQHero = () => {
  return (
    <div className="pt-32 pb-12 bg-neutral-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Chhota label — "Support" */}
        <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Support
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl text-white font-light">
          Frequently Asked{' '}
          <span className="italic text-amber-300">Questions</span>
        </h1>

      </div>
    </div>
  );
};

export default FAQHero;