import "./ServiceCard.css";

export default function ServiceCard({ icon: Icon, title, description, tags = [] }) {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <div className="service-icon-wrap">
          <Icon size={18} strokeWidth={2} />
        </div>
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-desc">{description}</p>
    </div>
  );
}