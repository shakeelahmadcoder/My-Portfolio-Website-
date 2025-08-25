"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/assests/assest";

const categories = ["all", "ecommerce", "education", "portfolio"];

// Variants for animation (different directions)
const cardVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  hiddenTop: { opacity: 0, y: -80 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py:10 sm:py-20 font-sans">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-blue-600">Portfolio</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of modern, responsive websites and applications I’ve built — 
  helping businesses strengthen their online presence and deliver better 
  digital experiences to their customers.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border cursor-pointer transition ${
              activeCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent text-gray-400 border-gray-600 hover:bg-gray-800"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => {
          // Alternate directions for animations
          const hiddenVariant =
            index % 3 === 0
              ? "hiddenLeft"
              : index % 3 === 1
              ? "hiddenRight"
              : "hiddenTop";

          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial={hiddenVariant}
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // har scroll par chalega
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-700"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className="w-full h-64 object-contain bg-black group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
