import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const announcements = [
  { icon: <Sparkles size={14} className="text-amber-400" />, text: "Free Shipping above Rs. 2,000" },
  { icon: "✨", text: "New Anti-Tarnish Collection is live" },
  { icon: "💛", text: "Cash on Delivery — All over Pakistan" },
  { icon: "🔄", text: "7-Day Exchange Policy" },
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % announcements.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, [dismissed]);

  if (dismissed) return null;

  const item = announcements[current];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{ x: -120, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -120, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-black via-neutral-950 to-black backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] rounded-2xl flex items-center gap-3 pr-3 pl-4 py-3.5 max-w-[260px] overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Gradient accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.1),transparent_50%)]" />

              <span className="text-base shrink-0 relative z-10">{item.icon}</span>
              <p className="text-[11px] leading-snug font-light tracking-wide flex-1 text-neutral-300 relative z-10">
                {item.text}
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDismissed(true)}
                className="text-white/20 hover:text-white transition-all duration-300 ml-1 shrink-0 relative z-10"
              >
                <X size={14} />
              </motion.button>
            </motion.div>

            {/* Dots indicator */}
            <div className="flex gap-1.5 mt-3 pl-1">
              {announcements.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-[2px] rounded-full transition-all duration-500"
                  animate={{
                    width: i === current ? 20 : 6,
                    backgroundColor: i === current ? '#FBB03B' : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnnouncementBar;
