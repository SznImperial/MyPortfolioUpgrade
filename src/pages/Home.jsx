import React from "react";
import { motion } from 'framer-motion'; // Keep this for animations on children components
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Portfolio from "../components/Portfolio.jsx";

const Home = () => {
    return (
        // Site Wrapper: Sets the dark background and primary text colors for the whole page
        <div className="bg-deep-black min-h-screen font-sans text-white relative overflow-x-hidden">
            
            {/* 1. HERO SECTION (Full screen splash) */}
            <Hero />
            
            {/* Main Content Container: Applies max-width and center alignment */}
            <main className="max-w-6xl mx-auto px-6 py-10">
                
                {/* 2. SKILLS SECTION */}
                <Skills /> 
                
                {/* ------------------------------------- */}
                {/* 3. PORTFOLIO SECTION (WITH MISSING HEADER) */}
                {/* ------------------------------------- */}
                <section className="mt-20"> 
                    {/* The missing header for the project grid */}
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold font-mono text-white">
                            <span className="text-neon-green">04.</span> Recent Projects
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>
                    
                    {/* The project card grid component */}
                    <Portfolio />
                </section>
            </main>
            
        </div>
    );
};

export default Home;