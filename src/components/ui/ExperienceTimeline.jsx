import ExperienceCard from "../layout/ExperienceCard";
import "./ExperienceTimeline.css";

export default function ExperienceTimeline({ items }) {
  return (
    <div className="timeline-wrapper">
      {/* Vertical line */}
      <div className="timeline-line" />

      <div className="timeline-items">
        {items.map((item, i) => {
          const isRight = i % 2 === 1;
          return (
            <div key={i} className={`timeline-row ${isRight ? "timeline-row--right" : "timeline-row--left"}`}>
              {/* Left slot */}
              <div className="timeline-slot timeline-slot--left">
                {!isRight && <ExperienceCard {...item} align="left" />}
              </div>

              {/* Dot */}
              <div className="timeline-dot-col">
                <div className="timeline-dot">
                  <div className="timeline-dot-inner" />
                </div>
              </div>

              {/* Right slot */}
              <div className="timeline-slot timeline-slot--right">
                {isRight && <ExperienceCard {...item} align="right" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}