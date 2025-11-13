import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logof from "/assets/logof.png";

const NavbarCSS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const pages = ["about", "service", "resources", "contact", "reach"];

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleRouteLink = (path) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Logo */}
        <div className="logo" onClick={() => handleRouteLink("/")}>
          <img src={logof} alt="Company Logo" />
        </div>

        {/* ✅ Desktop Menu */}
        <div className="menu">
          {pages.map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => handleRouteLink(`/${page === "about" ? "" : page}`)}
              className={location.pathname === `/${page}` ? "active" : ""}
            >
              {page === "reach" ? "Reach Us" : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>

        {/* ✅ Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {pages.map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => handleRouteLink(`/${page === "about" ? "" : page}`)}
              className={location.pathname === `/${page}` ? "active" : ""}
            >
              {page === "reach" ? "Reach Us" : page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarCSS;
