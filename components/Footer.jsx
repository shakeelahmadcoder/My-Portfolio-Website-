"use client";

import { motion } from "framer-motion";
import { TiSocialLinkedin, TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 mt-20 font-sans border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left - Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">Shakeel Ahmed</h2>
          <p className="text-gray-500 text-sm leading-6">
            Front-End React.js Developer creating modern, responsive and user-friendly web experiences.
          </p>
        </motion.div>

        {/* Middle - Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#portfolio" className="hover:text-blue-500 transition">Portfolio</a>
          <a href="#services" className="hover:text-blue-500 transition">Services</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </motion.div>

        {/* Right - Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-3"
        >
          <h3 className="text-white font-semibold mb-2">Follow Me</h3>
          <div className="flex gap-5 text-2xl">
            <a href="https://www.linkedin.com/in/shakeel-ahmed-a87a6a314" target="_blank" className="hover:text-blue-600 transition">
              <TiSocialLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100088995935858" target="_blank" className="hover:text-blue-500 transition">
              <TiSocialFacebookCircular />
            </a>
            <a href="https://www.instagram.com/developer_shakeel" target="_blank" className="hover:text-pink-500 transition">
              <SlSocialInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="https://github.com/shakeelahmadcoder" target="_blank" className="hover:text-gray-300 transition">
              <ImGithub />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Shakeel Ahmed. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
