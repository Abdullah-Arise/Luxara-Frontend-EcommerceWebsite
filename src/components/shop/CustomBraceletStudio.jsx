import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Gem, Heart, MessageCircle, Palette, Sparkles, Star } from 'lucide-react';

const WHATSAPP_NUMBER = "923147253080";

const ButterflyIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 10.5c-1.9-4-4.7-6.2-7.2-5.8-2.1.4-2.6 3.1-1.3 5.2 1.1 1.8 3.1 2.8 5.6 2.9" />
    <path d="M12 10.5c1.9-4 4.7-6.2 7.2-5.8 2.1.4 2.6 3.1 1.3 5.2-1.1 1.8-3.1 2.8-5.6 2.9" />
    <path d="M10.2 13.1c-2.2.2-4 1.4-4.4 3.2-.3 1.6 1.3 2.8 2.8 2.3 1.3-.4 2.4-1.6 3.1-3.5" />
    <path d="M13.8 13.1c2.2.2 4 1.4 4.4 3.2.3 1.6-1.3 2.8-2.8 2.3-1.3-.4-2.4-1.6-3.1-3.5" />
    <path d="M12 9.5v6.4" />
    <path d="m10.7 7.8-1.4-2" />
    <path d="m13.3 7.8 1.4-2" />
  </svg>
);

const LeafIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.5 3.5c-8.4.2-14.2 3.2-16.1 8.4-1.2 3.3.4 6.8 3.6 7.7 3.4 1 6.8-1 8.5-4.7 1.4-3 2-6.7 4-11.4Z" />
    <path d="M5.2 19.8c2.5-3.4 5.7-6.5 10.7-9.6" />
  </svg>
);

const HangingBallsIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v5" />
    <path d="M7 6v6" />
    <path d="M17 6v6" />
    <circle cx="12" cy="11" r="3" />
    <circle cx="7" cy="15" r="3" />
    <circle cx="17" cy="15" r="3" />
  </svg>
);

const BraceletCharmPreview = ({ charm }) => {
  const CharmIcon = charm.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.55, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-[4.9rem] w-[4.9rem] items-center justify-center text-[#e4bf68] drop-shadow-[0_12px_16px_rgba(0,0,0,0.6)] sm:h-[5.6rem] sm:w-[5.6rem]"
    >
      <div className="absolute inset-[10%] rounded-full bg-amber-300/10 blur-xl" />
      <CharmIcon
        size={charm.label === "Butterfly" || charm.label === "Leaf" ? 62 : 56}
        className="relative drop-shadow-[0_3px_2px_rgba(75,48,12,0.85)]"
        fill={charm.label === "Heart" || charm.label === "Star" ? "currentColor" : "none"}
      />
      <span className="absolute right-[18%] top-[12%] h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
    </motion.div>
  );
};

const HangingBallAttachments = () => (
  <div className="absolute inset-0 z-[72]">
    {[
      { left: "31%", top: "60%", length: "2.2rem", size: "1.45rem" },
      { left: "43.5%", top: "64%", length: "2.9rem", size: "1.7rem" },
      { left: "56.5%", top: "64%", length: "2.9rem", size: "1.7rem" },
      { left: "69%", top: "60%", length: "2.2rem", size: "1.45rem" },
    ].map((ball, index) => (
      <div
        key={ball.left}
        data-preview-hanging-ball="true"
        className="absolute -translate-x-1/2"
        style={{ left: ball.left, top: ball.top }}
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.28, delay: index * 0.06 }}
          className="mx-auto block h-3 w-3 rounded-full border-[3px] border-[#e4bf68] bg-[#100c07] shadow-[0_0_12px_rgba(214,180,106,0.5)]"
        />
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.34, delay: 0.08 + index * 0.06 }}
          className="mx-auto block w-px origin-top bg-gradient-to-b from-[#f4d891] to-[#96712f]"
          style={{ height: ball.length }}
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.36, delay: 0.18 + index * 0.06 }}
          className="block rounded-full border border-amber-100/60 bg-[radial-gradient(circle_at_30%_22%,#fff8dd,#e4bf68_42%,#7e5c22_100%)] shadow-[0_10px_24px_rgba(214,180,106,0.42)]"
          style={{ height: ball.size, width: ball.size }}
        />
      </div>
    ))}
  </div>
);

