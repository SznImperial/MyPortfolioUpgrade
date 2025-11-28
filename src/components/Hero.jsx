import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = () => {
    const el = useRef(null);
    const typedInstance = useRef(null);

    // Your original Typewriter logic
    useEffect(() => {
        if (el.current) {
            typedInstance.current = new Typed(el.current, {
                strings: [
                    "Full-Stack Developer", 
                    "Building Creative Apps", 
                    "Open to Opportunities",
                    "System Architect"
                ],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
                showCursor: true,
                cursorChar: "_", // Changed to underscore for cyber feel
            });
        }
        return () => typedInstance.current?.destroy();
    }, []);

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-deep-black">
            
            {/* 1. The Cyber Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="z-10 text-center px-4">
                
                {/* 2. Animated Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-1 mb-6 border border-neon-green/30 rounded-full bg-neon-green/5 backdrop-blur-sm"
                >
                    <span className="text-neon-green font-mono text-sm tracking-widest">
                        &lt; SYSTEM ONLINE /&gt;
                    </span>
                </motion.div>

                {/* 3. Main Name */}
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 font-sans tracking-tight"
                >
                    Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-500">Imperial</span>
                </motion.h1>

                {/* 4. Your Typewriter Effect (Styled) */}
                <div className="h-8 mb-10">
                    <span 
                        ref={el} 
                        className="text-xl md:text-2xl font-mono text-neon-green"
                    ></span>
                </div>

                {/* 5. Modern Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-8 py-3 bg-neon-green text-black font-bold rounded hover:bg-white transition-all hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                        View Projects
                    </button>
                    <button className="px-8 py-3 border border-gray-700 text-gray-300 rounded hover:border-neon-green hover:text-neon-green transition-all">
                        Contact Me
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;