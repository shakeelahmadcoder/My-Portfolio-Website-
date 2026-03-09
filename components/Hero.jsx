"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaWhatsapp, FaTimes } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { assests } from "@/assests/assest";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

const ROLES   = ["MERN Stack Developer", "Next.js App Builder", "REST API Engineer", "Full Stack Developer"];
const SOCIALS = [
  { icon: <TiSocialLinkedin />, href: "https://www.linkedin.com/in/shakeel-ahmed-a87a6a314", cls: "hover:text-blue-500 hover:border-blue-500/40" },
  { icon: <ImGithub />,         href: "https://github.com/shakeelahmadcoder",                cls: "hover:text-white hover:border-white/30" },
  { icon: <SlSocialInstagram />,href: "https://www.instagram.com/developer_shakeel",         cls: "hover:text-pink-400 hover:border-pink-400/40" },
  { icon: <FaTwitter />,        href: "https://twitter.com",                                 cls: "hover:text-sky-400 hover:border-sky-400/40" },
];
const SKILLS  = [
  [<FaReact />,       "React.js",    "text-blue-400"],
  [<SiNextdotjs />,   "Next.js",     "text-white"],
  [<FaNodeJs />,      "Node.js",     "text-green-400"],
  [<SiExpress />,     "Express.js",  "text-gray-300"],
  [<SiMongodb />,     "MongoDB",     "text-green-500"],
  [<SiJavascript />,  "JavaScript",  "text-yellow-400"],
  [<SiTailwindcss />, "Tailwind",    "text-cyan-400"],
];
const PILLS   = [
  { icon: <FaNodeJs className="text-green-400 text-xl" />,  label: "Node.js",  sub: "Backend",  pos: "-top-3 -left-8",  delay: 0    },
  { icon: <SiNextdotjs className="text-white text-xl" />,   label: "Next.js",  sub: "Frontend", pos: "-top-3 -right-8", delay: 0.7  },
  { icon: <SiMongodb className="text-green-500 text-xl" />, label: "MongoDB",  sub: "Database", pos: "-bottom-3 -left-8", delay: 1.2 },
  { icon: <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />, label: "Available", sub: "For Projects", pos: "-bottom-3 -right-8", delay: 0.4, green: true },
];
const WA = "https://wa.me/923142239460?text=Hi%20Shakeel!%20I%20need%20a%20MERN%2FNext.js%20app%20built.";

