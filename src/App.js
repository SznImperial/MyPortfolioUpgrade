import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/responsive.css';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <Router>
            <div style={{ minHeight: "100vh", fontFamily: "monospace", backgroundColor: "#000", color: "#00FF7F" }}>
                <Navbar />
                <main style={{ paddingTop: "6rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
