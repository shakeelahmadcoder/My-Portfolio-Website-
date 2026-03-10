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

const ROLES = [
  "MERN Stack Developer",
  "Next.js App Builder",
  "REST API Engineer",
  "Full Stack Developer",
];
const SOCIALS = [
  { icon: <TiSocialLinkedin />, href: "https://www.linkedin.com/in/shakeel-ahmed-a87a6a314", cls: "hover:text-blue-500 hover:border-blue-500/40" },
  { icon: <ImGithub />,         href: "https://github.com/shakeelahmadcoder",               cls: "hover:text-white hover:border-white/30" },
  { icon: <SlSocialInstagram />,href: "https://www.instagram.com/developer_shakeel",        cls: "hover:text-pink-400 hover:border-pink-400/40" },
  { icon: <FaTwitter />,        href: "https://twitter.com",                                cls: "hover:text-sky-400 hover:border-sky-400/40" },
];
const SKILLS = [
  [<FaReact />,       "React.js",   "text-blue-400"],
  [<SiNextdotjs />,   "Next.js",    "text-white"],
  [<FaNodeJs />,      "Node.js",    "text-green-400"],
  [<SiExpress />,     "Express.js", "text-gray-300"],
  [<SiMongodb />,     "MongoDB",    "text-green-500"],
  [<SiJavascript />,  "JavaScript", "text-yellow-400"],
  [<SiTailwindcss />, "Tailwind",   "text-cyan-400"],
];
const PILLS = [
  { icon: <FaNodeJs className="text-green-400 text-lg" />,  label: "Node.js",  sub: "Backend",      pos: "top-[18%] -left-[4.5rem]",    delay: 0   },
  { icon: <SiNextdotjs className="text-white text-lg" />,   label: "Next.js",  sub: "Frontend",     pos: "top-[18%] -right-[4.5rem]",   delay: 0.7 },
  { icon: <SiMongodb className="text-green-500 text-lg" />, label: "MongoDB",  sub: "Database",     pos: "bottom-[18%] -left-[4.5rem]", delay: 1.2 },
  {
    icon: <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />,
    label: "Available", sub: "For Projects", pos: "bottom-[18%] -right-[4.5rem]", delay: 0.4, green: true,
  },
];
const WA = "https://wa.me/923142239460?text=Hi%20Shakeel!%20I%20need%20a%20MERN%2FNext.js%20app%20built.";

/* ─── tiny reusable typed-counter ─── */
function Counter({ target }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setVal(target); clearInterval(t); }
      else setVal(start);
    }, 40);
    return () => clearInterval(t);
  }, [target]);
  return <>{val}</>;
}

