// PricingSection.jsx
"use client";

import { pricingData } from "@/assests/assest";
import { motion } from "framer-motion";

const PricingCard = ({ plan }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className={`rounded-2xl p-6 border bg-gray-900 text-white ${
      plan.popular ? "border-blue-500 shadow-lg" : "border-gray-800"
    }`}
  >
    {plan.popular && (
      <span className="inline-block mb-3 text-xs font-semibold px-2 py-1 rounded-full bg-blue-600/20 text-blue-300">
        Most Popular
      </span>
    )}

    <h3 className="text-xl font-bold">{plan.title}</h3>
    <p className="text-gray-400 text-sm mt-1">{plan.description}</p>

    <div className="mt-4">
      <span className="text-4xl font-extrabold">${plan.price}</span>
      <span className="text-sm text-gray-400 ml-1">{plan.period}</span>
    </div>

    <ul className="mt-4 space-y-2 text-sm text-gray-300">
      {plan.features.map((f, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
          {f}
        </li>
      ))}
    </ul>

    <a
      href="https://wa.me/923300642572"
      target="_blank" rel="noopener noreferrer"
      className="mt-6 inline-flex w-full justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500"
    >
      {plan.cta}
    </a>
  </motion.div>
);

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Simple Pricing</h2>
          <p className="text-gray-400 mt-2">One-time build cost. Optional monthly care plans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* addons (optional) */}
        {/* Map maintenanceAddons here if you want small cards below */}
      </div>
    </section>
  );
}
