"use client";

import { servicesData } from "@/assests/assest";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-16 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} // scroll per hamesha chalega
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="bg-gray-900 border border-gray-800 hover:border-blue-600 rounded-2xl p-6 text-center shadow-md hover:shadow-blue-500/30 transition-all transform hover:-translate-y-2"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 text-white text-3xl">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
