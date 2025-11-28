import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx"; 
import Portfolio from "../components/Portfolio.jsx"; 
import Contact from "./Contact.jsx"; 
import { FiDownload, FiCheckCircle, FiStar } from "react-icons/fi";

const services = [
    "Web Development (Frontend & Backend)",
    "UI/UX Design",
    "Responsive & Mobile-First Design",
    "API Integration & Full-Stack Solutions",
];

const hobbies = [
    { name: "Reading", value: 3 },
    { name: "Gaming", value: 4 },
    { name: "Music", value: 5 },
    { name: "Traveling", value: 3 },
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(star => (
                <FiStar 
                    key={star} 
                    className={star <= rating ? "text-neon-green" : "text-gray-700"}
                    size={16} 
                />
            ))}
        </div>
    );
};

const PortfolioPage = () => {
    return (
        <div className="bg-deep-black min-h-screen text-white font-sans">
            
            <Navbar /> 
            
            {/* Max Width reduced from 7xl to 6xl for a denser feel */}
            <main className="max-w-6xl mx-auto px-6 pt-32 pb-16">

                {/* --- INTRO SECTION --- */}
                <section className="mb-16"> {/* Reduced margin-bottom */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter"
                    >
                        <span className="text-neon-green">/</span> Work Archive
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-3xl mb-8 text-lg"
                    >
                        I am a passionate Full-Stack Developer skilled in Java, Python, React, Spring Boot, and more. 
                        I build modern and responsive web applications with a techy, clean style.
                    </motion.p>
                    {/* CV Download */}
                    <a
                        href="/Adetola Abdulkareem CV.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-3 border border-neon-green text-neon-green rounded-lg hover:bg-neon-green hover:text-black transition-all font-mono text-sm"
                    >
                        <FiDownload />
                        Download CV
                    </a>
                </section>

                {/* --- 01. PROJECTS GRID --- */}
                <section className="mb-20"> {/* Reduced vertical spacing */}
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-3xl font-bold font-mono text-white">
                            <span className="text-neon-green">01.</span> Recent Projects
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>
                    <Portfolio /> 
                </section>

                {/* --- 02. SERVICES I OFFER (Core Services) --- */}
                <section className="mb-20"> {/* Reduced vertical spacing */}
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold font-mono text-white">
                            <span className="text-neon-green">02.</span> Core Services
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center gap-3 text-sm font-mono hover:border-neon-green/50 transition-colors"
                            >
                                <FiCheckCircle className="text-neon-green" />
                                {service}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- 03. HOBBIES (USER DATA - STATS UPGRADE) --- */}
                <section className="mb-20"> {/* Reduced vertical spacing */}
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold font-mono text-white">
                            <span className="text-neon-green">03.</span> User Data
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {hobbies.map((hobby, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-4 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center font-mono hover:border-neon-green/50 transition-colors"
                            >
                                <span className="text-lg font-bold text-white mb-2 tracking-widest">{hobby.name}</span>
                                <StarRating rating={hobby.value} />
                            </motion.div>
                        ))}
                    </div>
                </section>
                
            </main>

            {/* 4. CONTACT/FOOTER */}
            <Contact /> 
            
        </div>
    );
};

export default PortfolioPage;