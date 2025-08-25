"use client";

import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { assests } from "@/assests/assest";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-20 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-black"
      } text-white`}
    >
      <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
        {/* Logo + Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between w-full md:w-auto"
        >
          <Link href="#" className="flex items-center gap-3">
            <Image
              className="rounded-full border-2 border-blue-600"
              src={assests.logo}
              alt="Shakeel Ahmed Logo"
              width={50}
              height={50}
              priority
            />
            <span className="ml-2 text-xl font-semibold tracking-wide">
              Shakeel Ahmed
            </span>
          </Link>

          {/* Mobile Button */}
          <button
            className="text-3xl md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center text-lg font-medium"
        >
          <Link href="#" className="mr-8 hover:text-blue-400">Home</Link>
          <Link href="#portfolio" className="mr-8 hover:text-blue-400">Portfolio</Link>
          <Link href="#services" className="mr-8 hover:text-blue-400">Services</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
        </motion.nav>

        {/* Desktop CTA */}
        <motion.a
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="https://wa.me/923142239460"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-blue-600 px-5 py-2 rounded-lg text-base font-semibold hover:bg-blue-500 transition-all"
        >
          Let&apos;s Connect <FaArrowRight className="ml-2" />
        </motion.a>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
            >
              <button
                className="absolute top-6 right-6 text-3xl focus:outline-none"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                ✖
              </button>

              <motion.ul
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                className="flex flex-col gap-8 text-2xl font-semibold text-center"
              >
                <li><Link href="#" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                <li><Link href="#services" onClick={() => setIsOpen(false)}>Services</Link></li>
                <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
              </motion.ul>

              {/* Mobile CTA */}
              <motion.a
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 25, opacity: 0 }}
                href="https://wa.me/923142239460"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center bg-blue-600 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-500 transition-all"
              >
                Let&apos;s Connect <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
