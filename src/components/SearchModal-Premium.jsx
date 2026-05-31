import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_PRODUCTS, getProductCoverImage } from '../data/products';
import QuickView from './QuickView-Premium';

const QUICK_SEARCHES = ["Handmade Bracelets", "Gold Cuffs", "Silver Cuffs", "Handmade", "Gold", "Silver"];

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [quickProduct, setQuickProduct] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    if (isOpen || quickProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, quickProduct]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(
      ALL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.finish.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-gradient-to-br from-neutral-950 via-black to-neutral-900 w-full border-b border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] flex flex-col"
          >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.05),transparent_50%)] pointer-events-none" />

            {/* Input */}
            <div className="relative flex items-center gap-4 px-6 md:px-12 py-6 border-b border-white/5">
              <Search className="text-amber-400/60" size={24} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search bracelets and cuffs..."
                className="min-w-0 flex-1 bg-transparent text-white text-lg md:text-2xl placeholder-neutral-600 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-neutral-500 hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Quick Searches */}
            {!query && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="px-6 md:px-12 py-8 border-b border-white/5"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400/80 mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {QUICK_SEARCHES.map((term, idx) => (
                    <motion.button
                      key={term}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-neutral-300 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300"
                    >
                      {term}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results */}
            <div className="flex-1 overflow-y-auto px-6 md:px-12 py-6">
              {query && results.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                    <Search className="text-neutral-600" size={24} />
                  </div>
                  <p className="text-neutral-500 text-sm">No results for "{query}"</p>
                </motion.div>
              )}

              {results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {results.slice(0, 9).map((product, idx) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          setQuickProduct(product);
                        }}
                        className="group block w-full text-left"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md hover:border-amber-400/20 hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
                            <img
                              src={getProductCoverImage(product)}
                              alt={product.name}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white text-sm font-medium truncate group-hover:text-amber-400 transition-colors duration-300">
                              {product.name}
                            </h4>
                            <p className="text-neutral-500 text-xs mt-1">{product.category}</p>
                            <p className="text-amber-400 text-sm font-semibold mt-2">Rs. {product.price.toLocaleString()}</p>
                          </div>
                          <ArrowRight className="text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-300 self-center" size={16} />
                        </motion.div>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {results.length > 9 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center mt-8"
                >
                  <Link
                    to={`/shop?search=${query}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-400 hover:bg-amber-400/20 transition-all duration-300"
                  >
                    <span className="text-sm font-medium">View all {results.length} results</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
          </div>
        )}
      </AnimatePresence>
      <QuickView product={quickProduct} onClose={() => setQuickProduct(null)} />
    </>
  );
};

export default SearchModal;
