import { useState, useEffect } from "react";
import { Clock, DownloadIcon } from "lucide-react";
import "./Navbar.css";
import profile from "../../assets/natacha.png"

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="avatar-wrapper">
          <div className="avatar-placeholder">
                  <img
                    src={profile}
                    alt="Profile"
                  />          </div>
          {/* <span className="avatar-online-dot" /> */}
        </div>
      </div>

      <div className="navbar-center">
        <div className="availability-badge">
          <span className="availability-dot" />
          <span>Available For Work</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="time-display">
          <span className="time-label">Local Time (IST)</span>
          <div className="time-value">
            <Clock size={13} strokeWidth={2} />
            <span>{formatTime(time)}</span>
          </div>
        </div>
        <a
          href="/CV_TOLOJANAHARY_Noeline_Natacha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="showcase-resume"
        >
          <span>RESUME</span>
          <DownloadIcon size={15} strokeWidth={2.5} />
        </a>
      </div>
    </nav>
  );
}