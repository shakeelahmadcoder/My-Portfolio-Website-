"use client";

import { servicesData } from "@/assests/assest";
import { motion } from "framer-motion";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

const Services = () => (
  <section id="services" className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">

    {/* Header */}
    <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }} className="text-center mb-14">
      <p className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-3">What I Offer</p>
      <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 ${syne.className}`}>
        My <span className="text-indigo-400">Services</span>
      </h2>
      <p className="text-white/35 max-w-xl mx-auto text-sm leading-relaxed">
        End-to-end web development — from UI design to backend APIs, databases, and deployment.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {servicesData.map((service, i) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity:0, y:32 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.2 }}
            transition={{ duration:0.5, delay: i * 0.08, ease:[0.22,1,0.36,1] }}
            className="group relative bg-[#0e0e14] border border-white/8 rounded-2xl p-6
                       hover:border-indigo-500/30 transition-all duration-300
                       hover:-translate-y-1.5
                       hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(99,102,241,0.1)]"
          >
            {/* top accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* icon */}
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20
                            flex items-center justify-center text-xl text-indigo-400
                            mb-5 group-hover:scale-110 group-hover:bg-indigo-500/20
                            transition-all duration-300">
              <Icon />
            </div>

            <h3 className={`text-base font-bold text-white mb-2 ${syne.className}`}>
              {service.title}
            </h3>
            <p className="text-white/35 text-xs leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        );
      })}
    </div>

    {/* Bottom CTA strip */}
    <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.3 }}
      className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4
                 bg-[#0e0e14] border border-white/8 rounded-2xl px-7 py-5">
      <div>
        <p className={`text-base font-bold text-white ${syne.className}`}>Got a project in mind?</p>
        <p className="text-xs text-white/35 mt-0.5">Let's build something great together — fast delivery, clean code.</p>
      </div>
      <a href="https://wa.me/923142239460?text=Hi%20Shakeel!%20I%20need%20a%20MERN%2FNext.js%20app%20built."
        target="_blank" rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500
                   text-white text-sm font-semibold px-6 py-2.5 rounded-full
                   transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 whitespace-nowrap">
        Start a Project →
      </a>
    </motion.div>
  </section>
);

export default Services;