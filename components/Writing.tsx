"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    title: "On competing at nationals",
    excerpt:
      "What playing badminton at the national level actually taught me — and it wasn't about technique. It was about how you handle the moment before the first point.",
    date: "Coming soon",
    tag: "Sport",
  },
  {
    title: "Why every engineer should play a sport",
    excerpt:
      "There's something about competing under pressure that no side project replicates. Losing a match in front of a crowd is a masterclass in emotional debugging.",
    date: "Coming soon",
    tag: "Reflection",
  },
  {
    title: "Learning to build: my first real project",
    excerpt:
      "The gap between tutorial code and something that actually runs in production is wider than anyone tells you. Here's what I learned shipping my first full-stack app.",
    date: "Coming soon",
    tag: "Tech",
  },
];

export default function Writing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="section-padding border-t border-[#D8D8D3]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-[#4A7C59] tracking-widest uppercase mb-4 font-medium">
            Writing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            Unfiltered thoughts
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-2xl border border-[#D8D8D3] hover:border-[#4A7C59] transition-all duration-300 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2.5 py-1 bg-[#E8F0EA] text-[#4A7C59] rounded-full font-medium">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[#6B6B6B]">{post.date}</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-3 leading-snug group-hover:text-[#4A7C59] transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="mt-6 text-xs text-[#4A7C59] font-medium">
                Read more →
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
