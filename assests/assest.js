import logo from "./logo.jpg"
import ecommerce1 from "./ecommerce1.jpg"
import ecommerce2 from "./ecommerce2.jpg"
import ecommerce3 from "./ecommerce3.jpg"
import portfolio1 from "./portfolio1.jpg"
import education1 from "./education1.jpg"
export const assests = {logo}


export const portfolioData = [
  {
    id: 1,
    title: "Forever Trendify – Fashion Ecommerce",
    category: "ecommerce",
    image: ecommerce1,
    description:
      "A full-stack fashion ecommerce platform built with the MERN stack, featuring product listings, cart, and secure checkout.",
    link: "https://forever-trendify.vercel.app/",
  },
  {
    id: 2,
    title: "Modern Ecommerce Store",
    category: "ecommerce",
    image: ecommerce2,
    description:
      "A responsive and elegant online store built with React and Tailwind CSS, optimized for seamless shopping experiences.",
    link: "https://ecomerece-website.vercel.app/",
  },
  {
    id: 3,
    title: "Digital Assets Marketplace",
    category: "ecommerce",
    image: ecommerce3,
    description:
      "An ecommerce platform designed for selling digital assets with a clean UI and smooth user experience.",
    link: "https://vercel.com/shakeelahmadcoders-projects/digital-assets-ecomerece-website-2tba",
  },
  {
    id: 4,
    title: "Creative Portfolio Website",
    category: "portfolio",
    image: portfolio1,
    description:
      "A full-stack portfolio website for a UI/UX designer, featuring an admin panel, built with Next.js, MongoDB, and Tailwind CSS.",
    link: "https://aitbar-portflio-website.vercel.app/",
  },
  {
    id: 5,
    title: "Military Academy Website",
    category: "education",
    image: education1,
    description:
      "A professional frontend website for a military academy, built with React and Tailwind CSS to deliver a clean educational interface.",
    link: "https://miltary-academy-website.vercel.app/",
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