export default function Hero() {
  const [modal, setModal] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);

  useEffect(() => { const t = setInterval(() => setRoleIdx(i => (i+1) % ROLES.length), 2800); return () => clearInterval(t); }, []);
  useEffect(() => { document.body.style.overflow = modal ? "hidden" : ""; }, [modal]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* BG orbs + dot grid */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage:"radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize:"30px 30px", maskImage:"radial-gradient(ellipse 80% 80% at 50% 40%,black 30%,transparent 100%)" }} />
        <motion.div animate={{ scale:[1,1.2,1], opacity:[0.12,0.2,0.12] }} transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }} className="absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full" style={{ background:"radial-gradient(circle,rgba(99,102,241,0.18) 0%,transparent 65%)" }} />
        <motion.div animate={{ scale:[1,1.25,1], opacity:[0.07,0.13,0.07] }} transition={{ duration:11, repeat:Infinity, ease:"easeInOut", delay:3 }} className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full" style={{ background:"radial-gradient(circle,rgba(249,115,22,0.1) 0%,transparent 65%)" }} />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_460px] items-center gap-8 pt-28 pb-16">

        {/* ── LEFT ── */}
        <div>
          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="inline-flex items-center gap-2.5 bg-green-500/8 border border-green-500/20 text-green-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Open to Work · Remote Worldwide
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.08 }} className={`text-[clamp(2.2rem,4vw,3.6rem)] font-extrabold leading-[1.0] tracking-[-0.04em] text-white mb-5 ${syne.className}`}>
            I Build Web Apps<br /><span className="text-indigo-400">That Get Results.</span>
          </motion.h1>

          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.18 }} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-indigo-500/60 flex-shrink-0" />
            <AnimatePresence mode="wait">
              <motion.span key={ROLES[roleIdx]} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-6 }} transition={{ duration:0.3 }} className="text-base sm:text-lg text-indigo-300 font-medium">
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.26 }} className="text-white/40 text-[15px] leading-[1.85] mb-9 max-w-[500px]">
            I build <span className="text-white/80 font-medium">fast, scalable, production-ready</span> web applications using MERN Stack & Next.js — clean code, modern UI, and <span className="text-white/80 font-medium">real results for your business.</span>
          </motion.p>

          <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.34 }} className="flex flex-wrap gap-3 mb-12">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_36px_rgba(99,102,241,0.55)] hover:-translate-y-0.5">
              <FaWhatsapp className="text-green-300 text-base" /> Start a Project
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
            </a>
            <button onClick={() => setModal(true)} className="inline-flex items-center gap-2 border border-white/10 hover:border-indigo-500/40 text-white/50 hover:text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-indigo-500/8">
              About Me →
            </button>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5, delay:0.5 }} className="flex flex-wrap gap-8 pt-6 border-t border-white/6">
            {[["20","Projects Delivered"],["3","Years Experience"],["15","Happy Clients"],["5","Live Apps"]].map(([n,l]) => (
              <div key={l}><div className={`text-[1.75rem] font-bold text-white leading-none ${syne.className}`}>{n}<span className="text-indigo-500">+</span></div><div className="text-xs text-white/30 mt-1">{l}</div></div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Photo Card ── */}
        <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.2, ease:[0.22,1,0.36,1] }} style={{ y: imgY }} className="hidden lg:flex justify-center">
          <div className="relative w-full">
            <div className="group relative overflow-hidden rounded-[28px] border border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.55)]">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
              <div className="relative w-full aspect-[4/5]">
                {/* 👇 Replace assests.logo with your real portrait photo */}
                <Image src={assests.logo} alt="Shakeel Ahmed" fill priority className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#0a0a10] via-[#0a0a10]/60 to-transparent" />
              </div>
              <div className="px-5 pt-2 pb-5 bg-[#0a0a10]">
                <div className={`text-base font-bold text-white ${syne.className}`}>Shakeel Ahmed</div>
                <div className="text-[10px] text-indigo-400/70 tracking-widest uppercase mt-0.5">MERN · Next.js Developer</div>
              </div>
            </div>

            {/* Floating pills */}
            {PILLS.map(({ icon, label, sub, pos, delay, green }) => (
              <motion.div key={label} animate={{ y:[0,-8,0] }} transition={{ duration:3.5+delay, repeat:Infinity, ease:"easeInOut", delay }} className={`absolute ${pos} flex items-center gap-2 bg-[#0e0e16] border ${green?"border-green-500/25":"border-white/10"} rounded-2xl px-3.5 py-2.5 shadow-2xl`}>
                {icon}
                <div>
                  <div className={`text-[11px] font-bold leading-none ${green?"text-green-400":"text-white"}`}>{label}</div>
                  <div className="text-[9px] text-white/30 mt-0.5">{sub}</div>
                </div>
              </motion.div>
            ))}

            <div className="absolute inset-0 -z-10 rounded-[28px] bg-indigo-600/12 blur-3xl scale-110 -translate-y-6" />
          </div>
        </motion.div>
      </div>

      {/* Vertical socials */}
      <div className="hidden xl:flex flex-col items-center gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <div className="w-px h-10 bg-white/8" />
        {SOCIALS.map(({ icon, href, cls }, i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 flex items-center justify-center rounded-xl border border-white/8 bg-white/4 text-white/30 text-[15px] transition-all duration-300 hover:-translate-x-1 hover:shadow-lg ${cls}`}>{icon}</a>
        ))}
        <div className="w-px h-10 bg-white/8" />
      </div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {modal && (
          <motion.div key="bd" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-[80] flex items-center justify-center px-4 bg-black/75 backdrop-blur-md" onClick={() => setModal(false)}>
            <motion.div key="box" initial={{ scale:0.92, opacity:0, y:24 }} animate={{ scale:1, opacity:1, y:0 }} exit={{ scale:0.95, opacity:0, y:12 }} transition={{ type:"spring", damping:26, stiffness:260 }} onClick={e => e.stopPropagation()} className="relative w-full max-w-2xl bg-[#0d0d12] border border-white/8 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.7)] overflow-hidden">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-7 sm:p-8">
                  <div className="text-xs font-bold tracking-widest uppercase text-indigo-500 mb-1">Who Am I</div>
                  <h2 className={`text-2xl font-bold text-white mb-4 ${syne.className}`}>Shakeel Ahmed</h2>
                  <p className="text-white/40 text-sm leading-[1.85] mb-6">I build <span className="text-white/80 font-medium">complete MERN Stack & Next.js applications</span> — pixel-perfect UI to robust APIs & MongoDB. Focused on <span className="text-white/80 font-medium">performance and real business results.</span></p>
                  <div className="grid grid-cols-3 gap-2">
                    {SKILLS.map(([icon, label, color]) => (
                      <div key={label} className="flex items-center gap-2 bg-white/3 hover:bg-white/6 border border-white/6 hover:border-indigo-500/20 rounded-lg px-2.5 py-2 transition-all group cursor-default">
                        <span className={`text-sm flex-shrink-0 ${color} group-hover:scale-110 transition-transform`}>{icon}</span>
                        <span className="text-[11px] text-white/40 group-hover:text-white/75 transition-colors">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sm:w-48 bg-white/[0.018] border-t sm:border-t-0 sm:border-l border-white/6 flex flex-col items-center justify-center gap-4 p-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10">
                    <Image src={assests.logo} alt="Shakeel Ahmed" fill className="object-cover object-top" />
                  </div>
                  <div className="text-center">
                    <div className={`text-sm font-bold text-white ${syne.className}`}>Shakeel Ahmed</div>
                    <div className="text-[10px] text-indigo-400/70 tracking-widest uppercase mt-0.5">MERN · Next.js Dev</div>
                  </div>
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    <FaWhatsapp className="text-green-300" /> Hire Me Now
                  </a>
                </div>
              </div>
              <button onClick={() => setModal(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                <FaTimes className="text-xs" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}