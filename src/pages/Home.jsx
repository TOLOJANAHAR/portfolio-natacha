import { Zap, Palette, LayoutGrid, Layers, Briefcase, Rocket, ArrowUpRight, Wrench, MessageSquareQuote } from "lucide-react";
import SocialLinks from "../components/ui/SocialLinks";
import ServiceCard from "../components/ui/ServiceCard";
import BentoServices from "../components/ui/BentoServices";
import ExperienceTimeline from "../components/ui/ExperienceTimeline";
import ProjectCard from "../components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "../data/projects";
import "./Home.css";
import profileImg from "../assets/natacha.png"
import { TESTIMONIALS_ROW1, TESTIMONIALS_ROW2 } from "../data/testimonials";
import TestimonialsMarquee from "../components/ui/TestimonialsMarquee";
import Footer from "../components/layout/Footer";
import wpalogo from "../assets/wpa-logo.png";
import fluxlogo from "../assets/Flux-logo.png";
import hypelogo from "../assets/Hype-logo.png";


const EXPERIENCES = [
  {
    logo:hypelogo,
    company: "Hype SWISS",
    type: "Tech Firm",
    url: "hype.swiss",
    period: "12/2025 - 02/2026",
    role: "Product Designer",
    description:
      "A telecom company, where i cretes a POS design Plateform to enables businesses to manage sales, process payments, and track transactions in real time.",
  },
  {
    logo:fluxlogo,
    company: "FLUX GROUP SARL",
    type: "Designer",
    url: "fluxgroup.ch",
    period: "06/2025 - 11/2025",
    role: "UI/UX Designer",
    description:
      "A platform offering IT consulting, web development, telecommunications services, and renewable energy solutions.",
  },
  {
    logo:wpalogo,
    company: "World Psychiatry Association",
    type: "Tech Start-up",
    url: "wpanet.org",
    period: "06/2024 - 12/2024",
    role: "UI/UX Designer",
    description:
      "The World Psychiatric Association (WPA) is a global, nongovernmental organization (NGO) representing psychiatric societies in 123 countries. It promotes international collaboration, sets ethical standards, and works with the World Health Organization (WHO) to improve mental health care, education, and research.",
  },
];

const SERVICES = [
  {
    icon: Zap,
    title: "Web Design",
    description:
      "Crafting visually captivating and user-friendly websites for online success.",
    tags: ["Audit UX", "Roadmap", "KPIs"],
  },
  {
    icon: Palette,
    title: "Web Development",
    description:
      "Bringing ideas to life with robust and scalable web solutions.",
    tags: ["Figma", "Design System", "Prototypage"],
  },
  {
    icon: LayoutGrid,
    title: "Graphic Design",
    description:
      "Creating visually stunning designs that captivate and engage audiences.",
    tags: ["Tests utilisateurs", "Wireframes", "Personas"],
  },
  {
    icon: Layers,
    title: "SEO Optimisation",
    description:
      "Elevating online visibility and driving organic traffic through strategies.",
    tags: ["Logo", "Identité visuelle", "Brand Guide"],
  },
];

export default function Home({ setActivePage }) {
  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-inner">
          {/* Photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-placeholder">
              {/* <span className="hero-photo-initials">NT</span> */}
                  <img
                    src={profileImg}
                    alt="Profile"
                  />
              <div className="hero-photo-grain" />
            </div>
          </div>

          {/* Text */}
          <div className="hero-text">
            <p className="hero-greeting">
              <span className="greeting-wave">👋</span> Hello I am
            </p>
            <h1 className="hero-name">
              Natacha TOLOJANAHARY
            </h1>
            <p className="hero-bio">
              Experienced Designer UI/UX from Madagascar, with a passion for
              crafting seamless digital experiences and a proven track record.
            </p>
          </div>

          {/* Social links – right col */}
          <div className="hero-social">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* ── Services Section ──
      <section id="services" className="services-section">
        <div className="section-header">
          <div className="section-title-row">
            <Zap size={20} strokeWidth={2} className="section-icon" />
            <h2 className="section-title">My Services</h2>
          </div>
          <p className="section-subtitle">
            Formulating comprehensive strategies to meet your design goals and exceed expectations.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section> */}

      {/* ── Bento Services + Tools ── */}
      <section id="services" className="bento-section">
        <div className="section-header">
          <div className="section-title-row">
            <Zap size={20} strokeWidth={2} className="section-icon" />
            <h2 className="section-title">Inspiring benefits awaits you</h2>
          </div>
          <p className="section-subtitle">
            Explore everything included — from creative strategy to seamless integrations.
          </p>
        </div>
        <BentoServices />
      </section>

      {/* ── Creative Showcase ── */}
      <section id="showcase" className="showcase-section">
        <div className="section-header">
          <div className="section-title-row">
            <Rocket size={20} strokeWidth={2} className="section-icon" />
            <h2 className="section-title">Creative Design Showcase</h2>
          </div>
          <p className="section-subtitle">
            Explore a collection of my most innovative and visually stunning design works.
          </p>
        </div>

        <div className="showcase-list">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <button
          className="showcase-view-all"
          onClick={() => setActivePage("projects")}
        >
          <span>VIEW ALL PROJECTS</span>
          <ArrowUpRight size={15} strokeWidth={2.5} />
        </button>
      </section>

      {/* ── Experience Section ── */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <div className="section-title-row">
            <Briefcase size={20} strokeWidth={2} className="section-icon" />
            <h2 className="section-title">My Experience</h2>
          </div>
          <p className="section-subtitle">
            Navigating diverse environments with adaptability and expertise for holistic solutions.
          </p>
        </div>

        <ExperienceTimeline items={EXPERIENCES} />
      </section>


      {/* ── Testimonials ── */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header testimonials-header">
          <div className="section-title-row">
            <MessageSquareQuote size={20} strokeWidth={2} className="section-icon" />
            <h2 className="section-title">Words From Happy Clients</h2>
          </div>
          <p className="section-subtitle">
            Discover what satisfied clients have to say about their experiences working with me.
          </p>
        </div>
 
        <TestimonialsMarquee row1={TESTIMONIALS_ROW1} row2={TESTIMONIALS_ROW2} />
      </section>
 

      
      <Footer />
    </div>
  );
}