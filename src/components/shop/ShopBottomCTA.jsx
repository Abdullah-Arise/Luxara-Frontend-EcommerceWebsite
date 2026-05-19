// ============================================================
// SHOP BOTTOM CTA — src/components/shop/ShopBottomCTA.jsx
//
// Dark theme + framer-motion animations (Home page jaisa)
// WhatsApp chat CTA section at bottom of shop page
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = "923147253080";

const ShopBottomCTA = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative text-center px-4"
      >
        {/* Label Badge */}
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md mb-5">
          Not sure what to pick?
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-5">
          Talk to us on <span className="italic font-normal text-neutral-100">WhatsApp</span>
        </h2>

        {/* Description */}
        <p className="text-neutral-400 text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed">
          Tell us your budget and occasion — we'll help you find the perfect piece.
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const msg = encodeURIComponent(
              "Hi Luxara! I need help choosing a piece. Can you help me?"
            );
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
          }}
          className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-[#d6b46a] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-black shadow-[0_12px_40px_rgba(214,180,106,0.25)] transition-all duration-300 hover:bg-[#e0c07a]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat with Luxara
        </motion.button>

        {/* Trust indicators */}
        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-neutral-500">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
            <span className="text-[11px] uppercase tracking-[0.2em]">Online now</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[11px] uppercase tracking-[0.2em]">Replies within minutes</span>
        </div>
      </motion.div>
    </section>
  );
};

export default ShopBottomCTA;
