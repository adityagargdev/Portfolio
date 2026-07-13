"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const marqueeItems = [
  "Badminton", "Football", "Gym", "Music", "Reading",
  "National Player", "Court Captain", "Sports", "Athletics",
  "Badminton", "Football", "Gym", "Music", "Reading",
  "National Player", "Court Captain", "Sports", "Athletics",
];

const tiles = [
  {
    emoji: "🏸",
    title: "Badminton",
    description:
      "National-level competitor. College team captain at MIT Bengaluru (2023–26). School Sports Captain at DPS Greater Faridabad (2023). The sport that shaped how I think about pressure.",
  },
  {
    emoji: "⚽",
    title: "Football",
    description:
      "A team sport through and through. Playing football taught me positioning — knowing where to be before the ball arrives. Useful on the pitch and in system design.",
  },
  {
    emoji: "🏋️",
    title: "Gym",
    description:
      "Consistent training partner. The gym is where I've learned that showing up matters more than motivation — the most transferable lesson to anything I build.",
  },
  {
    emoji: "🎵",
    title: "Music",
    description:
      "Good music is non-negotiable for deep work sessions. Anything from ambient instrumentals to old school hip-hop depending on the problem I'm debugging.",
  },
  {
    emoji: "📖",
    title: "Reading",
    description:
      "Mostly non-fiction — tech, sports psychology, business. Currently working through whatever I can fit between training and coding sessions.",
  },
];

const photos = [
  { src: "/photo-boat.jpg.jpeg", caption: "Goa", position: "center top" },
  { src: "/photo-trophy-selfie.jpg.jpeg", caption: "On court", position: "center center" },
  { src: "/photo-about.jpg.jpeg", caption: "", position: "center top" },
  { src: "/photo-badminton-kid.jpg.jpeg", caption: "How it started", position: "center center" },
  { src: "/photo-trophy.jpg.jpeg", caption: "One of many", position: "center center" },
];

export default function Life() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <section id="life" className="border-t border-[#E0E0DA]">
      <div className="overflow-hidden py-4 bg-[#141414]">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="text-xs font-semibold text-white/40 px-5 shrink-0 tracking-widest uppercase"
            >
              {item}
              <span className="text-[#3D7A56] opacity-100 ml-5">·</span>
            </span>
          ))}
        </div>
      </div>

      <div ref={ref} className="section-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs text-[#3D7A56] tracking-[0.2em] uppercase mb-4 font-semibold flex items-center gap-3">
            <span className="w-8 h-px bg-[#3D7A56] inline-block" />
            Life
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#141414] leading-tight tracking-tight" style={{ letterSpacing: "-0.025em" }}>
            Beyond the code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-lift p-7 rounded-2xl border border-[#E0E0DA] bg-[#F7F7F2] hover:border-[#3D7A56]/40"
            >
              <span className="text-3xl mb-5 block">{tile.emoji}</span>
              <h3 className="font-bold text-[#141414] mb-2 tracking-tight">{tile.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{tile.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#0C0C0C]" style={{ height: "520px" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={photos[current].src}
                alt={photos[current].caption}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: "contain", objectPosition: photos[current].position }}
              />
            </AnimatePresence>

            {/* Caption */}
            {photos[current].caption && (
              <div className="absolute bottom-4 left-5 z-10">
                <span className="text-xs text-white/60 font-medium tracking-wide">{photos[current].caption}</span>
              </div>
            )}

            {/* Prev / Next */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="transition-all duration-200"
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === current ? "#3D7A56" : "#D0D0CA",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
