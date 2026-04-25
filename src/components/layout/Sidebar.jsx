import { User, Mail, ArrowUp, FolderOpen, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    { id: "home", icon: User, label: "Profil" },
    { id: "projects", icon: FolderOpen, label: "Projets" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // 🔥 Theme state
  const [theme, setTheme] = useState("dark");

  // Charger le thème sauvegardé
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar">
        <div className="sidebar-nav">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              className={`sidebar-btn ${activePage === id ? "active" : ""}`}
              onClick={() => setActivePage(id)}
              title={label}
              aria-label={label}
            >
              <Icon size={18} strokeWidth={1.8} />
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          {/* 🔥 Theme toggle */}
          <button
            className="sidebar-btn theme-toggle"
            onClick={toggleTheme}
            title="Changer le thème"
            aria-label="Changer le thème"
          >
            {theme === "dark" ? (
              <Sun size={16} strokeWidth={2} />
            ) : (
              <Moon size={16} strokeWidth={2} />
            )}
          </button>

          {/* Scroll top */}
          <button
            className="sidebar-btn sidebar-scroll-top"
            onClick={scrollToTop}
            title="Haut de page"
            aria-label="Haut de page"
          >
            <ArrowUp size={16} strokeWidth={2} />
          </button>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="mobile-bottom-nav">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            className={`mobile-nav-btn ${activePage === id ? "active" : ""}`}
            onClick={() => setActivePage(id)}
            aria-label={label}
          >
            <Icon size={20} strokeWidth={1.8} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}