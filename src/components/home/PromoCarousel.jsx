import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'src/assets/banner 4.png',
    title: 'The Golden Hour',
    subtitle: 'Shine bright with our 24k Gold plated collection.',
    position: 'justify-start',
  },
  {
    id: 2,
    image: 'src/assets/banner 3.png',
    title: 'Minimalist Vibes',
    subtitle: 'Less is more. Discover our everyday essentials.',
    position: 'justify-center',
  },
  {
    id: 3,
    image: 'src/assets/banner 2.jpg',
    title: "Men's Black Edition",
    subtitle: 'Bold, matte, and masculine. The new era of style.',
    position: 'justify-end',
  },
];

const slideVariants = {
  initial: { opacity: 0, scale: 1.04 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.985, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

const contentVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

const PromoCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="bg-neutral-950 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <div className="relative h-[420px] w-full overflow-hidden md:h-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.88)_0%,rgba(10,10,10,0.58)_42%,rgba(10,10,10,0.3)_72%,rgba(10,10,10,0.62)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.14),transparent_24%)]" />

                <div className={`absolute inset-0 flex items-center px-6 sm:px-8 md:px-14 lg:px-20 ${slides[current].position}`}>
                  <motion.div
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    className="max-w-xl rounded-[1.75rem] border border-white/10 bg-black/25 p-6 text-white shadow-[0_15px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-8 md:p-10"
                  >
                    <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-amber-300">
                      New Collection
                    </span>
                    <h2 className="mt-4 text-4xl font-serif font-light leading-tight sm:text-5xl md:text-6xl">
                      {slides[current].title}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">
                      {slides[current].subtitle}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-8 inline-flex rounded-full border border-white/15 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-400 hover:text-black shadow-[0_10px_35px_rgba(255,255,255,0.08)]"
                    >
                      Shop This Look
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-amber-400 hover:text-black group-hover:opacity-100 md:flex md:opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:bg-amber-400 hover:text-black group-hover:opacity-100 md:flex md:opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)]' : 'w-2 bg-white/10 hover:bg-amber-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PromoCarousel;
