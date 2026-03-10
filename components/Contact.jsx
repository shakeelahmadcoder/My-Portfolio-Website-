"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

const METHODS = [
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "+92 314 2239460", href: "https://wa.me/923142239460?text=Hi%20Shakeel!%20I%20need%20a%20MERN%2FNext.js%20app%20built.", iconCls: "text-green-400", bgCls: "bg-green-500/10 border-green-500/20 group-hover:bg-green-500/15", desc: "Fastest response" },
  { icon: <FaPhoneAlt />,  label: "Call Me",   value: "+92 314 2239460",    href: "tel:+923142239460",                 iconCls: "text-indigo-400", bgCls: "bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/15", desc: "Mon–Sat, 9am–9pm" },
  { icon: <FaEnvelope />,  label: "Email",      value: "shakeelcodes@gmail.com", href: "mailto:shakeelcodes@gmail.com", iconCls: "text-rose-400",   bgCls: "bg-rose-500/10 border-rose-500/20 group-hover:bg-rose-500/15",     desc: "Reply within 24h" },
];

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ── Build WhatsApp message ──
    const text = `👋 Salam Shakeel! I contacted you from your website.

──────────────────
👤 Name  :  ${form.name}
📧 Email :  ${form.email}
──────────────────

📋 Project Details:
${form.message}
──────────────────`;

    const waURL = `https://wa.me/923142239460?text=${encodeURIComponent(text)}`;
    window.open(waURL, "_blank");

    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">

      {/* Header */}
      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.55 }} className="text-center mb-14">
        <p className="text-xs font-bold tracking-widest uppercase text-indigo-400 mb-3">Get In Touch</p>
        <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 ${syne.className}`}>
          Let's Build <span className="text-indigo-400">Together</span>
        </h2>
        <p className="text-white/35 max-w-md mx-auto text-sm leading-relaxed">
          Have a project in mind? Reach out — I'll get back to you fast.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">

        {/* ── Left: contact cards ── */}
        <div className="flex flex-col gap-3">
          {METHODS.map(({ icon, label, value, href, iconCls, bgCls, desc }, i) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              transition={{ duration:0.45, delay: i * 0.08 }}
              className="group flex items-center gap-4 bg-[#0e0e14] border border-white/8
                         hover:border-indigo-500/30 rounded-2xl px-5 py-4
                         transition-all duration-300 hover:translate-x-1.5
                         hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 ${bgCls}`}>
                <span className={iconCls}>{icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-0.5">{label}</div>
                <div className="text-sm font-medium text-white truncate">{value}</div>
              </div>
              <div className="text-[10px] text-white/25 text-right flex-shrink-0">{desc}</div>
            </motion.a>
          ))}

          {/* availability note */}
          <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.3 }}
            className="mt-2 flex items-center gap-3 px-5 py-4 bg-[#0e0e14] border border-green-500/15 rounded-2xl">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            <p className="text-xs text-white/35 leading-relaxed">
              Currently <span className="text-green-400 font-medium">available</span> for new projects — remote worldwide, fast delivery.
            </p>
          </motion.div>
        </div>

        {/* ── Right: form ── */}
        <motion.form onSubmit={handleSubmit}
          initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.15 }}
          className="bg-[#0e0e14] border border-white/8 rounded-2xl p-6 sm:p-7 flex flex-col gap-4"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -mt-1 mb-1" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[["Name","text","Your name",form.name,"name"],["Email","email","your@email.com",form.email,"email"]].map(([lbl,type,ph,val,key]) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-[11px] font-medium text-white/35 tracking-wide">{lbl}</label>
                <input type={type} placeholder={ph} value={val} required
                  onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  className="bg-white/4 border border-white/8 focus:border-indigo-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]" />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-medium text-white/35 tracking-wide">Project Details</label>
            <textarea rows={4} placeholder="Tell me about your project — what you need and your timeline..." required
              value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              className="bg-white/4 border border-white/8 focus:border-indigo-500/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none resize-none transition-all focus:shadow-[0_0_0_3px_rgba(99,102,241,0.12)]" />
          </div>

          <button type="submit"
            className="group relative overflow-hidden w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-3 rounded-xl transition-all hover:shadow-[0_0_28px_rgba(99,102,241,0.45)] hover:-translate-y-0.5">
            <span className="flex items-center justify-center gap-2">
              {sent
                ? <><span>✓</span> Message Sent! Opening WhatsApp…</>
                : <><FaWhatsapp className="text-green-300 text-base" /> Send via WhatsApp →</>
              }
            </span>
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
          </button>

          <p className="text-center text-[10px] text-white/20">
            Submitting will open WhatsApp with your message pre-filled.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;