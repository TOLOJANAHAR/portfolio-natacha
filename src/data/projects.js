// Shared project data — used in both Home showcase and Projects page

import transverseImg from "../assets/transverse.png";
import unicef from "../assets/unicef.png";
import hype from "../assets/hype.png";
import wpa from "../assets/wpa.png";
import dolibot from "../assets/dolibot.png";
import ssg from "../assets/ssg.png";
import flux from "../assets/flux.png"
import cnr from "../assets/cnr.png"
import hailalana from "../assets/aj.png"

export const PROJECTS = [
  {
    id: 1,
    title: "HealthShield",
    url: "-",
    tags: ["Plateform", "15 Pages", "Light Theme"],
    description:
      "A real-time health intelligence platform that detects, predicts, and responds to public health risks across Madagascar using AI, and field data.",
    image: unicef,
    accent: "#6c63ff",
    category: "Plateform",
  },
  {
    id: 2,
    title: "World Psychiatry Association",
    url: "wpanet.org",
    tags: ["E-learning", "50 Pages", "Light Theme"],
    description:
      "The World Psychiatric Association (WPA) is a global, nongovernmental organization (NGO) representing psychiatric societies in 123 countries. It promotes international collaboration, sets ethical standards, and works with the World Health Organization (WHO) to improve mental health care, education, and research",
    image: wpa,
    accent: "#a78bfa",
    category: "Plateform",
  },
  {
    id: 3,
    title: "Hype Software POS",
    url: "hype-software.com",
    tags: ["Finance", "6 Pages", "Dark Theme"],
    description:
      "A POS (Point of Sale) application is a software system that enables businesses to manage sales, process payments, and track transactions in real time.",
    image: hype,
    accent: "#34d399",
    category: "Plateform",
  },
  {
    id: 4,
    title: "SSG SWISS",
    url: "-",
    tags: ["Travel", "20 Pages", "Light Theme"],
    description:
      "SSG Swiss is a premium Swiss railway company offering a unique travel experience combining comfort, gastronomy and eco-responsibility.",
    image: ssg,
    accent: "#f59e0b",
    category: "Plateform",
  },
  {
    id: 5,
    title: "Hailalana",
    url: "hailalana.agvm.mg",
    tags: ["Plateform", "14 Pages", "Minimal"],
    description:
      "Hailalana is a legal assistance platform. A tool designed to support you daily in all your legal matters, with innovative tools.",
    image: hailalana,
    accent: "#818cf8",
    category: "Plateform",
  },
  {
    id: 6,
    title: "Transverse",
    url: "-",
    tags: ["Game", "14 Pages", "Minimal"],
    description:
      "Transverse is a plateform of thematic study method that traverses the biblical corpus to connect verses, themes, or symbols through games,",
    image: transverseImg,
    accent: "#818cf8",
    category: "Plateform",
  },
  {
    id: 7,
    title: "Flux",
    url: "flugroup.ch",
    tags: ["Platform", "4 Pages", "Light Theme"],
    description:
      "A platform offering IT consulting, web development, telecommunications services, and renewable energy solutions.",
    image: flux,
    accent: "#f43f5e",
    category: "Landing Page",
  },
  {
    id: 8,
    title: "Dolibot",
    url: "-",
    tags: ["ChatBot", "10 Pages", "Dark/Light Theme"],
    description:
      "chatbot for marketing decision support.",
    image: dolibot,
    accent: "#f43f5e",
    category: "Plateform",
  },
  {
    id: 9,
    title: "CNR",
    url: "-",
    tags: ["Plateform", "4 Pages", "Light Theme"],
    description:
      "The CNR is a technical body whose primary mission is to observe the operating methods of road transport markets.",
    image: cnr,
    accent: "#f43f5e",
    category: "Landing Page",
  },
];

export const FEATURED_PROJECTS = PROJECTS.slice(0, 2);

export const PROJECT_CATEGORIES = ["Tous", "Plateform", "Landing Page", "Dashboard"];