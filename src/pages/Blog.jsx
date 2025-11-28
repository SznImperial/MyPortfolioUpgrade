import React from "react";
import BlogList from "../components/BlogList.jsx";
import { motion } from "framer-motion";

const Blog = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-32 pb-16 bg-deep-black min-h-screen text-neon-green font-mono"
        >
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Section Header */}
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black mb-16 text-center text-white"
                >
                    <span className="text-neon-green">/</span> DATA_LOGS
                </motion.h1>

                {/* The Blog List is rendered here */}
                <BlogList />

            </div>
        </motion.div>
    );
};

export default Blog;