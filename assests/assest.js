import logo from "./logo.png"
import skytraders from "./skytraders.jpg"
import filerify from "./filerify.jpg"
export const assests = {logo}




export const portfolioData = [
  {
    id: 1,
    title: "Sky Traders Furniture Store",
    category: "E‑Commerce Website",
    image: skytraders,
    description:
      "Responsive full‑stack e‑commerce store for furniture and home décor with intuitive product browsing, shopping cart, and secure checkout.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://skytraders.vercel.app",
  },
  {
    id: 2,
    title: "Filerify — Business Formation Platform",
    category: "Business Services Website",
    image: filerify,
    description:
      "Professional business services site offering U.S. company formation, tax compliance, EIN registration, and legal setup support for global entrepreneurs.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://www.filerify.com",
  },
];


import { FaBriefcase, FaShoppingCart, FaLaptopCode, FaGlobe } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Portfolio Websites",
    icon: FaBriefcase,
    description:
      "Professional portfolio websites tailored to showcase your personal brand, skills, and achievements effectively.",
  },
  {
    id: 2,
    title: "Landing Pages",
    icon: FaLaptopCode,
    description:
      "High-converting landing pages designed for product launches, campaigns, and lead generation with modern UI.",
  },
  {
    id: 3,
    title: "E-commerce Websites",
    icon: FaShoppingCart,
    description:
      "Custom ecommerce solutions with product management, cart, checkout, and payment gateway integration.",
  },
  {
    id: 4,
    title: "Business Websites",
    icon: FaGlobe,
    description:
      "Scalable and responsive business websites to help you build credibility and connect with your target audience.",
  },
];

export const pricingData = [
  {
    id: 1,
    title: "Portfolio Site",
    price: 199,
    period: "one-time",
    description: "Personal brand, fast & clean.",
    features: ["1–3 pages", "Responsive UI", "Contact form", "Basic SEO"],
    cta: "Get Portfolio",
    link: "https://wa.me/923142239460",
  },
  {
    id: 2,
    title: "Landing Page",
    price: 149,
    period: "one-time",
    description: "High-converting launch page.",
    features: ["Single page", "Hero + CTA", "Lead form", "Analytics setup"],
    cta: "Launch Now",
    link: "https://wa.me/923142239460",
  },
  {
    id: 3,
    title: "Business Website",
    price: 399,
    period: "one-time",
    description: "Credible site for your company.",
    features: ["Up to 5 pages", "CMS (blog)", "On-page SEO", "Speed optimized"],
    cta: "Start Project",
    popular: true,
    link: "https://wa.me/923142239460",
  },
  {
    id: 4,
    title: "Ecommerce",
    price: 699,
    period: "one-time",
    description: "Sell products with confidence.",
    features: [
      "Catalog + cart",
      "Checkout & payments",
      "Admin dashboard",
      "Email notifications",
    ],
    cta: "Open Store",
    link: "https://wa.me/923142239460",
  },
];

export const maintenanceAddons = [
  {
    id: "m1",
    title: "Care Plan",
    price: 19,
    period: "/mo",
    items: ["Backups", "Updates", "Security"],
    link: "https://wa.me/923142239460",
  },
  {
    id: "m2",
    title: "SEO Growth",
    price: 49,
    period: "/mo",
    items: ["Blog SEO", "Reports", "Fixes"],
    link: "https://wa.me/923142239460",
  },
];


