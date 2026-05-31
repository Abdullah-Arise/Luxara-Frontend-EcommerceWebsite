// ============================================================
// BRAND LEGACY CTA — src/components/brand/BrandLegacyCTA.jsx
//
// CTA = Call To Action (matlab kuch karne ke liye button)
//
// YEH KYA HAI:
// BrandLegacy page ka sabse neeche wala dark section.
// "Shop the new Luxara" heading + "Shop All Jewelry" button.
//
// KAHAN USE HOTA HAI:
// src/pages/BrandLegacy.jsx mein sabse last mein (Footer se pehle)
//
// CHANGE KARNA HO TO:
// - Heading change → h2 tag edit karo
// - Button text → Link ke andar text edit karo
// - Button link → Link ka "to" prop change karo
// - Description → <p> tag edit karo
// ============================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BrandLegacyCTA = () => {
  return (
    <div className="bg-[#0f0d0b] py-16 px-4 text-center">

      {/* Label */}
      <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] mb-3">
        The Collection
      </p>

      {/* Heading */}
      <h2 className="font-serif text-3xl text-white font-light mb-4">
        Shop the new Luxara.
      </h2>

      {/* Description */}
      <p className="text-neutral-400 text-sm mb-8 max-w-sm mx-auto">
        Handmade bracelets and polished cuffs, brought together with Luxara character.
      </p>

      {/* Button — Link component from react-router-dom, to="/shop" pe jaata hai */}
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 bg-[#d6b46a] text-black px-10 py-4
             text-[11px] uppercase tracking-widest hover:bg-[#e0c07a] transition-colors"
      >
        Shop Bracelets & Cuffs <ArrowRight size={14} />
      </Link>

    </div>
  );
};

export default BrandLegacyCTA;
