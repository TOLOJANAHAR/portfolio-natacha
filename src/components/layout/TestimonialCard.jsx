import { MapPin } from "lucide-react";
import "./TestimonialCard.css";

const XIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export default function TestimonialCard({ name, location, text, avatar }) {
  return (
    <div className="testimonial-card">
      <div className="tc-header">
        <div className="tc-author">
          <div className="tc-avatar">
            {avatar ? (
              <img src={avatar} alt={name} />
            ) : (
              <span>{name.charAt(0)}</span>
            )}
          </div>
          <div className="tc-info">
            <span className="tc-name">{name}</span>
            <span className="tc-location">
              <MapPin size={11} strokeWidth={2} />
              {location}
            </span>
          </div>
        </div>
        <div className="tc-platform">
          <XIcon />
        </div>
      </div>
      <p className="tc-text">{text}</p>
    </div>
  );
}