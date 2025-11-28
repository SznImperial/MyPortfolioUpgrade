import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    // Centralizing links for easy management
    const socialLinks = [
        { 
            href: "https://github.com/SznImperial", 
            icon: FiGithub, 
            label: "GitHub" 
        },
        { 
            href: "https://www.linkedin.com/in/adetola-abdulkareem-ayomide-7286b3366/", 
            icon: FiLinkedin, 
            label: "LinkedIn" 
        },
        { 
            href: "https://wa.me/2347072495804", 
            icon: FaWhatsapp, 
            label: "WhatsApp" 
        },
    ];

    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full py-12 px-6 border-t border-white/10 mt-10 bg-deep-black"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Copyright Text */}
                <p className="text-gray-600 font-mono text-xs order-2 md:order-1">
                    &copy; 2025 IMPERIAL. All systems nominal.
                </p>

                {/* Social Icons / Links */}
                <div className="flex space-x-6 order-1 md:order-2">
                    {socialLinks.map((link, index) => (
                        <motion.a 
                            key={index}
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-gray-400 hover:text-neon-green transition-colors duration-300 transform hover:scale-110"
                            aria-label={`Find me on ${link.label}`}
                        >
                            <link.icon size={24} />
                        </motion.a>
                    ))}
                </div>
            </div>
            
        </motion.footer>
    );
};

export default Footer;