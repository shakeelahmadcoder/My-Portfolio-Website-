"use client";

import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaWhatsapp size={32} className="text-green-500" />,
      label: "WhatsApp",
      link: "https://wa.me/923142239460",
      value: "+92 314 2239460",
    },
    {
      icon: <FaPhoneAlt size={32} className="text-blue-500" />,
      label: "Call",
      link: "tel:+923142239460",
      value: "+92 314 2239460",
    },
    {
      icon: <FaEnvelope size={32} className="text-red-500" />,
      label: "Email",
      link: "mailto:shakeelcodes@gmail.com",
      value: "shakeelcodes@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16 font-sans text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Contact <span className="text-blue-600">Me</span>
      </motion.h2>

      {/* Outer container aligned with page padding */}
      <div className=" w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-center">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center bg-gray-800 hover:bg-gray-700 transition rounded-xl shadow-lg p-8 text-center"
            >
              {method.icon}
              <h3 className="text-xl font-semibold mt-4">{method.label}</h3>
              <p className="text-gray-300 mt-1">{method.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
