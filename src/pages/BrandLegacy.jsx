// ============================================================
// BRAND LEGACY PAGE — src/pages/BrandLegacy.jsx
//
// YEH KYA HAI:
// "Our Story" page — /our-story route pe aata hai
// Luxara ki kahani batata hai — beads se shuru, steel pe khatam
//
// IS PAGE MEIN KYA HAI (upar se neeche):
// 1. AnnouncementBar     → floating announcement
// 2. Navbar              → navigation
// 3. BrandLegacyHero     → "From Beads to Brilliance" hero
// 4. BrandChapter ch=1   → Chapter 1: "It started with a bead"
// 5. BrandTurningPoint   → Dark quote section
// 6. BrandChapter ch=2   → Chapter 2: "Rebuilt from scratch"
// 7. BrandPromise        → 3 cards: promise
// 8. BrandFounderQuote   → Abdullah ki quote
// 9. BrandLegacyCTA      → "Shop All Jewelry" button
// 10. Footer
// 11. WhatsAppButton
//
// KUCH CHANGE KARNA HO TO:
// - Hero image/text      → components/brand/BrandLegacyHero.jsx
// - Chapter 1 content    → yahan props change karo (paragraphs array)
// - Chapter 2 content    → yahan props change karo
// - Quote section        → components/brand/BrandTurningPoint.jsx
// - Promise cards        → components/brand/BrandPromise.jsx
// - Founder quote/naam   → components/brand/BrandFounderQuote.jsx
// - Bottom CTA button    → components/brand/BrandLegacyCTA.jsx
// ============================================================

import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar-Premium';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';

// Brand specific components
import BrandLegacyHero    from '../components/brand/BrandLegacyHero';
import BrandChapter       from '../components/brand/BrandChapter';
import BrandTurningPoint  from '../components/brand/BrandTurningPoint';
import BrandPromise       from '../components/brand/BrandPromise';
import BrandFounderQuote  from '../components/brand/BrandFounderQuote';
import BrandLegacyCTA     from '../components/brand/BrandLegacyCTA';

// ── CHAPTER 1 DATA ──
// Text change karna ho toh yahan paragraphs array edit karo
const CHAPTER_1 = {
  heading: "It started with a bead",
  headingItalic: "and a dream.",
  image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
  imageAlt: "The beginning",
  imageLeft: false,  // image right side pe
  paragraphs: [
    "Luxara started as something small — handmade bead bracelets, threaded by hand in Lahore. We sold them with passion, and our customers loved the designs.",
    "But something kept happening. The metal would turn. The shine would fade within weeks. Customers would message us — not with complaints, but with disappointment. And that broke our hearts.",
    "We knew we had to do better. Not just for the business — but because we genuinely cared about what we were putting into the world.",
  ],
};

// ── CHAPTER 2 DATA ──
const CHAPTER_2 = {
  heading: "Rebuilt from scratch.",
  headingItalic: "Zero compromise.",
  image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop",
  imageAlt: "New Luxara",
  imageLeft: true,   // image left side pe (Chapter 1 se ulta)
  paragraphs: [
    "Every single piece in the new Luxara line is built on Stainless Steel 316L — the same grade used in surgical instruments. It doesn't rust. It doesn't tarnish. It doesn't react to your skin.",
    "On top of that, we apply a PVD (Physical Vapor Deposition) coating — a process that permanently bonds the gold, silver, or rose gold finish to the steel surface at a molecular level. It's not a layer that peels. It's not paint. It's permanent.",
    "This is jewelry designed for Pakistani women who deserve both beauty and durability — without paying imported prices.",
  ],
};

const BrandLegacy = () => {
  return (
    <div className="lux-surface">
      <AnnouncementBar />
      <Navbar />

      {/* 1. Hero — "From Beads to Brilliance" */}
      <BrandLegacyHero />

      {/* 2. Chapter 1 — bead story */}
      <BrandChapter
        chapter="1"
        heading={CHAPTER_1.heading}
        headingItalic={CHAPTER_1.headingItalic}
        image={CHAPTER_1.image}
        imageAlt={CHAPTER_1.imageAlt}
        imageLeft={CHAPTER_1.imageLeft}
        paragraphs={CHAPTER_1.paragraphs}
      />

      {/* 3. Turning Point — dark quote */}
      <BrandTurningPoint />

      {/* 4. Chapter 2 — rebuild story */}
      <BrandChapter
        chapter="2"
        heading={CHAPTER_2.heading}
        headingItalic={CHAPTER_2.headingItalic}
        image={CHAPTER_2.image}
        imageAlt={CHAPTER_2.imageAlt}
        imageLeft={CHAPTER_2.imageLeft}
        paragraphs={CHAPTER_2.paragraphs}
      />

      {/* 5. Promise — 3 cards */}
      <BrandPromise />

      {/* 6. Founder Quote */}
      <BrandFounderQuote />

      {/* 7. CTA — Shop button */}
      <BrandLegacyCTA />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BrandLegacy;