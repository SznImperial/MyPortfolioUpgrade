import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiMonitor, FiActivity, FiFilm, FiBriefcase, FiMapPin } from "react-icons/fi";

// --- THE DIGITAL BRAIN (Clean 2D Version) ---
const DigitalBrain = () => {
  const nodes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto bg-black/40 rounded-xl overflow-hidden border border-neon-green/20 backdrop-blur-md group hover:border-neon-green/50 transition-colors duration-500">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#39ff141a_1px,transparent_1px),linear-gradient(to_bottom,#39ff141a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Scanning Laser */}
      <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neon-green/50 to-transparent z-20"
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />

      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full p-8 pointer-events-none">
        {nodes.map((node, i) => (
          nodes.slice(i + 1).map((target, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="#39ff14"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.2, 0.05] }}
              transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
            />
          ))
        ))}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="#050505"
            stroke="#39ff14"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
          />
        ))}
      </svg>
      
      {/* Central Core */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="p-6 rounded-full border border-dashed border-neon-green/40"
        >
            <FiCpu size={40} className="text-neon-green" />
        </motion.div>
        <div className="mt-4 font-mono text-[10px] text-neon-green tracking-[0.2em] animate-pulse">
            SYSTEM_ONLINE
        </div>
      </div>
    </div>
  );
};

// --- PERSONAL DATA MODULES ---
const PersonalData = [
  { icon: FiMonitor, label: "Interests", value: "Gaming, Coding, Tech Docs" },
  { icon: FiActivity, label: "Sports", value: "Football Fanatic" },
  { icon: FiFilm, label: "Media", value: "Sci-Fi & Crime Series" },
  { icon: FiBriefcase, label: "Status", value: "Open for Internships" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-deep-black relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                <span className="text-neon-green">01.</span> About Me
            </h2>
            <div className="h-[1px] flex-grow bg-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: THE BIO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-sans">
              Hello, I'm <span className="text-neon-green">Adetola Abdulkareem Ayomide</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                I am a Full-Stack Developer passionate about building modern, responsive web applications. I don't just write code; I crave the challenge of learning new technologies and pushing my skills to the limit.
              </p>
              
              {/* Aptech Highlight */}
              <div className="p-4 bg-white/5 border-l-2 border-neon-green rounded-r-md">
                <p className="text-sm text-gray-300">
                  <span className="text-neon-green font-bold text-lg block mb-1">Education</span>
                  Proud Student at <strong className="text-white">Aptech Learning Centre</strong> (Surulere). I am expanding my knowledge daily and am driven to build impactful solutions.
                </p>
              </div>

              <p>
                My goal is to become a leading developer, contributing to innovative startups and creative tech companies. I am currently <strong className="text-white border-b border-neon-green">actively looking for internships</strong> to apply my skills in a real-world environment.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: DIGITAL BRAIN + DATA */}
          <div className="flex flex-col gap-8">
            
            {/* The Animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <DigitalBrain />
            </motion.div>

            {/* The Data Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PersonalData.map((data, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                        className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-2 text-neon-green">
                            <data.icon size={18} />
                            <span className="font-mono text-xs uppercase tracking-wider">{data.label}</span>
                        </div>
                        <div className="text-white font-medium text-sm">
                            {data.value}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Location Tag */}
            <div className="flex items-center justify-center gap-2 text-gray-500 font-mono text-xs mt-4">
                <FiMapPin className="text-neon-green" />
                <span>Lagos Mainland, Nigeria</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;