"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "Email", value: "adityacharchitgarg@gmail.com", href: "mailto:adityacharchitgarg@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/aditya-gargdev", href: "https://linkedin.com/in/aditya-gargdev" },
  { label: "GitHub", value: "github.com/adityagargdev", href: "https://github.com/adityagargdev" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding border-t border-[#D8D8D3]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-xs text-[#4A7C59] tracking-widest uppercase mb-4 font-medium">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
            Let&apos;s talk.
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed">
            Whether it&apos;s a project, an opportunity, or just a good conversation —
            I&apos;m always up for it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 px-8 py-5 rounded-2xl border border-[#D8D8D3] hover:border-[#4A7C59] hover:bg-[#E8F0EA] transition-all duration-300 min-w-[200px] text-center"
            >
              <span className="text-xs text-[#6B6B6B] uppercase tracking-widest">{link.label}</span>
              <span className="text-sm font-medium text-[#1A1A1A]">{link.value}</span>
            </a>
          ))}
        </motion.div>

        <div className="flex items-center justify-between text-xs text-[#6B6B6B] border-t border-[#D8D8D3] pt-8">
          <span>© 2026 Aditya Garg</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </section>
  );
}
