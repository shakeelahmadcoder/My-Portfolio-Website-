"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/assests/assest";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

// const CATS = ["all",  "ecommerce", "education", "portfolio"];

const Portfolio = () => {
  // const [active, setActive] = useState("all");

  // const filtered = active === "all"
  //   ? portfolioData
  //   : portfolioData.filter(p => p.category === active);

  return (
    <section id="portfolio" className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">

      {/* ── Header ── */}
      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }} className="text-center mb-14">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-3">Selected Work</p>
        <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 ${syne.className}`}>
          My <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="text-white/35 max-w-xl mx-auto text-sm leading-relaxed">
          Real-world applications built with clean code, fast performance, and business goals in mind.
        </p>
      </motion.div>

      {/* ── Filter tabs ── */}
      {/* <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.45, delay:0.1 }} className="flex flex-wrap justify-center gap-2 mb-12">
        {CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
              ${active === cat
                ? "bg-indigo-600 border-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                : "bg-transparent border-white/10 text-white/45 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/8"
              }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </motion.div> */}

      {/* ── Grid ── */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {portfolioData.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity:0, scale:0.92, y:24 }}
              animate={{ opacity:1, scale:1, y:0 }}
              exit={{ opacity:0, scale:0.92, y:16 }}
              transition={{ duration:0.4, delay: i * 0.06, ease:[0.22,1,0.36,1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0e0e14]
                         hover:border-indigo-500/30 transition-all duration-300
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(99,102,241,0.1)]
                         hover:-translate-y-1"
            >
              {/* top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* image */}
              <div className="relative w-full h-52 overflow-hidden bg-[#0a0a10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* gradient overlay always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0e0e14] to-transparent" />

                {/* category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-semibold text-indigo-300 tracking-widest uppercase">
                  {project.category}
                </div>
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className={`text-base font-bold text-white mb-1.5 ${syne.className}`}>{project.title}</h3>
                <p className="text-white/35 text-xs leading-relaxed line-clamp-2 mb-4">{project.description}</p>

                {/* tech tags */}
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-indigo-500/8 border border-indigo-500/15 rounded-md text-[10px] text-indigo-300">{t}</span>
                    ))}
                  </div>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400
                             hover:text-white transition-colors duration-200 group/link"
                >
                  Visit Project
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* empty state
      {filtered.length === 0 && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} className="text-center py-20 text-white/25 text-sm">
          No projects in this category yet.
        </motion.div>
      )} */}
    </section>
  );
};

export default Portfolio;