// ============================================================
// SHOP HERO — src/components/shop/ShopHero.jsx
//
// Dark theme + framer-motion animations (Home page jaisa)
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';
import shopAllVideo from '../../assets/videos/shop all page .mp4';

const ShopHero = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-16 px-4">
      {/* Radial gradient background — Home page jaisa */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Luxara shop collection background video"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      >
        <source src={shopAllVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Label Badge */}
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md mb-5">
          The Collection
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.02] tracking-tight text-white mb-5">
          Shop All <span className="italic font-normal text-neutral-100">Bracelets & Cuffs.</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
          Explore handmade bead bracelets and stainless steel cuffs in polished gold and silver finishes.
        </p>
      </motion.div>
    </section>
  );
};

export default ShopHero;
