import TestimonialCard from "../layout/TestimonialCard";
import "./TestimonialsMarquee.css";

export default function TestimonialsMarquee({ row1, row2 }) {
  // Duplicate for seamless infinite loop
  const track1 = [...row1, ...row1];
  const track2 = [...row2, ...row2];

  return (
    <div className="marquee-wrapper">
      {/* Row 1 — scrolls left to right */}
      <div className="marquee-row" aria-hidden="false">
        <div className="marquee-track marquee-track--ltr">
          {track1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right to left */}
      <div className="marquee-row">
        <div className="marquee-track marquee-track--rtl">
          {track2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}