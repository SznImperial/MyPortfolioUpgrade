import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// --- THE DECRYPTION TEXT COMPONENT ---
// This handles the "Matrix" scramble effect on hover
const HyperText = ({ text, active }) => {
  const [displayText, setDisplayText] = useState(text);
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2; // Speed of decryption
    }, 30);
  };

  return (
    <span 
      onMouseEnter={scramble} 
      className={`font-mono font-bold tracking-widest uppercase transition-colors duration-300 ${
        active ? "text-neon-green" : "text-gray-400 hover:text-white"
      }`}
    >
      {displayText}
    </span>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/portfolio" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* --- DESKTOP DECRYPTOR HUD --- */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        
        {/* Main Container */}
        <div className="relative flex items-center gap-8 px-8 py-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* 1. The Moving Scanline (Security Laser) */}
          <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neon-green to-transparent opacity-50 z-20"
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          />

          {/* 2. Background Grid Pattern (Subtle Tech Texture) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#39ff14 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
          </div>

          {/* Logo Area */}
          <Link to="/" className="relative z-10 font-mono font-black text-xl text-white tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-neon-green animate-pulse shadow-[0_0_10px_#39ff14]"></div>
            IMPERIAL
          </Link>

          {/* Vertical Divider */}
          <div className="w-[1px] h-6 bg-white/20 relative z-10"></div>

          {/* Links Area */}
          <div className="flex items-center gap-8 relative z-10">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group"
                >
                  {/* The Decryption Text Effect */}
                  <HyperText text={link.name} active={isActive} />

                  {/* Active State: The "Underline" Laser */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-laser"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neon-green shadow-[0_0_10px_#39ff14]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Corner Brackets */}
                  <span className="absolute -top-1 -left-2 text-[8px] text-neon-green opacity-0 group-hover:opacity-100 transition-opacity">┌</span>
                  <span className="absolute -bottom-1 -right-2 text-[8px] text-neon-green opacity-0 group-hover:opacity-100 transition-opacity">┘</span>
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* --- MOBILE BRUTALIST MENU --- */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10">
        <div className="flex justify-between items-center px-6 py-4">
            <Link to="/" className="font-mono font-bold text-xl text-white tracking-widest">
                IMP_
            </Link>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white font-mono text-sm border border-white/20 px-3 py-1 active:bg-neon-green active:text-black transition-colors"
            >
                {isOpen ? "CLOSE" : "MENU"}
            </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 flex flex-col space-y-2 md:hidden"
          >
            {links.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="border-b border-white/10 pb-2"
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-5xl font-black font-mono uppercase italic ${
                    location.pathname === link.path ? "text-neon-green" : "text-transparent stroke-white stroke-1"
                  }`}
                  style={{ WebkitTextStroke: location.pathname === link.path ? "0px" : "1px rgba(255,255,255,0.5)" }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;