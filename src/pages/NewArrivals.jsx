// =============================================
// NEW ARRIVALS PAGE — src/pages/NewArrivals.jsx
//
// YEH KYA HAI:
// Naye products ka page — "Just Dropped" wala
//
// IS PAGE MEIN KYA HAI:
// - Hero section (yahan inline likha hai — chhota hai isliye)
// - ProductCard grid → variant="new" diya hai
//   matlab yellow "New" badge dikhega
// - Bottom CTA banner — WhatsApp broadcast join
//
// PRODUCT CARD KAHAN SE AA RAHA HAI:
// src/components/shop/ProductCard.jsx
// variant="new" → yellow badge
// variant="shop" → white badge (ShopAll mein)
//
// PRODUCTS KAHAN SE AA RAHE HAIN:
// src/data/products.js → NEW_ARRIVALS = isNew: true wale products
// =============================================

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import AnnouncementBar from '../components/AnnouncementBar-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';
import QuickView from '../components/QuickView-Premium';
import ProductCard from '../components/shop/ProductCard'; // ← ab yahan se aa raha hai
import { NEW_ARRIVALS } from '../data/products';
import newArrivalsVideo from '../assets/videos/new arrivals page .mp4';

const WHATSAPP_NUMBER = "923147253080";

const NewArrivals = () => {
  // quickProduct: jis product ka QuickView open hai, null matlab closed
  const [quickProduct, setQuickProduct] = useState(null);

  return (
    <div className="lux-surface min-h-screen">
      <AnnouncementBar />
      <Navbar />

      {/* ── HERO SECTION ──
          Yeh chhota hai isliye yahan likha hai, alag component nahi banaya
          Agar baad mein bada karna ho toh NewArrivalsHero.jsx bana lena
      */}
      <div className="relative overflow-hidden border-b border-white/5 bg-neutral-950 pt-32 pb-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Luxara new arrivals background video"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        >
          <source src={newArrivalsVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
            Just Dropped
          </p>

          <h1 className="font-serif text-5xl md:text-6xl text-white font-light mb-4">
            New <span className="italic text-amber-300">Arrivals</span>
          </h1>

          <p className="text-neutral-400 text-sm max-w-md leading-relaxed font-light">
            Fresh handmade bracelets and polished cuffs, each carrying the distinct Luxara character.
          </p>

        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header row — count + label */}
        <div className="flex items-center justify-between mb-10">
          <p className="text-xs text-neutral-400 uppercase tracking-widest">
            {NEW_ARRIVALS.length} new pieces
          </p>
          <span className="text-[10px] uppercase tracking-widest text-amber-300 font-medium border border-amber-400/30 px-3 py-1.5">
            ✦ Just Arrived
          </span>
        </div>

        {/* Product Cards Grid
            variant="new" → ProductCard mein yellow "New" badge dikhega
        */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {NEW_ARRIVALS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setQuickProduct} // ← yeh function QuickView kholega
              variant="new"                 // ← yellow "New" badge
            />
          ))}
        </div>

      </div>

      {/* ── BOTTOM CTA BANNER ──
          WhatsApp broadcast join karne ka button
      */}
      <div className="bg-[#0f0d0b] py-14 px-4 text-center">

        <p className="text-amber-400 text-[10px] uppercase tracking-[0.3em] mb-3">
          More Coming Soon
        </p>

        <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
          Be the first to know
        </h2>

        <p className="text-neutral-400 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
          Join our WhatsApp broadcast for new drop alerts and exclusive offers.
        </p>

        <button
          onClick={() => {
            const msg = encodeURIComponent(
              "Hi Luxara! I want to join your WhatsApp broadcast for new arrivals. 💛"
            );
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
          }}
          className="inline-flex items-center gap-2 border border-amber-400/60 text-amber-300 px-8 py-3.5
                     text-[11px] uppercase tracking-widest hover:bg-amber-400 hover:text-black transition-colors"
        >
          Join Broadcast List
        </button>

      </div>

      <Footer />
      <WhatsAppButton />

      {/* QuickView Modal — product null ho toh closed, product ho toh open */}
      <QuickView product={quickProduct} onClose={() => setQuickProduct(null)} />
    </div>
  );
};

export default NewArrivals;
