"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI Voice Assistant",
    subtitle: "Real-Time Media Delivery System",
    description:
      "Architected a scalable real-time audio streaming pipeline via a dual-WebSocket bridge between Twilio and Deepgram, enabling ultra-low-latency multilingual media delivery across concurrent sessions.",
    tags: ["Python", "FastAPI", "Twilio", "Deepgram", "Groq / Llama 3.1"],
    github: "https://github.com/adityagargdev",
    live: null,
  },
  {
    title: "Sports Tournament Manager",
    subtitle: "Multi-Stakeholder Platform",
    description:
      "Full-stack platform replacing manual tournament workflows with automated bracket scheduling, WebSocket-driven live scoring, and role-based dashboards for organizers, teams, and spectators.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "WebSockets"],
    github: "https://github.com/adityagargdev",
    live: null,
  },
  {
    title: "Sports Performance Tracker",
    subtitle: "Analytics Platform · Live",
    description:
      "Multi-role analytics platform with separate dashboards for athletes and coaches — session logging, performance charts, goal tracking, and team management. Deployed on Vercel + Render.",
    tags: ["React", "Node.js", "MongoDB Atlas", "JWT", "Google OAuth", "PWA"],
    github: "https://github.com/adityagargdev/Sports-Tracker",
    live: "https://sports-tracker-sigma.vercel.app",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding border-t border-[#D8D8D3]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-[#4A7C59] tracking-widest uppercase mb-4 font-medium">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-[#D8D8D3] bg-[#F5F5F0] hover:border-[#4A7C59] hover:bg-[#E8F0EA] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#4A7C59] font-medium">{project.subtitle}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-4 py-2 bg-[#1A1A1A] text-[#F5F5F0] rounded-full hover:bg-[#4A7C59] transition-colors duration-200"
                    >
                      Live ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-2 border border-[#D8D8D3] text-[#1A1A1A] rounded-full hover:border-[#1A1A1A] transition-colors duration-200"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <p className="text-[#6B6B6B] leading-relaxed mb-5 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-[#EBEBEB] text-[#1A1A1A] text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
