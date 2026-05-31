import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const HERO_MESSAGES = [
  {
    eyebrow: 'The Luxara Collection',
    title: 'Timeless',
    accent: 'Elegance.',
    copy: 'Handmade bead bracelets and stainless steel cuffs. Designed to bring character to everyday style.',
  },
  {
    eyebrow: 'Waterproof Luxury',
    title: 'Everyday',
    accent: 'Shine.',
    copy: 'Gold and silver stainless steel cuffs made to move with you, from morning plans to late-night dinners.',
  },
  {
    eyebrow: 'Skin-Safe Finish',
    title: 'Quiet',
    accent: 'Statement.',
    copy: 'Handmade beads, polished cuff finishes, and comfort that feels effortless.',
  },
];

const textMotion = {
  initial: { opacity: 0, y: 18, filter: 'blur(10px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -16, filter: 'blur(10px)' },
};

const HeroContentRotator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMessage = HERO_MESSAGES[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((index) => (index + 1) % HERO_MESSAGES.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="inline-flex max-w-full items-center gap-3 border-l border-amber-300/70 pl-4">
        <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
        <AnimatePresence mode="wait">
          <motion.p
            key={activeMessage.eyebrow}
            variants={textMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-200 sm:text-[11px] sm:tracking-[0.35em]"
          >
            {activeMessage.eyebrow}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-2.5 min-h-[4.9rem] sm:mt-8 sm:min-h-[12.5rem] lg:min-h-[15.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeMessage.title}-${activeMessage.accent}`}
            variants={textMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-[2.35rem] font-light leading-[1.02] tracking-normal text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.65)] sm:text-6xl md:text-7xl lg:text-8xl">
              {activeMessage.title} <br />
              <span className="italic font-normal text-neutral-100">{activeMessage.accent}</span>
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="min-h-[3.2rem] max-w-2xl sm:min-h-[5rem]">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeMessage.copy}
            variants={textMotion}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="text-[13px] leading-6 text-neutral-300 drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)] sm:text-lg sm:leading-8"
          >
            {activeMessage.copy}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroContentRotator;
