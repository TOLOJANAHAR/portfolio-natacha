import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/globals.css";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  // Expose navigation globally so child pages (e.g. Home showcase) can navigate
  window.__setPage = setActivePage;

  const renderPage = () => {
    switch (activePage) {
      case "home": return <Home setActivePage={setActivePage} />;
      case "projects": return <Projects />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="app-body">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}