const beadColors = [
  { label: "Blue Crystal", base: "#386b9d", edge: "#b8dcff", shadow: "#183750" },
  { label: "Clear Crystal", base: "#cbd8e2", edge: "#ffffff", shadow: "#768792" },
  { label: "Black", base: "#191919", edge: "#777777", shadow: "#050505" },
  { label: "Silver", base: "#aeb9c2", edge: "#f7fafc", shadow: "#5b6670" },
  { label: "Green", base: "#3e795f", edge: "#b8ead2", shadow: "#173e30" },
  { label: "Pink", base: "#c9758f", edge: "#ffd2df", shadow: "#6f3348" },
  { label: "Golden Black", base: "#2a2115", edge: "#d8a85a", shadow: "#090705" },
  { label: "Silver Black", base: "#25282b", edge: "#c7d0d8", shadow: "#08090a" },
  { label: "Black Crystal", base: "#30343a", edge: "#a4b0bc", shadow: "#080a0d" },
];

const charmOptions = [
  { label: "Heart", Icon: Heart },
  { label: "Butterfly", Icon: ButterflyIcon },
  { label: "Leaf", Icon: LeafIcon },
  { label: "Star", Icon: Star },
  { label: "Hanging Balls", Icon: HangingBallsIcon },
];

const beadCount = 16;

