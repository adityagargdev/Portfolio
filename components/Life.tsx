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
    <section id="life" className="border-t border-[#D8D8D3]">
      <div className="overflow-hidden py-5 border-b border-[#D8D8D3] bg-[#1A1A1A]">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="text-sm font-medium text-[#F5F5F0] px-6 opacity-60 shrink-0"
            >
              {item} <span className="text-[#4A7C59] opacity-100">·</span>
            </span>
          ))}
        </div>
      </div>

      <div ref={ref} className="section-padding max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-[#4A7C59] tracking-widest uppercase mb-4 font-medium">
            Life
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            Beyond the code
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-[#D8D8D3] hover:border-[#4A7C59] transition-colors duration-300"
            >
              <span className="text-3xl mb-4 block">{tile.emoji}</span>
              <h3 className="font-bold text-[#1A1A1A] mb-2">{tile.title}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{tile.description}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="rounded-2xl border border-[#D8D8D3] overflow-hidden aspect-square bg-[#EBEBEB] flex items-center justify-center"
          >
            <span className="text-[#6B6B6B] text-sm text-center px-4">
              Add a photo here
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
