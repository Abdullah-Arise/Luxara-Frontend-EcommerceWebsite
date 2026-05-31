import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ourStoryVideo from '../../assets/videos/home page our story video.mp4';

const BrandStory = () => {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.12),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md md:h-[500px]"
          >
            {shouldLoadVideo && (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-label="Luxara handmade bracelet story"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src={ourStoryVideo} type="video/mp4" />
              </video>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10 transition-colors duration-500 group-hover:from-black/75 group-hover:via-black/30 group-hover:to-black/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_45%)] opacity-60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md">
              Our Story
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-serif leading-tight text-white md:text-5xl lg:text-6xl">
                More Than <br /> Just Beads.
              </h2>
              <p className="max-w-xl text-base font-light leading-relaxed text-neutral-400 md:text-lg">
                Luxara began with handmade bead bracelets and grew with purpose. Today, our collection brings that handcrafted spirit together with polished gold and silver stainless steel cuffs for everyday styling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.25 }}>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-amber-400/30 bg-[#d6b46a] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black shadow-[0_12px_40px_rgba(214,180,106,0.25)] transition-all duration-300 hover:bg-[#e0c07a]"
                >
                  Read Our Journey
                </Link>
              </motion.div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-neutral-400 backdrop-blur-md">
                Handmade character, polished cuffs, and everyday elegance.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandStory;
