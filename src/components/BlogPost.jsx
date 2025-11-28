import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiTerminal, FiCalendar } from "react-icons/fi";

const BlogPost = ({ post }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
                scale: 1.02, 
                borderColor: "#39ff14",
                boxShadow: "0 0 25px rgba(57, 255, 20, 0.2)" 
            }}
            className="group relative bg-black/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 cursor-pointer"
        >
            <div className="p-6 md:p-8 flex flex-col h-full">
                {post.image && (
                    <div className="relative mb-4 overflow-hidden rounded-md border border-white/10">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                )}
                
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-2">
                    <FiCalendar className="text-neon-green" size={12} />
                    {/* FIXED: Replaced '//' with '|' to fix ESLint warning */}
                    <span>LOG_ID: {post.id} | 2025</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">
                    {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {readMore ? post.fullText : post.summary}
                </p>
                
                <button
                    onClick={() => setReadMore(!readMore)}
                    className="flex items-center gap-2 text-neon-green hover:text-white transition-colors font-mono text-xs uppercase pt-3 border-t border-white/10"
                >
                    <FiTerminal className="group-hover:translate-x-1 transition-transform" size={14} />
                    {readMore ? "[ CLOSE_FILE ]" : "[ DECRYPT_DATA ]"}
                </button>
            </div>

            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-neon-green/80 transition-colors"></div>

        </motion.div>
    );
};

export default BlogPost;