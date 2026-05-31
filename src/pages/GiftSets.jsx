// =============================================
// CUFF COLLECTION PAGE - src/pages/GiftSets.jsx
//
// YEH KYA HAI:
// Gold aur silver stainless steel cuffs ka dedicated page
//
// IS PAGE MEIN KYA HAI:
// - Hero section (dark background wala)
// - Cuff info strip (3 reasons)
// - Cuff card grid (components/shop/GiftCard.jsx se)
// - WhatsApp cuff selection CTA
//
// GIFT CARD KAHAN SE AA RAHA HAI:
// src/components/shop/GiftCard.jsx
// =============================================

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import AnnouncementBar from '../components/AnnouncementBar-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';
import QuickView from '../components/QuickView-Premium';
import GiftCard from '../components/shop/GiftCard'; // ← ab yahan se aa raha hai
import { CUFF_COLLECTION } from '../data/products';
import cuffCollectionVideo from '../assets/videos/cuffs collection page .mp4';

// ← SAHI NUMBER — pehle 923001234567 tha (galat tha)
const WHATSAPP_NUMBER = "923147253080";

const GiftSets = () => {
  const [quickProduct, setQuickProduct] = useState(null);

  return (
    <div className="lux-surface min-h-screen">
      <AnnouncementBar />
      <Navbar />

      {/* ── HERO — dark background ── */}
      <div className="relative overflow-hidden bg-[#0f0d0b] pt-32 pb-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Luxara cuff collection background video"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        >
          <source src={cuffCollectionVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <p className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
            Gold & Silver Stainless Steel
          </p>

          <h1 className="font-serif text-5xl md:text-6xl text-white font-light mb-4">
            Luxara <span className="italic text-yellow-400">Cuff Collection</span>
          </h1>

          <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
            Discover polished stainless steel cuffs in gold and silver finishes.
            Adjustable silhouettes designed to bring quiet luxury to every look.
          </p>

        </div>
      </div>

      {/* Cuff highlights - 3 reasons strip */}
      <div className="bg-neutral-950 border-b border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎁",
                title: "Gold Finish",
                desc: "Warm-toned stainless steel cuffs with a polished Luxara look."
              },
              {
                icon: "✨",
                title: "Silver Finish",
                desc: "Clean silver stainless steel cuffs for effortless everyday styling."
              },
              {
                icon: "💛",
                title: "Adjustable Fit",
                desc: "Open cuff silhouettes designed for an easy, comfortable fit."
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cuff collection grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-widest">
            {CUFF_COLLECTION.length} cuffs available
          </p>
          <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
            Gold and silver finishes
          </span>
        </div>

        {/* GiftCard Grid — GiftCard component use ho raha hai */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {CUFF_COLLECTION.map(product => (
            <GiftCard
              key={product.id}
              product={product}
              onQuickView={setQuickProduct}
            />
          ))}
        </div>

      </div>

      {/* Cuff selection CTA */}
      <div className="bg-[#0f0d0b] py-16 px-4 text-center">

        <p className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] mb-3">
          Need help choosing?
        </p>

        <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
          Find Your Signature Cuff
        </h2>

        <p className="text-neutral-400 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
          Tell us the finish and style you prefer, and we'll help you select the right Luxara cuff.
        </p>

        <button
          onClick={() => {
            const msg = encodeURIComponent(
              "Hi Luxara! I want help choosing a gold or silver cuff. Can you guide me?"
            );
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
          }}
          className="inline-flex items-center gap-2 bg-amber-400 text-black px-8 py-3.5
                     text-[11px] uppercase tracking-widest hover:bg-amber-300 transition-colors"
        >
          {/* WhatsApp SVG Icon */}
          <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Help Me Choose
        </button>

      </div>

      <Footer />
      <WhatsAppButton />
      <QuickView product={quickProduct} onClose={() => setQuickProduct(null)} />
    </div>
  );
};

export default GiftSets;
