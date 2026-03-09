"use client";

import { useState, useEffect } from "react";
import { FaArrowRight, FaTimes, FaBars, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { assests } from "@/assests/assest";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#060608]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="#" className="flex items-center gap-3 group" onClick={() => setActiveLink("Home")}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500/30 blur-md scale-110 group-hover:bg-indigo-500/50 transition-all duration-300" />
              <Image
                className="relative rounded-full border border-indigo-500/40 group-hover:border-indigo-400/70 transition-all duration-300 object-cover"
                src={assests.logo}
                alt="Shakeel Ahmed"
                width={42}
                height={42}
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold text-white tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                Shakeel Ahmed
              </span>
              {/* Clients see this first — make it count */}
              <span className="text-[10px] text-indigo-400/80 tracking-widest uppercase font-medium">
                MERN · Next.js Developer
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeLink === link.label ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {activeLink === link.label && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/8 rounded-lg border border-white/10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          {/* Pre-filled WhatsApp message = client clicks → already knows what to say */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            href="https://wa.me/923142239460?text=Hi%20Shakeel!%20I%20need%20a%20MERN%2FNext.js%20web%20application%20built."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2.5 relative overflow-hidden bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_28px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 group"
          >
            {/* Green dot = "I'm available right now" */}
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <span>Hire Me Now</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-200" />
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
          </motion.a>

          {/* ── Mobile Hamburger ── */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <FaBars className="text-lg" />
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 h-full w-[75vw] max-w-xs z-[70] bg-[#0a0a0f] border-l border-white/8 flex flex-col px-8 py-10"
            >
              <button
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes className="text-sm" />
              </button>

              <div className="mb-10">
                <div className="text-lg font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Shakeel<span className="text-indigo-500">.</span>
                </div>
                <div className="text-[10px] text-white/30 tracking-widest uppercase mt-1">
                  MERN · Next.js Developer
                </div>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => { setActiveLink(link.label); setIsOpen(false); }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group ${
                        activeLink === link.label
                          ? "text-white bg-indigo-600/15 border border-indigo-500/20"
                          : "text-white/50 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <FaArrowRight className={`text-xs transition-all group-hover:translate-x-1 ${activeLink === link.label ? "text-indigo-400" : "opacity-0 group-hover:opacity-40"}`} />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* WhatsApp CTA — direct business action */}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/923142239460?text=Hi%20Shakeel!%20I%20need%20a%20MERN%2FNext.js%20web%20application%20built."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-500 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] mt-6"
                onClick={() => setIsOpen(false)}
              >
                <FaWhatsapp className="text-base text-green-400" />
                Hire Me — Let's Talk
              </motion.a>

              <div className="mt-5 pt-5 border-t border-white/5 space-y-1">
                <p className="text-xs text-white/25 text-center">shakeelcodes@gmail.com</p>
                <p className="text-xs text-white/15 text-center">Available · Remote Worldwide</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;