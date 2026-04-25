import { Zap, Palette, LayoutGrid, Layers, Briefcase, Rocket, ArrowUpRight } from "lucide-react";
import SocialLinks from "../components/ui/SocialLinks";
import ServiceCard from "../components/ui/ServiceCard";
import ExperienceTimeline from "../components/ui/ExperienceTimeline";
import ProjectCard from "../components/ui/ProjectCard";
import { FEATURED_PROJECTS } from "../data/projects";
import "./Home.css";
import profileImg from "../assets/natacha.png"

const EXPERIENCES = [
  {
    company: "Vortex",
    type: "Tech Firm",
    url: "vortex.co",
    period: "2023 - Present",
    role: "Product Designer",
    description:
      "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
  },
  {
    company: "PixelWorks",
    type: "Design Studio",
    url: "pixelworks.io",
    period: "2022 - 2023",
    role: "Senior UI/UX Designer",
    description:
      "Provided leadership in UI/UX design, mentored junior designers, and collaborated with cross-functional teams for product excellence.",
  },
  {
    company: "Athon",
    type: "Tech Start-up",
    url: "athon.com",
    period: "2020 - 2022",
    role: "UI/UX Designer",
    description:
      "Led UI/UX design projects from concept to delivery, conducted user testing, and iterated designs for optimal user experience.",
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
              <span className="greeting-wave">✋</span> Hello I am
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

      {/* ── Services Section ── */}
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
    </div>
  );
}