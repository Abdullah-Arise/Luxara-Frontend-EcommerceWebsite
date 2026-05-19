import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Pendants",
    desc: "Delicate pieces for every neckline.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2070&auto=format&fit=crop",
    link: "/shop?category=Pendants",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 2,
    title: "Earrings",
    desc: "Hoops, studs & everything in between.",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2070&auto=format&fit=crop",
    link: "/shop?category=Earrings",
    size: "col-span-1"
  },
  {
    id: 3,
    title: "Bracelets",
    desc: "Stack them. Layer them. Live in them.",
    image: "https://images.unsplash.com/photo-1579766989932-d812328701e8?q=80&w=2070&auto=format&fit=crop",
    link: "/shop?category=Bracelets",
    size: "col-span-1"
  },
  {
    id: 4,
    title: "Gift Sets",
    desc: "Everything inside a Luxara gift box.",
    image: "https://images.unsplash.com/photo-1590548774585-607691a54775?q=80&w=2070&auto=format&fit=crop",
    link: "/gift-sets",
    size: "col-span-1 md:col-span-2"
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

const cardVariants = {
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

const Categories = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md">
            The Collection
          </span>
          <h2 className="mt-5 text-4xl font-serif text-white md:text-5xl lg:text-6xl">
            Curated by Hand
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-neutral-400 md:text-base">
            Explore signature categories designed with refined detail, elevated textures, and timeless gifting appeal.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={cat.size}
            >
              <Link
                to={cat.link}
                className="group relative block h-[360px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-md md:h-[420px]"
              >
                <div className="absolute inset-0">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/85" />
                <div className="absolute inset-0 border border-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-md rounded-2xl border border-white/10 bg-black/25 p-5 backdrop-blur-md transition-colors duration-300 group-hover:bg-black/35">
                    <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-amber-300/90">
                      {cat.desc}
                    </p>
                    <h3 className="flex items-center gap-3 text-2xl font-serif text-white sm:text-3xl">
                      {cat.title}
                      <ArrowUpRight className="h-5 w-5 text-amber-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
