"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tags = [
  "National Badminton Player",
  "College Team Captain",
  "Real-Time Systems",
  "Full-Stack Dev",
  "Sports Enthusiast",
  "MIT Bengaluru '27",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding border-t border-[#D8D8D3]">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-[#4A7C59] tracking-widest uppercase mb-4 font-medium">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
            Engineer on screen,
            <br />
            athlete everywhere else.
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-6">
            I&apos;m a Computer Science undergrad at Manipal Institute of Technology,
            Bengaluru. I build real-time systems — AI pipelines, sports platforms,
            full-stack applications — things that need to be fast and reliable.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-10">
            Outside of code, I&apos;ve competed in badminton at the national level,
            captained my college team, and led my school as Sports Captain. Sport
            taught me discipline, competition, and how to lose well — probably the
            most useful things I know.
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-[#E8F0EA] text-[#4A7C59] text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <div className="w-full aspect-[4/5] rounded-2xl bg-[#EBEBEB] border border-[#D8D8D3] flex items-center justify-center overflow-hidden">
            <span className="text-[#6B6B6B] text-sm">Your photo here</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
