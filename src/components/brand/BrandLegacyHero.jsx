// ============================================================
// BRAND LEGACY HERO — src/components/brand/BrandLegacyHero.jsx
//
// YEH KYA HAI:
// BrandLegacy page ("Our Story") ka sabse upar wala hero section.
// Dark background, badi image, "From Beads to Brilliance" heading.
//
// KAHAN USE HOTA HAI:
// src/pages/BrandLegacy.jsx
//
// CHANGE KARNA HO TO:
// - Heading change → h1 tag ke andar text edit karo
// - Image change → img ka src change karo (apni khud ki photo lagao)
// - Label change → "Our Legacy" wali <p> tag edit karo
// - Height change → h-[70vh] class change karo (e.g. h-[80vh])
// ============================================================

import React from 'react';
import pagesHeroVideo from '../../assets/videos/globalvideoforpages.mp4';

const BrandLegacyHero = () => {
  return (
    <div className="relative h-[70vh] bg-[#0f0d0b] flex items-end overflow-hidden">

      {/* Background Image — apni photo lagani ho toh yahan src change karo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Luxara story background video"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={pagesHeroVideo} type="video/mp4" />
      </video>

      {/* Dark gradient — neeche se upar tak dark hota hai taake text readable rahe */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Text Content — neeche left corner mein */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">

        {/* Chhota label */}
        <p className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-medium mb-4">
          Our Legacy
        </p>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl text-white font-light leading-tight">
          From Beads<br />
          <span className="italic text-yellow-400">to Brilliance.</span>
        </h1>

      </div>
    </div>
  );
};

export default BrandLegacyHero;
