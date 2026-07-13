"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    title: "The comeback you don't forget",
    excerpt:
      "Five nationals, same nerves every time. The match I think about most — 12-19 down in the second set, one set already gone. I just didn't decide it was over, and apparently that was enough.",
    date: "On Medium",
    tag: "Sport",
    link: "https://medium.com/@adityacharchitgarg/the-comeback-you-dont-forget-7f420a8ccf1e",
  },
  {
    title: "It's not discipline. It's belief.",
    excerpt:
      "Everyone says sport teaches discipline. None of that is the interesting part. What it actually gave me is harder to name — a baseline certainty that things get solved if you stay in them long enough.",
    date: "On Medium",
    tag: "Reflection",
    link: "https://medium.com/@adityacharchitgarg/its-not-discipline-it-s-belief-82a96478a141",
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

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-2xl border border-[#D8D8D3] hover:border-[#4A7C59] transition-all duration-300 group no-underline"
              style={{ cursor: post.link ? "pointer" : "default" }}
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
              <div className="mt-6 text-xs font-medium" style={{ color: post.link ? "#4A7C59" : "#B0B0AA" }}>
                {post.link ? "Read on Medium →" : "Publishing soon →"}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
