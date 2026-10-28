import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  PenLine,
  Search,
  BookOpen,
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
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <BookOpen size={24} />
          </span>

          <span className="logo-text">
            Story<span>Verse</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
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

          {/* Mobile Write Button */}
          <button
            type="button"
            className="mobile-write-button"
            onClick={handleWriteStory}
          >
            <PenLine size={17} />
            Write a story
          </button>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button
            type="button"
            className="search-button"
            aria-label="Search stories"
            onClick={() => navigate("/")}
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            className="write-button"
            onClick={handleWriteStory}
          >
            <PenLine size={17} />
            <span>Write a story</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;