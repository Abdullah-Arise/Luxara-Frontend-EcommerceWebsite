// ============================================================
// SHOP ALL PAGE — src/pages/ShopAll.jsx
//
// YEH KYA HAI:
// Main shop page — sab products dikhata hai with filters
// Route: /shop
//
// IS PAGE MEIN KYA HAI:
// 1. AnnouncementBar  → announcement
// 2. Navbar           → navigation
// 3. ShopHero         → "Shop All Jewelry" heading
// 4. ShopFilterBar    → categories, search, sort, finish filters
// 5. ProductCard grid → filtered products
// 6. Empty state      → agar koi product na mile
// 7. Bottom CTA       → WhatsApp chat button
// 8. Footer
// 9. WhatsAppButton
// 10. QuickView modal
//
// FILTERING LOGIC:
// useMemo hook mein hai — yeh tab hi recalculate hoti hai jab
// filters change hon (performance ke liye)
//
// WHATSAPP NUMBER:
// Agar change karna ho → WHATSAPP_NUMBER constant edit karo (line 28)
// ============================================================

import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer-Premium';
import AnnouncementBar from '../components/AnnouncementBar-Premium';
import WhatsAppButton from '../components/WhatsAppButton-Premium';
import QuickView from '../components/QuickView-Premium';
import ShopHero from '../components/shop/ShopHero';
import ShopFilterBar from '../components/shop/ShopFilterBar';
import RingsAndOthers from '../components/shop/RingsAndOthers';
import ShopBottomCTA from '../components/shop/ShopBottomCTA';
import ProductCard from '../components/shop/ProductCard';
import { ALL_PRODUCTS } from '../data/products';


const ShopAll = () => {
  // ── Filter States ──
  // Har state ek filter ka current value hold karta hai
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFinish,   setActiveFinish]   = useState("All");
  const [sortBy,         setSortBy]         = useState("popular");
  const [searchQuery,    setSearchQuery]    = useState("");
  const [quickProduct,   setQuickProduct]   = useState(null);

  // ── FILTERING + SORTING LOGIC ──
  // useMemo: sirf tab recalculate hoga jab koi dependency change ho
  // Dependencies: [activeCategory, activeFinish, sortBy, searchQuery]
  const filteredProducts = useMemo(() => {
    let products = [...ALL_PRODUCTS]; // original array copy karo (mutate mat karo)

    // 1. Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // 2. Category filter
    if (activeCategory !== "All") {
      products = products.filter(p => p.category === activeCategory);
    }

    // 3. Finish filter
    if (activeFinish !== "All") {
      products = products.filter(p => p.finish === activeFinish);
    }

    // 4. Sort
    if (sortBy === "newest") {
      // New arrivals pehle
      products = products.filter(p => p.isNew).concat(products.filter(p => !p.isNew));
    } else if (sortBy === "price-low") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      products.sort((a, b) => b.price - a.price);
    }
    // "popular" ke liye koi sort nahi — original order hi hai

    return products;
  }, [activeCategory, activeFinish, sortBy, searchQuery]);

  return (
    <div className="lux-surface min-h-screen">
      <AnnouncementBar />
      <Navbar />

      {/* 1. Hero Section */}
      <ShopHero />

      {/* 1.5 Rings & Others Featured Section */}
      <RingsAndOthers onQuickView={setQuickProduct} variant="shop" />

      {/* 2. Filter Bar — state aur setters dono pass karo */}
      <ShopFilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeFinish={activeFinish}
        setActiveFinish={setActiveFinish}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredCount={filteredProducts.length}
      />

      {/* 3. Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {filteredProducts.length > 0 ? (
          /* Products mili → grid dikhao
             variant="shop" → white badge (NewArrivals pe "new" hota hai)
          */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickProduct}
                variant="shop"   // white badge style
              />
            ))}
          </div>
        ) : (
          /* Koi product na mile → empty state dikhao */
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-gray-300 mb-3">No pieces found</p>
            <p className="text-sm text-gray-400 mb-6">Try changing your filters.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveFinish("All");
                setSearchQuery("");
              }}
              className="text-[11px] uppercase tracking-widest border-b border-gray-400 pb-0.5
                         hover:text-yellow-600 hover:border-yellow-600 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>

      {/* 4. Bottom CTA — WhatsApp */}
      <ShopBottomCTA />

      <Footer />
      <WhatsAppButton />

      {/* QuickView Modal */}
      <QuickView product={quickProduct} onClose={() => setQuickProduct(null)} />
    </div>
  );
};

export default ShopAll;