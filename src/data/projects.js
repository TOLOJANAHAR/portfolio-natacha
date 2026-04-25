// Shared project data — used in both Home showcase and Projects page

import transverseImg from "../assets/transverse.png";
import cupidon from "../assets/cupidon.png";
import hype from "../assets/hype.jpg";
export const PROJECTS = [
  {
    id: 1,
    title: "Devcraft",
    url: "devcraft.com",
    tags: ["Portfolio", "4 Pages", "Dark Theme"],
    description:
      "Showcasing expertise, passion, and innovation in the realm of development.",
    image: transverseImg,
    accent: "#6c63ff",
    category: "Portfolio",
  },
  {
    id: 2,
    title: "Zenith Gym",
    url: "zenith.com",
    tags: ["Fitness", "5 Pages", "Light Theme"],
    description:
      "Empowering fitness enthusiasts with an immersive online experience.",
    image: cupidon,
    accent: "#a78bfa",
    category: "Landing Page",
  },
  {
    id: 3,
    title: "Bloom Finance",
    url: "bloomfinance.io",
    tags: ["Finance", "6 Pages", "Dark Theme"],
    description:
      "A modern fintech dashboard simplifying personal and business financial management.",
    image: hype,
    accent: "#34d399",
    category: "Dashboard",
  },
  {
    id: 4,
    title: "Orbit Travel",
    url: "orbittravel.app",
    tags: ["Travel", "8 Pages", "Light Theme"],
    description:
      "Crafting seamless travel planning journeys with intuitive UX and stunning visuals.",
    image: null,
    accent: "#f59e0b",
    category: "Mobile App",
  },
  {
    id: 5,
    title: "MindSpace",
    url: "mindspace.co",
    tags: ["Health", "4 Pages", "Minimal"],
    description:
      "A mindfulness and meditation app UI promoting mental wellbeing through calm design.",
    image: null,
    accent: "#818cf8",
    category: "Mobile App",
  },
  {
    id: 6,
    title: "NovaSaaS",
    url: "novasaas.dev",
    tags: ["SaaS", "10 Pages", "Dark Theme"],
    description:
      "Complete SaaS product design from onboarding flows to complex analytics dashboards.",
    image: null,
    accent: "#f43f5e",
    category: "Dashboard",
  },
];

export const FEATURED_PROJECTS = PROJECTS.slice(0, 2);

export const PROJECT_CATEGORIES = ["Tous", "Portfolio", "Landing Page", "Dashboard", "Mobile App"];