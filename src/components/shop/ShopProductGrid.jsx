// ============================================================
// SHOP PRODUCT GRID — src/components/shop/ShopProductGrid.jsx
//
// Dark theme + framer-motion animations (Home page jaisa)
// Contains: Filter state, useMemo logic, ShopFilterBar, product grid, empty state
// Self-contained component — sab kuch andar hai
// ============================================================

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ShopFilterBar from './ShopFilterBar';
import ProductCard from './ProductCard';
import QuickView from '../QuickView-Premium';
import { ALL_PRODUCTS } from '../../data/products';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const ShopProductGrid = () => {
  // ── Filter States ──
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFinish,   setActiveFinish]   = useState("All");
  const [sortBy,         setSortBy]         = useState("popular");
  const [searchQuery,    setSearchQuery]    = useState("");
  const [quickProduct,   setQuickProduct]   = useState(null);

  // ── FILTERING + SORTING LOGIC ──
  const filteredProducts = useMemo(() => {
    let products = [...ALL_PRODUCTS];

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
      products = products.filter(p => p.isNew).concat(products.filter(p => !p.isNew));
    } else if (sortBy === "price-low") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [activeCategory, activeFinish, sortBy, searchQuery]);

  return (
    <section className="relative overflow-hidden bg-neutral-950 pb-16">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.03),transparent_25%)]" />

      <div className="relative">
        {/* Filter Bar */}
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

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
            >
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={setQuickProduct}
                  variant="shop"
                />
              ))}
            </motion.div>
          ) : (
            /* ── Empty State ── */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center py-24"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <svg className="w-8 h-8 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="font-serif text-2xl text-neutral-500 mb-3">No pieces found</p>
              <p className="text-sm text-neutral-600 mb-8">Try changing your filters to discover more.</p>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActiveCategory("All");
                  setActiveFinish("All");
                  setSearchQuery("");
                }}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[11px] uppercase tracking-widest text-amber-300/90 backdrop-blur-md transition-all duration-300 hover:border-amber-300/30 hover:bg-white/10"
              >
                Clear all filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* QuickView Modal */}
      <QuickView product={quickProduct} onClose={() => setQuickProduct(null)} />
    </section>
  );
};

export default ShopProductGrid;
