// ============================================================
// SHOP FILTER BAR — src/components/shop/ShopFilterBar.jsx
//
// Dark theme + framer-motion animations (Home page jaisa)
// Category buttons, search, finish/sort dropdowns, active chips
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';
import { X, Search, ChevronDown } from 'lucide-react';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES, PRODUCT_FINISHES } from '../../data/products';

const CATEGORIES = ["All", ...PRODUCT_CATEGORIES];
const SORT_OPTIONS = [
  { value: "popular",    label: "Most Popular" },
  { value: "newest",     label: "New Arrivals" },
  { value: "price-low",  label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

const ShopFilterBar = ({
  activeCategory,
  setActiveCategory,
  activeFinish,
  setActiveFinish,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
  filteredCount,
}) => {
  const availableFinishes = activeCategory === "All"
    ? PRODUCT_FINISHES
    : [...new Set(
      ALL_PRODUCTS
        .filter(product => product.category === activeCategory)
        .map(product => product.finish)
    )];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10"
    >

      {/* ── TOP ROW: Category buttons + Search/Dropdowns ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center
                      gap-4 mb-6 pb-8 border-b border-white/10">

        {/* ── CATEGORY BUTTONS ── */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveFinish("All");
              }}
              className={`px-4 py-2 text-[11px] uppercase tracking-widest font-medium
                          rounded-full transition-all duration-300 border
                          ${activeCategory === cat
                            ? 'bg-[#d6b46a] text-black border-amber-400/40 shadow-[0_0_20px_rgba(214,180,106,0.3)]'
                            : 'bg-white/5 text-neutral-400 border-white/10 hover:border-white/25 hover:text-white backdrop-blur-md'
                          }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── RIGHT SIDE: Search + Finish + Sort ── */}
        <div className="flex items-center gap-3 flex-wrap">

          {/* Search Input */}
          <div className="relative">
            <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-8 pr-4 py-2 text-xs rounded-full border border-white/10 bg-white/5 text-white
                         placeholder-neutral-500 focus:outline-none focus:border-amber-300/50
                         w-36 transition-colors backdrop-blur-md"
            />
          </div>

          {/* Finish Dropdown */}
          <div className="relative">
            <select
              value={activeFinish}
              onChange={e => setActiveFinish(e.target.value)}
              className="appearance-none rounded-full bg-white/5 border border-white/10 px-4 py-2 pr-8
                         text-[11px] uppercase tracking-wider text-neutral-400
                         focus:outline-none focus:border-amber-300/50 cursor-pointer backdrop-blur-md"
            >
              {["All", ...availableFinishes].map(f => (
                <option key={f} value={f} className="bg-neutral-900 text-white">
                  {f === "All" ? "All Finishes" : f}
                </option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none rounded-full bg-white/5 border border-white/10 px-4 py-2 pr-8
                         text-[11px] uppercase tracking-wider text-neutral-400
                         focus:outline-none focus:border-amber-300/50 cursor-pointer backdrop-blur-md"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value} className="bg-neutral-900 text-white">
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* ── ACTIVE FILTER CHIPS ── */}
      {(activeCategory !== "All" || activeFinish !== "All" || searchQuery) && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Active:</span>

          {activeCategory !== "All" && (
            <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-amber-300/90 backdrop-blur-md">
              {activeCategory}
              <button onClick={() => setActiveCategory("All")} className="hover:text-red-400 transition-colors">
                <X size={12} />
              </button>
            </span>
          )}

          {activeFinish !== "All" && (
            <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-amber-300/90 backdrop-blur-md">
              {activeFinish}
              <button onClick={() => setActiveFinish("All")} className="hover:text-red-400 transition-colors">
                <X size={12} />
              </button>
            </span>
          )}

          {searchQuery && (
            <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-amber-300/90 backdrop-blur-md">
              "{searchQuery}"
              <button onClick={() => setSearchQuery("")} className="hover:text-red-400 transition-colors">
                <X size={12} />
              </button>
            </span>
          )}
        </div>
      )}

      {/* ── PRODUCT COUNT ── */}
      <p className="text-xs text-neutral-500 uppercase tracking-widest mb-8">
        {filteredCount} {filteredCount === 1 ? 'piece' : 'pieces'} found
      </p>

    </motion.div>
  );
};

export default ShopFilterBar;