const CustomBraceletStudio = () => {
  const [selectedColor, setSelectedColor] = useState(beadColors[0]);
  const [selectedCharm, setSelectedCharm] = useState(charmOptions[0]);
  const [includeSpacerRings, setIncludeSpacerRings] = useState(true);
  const [includeSmallBalls, setIncludeSmallBalls] = useState(false);
  const [customNote, setCustomNote] = useState("");

  const beads = useMemo(
    () => Array.from({ length: beadCount }, (_, index) => {
      const angle = (index / beadCount) * Math.PI * 2 - Math.PI / 2;
      const depth = (Math.sin(angle) + 1) / 2;
      return {
        depth,
        left: 50 + Math.cos(angle) * 39,
        scale: 0.78 + depth * 0.34,
        top: 42 + Math.sin(angle) * 23,
      };
    }),
    []
  );

  const separators = useMemo(
    () => Array.from({ length: beadCount }, (_, index) => {
      const angle = ((index + 0.5) / beadCount) * Math.PI * 2 - Math.PI / 2;
      const depth = (Math.sin(angle) + 1) / 2;
      return {
        depth,
        left: 50 + Math.cos(angle) * 39,
        scale: 0.76 + depth * 0.28,
        top: 42 + Math.sin(angle) * 23,
      };
    }),
    []
  );

  const sendCustomRequest = () => {
    const message = encodeURIComponent(
      `Hi Luxara! I want to request a custom handmade bracelet.\n\nBead colour: ${selectedColor.label}\nCharm: ${selectedCharm.label}\nSpacer rings between beads: ${includeSpacerRings ? "Yes" : "No"}\nSmall balls between beads: ${includeSmallBalls ? "Yes" : "No"}\nCustom note: ${customNote.trim() || "No extra note"}\n\nPlease guide me about availability and final price. Thank you!`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <section className="relative border-y border-white/5 bg-neutral-950 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_32%,rgba(214,180,106,0.16),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-200/15 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.48)] backdrop-blur-md sm:p-8 lg:grid-cols-2 lg:items-start lg:gap-14 lg:p-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 space-y-3 lg:sticky lg:top-28"
        >
          <div className="px-1">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-300/80">
                Your Bracelet
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Choose options to shape your bracelet.
              </p>
            </div>
          </div>

          <div
            className="relative flex items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070707]"
            style={{ minHeight: 'clamp(390px, 120vw, 570px)' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_44%,rgba(214,180,106,0.20),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_38%)]" />
            <div className="absolute inset-5 rounded-[1.35rem] border border-white/[0.07]" />
            <div className="absolute inset-x-[13%] bottom-[14%] h-20 rounded-[50%] bg-black/80 blur-2xl sm:h-24" />
            <div className="absolute inset-x-[18%] bottom-[19%] h-8 rounded-[50%] border border-amber-200/10 bg-amber-200/[0.04] blur-lg" />
            <div className="absolute -left-[18%] top-[18%] h-44 w-72 rotate-[-18deg] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent blur-xl" />
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.2, 0.75] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-[24%] top-[24%] z-50 text-amber-100"
            >
              <Sparkles size={21} />
            </motion.span>
            <motion.span
              animate={{ opacity: [0.15, 0.8, 0.15], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}
              className="absolute bottom-[31%] left-[21%] z-50 text-white"
            >
              <Sparkles size={15} />
            </motion.span>

            <motion.div
              key={`${selectedColor.label}-${selectedCharm.label}-${includeSpacerRings}-${includeSmallBalls}`}
              initial={{ opacity: 0.65, scale: 0.94, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="relative translate-y-3 sm:translate-y-5"
              style={{
                height: 'clamp(17rem, 74vw, 25rem)',
                width: 'min(100%, 29rem)',
              }}
            >
              <div className="absolute left-[11%] right-[11%] top-[19%] h-[46%] rounded-[50%] border border-amber-100/20 shadow-[0_0_65px_rgba(214,180,106,0.16)]" />
              <div className="absolute left-[17%] right-[17%] top-[27%] h-[30%] rounded-[50%] border border-white/[0.05]" />

              {separators.map((separator, index) => (
                <React.Fragment key={`separator-${index}`}>
                  {includeSpacerRings && (
                    <motion.span
                      data-preview-spacer-ring="true"
                      initial={{ opacity: 0, scale: 0.55 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.018, duration: 0.3 }}
                      className="absolute h-[1.05rem] w-[1.05rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#e4bf68] bg-[#120e08] shadow-[0_0_14px_rgba(214,180,106,0.7)] sm:h-[1.25rem] sm:w-[1.25rem]"
                      style={{
                        left: `${separator.left}%`,
                        top: `${separator.top}%`,
                        transform: `translate(-50%, -50%) scale(${separator.scale})`,
                        zIndex: 35 + Math.round(separator.depth * 35),
                      }}
                    />
                  )}
                  {includeSmallBalls && index % 2 === 1 && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.55 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.018, duration: 0.3 }}
                      className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-[radial-gradient(circle_at_30%_25%,#fff6dd,#d6b46a_40%,#725221_100%)] shadow-[0_4px_12px_rgba(214,180,106,0.36)] sm:h-4 sm:w-4"
                      style={{
                        left: `${separator.left}%`,
                        top: `${separator.top}%`,
                        transform: `translate(-50%, -50%) scale(${separator.scale})`,
                        zIndex: 15 + Math.round(separator.depth * 20),
                      }}
                    />
                  )}
                </React.Fragment>
              ))}

              {beads.map((bead, index) => (
                <motion.span
                  key={`${selectedColor.label}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.026, duration: 0.36 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${bead.left}%`,
                    top: `${bead.top}%`,
                    zIndex: 20 + Math.round(bead.depth * 30),
                  }}
                >
                  <span
                    className="relative block h-10 w-10 rounded-full border border-white/35 sm:h-12 sm:w-12"
                    style={{
                      background: `radial-gradient(circle at 28% 22%, rgba(255,255,255,0.98) 0 6%, ${selectedColor.edge} 17%, ${selectedColor.base} 56%, ${selectedColor.shadow} 100%)`,
                      boxShadow: `0 ${7 + bead.depth * 7}px ${16 + bead.depth * 10}px ${selectedColor.shadow}99, inset 4px 4px 7px rgba(255,255,255,0.36), inset -5px -7px 9px rgba(0,0,0,0.3)`,
                      opacity: 0.82 + bead.depth * 0.18,
                      transform: `scale(${bead.scale})`,
                    }}
                  >
                    <span className="absolute left-[19%] top-[16%] h-[18%] w-[18%] rounded-full bg-white/80 blur-[1px]" />
                    <span className="absolute bottom-[18%] right-[16%] h-[12%] w-[18%] rounded-full bg-black/20 blur-[1px]" />
                  </span>
                </motion.span>
              ))}

              {selectedCharm.label === "Hanging Balls" ? (
                <HangingBallAttachments />
              ) : (
                <>
                  <div className="absolute left-1/2 top-[61%] z-[65] h-12 w-px -translate-x-1/2 bg-gradient-to-b from-[#f0d68f] via-[#d6b46a] to-transparent sm:h-14" />
                  <div className="absolute left-1/2 top-[59%] z-[66] h-6 w-6 -translate-x-1/2 rounded-full border-[4px] border-[#e4bf68] bg-[#100c07] shadow-[0_0_18px_rgba(214,180,106,0.52)]" />
                  <div className="absolute left-1/2 top-[73%] z-[70] -translate-x-1/2">
                    <BraceletCharmPreview charm={selectedCharm} />
                  </div>
                </>
              )}
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Colour", value: selectedColor.label },
              { label: "Charm", value: selectedCharm.label },
              { label: "Details", value: includeSpacerRings || includeSmallBalls ? "Custom" : "Minimal" },
            ].map((detail) => (
              <div key={detail.label} className="rounded-2xl border border-white/10 bg-black/25 px-3 py-3 text-center">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{detail.label}</p>
                <p className="mt-1 truncate text-xs text-neutral-200">{detail.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="order-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-200">
            <Palette size={14} />
            Custom Bracelet Studio
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
            Design your own
            <span className="block italic text-amber-200">signature bracelet.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Select your bead colour, charm, and finishing details. The preview updates as you build your handmade Luxara bracelet.
          </p>

          <div className="mt-7 space-y-6">
            <div>
              <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                <Gem size={14} className="text-amber-300" />
                Bead Colour
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {beadColors.map((color) => (
                  <button
                    key={color.label}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`inline-flex items-center gap-2 rounded-2xl border px-3 py-3 text-left text-xs transition-all ${
                      selectedColor.label === color.label
                        ? 'border-amber-300/50 bg-amber-300/15 text-amber-100'
                        : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    <span
                      className="h-4 w-4 shrink-0 rounded-full border border-white/30"
                      style={{ background: `radial-gradient(circle at 30% 25%, #fff, ${color.edge} 24%, ${color.base} 66%, ${color.shadow})` }}
                    />
                    {color.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">Charm</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {charmOptions.map((charm) => {
                  const CharmIcon = charm.Icon;
                  return (
                    <button
                      key={charm.label}
                      type="button"
                      onClick={() => setSelectedCharm(charm)}
                      className={`flex items-center gap-2 rounded-2xl border px-3 py-3 text-xs transition-all ${
                        selectedCharm.label === charm.label
                          ? 'border-amber-300/50 bg-amber-300/15 text-amber-100'
                          : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <CharmIcon size={16} />
                      {charm.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">Between The Beads</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  {
                    label: "Spacer Rings",
                    description: "Metal rings between selected beads",
                    selected: includeSpacerRings,
                    toggle: () => setIncludeSpacerRings(value => !value),
                  },
                  {
                    label: "Small Balls",
                    description: "Tiny hanging-style separator balls",
                    selected: includeSmallBalls,
                    toggle: () => setIncludeSmallBalls(value => !value),
                  },
                ].map((detail) => (
                  <button
                    key={detail.label}
                    type="button"
                    onClick={detail.toggle}
                    className={`flex items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all ${
                      detail.selected
                        ? 'border-amber-300/50 bg-amber-300/15'
                        : 'border-white/10 bg-white/5 hover:border-white/25'
                    }`}
                  >
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      detail.selected ? 'border-amber-200 bg-[#d6b46a] text-black' : 'border-white/20 text-transparent'
                    }`}>
                      <Check size={13} />
                    </span>
                    <span>
                      <span className="block text-xs font-medium text-neutral-200">{detail.label}</span>
                      <span className="mt-1 block text-[11px] leading-4 text-neutral-500">{detail.description}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <label className="block">
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">Custom Note</span>
              <textarea
                value={customNote}
                onChange={(event) => setCustomNote(event.target.value)}
                rows={3}
                placeholder="Tell us the size, initials, colour combination, or any detail you have in mind..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm leading-6 text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-amber-300/45"
              />
            </label>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={sendCustomRequest}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-amber-400/30 bg-[#d6b46a] px-7 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-[0_14px_45px_rgba(214,180,106,0.24)] transition-colors hover:bg-[#e0c07a] sm:w-auto"
          >
            <MessageCircle size={17} />
            Send Custom Request
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomBraceletStudio;
