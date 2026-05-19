// ============================================================
// BRAND FOUNDER QUOTE — src/components/brand/BrandFounderQuote.jsx
//
// YEH KYA HAI:
// BrandLegacy page mein founder ka personal message section.
// Abdullah ki quote + naam + title.
//
// KAHAN USE HOTA HAI:
// src/pages/BrandLegacy.jsx mein BrandPromise ke baad
//
// CHANGE KARNA HO TO:
// - Quote text change → <p> tag ke andar text edit karo
// - Naam change → "Abdullah" wali <p> edit karo
// - Title change → "Founder, Luxara" wali <p> edit karo
// - Label change → "A Personal Note" wali <p> edit karo
// ============================================================

import React from 'react';

const BrandFounderQuote = () => {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-6">
          A Personal Note
        </p>

        {/* Quote — yahan apni quote change karo */}
        <p className="font-serif text-2xl md:text-3xl text-white font-light leading-relaxed mb-10 italic">
          "I started Luxara because I wanted to make something real. Something that wouldn't let people down.
          Every piece we sell is a promise — and I take that seriously."
        </p>

        {/* Divider line */}
        <div className="w-12 h-0.5 bg-amber-400 mx-auto mb-6" />

        {/* Founder Name — yahan naam change karo */}
        <p className="font-serif text-xl text-white">Abdullah</p>

        {/* Title */}
        <p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">
          Founder, Luxara
        </p>

      </div>
    </section>
  );
};

export default BrandFounderQuote;