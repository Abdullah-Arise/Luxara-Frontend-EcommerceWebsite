import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, CreditCard, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ThreadsIcon = () => (
  <svg viewBox="0 0 192 192" fill="currentColor" width="20" height="20">
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.372 61.7381 111.428 64.1255 115.565 68.7984C118.574 72.2014 120.596 76.8505 121.62 82.6937C114.969 81.6067 107.758 81.2886 100.098 81.7496C76.8283 83.1192 62.2198 96.6738 63.0934 115.027C63.5367 124.348 68.2826 132.329 76.4536 137.609C83.3303 142.085 92.1252 144.27 101.254 143.787C113.392 143.141 122.893 138.35 129.474 129.542C134.479 122.789 137.587 114.061 138.769 103.113C144.152 106.329 148.137 110.704 150.39 116.146C154.28 125.603 154.531 141.035 142.998 152.509C133.003 162.449 121.002 166.637 103.028 166.761C83.0842 166.621 67.7672 160.481 57.5278 148.513C47.9395 137.26 42.9926 120.975 42.8244 100.163C42.9926 79.3506 47.9395 63.0655 57.5278 51.8124C67.7666 39.8444 83.0836 33.7038 103.028 33.5645C123.095 33.7054 138.557 39.8707 149.020 52.0193C154.166 57.9829 157.966 65.3498 160.376 73.8608L176.053 69.4686C173.088 58.4982 168.175 49.0313 161.334 41.1416C148.268 26.0239 129.36 18.2093 103.083 18.0005C76.7257 18.2093 57.9565 26.0763 45.0623 41.3042C33.5438 54.9536 27.6038 74.2699 27.4172 99.9887L27.4166 100.163L27.4172 100.337C27.6038 126.056 33.5438 145.372 45.0623 158.022C57.9565 173.25 76.7257 181.117 103.083 181.326C122.906 181.183 138.558 175.953 150.051 164.52C166.377 148.267 165.762 127.535 160.177 113.708C156.22 103.677 148.849 95.5857 141.537 88.9883ZM100.35 126.783C89.2423 127.388 77.7271 122.383 77.1964 112.072C76.8058 104.348 82.6158 95.5909 101.287 94.4928C103.655 94.3527 105.979 94.2853 108.261 94.2853C114.68 94.2853 120.724 94.9181 126.287 96.1452C124.214 120.438 111.429 126.174 100.35 126.783Z"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [focused, setFocused] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-neutral-950 via-black to-neutral-900 text-white pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_35%)]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >

          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link to="/" className="group">
              <motion.h2 
                whileHover={{ scale: 1.02 }}
                className="text-3xl font-bold font-serif tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white"
              >
                Luxara<span className="text-amber-400">.</span>
              </motion.h2>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Premium anti-tarnish jewelry. Waterproof. Skin-safe. Everyday luxury.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/luxaraa.pk" },
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61578734463291" },
                { icon: <ThreadsIcon />, href: "https://www.threads.com/@luxaraa.pk" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-neutral-400 hover:text-amber-400 hover:border-amber-400/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/0 to-amber-400/0 group-hover:from-amber-400/10 group-hover:to-amber-400/5 transition-all duration-300" />
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Shop */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-amber-400/90">Shop</h3>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              {[
                { label: 'New Arrivals', path: '/new-arrivals' },
                { label: 'Shop All', path: '/shop' },
                { label: 'Bracelets', path: '/shop?category=Bracelets' },
                { label: 'Pendants', path: '/shop?category=Pendants' },
                { label: 'Gift Sets', path: '/gift-sets' },
                { label: 'Our Story', path: '/our-story' }
              ].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className="hover:text-amber-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-amber-400 group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-amber-400/90">Support</h3>
            <ul className="space-y-3.5 text-sm text-neutral-400">
              {[
                { label: 'Track Order', path: '/track-order' },
                { label: 'Shipping & Returns', path: '/contact' },
                { label: 'Jewelry Care', path: '/jewelry-care' },
                { label: 'FAQs', path: '/faqs' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'About Luxara', path: '/about' }
              ].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={link.path} className="hover:text-amber-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-amber-400 group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-amber-400/90">Newsletter</h3>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">Subscribe for new drops and exclusive deals.</p>
            {!subscribed ? (
              <div className="relative">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && email && setSubscribed(true)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none placeholder-neutral-600 transition-all duration-300"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
                <motion.button
                  onClick={() => email && setSubscribed(true)}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-0 top-3 text-neutral-500 hover:text-amber-400 transition-all duration-300"
                >
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-400 text-sm"
              >
                <Sparkles size={16} /> You're subscribed!
              </motion.p>
            )}
          </motion.div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/5 my-10"
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 md:space-y-0"
        >
          <div className="flex items-center gap-2">
            <span className="text-amber-400/40">©</span>
            <span>2025 Luxara. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</Link>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-neutral-600">Secure Payment:</span>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
              <CreditCard size={14} className="text-amber-400/60" />
              <span className="font-serif text-[10px]">Visa</span>
              <span className="font-serif text-[10px]">Mastercard</span>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
