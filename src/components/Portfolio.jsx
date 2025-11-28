import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTerminal } from 'react-icons/fi';

const projects = [
  {
    title: "Omoiyaayo-Solar", 
    // --- UPDATED DESCRIPTION ---
    description: "Company website for Omoiyaayo Green Energy, built to clearly showcase solar inverter services and establish direct client contact channels.",
    tech: ["React", "Spring Boot", "UI/UX"], // Adjusted tag for presentation
    code: "https://github.com/SznImperial",
    live: "#",
    color: "group-hover:text-blue-400"
  },
  {
    title: "Imperial Portfolio",
    description: "Cyber-minimalist developer portfolio built with performance in mind.",
    tech: ["React", "Tailwind", "Framer"],
    code: "https://github.com/SznImperial",
    live: "#",
    color: "group-hover:text-neon-green"
  },
  {
    title: "Voting System",
    description: "Secure desktop election manager with a custom C# GUI.",
    tech: ["C#", ".NET", "WinForms"],
    code: "https://github.com/SznImperial",
    live: "#",
    color: "group-hover:text-purple-400"
  },
  {
    title: "Netflix Clone",
    description: "Streaming interface recreation using TMDB API for real-time data.",
    tech: ["React", "Firebase", "API"],
    code: "https://github.com/SznImperial",
    live: "#",
    color: "group-hover:text-red-500"
  },
  {
    title: "Homestyler",
    description: "3D interior design visualization tool for furniture placement.",
    tech: ["Three.js", "React", "WebGL"],
    code: "https://github.com/SznImperial",
    live: "#",
    color: "group-hover:text-pink-400"
  },
  {
    title: "Payment Gateway",
    description: "Secure backend service handling real-time PayPal transactions.",
    tech: ["Node.js", "Express", "PayPal"],
    code: "https://github.com/SznImperial",
    live: "#",
    color: "group-hover:text-yellow-400"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-black/40 border border-white/10 rounded-md overflow-hidden hover:border-neon-green/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* 1. COMPACT TERMINAL HEADER */}
      <div className="px-3 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-[10px] font-mono text-gray-500">
          ~/src/{project.title.toLowerCase().replace(/\s+/g, '-')}
        </div>
      </div>

      {/* 2. CARD CONTENT */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <FiTerminal className={`text-2xl text-gray-600 transition-colors ${project.color}`} />
          
          <div className="flex gap-3">
            <a href={project.code} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
              <FiGithub size={18} />
            </a>
            {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <FiExternalLink size={18} />
                </a>
            )}
          </div>
        </div>

        <h3 className={`text-lg font-bold text-white mb-2 font-mono transition-colors ${project.color}`}>
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack - Compact Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono text-neon-green/80 bg-neon-green/5 border border-neon-green/10 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}