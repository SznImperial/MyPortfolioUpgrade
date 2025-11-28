import React from 'react';
import { motion } from 'framer-motion';

// --- ANIMATION STYLES (Keep these for the Framer Motion logic) ---
const loadingContainer = {
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
};

const loadingCircle = {
    display: "block",
    width: "0.5rem",
    height: "1.5rem",
    backgroundColor: "#39ff14", // neon-green
    borderRadius: "3px",
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: "50%",
    },
    end: {
        y: "150%",
    },
};

const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
};
// --- END ANIMATION STYLES ---

const LoadingSpinner = () => {
    return (
        // Outer Container (Full screen)
        <div className="flex flex-col w-full min-h-[15rem] items-center justify-center pt-20 relative bg-deep-black text-neon-green">
            
            {/* 1. Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(57,255,20,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

            {/* 2. Scanning Laser Effect */}
            <motion.div
                className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50"
                animate={{ y: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
            />
            
            {/* 3. The Pulsing Bars Animation */}
            <motion.div
                style={loadingContainer}
                variants={loadingContainerVariants}
                initial="start"
                animate="end"
                className="relative z-10" // Keep the spinner above the background effects
            >
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                />
            </motion.div>

            {/* 4. Terminal Status Message */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 font-mono text-sm tracking-widest animate-pulse"
            >
                [ SYSTEM_LOADING... PLEASE STAND BY ]
            </motion.p>
            
        </div>
    );
};

export default LoadingSpinner;