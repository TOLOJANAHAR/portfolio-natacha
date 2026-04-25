import "./ExperienceCard.css";

export default function ExperienceCard({ logo, company, type, url, period, role, description, align = "left" }) {
  return (
    <div className={`exp-card ${align === "right" ? "exp-card--right" : ""}`}>
      <div className="exp-card-header">
        <div className="exp-company-row">
          <div className="exp-logo">
            {logo ? (
              <img src={logo} alt={company} />
            ) : (
              <span>{company.charAt(0)}</span>
            )}
          </div>
          <div className="exp-company-info">
            <div className="exp-company-name-row">
              <span className="exp-company-name">{company}</span>
              {/* <span className="exp-company-type">{type}</span> */}
            </div>
          </div>
        </div>
        <span className="exp-period">{period}</span>
      </div>

      <div className="exp-card-body">
        <h4 className="exp-role">{role}</h4>
        <p className="exp-desc">{description}</p>
      </div>
    </div>
  );
}