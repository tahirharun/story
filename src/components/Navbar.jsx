import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  PenLine,
  Search,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleWriteStory = () => {
    closeMenu();
    navigate("/write");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <BookOpen size={23} strokeWidth={2.2} />
          </span>

          <span className="logo-text">
            Story<span>Verse</span>
            <small>EVERY VOICE MATTERS</small>
          </span>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav
          className={`navbar-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <a href="/#stories" onClick={closeMenu}>
            Discover
          </a>

          <a href="/#categories" onClick={closeMenu}>
            Categories
          </a>

          <a href="/#about" onClick={closeMenu}>
            About
          </a>

          {/* MOBILE WRITE BUTTON */}
          <button
            type="button"
            className="mobile-write-button"
            onClick={handleWriteStory}
          >
            <PenLine size={17} />
            Write a story
            <ArrowUpRight size={16} />
          </button>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="navbar-actions">
          <button
            type="button"
            className="search-button"
            aria-label="Search stories"
            onClick={() => {
              closeMenu();
              navigate("/#stories");
            }}
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            className="write-button"
            onClick={handleWriteStory}
          >
            <PenLine size={17} />
            <span>Start writing</span>
            <ArrowUpRight size={16} className="write-arrow" />
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;