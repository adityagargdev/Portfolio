"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center section-padding pt-32 relative overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
        }}
      />

      {/* Green glow blob */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(61,122,86,0.18) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }}
      />

      <div className="max-w-4xl relative z-10">
        <motion.p
          {...fadeUp(0.1)}
          className="text-sm font-medium tracking-widest uppercase mb-6"
          style={{ color: "#3D7A56" }}
        >
          Aditya Garg · MIT Bengaluru &apos;27
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
          style={{ color: "#F7F7F2" }}
        >
          I build things
          <br />
          that run{" "}
          <span style={{ color: "#3D7A56" }}>fast.</span>
          <br />
          On courts and
          <br />
          in production.
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="text-lg max-w-xl mb-12 leading-relaxed"
          style={{ color: "rgba(247,247,242,0.5)" }}
        >
          CS undergrad, national-level badminton player, and builder of real-time
          systems. I care about things that actually work — at speed.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex items-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300"
            style={{ background: "#F7F7F2", color: "#0C0C0C" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.background = "#3D7A56"; (e.target as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.background = "#F7F7F2"; (e.target as HTMLElement).style.color = "#0C0C0C"; }}
          >
            View my work
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300"
            style={{ border: "1px solid rgba(247,247,242,0.15)", color: "rgba(247,247,242,0.7)" }}
            onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "rgba(247,247,242,0.4)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(247,247,242,0.15)"; }}
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
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(247,247,242,0.3)" }}>Scroll</span>
        <div className="w-px h-10" style={{ background: "rgba(247,247,242,0.15)" }} />
      </motion.div>
    </section>
  );
}
