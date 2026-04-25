import { useState } from "react";
import { Rocket } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div className="section-title-row">
          <Rocket size={20} strokeWidth={2} className="section-icon" />
          <h2 className="section-title">Creative Design Showcase</h2>
        </div>
        <p className="section-subtitle">
          Explore a collection of my most innovative and visually stunning design works.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="projects-filters">
        {PROJECT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects list */}
      <div className="projects-list">
        {filtered.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}