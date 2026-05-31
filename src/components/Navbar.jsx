import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logoImg from '../assets/logo.png';
import SearchModal from './SearchModal-Premium';
import CartSidebar from './CartSidebar-Premium';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'New Arrivals', path: '/new-arrivals' },
  { label: 'Shop All',     path: '/shop' },
  { label: 'Cuff Collection', path: '/gift-sets' },
  { label: 'About',        path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]         = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen]     = useState(false);

  const { cartCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isDarkGlass = scrolled || !isHomePage || isOpen;

  return (
    <>
      <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`flex h-14 items-center justify-between gap-3 rounded-full border px-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 sm:h-[68px] sm:px-5 ${
            isDarkGlass
              ? 'border-white/10 bg-black/70 shadow-[0_22px_70px_rgba(0,0,0,0.6)]'
              : 'border-white/15 bg-white/[0.08]'
          }`}
          >

            {/* Logo */}
            <div className="flex min-w-0 items-center">
              <Link to="/" className="flex items-center gap-3">
                <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-amber-400/50 bg-black/50 p-0.5 sm:h-10 sm:w-10">
                  <img src={logoImg} alt="Luxara" className="h-full w-full rounded-full object-cover" />
                </div>
                <span className="font-serif text-base font-bold uppercase tracking-[0.18em] text-neutral-100 sm:text-xl sm:tracking-[0.22em]">
                  Luxara<span className="text-amber-400">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden flex-1 items-center justify-center gap-7 lg:flex">
              {NAV_LINKS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}
                    className={`group relative text-[12px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                      isActive ? 'text-amber-300' : 'text-neutral-300 hover:text-amber-300'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-amber-400 transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Right Icons */}
            <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-3 md:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-amber-400"
                aria-label="Search products"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="relative rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-amber-400"
                aria-label="Open cart"
              >
                <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center bg-amber-400 text-black">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full p-2 text-neutral-200 transition-colors hover:bg-white/5 hover:text-amber-400 lg:hidden"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-3 max-h-[calc(100svh-5.5rem)] max-w-7xl overflow-x-hidden overflow-y-auto rounded-3xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="space-y-1 px-4 pb-6 pt-3">
                {NAV_LINKS.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035, duration: 0.22 }}
                  >
                    <Link
                      to={item.path}
                      className={`block border-b border-white/5 px-3 py-3.5 text-sm font-medium uppercase tracking-wide transition-colors ${
                        location.pathname === item.path ? 'text-amber-300' : 'text-neutral-200 hover:text-amber-300'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="space-y-1 pt-2">
                  {[
                    { label: 'Contact', path: '/contact' },
                    { label: 'Cuff & Bracelet Care', path: '/jewelry-care' },
                    { label: 'FAQs', path: '/faqs' },
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-3 py-3 text-sm text-neutral-500 transition-colors hover:text-amber-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {!isHomePage && <div className="h-24" />}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
