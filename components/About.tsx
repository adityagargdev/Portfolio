"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tags = [
  "National Badminton Player",
  "College Team Captain",
  "Full-Stack Dev",
  "Football & Gym",
  "Avid Reader",
  "MIT Bengaluru '27",
];

const stats = [
  { value: "7+", label: "Projects shipped" },
  { value: "National", label: "Badminton player" },
  { value: "Captain", label: "MIT Bengaluru team" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding border-t border-[#E0E0DA]">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs text-[#3D7A56] tracking-[0.2em] uppercase mb-6 font-semibold flex items-center gap-3">
            <span className="w-8 h-px bg-[#3D7A56] inline-block" />
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#141414] mb-8 leading-tight tracking-tight" style={{ letterSpacing: "-0.025em" }}>
            Ended up in CS.
            <br />
            <span className="text-[#6B6B6B] font-light">Glad I did.</span>
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-5 text-[15px]">
            I was a national-level badminton player through school. A bad injury in class 10 ended that chapter. I landed in Computer Science at MIT Bengaluru — not because I had some grand plan, but because I needed somewhere to go. Turns out I actually like it here.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-5 text-[15px]">
            I captained my college badminton team — which sounds straightforward until you realise badminton is an individual sport. Representing college turns it into a team fixture: win 3 of 5 matches or you lose. So you&apos;re making lineup calls, managing people&apos;s nerves, lifting morale after losses. We lost a lot. I got good at that part.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-5 text-[15px]">
            Back in school I was Sports Captain at DPS Greater Faridabad — an elected position on the student council. Had to actually campaign for it, win votes, then spend a year being responsible for everything sports-related across the school. Different kind of pressure to the court.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-10 text-[15px]">
            Outside of code I&apos;m usually somewhere between the gym, a football pitch, a playlist, a book, or a trip. I like to dance but cannot dance. I will quote a TV show at you if the line fits — and it always fits.
          </p>

          <div className="flex gap-8 mb-10 pb-10 border-b border-[#E0E0DA]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-[#141414] tracking-tight">{s.value}</div>
                <div className="text-xs text-[#6B6B6B] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-[#E6F0EB] text-[#3D7A56] text-xs font-semibold rounded-full border border-[#3D7A56]/15"
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
        >
          <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative"
            style={{ boxShadow: "0 20px 60px -15px rgba(20,20,20,0.15)" }}
          >
            <img
              src="/photo-temple.jpg.jpeg"
              alt="Aditya Garg"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
