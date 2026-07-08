"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32 relative">
      <div className="max-w-4xl">
        <motion.p
          {...fadeUp(0.1)}
          className="text-sm text-[#4A7C59] font-medium tracking-widest uppercase mb-6"
        >
          Aditya Garg · MIT Bengaluru &apos;27
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#1A1A1A] mb-8"
        >
          I build things
          <br />
          that run{" "}
          <span className="text-[#4A7C59]">fast.</span>
          <br />
          On courts and
          <br />
          in production.
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-lg text-[#6B6B6B] max-w-xl mb-12 leading-relaxed"
        >
          CS undergrad, national-level badminton player, and builder of real-time
          systems. I care about things that actually work — at speed.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex items-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#1A1A1A] text-[#F5F5F0] rounded-full text-sm font-medium hover:bg-[#4A7C59] transition-colors duration-300"
          >
            View my work
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-[#D8D8D3] text-[#1A1A1A] rounded-full text-sm font-medium hover:border-[#1A1A1A] transition-colors duration-300"
          >
            About me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#6B6B6B] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-[#D8D8D3]" />
      </motion.div>
    </section>
  );
}
