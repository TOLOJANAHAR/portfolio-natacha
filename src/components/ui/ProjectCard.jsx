import { Link2 } from "lucide-react";
import "./ProjectCard.css";

export default function ProjectCard({ title, url, tags = [], description, image, accent }) {
  return (
    <div className="project-card" style={accent ? { "--card-accent": accent } : {}}>
      {/* Thumbnail */}
      <div className="project-thumb">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-thumb-placeholder">
            <span>{title.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="project-content">
        <div className="project-top-row">
          <h3 className="project-title">{title}</h3>
          {url && (
            <a
              href={`https://${url}`}
              className="project-url-badge"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Link2 size={12} strokeWidth={2} />
              {url}
            </a>
          )}
        </div>

        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
        )}

        <p className="project-desc">{description}</p>
      </div>
    </div>
  );
}