"use client";

import { useState } from "react";
import Image from "next/image";
import { TiSocialLinkedin, TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTwitter, FaReact, FaFigma, FaGit } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { assests } from "@/assests/assest";
import { Luckiest_Guy } from "next/font/google";

const luckiest = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
});


const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 px-6 font-sans my-28 sm:my-48">
      {/* Left - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className={`text-4xl sm:text-6xl  font-extrabold leading-tight mb-3 ${luckiest.className}`}>
          Shakeel Ahmed
        </h1>
        <h3 className="text-base sm:text-lg md:text-2xl font-medium text-gray-300 mb-4">
          Front-End React / Next.js Developer
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-7 mb-6">
          I build <span className="text-white font-semibold">modern, fast, and responsive websites </span> 
          that help businesses grow online. Clean design + optimized code = better results for your brand.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-500 hover:scale-105 transform transition"
        >
          More About Me
        </button>
      </motion.div>

      {/* Middle - Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={assests.logo}
          alt="Shakeel Ahmed"
          width={240}
          height={240}
          className="rounded-full border-4 border-gray-200 shadow-lg object-cover"
          priority
        />
      </motion.div>

      {/* Right - Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-row md:flex-col items-center gap-5 text-gray-400"
      >
        <a href="https://www.linkedin.com/in/shakeel-ahmed-a87a6a314" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-blue-600 hover:scale-110 transition">
          <TiSocialLinkedin />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100088995935858" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl hover:text-blue-500 hover:scale-110 transition">
          <TiSocialFacebookCircular />
        </a>
        <a href="https://www.instagram.com/developer_shakeel" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-pink-500 hover:scale-110 transition">
          <SlSocialInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-blue-400 hover:scale-110 transition">
          <FaTwitter />
        </a>
        <a href="https://github.com/shakeelahmadcoder" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-300 hover:scale-110 transition">
          <ImGithub />
        </a>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-gray-900 text-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-2xl lg:max-w-3xl relative flex flex-col sm:flex-row gap-8"
            >
              {/* Left - Info */}
              <div className="flex-1">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl"
                >
                  &times;
                </button>
                <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                  I specialize in creating <span className="text-white font-semibold">scalable and performance-driven web apps</span>.  
                  My goal is to help clients stand out with websites that are not only beautiful but also functional and user-focused.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-gray-400 text-sm sm:text-base">
                  <li className="flex items-center gap-2 text-blue-500"><FaReact /> React.js</li>
                  <li className="flex items-center gap-2 text-black"><SiNextdotjs /> Next.js</li>
                  <li className="flex items-center gap-2 text-cyan-400"><SiTailwindcss /> Tailwind CSS</li>
                  <li className="flex items-center gap-2 text-yellow-400"><SiJavascript /> JavaScript</li>
                  <li className="flex items-center gap-2 text-orange-500"><SiHtml5 /> HTML5</li>
                  <li className="flex items-center gap-2 text-blue-400"><SiCss3 /> CSS3</li>
                  <li className="flex items-center gap-2 text-purple-500"><FaFigma /> Figma</li>
                  <li className="flex items-center gap-2 text-indigo-500"><SiBootstrap /> Bootstrap</li>
                  <li className="flex items-center gap-2 text-gray-400"><FaGit /> Git & GitHub</li>
                </ul>
              </div>

              {/* Right - Image */}
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src={assests.logo}
                  alt="Shakeel Ahmed"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-gray-200 shadow-lg object-cover hidden sm:block"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
