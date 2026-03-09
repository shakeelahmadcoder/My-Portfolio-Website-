"use client";

import Link from "next/link";
import { FaWhatsapp, FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TiSocialLinkedin, TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

const SOCIALS = [
  { icon: <TiSocialLinkedin />, href: "https://www.linkedin.com/in/shakeel-ahmed-a87a6a314", cls: "hover:text-blue-500 hover:border-blue-500/30" },
  { icon: <ImGithub />,         href: "https://github.com/shakeelahmadcoder",                cls: "hover:text-white hover:border-white/30" },
  { icon: <SlSocialInstagram />,href: "https://www.instagram.com/developer_shakeel",         cls: "hover:text-pink-400 hover:border-pink-400/30" },
  { icon: <FaTwitter />,        href: "https://twitter.com",                                 cls: "hover:text-sky-400 hover:border-sky-400/30" },
  { icon: <TiSocialFacebookCircular />, href: "https://www.facebook.com/profile.php?id=100088995935858", cls: "hover:text-blue-400 hover:border-blue-400/30" },
];
const LINKS = ["Home","Portfolio","Services","Contact"];
const STACK = [
  { icon: <FaReact className="text-blue-400" />,    label: "React" },
  { icon: <SiNextdotjs className="text-white" />,   label: "Next.js" },
  { icon: <FaNodeJs className="text-green-400" />,  label: "Node.js" },
  { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
];

const Footer = () => (
  <footer className="bg-[#060608] border-t border-white/6">

    {/* CTA Banner */}
    <div className="border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <h3 className={`text-lg sm:text-xl font-bold text-white mb-1 ${syne.className}`}>Ready to build your next web app?</h3>
          <p className="text-xs text-white/35">MERN Stack & Next.js — fast delivery, clean code, real results.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a href="https://wa.me/923142239460?text=Hi%20Shakeel!%20I%20need%20a%20MERN%2FNext.js%20app%20built." target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.45)] hover:-translate-y-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Start a Project
          </a>
          <a href="mailto:shakeelcodes@gmail.com" className="inline-flex items-center gap-2 border border-white/10 hover:border-white/25 text-white/50 hover:text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all">
            Email Me
          </a>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10">

      {/* Brand */}
      <div>
        <div className={`text-xl font-bold text-white mb-1 ${syne.className}`}>Shakeel<span className="text-indigo-500">.</span></div>
        <div className="text-[10px] text-indigo-400/70 tracking-widest uppercase mb-4">MERN · Next.js Developer</div>
        <p className="text-xs text-white/30 leading-6 mb-5">Building scalable, high-performance web applications for startups and businesses worldwide.</p>
        {/* Tech stack icons */}
        <div className="flex gap-2 mb-5">
          {STACK.map(({ icon, label }) => (
            <div key={label} title={label} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/4 border border-white/8 text-base hover:bg-white/8 transition-all cursor-default">{icon}</div>
          ))}
        </div>
        <div className="flex gap-2">
          {SOCIALS.map(({ icon, href, cls }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`w-8 h-8 flex items-center justify-center rounded-lg border border-white/8 bg-white/3 text-white/35 text-sm transition-all duration-200 ${cls}`}>{icon}</a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Navigation</h4>
        <ul className="space-y-3">
          {LINKS.map(l => (
            <li key={l}>
              <Link href={l === "Home" ? "#" : `#${l.toLowerCase()}`} className="text-sm text-white/35 hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-3 h-px bg-indigo-500/40 group-hover:w-5 group-hover:bg-indigo-400 transition-all duration-200" />{l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Contact</h4>
        <div className="inline-flex items-center gap-2 bg-green-500/8 border border-green-500/20 px-3 py-1.5 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-green-400 font-medium">Available for Projects</span>
        </div>
        <div className="space-y-2.5">
          <a href="https://wa.me/923142239460" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white transition-colors">
            <FaWhatsapp className="text-green-400 flex-shrink-0" /> +92 314 2239460
          </a>
          <a href="mailto:shakeelcodes@gmail.com" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white transition-colors">
            <span className="text-indigo-400 flex-shrink-0">✉</span> shakeelcodes@gmail.com
          </a>
          <p className="text-xs text-white/20 mt-3 leading-5">Remote · Worldwide<br />Fast delivery · Clean code</p>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-white/20">© {new Date().getFullYear()} Shakeel Ahmed · All Rights Reserved.</p>
        <div className="flex items-center gap-3 text-xs text-white/15">
          {["MERN Stack","Next.js","Node.js","MongoDB"].map((t,i,a) => (
            <span key={t} className="flex items-center gap-3">{t}{i < a.length-1 && <span className="text-white/10">·</span>}</span>
          ))}
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;