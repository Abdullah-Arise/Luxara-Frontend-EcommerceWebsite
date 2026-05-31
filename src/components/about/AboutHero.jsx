import React from 'react';
import pagesHeroVideo from '../../assets/videos/globalvideoforpages.mp4';

const AboutHero = () => {
  return (
    <div className="relative h-[60vh] bg-[#0f0d0b] flex items-end overflow-hidden">
      
      {/* Background Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Luxara about background video"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src={pagesHeroVideo} type="video/mp4" />
      </video>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
        <p className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Our Story
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-white font-light leading-tight">
          More Than<br />
          <span className="italic text-yellow-400">Just Bracelets.</span>
        </h1>
      </div>
    </div>
  );
};

export default AboutHero;
