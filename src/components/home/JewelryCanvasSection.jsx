import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LuxuryCanvas = lazy(() => import('../three/LuxuryCanvas'));

const CanvasPlaceholder = () => (
  <div className="flex h-full min-h-[360px] items-center justify-center">
    <div className="relative h-28 w-28 rounded-full border-[14px] border-amber-300/70 shadow-[0_0_70px_rgba(214,180,106,0.26)]">
      <div className="absolute -right-5 top-7 h-10 w-10 rotate-12 border-[8px] border-amber-100/70" />
    </div>
  </div>
);

const JewelryCanvasSection = () => {
  const sectionRef = useRef(null);
  const [shouldLoadCanvas, setShouldLoadCanvas] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || shouldLoadCanvas) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadCanvas(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoadCanvas]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-neutral-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,106,0.1),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300">
            Crafted in Motion
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
            A closer look at the Luxara finish.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-400">
            A lightweight interactive preview inspired by polished anti-tarnish rings and crystal accents.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative h-[380px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 sm:h-[480px] lg:h-[560px]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,180,106,0.12),transparent_55%)]" />
          <div className="relative h-full w-full">
            <Suspense fallback={<CanvasPlaceholder />}>
              {shouldLoadCanvas ? <LuxuryCanvas /> : <CanvasPlaceholder />}
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JewelryCanvasSection;
