"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  liveLabel?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Pepper & Pine — AI Voice Receptionist",
    subtitle: "Restaurant AI Platform · Real-Time Ops Dashboard",
    description:
      "Built a full AI voice receptionist for a restaurant — customers call in and speak naturally to book tables, place dine-in or takeaway orders, and check order status. All actions reflect live on a Next.js ops dashboard via Supabase real-time, giving staff instant visibility without touching a phone.",
    tags: ["Python", "LiveKit", "Deepgram STT", "Groq / Llama 3.3", "ElevenLabs TTS", "Supabase", "Next.js"],
    github: "https://github.com/adityagargdev/restaurant-ai",
    live: "https://web-azure-one-59.vercel.app/",
  },
  {
    number: "02",
    title: "TopSeed — Sports Tournament Manager",
    subtitle: "Multi-Sport Tournament Platform · Live",
    description:
      "Lets organizers spin up a full tournament in minutes — auto-generated single/double-elimination and round-robin brackets with seeded BYE placement, singles/doubles/team events under one roof, and sport-specific scoring rules for everything from badminton sets to football match time. Scores and bracket state push live to every viewer over Socket.io, entry fees run through Razorpay, and a Super Admin → Admin → User role system lets organizers delegate management without losing control.",
    tags: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "Razorpay"],
    github: "https://github.com/adityagargdev/topseed",
    live: "https://topseed-lilac.vercel.app/",
  },
  {
    number: "03",
    title: "RadioGlobe",
    subtitle: "Interactive Music Explorer · Client-Side",
    description:
      "Spin a 3D globe to any country and instantly stream that region's Apple Music Top 50 with 30-second previews. Drag to rotate, hit Spin to fly somewhere random, skip or pause tracks — all client-side, no backend, no API keys.",
    tags: ["JavaScript", "globe.gl", "Three.js", "iTunes RSS API", "GeoJSON"],
    github: "https://github.com/adityagargdev/radio-head",
    live: "https://radio-head-seven.vercel.app",
  },
  {
    number: "04",
    title: "Sports Performance Tracker",
    subtitle: "Analytics Platform · Live",
    description:
      "Multi-role analytics platform with separate dashboards for athletes and coaches — session logging, performance charts, goal tracking, and team management. Deployed on Vercel + Render.",
    tags: ["React", "Node.js", "MongoDB Atlas", "JWT", "Google OAuth", "PWA"],
    github: "https://github.com/adityagargdev/Sports-Tracker",
    live: "https://sports-tracker-sigma.vercel.app",
  },
  {
    number: "05",
    title: "ShuttleVision",
    subtitle: "Badminton Match Analytics · CV/ML Desktop App",
    description:
      "Upload a match video or paste a YouTube link and get a full tactical breakdown — TrackNetV2 tracks the shuttle frame-by-frame, OpenCV maps the court via homography, and a rule-based classifier tags every shot as a smash, clear, drop, lift, drive, or net. Explore it across a 7-tab dashboard: heatmaps, rally-by-rally trajectories, speed histograms, and an AI coach powered by Llama 3.3 70B that answers questions about your own match data.",
    tags: ["Python", "PyTorch", "TrackNetV2", "YOLOv8", "OpenCV", "Electron", "React"],
    github: "https://github.com/adityagargdev/ShuttleVision",
    live: "https://github.com/adityagargdev/ShuttleVision/releases/tag/v1.0.0",
    liveLabel: "Download",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding border-t border-[#E0E0DA]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <p className="text-xs text-[#3D7A56] tracking-[0.2em] uppercase mb-4 font-semibold flex items-center gap-3">
              <span className="w-8 h-px bg-[#3D7A56] inline-block" />
              Work
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#141414] leading-tight tracking-tight" style={{ letterSpacing: "-0.025em" }}>
              Things I&apos;ve built
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-lift group p-8 md:p-10 rounded-2xl border border-[#E0E0DA] bg-[#F7F7F2] hover:border-[#3D7A56]/40"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-5">
                <div className="flex items-start gap-5">
                  <span
                    className="text-xs font-bold text-[#D0D0CA] mt-1 shrink-0 tracking-widest"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#141414] mb-1 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#3D7A56] font-medium">{project.subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-3 shrink-0 md:mt-1">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-4 py-2 bg-[#141414] text-[#F7F7F2] rounded-full hover:bg-[#3D7A56] transition-colors duration-200 font-medium"
                    >
                      {project.liveLabel ?? "Live"} ↗
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-2 border border-[#E0E0DA] text-[#141414] rounded-full hover:border-[#141414] transition-colors duration-200 font-medium"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <p className="text-[#6B6B6B] leading-relaxed mb-6 text-sm md:text-base ml-0 md:ml-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 md:ml-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#EFEFEA] text-[#141414] text-xs rounded-full font-medium border border-[#E0E0DA]"
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
