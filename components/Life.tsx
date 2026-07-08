"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export default function Life() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

        {/* Photo grid — natural sizes, no cropping */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 columns-2 md:columns-3 gap-4 space-y-4"
        >
          {[
            { src: "/photo-boat.jpg.jpeg", alt: "On a boat in Goa" },
            { src: "/photo-trophy-selfie.jpg.jpeg", alt: "Trophy on court" },
            { src: "/photo-about.jpg.jpeg", alt: "Aditya Garg" },
            { src: "/photo-badminton-kid.jpg.jpeg", alt: "Young Aditya playing badminton" },
            { src: "/photo-trophy.jpg.jpeg", alt: "Receiving trophy" },
          ].map((photo) => (
            <div
              key={photo.src}
              className="break-inside-avoid rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 4px 20px -4px rgba(20,20,20,0.10)" }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
