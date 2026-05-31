import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import beadBraceletVideo from '../../assets/videos/home page bead braclet video.mp4';

const imageVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProductSpotlight = () => {
  const sectionRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || shouldLoadVideo) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <section ref={sectionRef} className="overflow-x-hidden bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.45)] lg:grid-cols-2 lg:gap-20 lg:p-10">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
            {shouldLoadVideo && (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-label="Luxara handmade bead bracelet showcase"
                className="h-full w-full object-cover"
              >
                <source src={beadBraceletVideo} type="video/mp4" />
              </video>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          <div className="pointer-events-none absolute -bottom-5 -right-5 hidden h-full w-full rounded-[2rem] border border-white/10 lg:block" />
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-xl"
        >
          <span className="mb-5 inline-block text-[0.7rem] font-medium uppercase tracking-[0.35em] text-amber-300">
            Curated Luxury
          </span>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bracelets with Character
          </h2>

          <p className="mt-6 text-base leading-8 text-neutral-400 sm:text-lg">
            Discover handmade bead bracelets and polished stainless steel cuffs
            in gold and silver finishes. Each piece brings a distinct Luxara
            character to everyday styling.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-[#d6b46a] px-7 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-black transition-all duration-300 hover:bg-[#e0c07a] shadow-[0_10px_35px_rgba(214,180,106,0.25)]"
              >
                Explore Now
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Minimal. Rare. Enduring.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
