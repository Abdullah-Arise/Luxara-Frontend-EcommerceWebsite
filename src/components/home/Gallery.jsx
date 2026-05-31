import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight } from 'lucide-react';
import luxaraLife from '../../assets/photos/luxaralife.webp';
import luxaraLife2 from '../../assets/photos/luxaralife2.webp';
import luxaraLife3 from '../../assets/photos/luxaralife3.webp';
import luxaraLife4 from '../../assets/photos/luxaralife4.webp';

const instagramProfile = 'https://www.instagram.com/luxaraa.pk';

const galleryItems = [
  {
    id: 1,
    src: luxaraLife,
    href: 'https://www.instagram.com/reel/DVO0dT1iNZN/?igsh=bGwxcXB5ZnJ4d3I5',
    label: 'Watch Luxara reel on Instagram',
    className: "col-span-2 row-span-2"
  },
  {
    id: 2,
    src: luxaraLife2,
    href: 'https://www.instagram.com/reel/DU3SUKoCPcB/?igsh=YzRoNG52ZWt6Z3h6',
    label: 'Watch Luxara reel on Instagram',
    className: ""
  },
  {
    id: 3,
    src: luxaraLife3,
    href: 'https://www.instagram.com/p/DVbdY0RiJDc/?igsh=ZmoxM2Exb3gydzdl',
    label: 'View Luxara post on Instagram',
    className: ""
  },
  {
    id: 4,
    src: luxaraLife4,
    href: instagramProfile,
    label: 'Visit Luxara on Instagram',
    className: "col-span-2"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
};

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.12),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md">
              Social Edit
            </span>
            <h2 className="mt-5 text-4xl font-serif text-white md:text-5xl">
              #LuxaraLife
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-400 md:text-base">
              Join our community on Instagram and discover how Luxara pieces live beautifully in everyday moments.
            </p>
          </div>

          <a
            href={instagramProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white transition-all duration-300 hover:border-amber-300/30 hover:bg-amber-400 hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.16)] backdrop-blur-md md:self-auto"
          >
            <Instagram size={16} /> Follow Us <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          className="grid h-auto grid-cols-2 gap-4 md:h-[520px] md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {galleryItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`${item.className} group relative min-h-[200px] overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md ${item.className.includes('row-span-2') ? 'md:min-h-full' : ''}`}
            >
              <img
                src={item.src}
                alt="Luxara Life jewelry"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition-all duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute left-4 top-4 translate-y-0 rounded-full border border-white/10 bg-black/35 p-2 text-white opacity-100 backdrop-blur-md transition-all duration-300 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:opacity-100">
                <Instagram size={16} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
