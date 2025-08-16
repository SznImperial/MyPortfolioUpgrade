import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import the CSS file

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("light-mode");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">Imperial</div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <button onClick={toggleMode} className="mode-btn">{darkMode ? "☀️" : "🌙"}</button>
            </div>
        </nav>
    );
};

export default Navbar;
