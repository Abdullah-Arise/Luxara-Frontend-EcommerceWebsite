import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import logoImg from '../assets/logo.png';
import SearchModal from './SearchModal-Premium';
import CartSidebar from './CartSidebar-Premium';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'New Arrivals', path: '/new-arrivals' },
  { label: 'Shop All',     path: '/shop' },
  { label: 'Gift Sets',    path: '/gift-sets' },
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
      <nav className="fixed inset-x-0 top-4 z-50 px-3 sm:px-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border px-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 sm:h-[68px] sm:px-5 ${
            isDarkGlass
              ? 'border-white/10 bg-black/70 shadow-[0_22px_70px_rgba(0,0,0,0.6)]'
              : 'border-white/15 bg-white/[0.08]'
          }`}>

            {/* Mobile Burger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-200 transition-colors hover:text-amber-400"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
              <Link to="/" className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-amber-400/50 bg-black/50 p-0.5">
                  <img src={logoImg} alt="Luxara" className="h-full w-full object-cover rounded-full" />
                </div>
                <span className="hidden font-serif text-xl font-bold uppercase tracking-[0.22em] text-neutral-100 sm:inline">
                  Luxara<span className="text-amber-400">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden items-center justify-center gap-7 md:flex">
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
            <div className="flex items-center justify-end gap-3 md:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-amber-400"
              >
                <Search className="w-5 h-5" />
              </button>

              <button className="hidden rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-amber-400 sm:block">
                <User className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="relative rounded-full p-2 text-neutral-300 transition-colors hover:bg-white/5 hover:text-amber-400"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center bg-amber-400 text-black">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-3 pb-6 space-y-1">
            {NAV_LINKS.map((item) => (
              <Link key={item.path} to={item.path}
                className={`block px-3 py-3.5 text-sm font-medium uppercase tracking-wide border-b border-white/5 transition-colors ${
                  location.pathname === item.path ? 'text-amber-300' : 'text-neutral-200 hover:text-amber-300'
                }`}
              >{item.label}</Link>
            ))}
            <div className="pt-2 space-y-1">
              {[
                { label: 'Track Order',  path: '/track-order' },
                { label: 'Contact',      path: '/contact' },
                { label: 'Jewelry Care', path: '/jewelry-care' },
                { label: 'FAQs',         path: '/faqs' },
              ].map((item) => (
                <Link key={item.path} to={item.path}
                  className="block px-3 py-3 text-sm text-neutral-500 hover:text-amber-300 transition-colors"
                >{item.label}</Link>
              ))}
            </div>
            <button
              onClick={() => { setIsOpen(false); setSearchOpen(true); }}
              className="w-full mt-2 flex items-center gap-3 px-3 py-3 border border-white/10 text-sm text-neutral-300 hover:border-amber-400/40 transition-colors"
            >
              <Search size={16} /> Search products...
            </button>
          </div>
        </div>
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