export default function Hero() {
  const [modal, setModal]     = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);
  useEffect(() => { document.body.style.overflow = modal ? "hidden" : ""; }, [modal]);

  /* stagger helper */
  const fade = (delay = 0) => ({
    initial:    { opacity: 0, y: 20 },
    animate:    { opacity: 1, y: 0  },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background layer ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        {/* dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize:  "28px 28px",
            maskImage:       "radial-gradient(ellipse 85% 80% at 50% 40%, black 25%, transparent 100%)",
          }}
        />
        {/* indigo orb */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.13, 0.22, 0.13] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 65%)" }}
        />
        {/* orange orb */}
        <motion.div
          animate={{ scale: [1, 1.22, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/3 right-0 w-[480px] h-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)" }}
        />
        {/* subtle bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] items-center gap-10 pt-28 pb-16">

        {/* ════ LEFT ════ */}
        <div>

          {/* open-to-work badge */}
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-green-500/8 border border-green-500/20 text-green-400 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-2 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to Work · Remote Worldwide
          </motion.div>

          {/* ── Main heading — fixed size ── */}
          <motion.h1
            {...fade(0.08)}
            className={`text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white mb-5 ${syne.className}`}
          >
            I Build Websites &amp; Apps<br />
            <span className="text-indigo-400">That Grow Your Business.</span>
          </motion.h1>

          {/* rolling role */}
          <motion.div {...fade(0.18)} className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-indigo-500/60 flex-shrink-0" />
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIdx]}
                initial={{ opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -7 }}
                transition={{ duration: 0.28 }}
                className="text-sm sm:text-base text-indigo-300 font-semibold"
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* ── Tech stack pill row (NEW) ── */}
          <motion.div {...fade(0.24)} className="flex flex-wrap gap-2 mb-6">
            {[
              { icon: <SiNextdotjs className="text-white" />,        label: "Next.js",    bg: "bg-white/5 border-white/10"      },
              { icon: <FaReact className="text-blue-400" />,         label: "React",      bg: "bg-blue-500/8 border-blue-500/20" },
              { icon: <FaNodeJs className="text-green-400" />,       label: "Node.js",    bg: "bg-green-500/8 border-green-500/20" },
              { icon: <SiJavascript className="text-yellow-400" />,  label: "Custom Code",bg: "bg-yellow-500/8 border-yellow-500/20" },
            ].map(({ icon, label, bg }) => (
              <span key={label} className={`inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/60 border rounded-full px-3 py-1 ${bg} transition-all duration-200 hover:text-white/90`}>
                {icon} {label}
              </span>
            ))}
          </motion.div>

          {/* description */}
          <motion.p {...fade(0.3)} className="text-white/40 text-sm leading-[1.9] mb-8 max-w-[480px]">
            I build{" "}
            <span className="text-white/80 font-medium">modern websites and web apps</span> using{" "}
            <span className="text-indigo-300 font-semibold">Next.js &amp; custom full-stack code</span> — for
            businesses that want clean design, fast performance, and{" "}
            <span className="text-white/80 font-medium">solutions that actually work.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fade(0.37)} className="flex flex-wrap gap-3 mb-11">
            <a
              href={WA} target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_34px_rgba(99,102,241,0.5)] hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-green-300 text-base" />
              Start a Project
              <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
            </a>
            <button
              onClick={() => setModal(true)}
              className="inline-flex items-center gap-2 border border-white/10 hover:border-indigo-500/40 text-white/50 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:bg-indigo-500/8"
            >
              About Me →
            </button>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-7 pt-6 border-t border-white/6"
          >
            {[["20","Projects Delivered"],["3","Years Experience"],["15","Happy Clients"],["5","Live Apps"]].map(([n, l]) => (
              <motion.div key={l} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className={`text-2xl sm:text-3xl font-bold text-white leading-none ${syne.className}`}>
                  <Counter target={parseInt(n)} /><span className="text-indigo-500">+</span>
                </div>
                <div className="text-[11px] text-white/30 mt-1 tracking-wide">{l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ════ RIGHT — Photo Card ════ */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.96 }}
          animate={{ opacity: 1, x: 0,  scale: 1     }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: imgY }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-full">

            {/* card */}
            <div className="group relative overflow-hidden rounded-[26px] border border-white/8 shadow-[0_28px_70px_rgba(0,0,0,0.6)]">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/55 to-transparent" />
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={assests.logo}
                  alt="Shakeel Ahmed"
                  fill priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#0a0a10] via-[#0a0a10]/55 to-transparent" />

                {/* "Built with Next.js" chip inside image */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5"
                >
                  <SiNextdotjs className="text-white text-xs" />
                  <span className="text-[10px] font-semibold text-white/70 tracking-widest uppercase">Next.js Dev</span>
                </motion.div>
              </div>

              {/* card footer */}
              <div className="px-5 pt-2.5 pb-5 bg-[#0a0a10]">
                <div className={`text-sm font-bold text-white ${syne.className}`}>Shakeel Ahmed</div>
                <div className="text-[10px] text-indigo-400/70 tracking-widest uppercase mt-0.5">MERN · Next.js · Custom Code</div>
              </div>
            </div>

            {/* Pills wrapper — aspect-[4/5] matches image area only, so top/bottom % aligns to image not footer */}
            <div className="absolute inset-x-0 top-[4px] aspect-[4/5] pointer-events-none z-20">
              {PILLS.map(({ icon, label, sub, pos, delay, green }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1   }}
                  transition={{ delay: 0.6 + delay, duration: 0.45, type: "spring", stiffness: 220 }}
                  className={`absolute ${pos}`}
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
                    className={`flex items-center gap-2 bg-[#0e0e16] border ${green ? "border-green-500/25" : "border-white/10"} rounded-2xl px-3 py-2.5 shadow-2xl pointer-events-auto`}
                  >
                    {icon}
                    <div>
                      <div className={`text-[11px] font-bold leading-none ${green ? "text-green-400" : "text-white"}`}>{label}</div>
                      <div className="text-[9px] text-white/30 mt-0.5">{sub}</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* glow behind card */}
            <div className="absolute inset-0 -z-10 rounded-[26px] bg-indigo-600/14 blur-3xl scale-110 -translate-y-6" />
          </div>
        </motion.div>
      </div>

      {/* ── Vertical socials ── */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0  }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="hidden xl:flex flex-col items-center gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-px h-10 bg-white/8" />
        {SOCIALS.map(({ icon, href, cls }, i) => (
          <motion.a
            key={i} href={href} target="_blank" rel="noopener noreferrer"
            whileHover={{ x: -3, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-8 h-8 flex items-center justify-center rounded-xl border border-white/8 bg-white/4 text-white/30 text-[15px] transition-colors duration-300 hover:shadow-lg ${cls}`}
          >
            {icon}
          </motion.a>
        ))}
        <div className="w-px h-10 bg-white/8" />
      </motion.div>

      {/* ════ MODAL ════ */}
      <AnimatePresence>
        {modal && (
          <motion.div
            key="bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
            onClick={() => setModal(false)}
          >
            <motion.div
              key="box"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1,   opacity: 1, y: 0  }}
              exit={{ scale: 0.95, opacity: 0, y: 14  }}
              transition={{ type: "spring", damping: 24, stiffness: 250 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0d0d12] border border-white/8 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.75)] overflow-hidden"
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-7 sm:p-8">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-indigo-500 mb-1">Who Am I</div>
                  <h2 className={`text-xl font-bold text-white mb-4 ${syne.className}`}>Shakeel Ahmed</h2>
                  <p className="text-white/40 text-sm leading-[1.85] mb-6">
                    I build{" "}
                    <span className="text-white/80 font-medium">complete MERN Stack &amp; Next.js applications</span>
                    {" "}— pixel-perfect UI to robust APIs &amp; MongoDB. Every line is{" "}
                    <span className="text-indigo-300 font-medium">custom-coded</span>, no templates, focused on{" "}
                    <span className="text-white/80 font-medium">performance and real business results.</span>
                  </p>
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
                  <a
                    href={WA} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  >
                    <FaWhatsapp className="text-green-300" /> Hire Me Now
                  </a>
                </div>
              </div>
              <button
                onClick={() => setModal(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaTimes className="text-xs" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}