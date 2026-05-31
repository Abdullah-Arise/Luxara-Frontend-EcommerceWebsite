import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '8%' : '-8%',
    opacity: 0,
    scale: 1.015,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 95, damping: 26, mass: 0.8 },
      opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      scale: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? '-6%' : '6%',
    opacity: 0,
    scale: 0.995,
    transition: { duration: 0.42, ease: [0.4, 0, 0.2, 1] },
  }),
};

const PromoCarousel = () => {
  const slides = useMemo(() => [
    {
      id: 1,
      image: '/promocrousel/banner1.webp',
      title: 'Luxara gold cuff collection banner',
    },
    {
      id: 2,
      image: '/promocrousel/banner2.webp',
      title: 'Luxara handmade bracelet collection banner',
    },
    {
      id: 3,
      image: '/promocrousel/banner3.webp',
      title: 'Luxara silver cuff collection banner',
    },
  ], []);

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((nextIndex) => {
    if (nextIndex === current) return;
    setDirection(nextIndex > current ? 1 : -1);
    setCurrent(nextIndex);
  }, [current]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5600);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.image;
    });
  }, [slides]);

  const activeSlide = slides[current];

  const handleKeyDown = (event, callback) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="bg-neutral-950 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_28px_95px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="relative aspect-[12/5] w-full min-h-[165px] overflow-hidden sm:min-h-[260px] md:min-h-0">
            <AnimatePresence custom={direction} initial={false} mode="popLayout">
              <motion.div
                key={activeSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) nextSlide();
                  if (info.offset.x > 50) prevSlide();
                }}
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  loading={current === 0 ? 'eager' : 'lazy'}
                  fetchPriority={current === 0 ? 'high' : 'auto'}
                  decoding="async"
                  sizes="(min-width: 1280px) 1280px, 100vw"
                  draggable="false"
                  className="h-full w-full select-none object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.22)_0%,rgba(5,5,7,0.05)_42%,rgba(5,5,7,0.18)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/35 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              onKeyDown={(event) => handleKeyDown(event, prevSlide)}
              aria-label="Previous promo banner"
              className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/20 p-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-400 hover:text-black group-hover:opacity-100 md:flex md:opacity-0"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={nextSlide}
              onKeyDown={(event) => handleKeyDown(event, nextSlide)}
              aria-label="Next promo banner"
              className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-black/20 p-3 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-400 hover:text-black group-hover:opacity-100 md:flex md:opacity-0"
            >
              <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to promo banner ${index + 1}`}
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
