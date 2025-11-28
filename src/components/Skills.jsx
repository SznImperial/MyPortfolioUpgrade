import React from 'react';
import { motion } from 'framer-motion';
// 1. We removed SiCsharp and added SiDotnet as a backup, 
// but we will use TbBrandCSharp for the actual C# logo.
import { 
  FaReact, FaJava, FaPython, FaNodeJs 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiMysql, SiTailwindcss // Removed SiMongodb, SiDotnet
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb"; 

const SkillCard = ({ name, icon: Icon, level }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, borderColor: "#39ff14", boxShadow: "0 0 15px rgba(57, 255, 20, 0.3)" }}
      className="relative p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center gap-4 group transition-all duration-300"
    >
      {/* The Icon */}
      <div className="text-5xl text-gray-400 group-hover:text-neon-green transition-colors duration-300">
        <Icon />
      </div>
      
      {/* Skill Name */}
      <h3 className="font-mono font-bold text-white tracking-wider">{name}</h3>
      
      {/* Skill Level Bar */}
      <div className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: level }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-neon-green shadow-[0_0_10px_#39ff14]"
        />
      </div>
      
      {/* Corner Tech Accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover:border-neon-green transition-colors"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover:border-neon-green transition-colors"></div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "Java", icon: FaJava, level: "90%" },
    { name: "Python", icon: FaPython, level: "85%" },
    { name: "React", icon: FaReact, level: "80%" },
    { name: "Spring Boot", icon: SiSpringboot, level: "75%" },
    { name: "C#", icon: TbBrandCSharp, level: "70%" }, 
    { name: "Node.js", icon: FaNodeJs, level: "75%" },
    { name: "MySQL", icon: SiMysql, level: "85%" },
    { name: "Tailwind", icon: SiTailwindcss, level: "90%" },
  ];

  return (
    <section id="skills" className="py-24 bg-deep-black relative overflow-hidden">
        
        {/* Background Grid Decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            
            {/* Section Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
                    Technical <span className="text-neon-green">Arsenal</span>
                </h2>
                <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_10px_#39ff14]"></div>
            </motion.div>

            {/* The Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <SkillCard {...skill} />
                    </motion.div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default Skills;